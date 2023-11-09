BlitJS
=====================

BlitJS is a library designed to facilitate interactions with Blit using JavaScript. This a guide on how to set up and use the BlitJS library in your project.


# Quickstart

Include BlitJS in your project by adding the following script tag in your HTML file:

```html
<script type="module">
  import {
    default as blitjs,
    experimentalHelpers,
  } from "https://cdn.jsdelivr.net/npm/@blitchain/blitjs/+esm";
  let {
    makeKeplrClient,
    runFunction,
    queryFunction
  } = experimentalHelpers;

  let rpcEndpoint = "http://rpc.testnet.blitchain.net";
  let restEndpoint = "http://rest.testnet.blitchain.net";
  
  let msgClient = await makeKeplrClient({ rpcEndpoint, restEndpoint });
  let queryClient = await blitjs.blit.ClientFactory.createLCDClient({ restEndpoint });
  
  let address = (await msgClient.signer.getAccounts())[0].address;
  console.log(address);
  
  let balanceResponse = await queryClient.cosmos.bank.v1beta1.allBalances({
    address,
  });
  console.log(balanceResponse);

  // Optional: If you want console access for debugging
  window.blitjs = blitjs;
  window.runFunction = runFunction;
  window.queryFunction = queryFunction;
  window.msgClient = msgClient;
  window.queryClient = queryClient;
  window.address = address;
</script>
```

# Npm

Install via npm:

```bash
npm install @blitchain/blitjs
```

Import in your project

```
import {
  default as blitjs,
  experimentalHelpers,
} from "@blitchain/blitjs/dist/index.mjs";
```

## Brower Console

```js
const {default: blitjs, experimentalHelpers} = (await import("https://cdn.jsdelivr.net/npm/@blitchain/blitjs/+esm"));
const { makeKeplrClient, runFunction, queryFunction } = experimentalHelpers;

```


# Querying the chain:


## Getting the current Address:

```js
let address = (await msgClient.signer.getAccounts())[0].address;
console.log(address)
// Output blit123someaddress
```

## Get the balance of an address
Here is how to query the balance of an address and an example of using pagination. All querys that return lists can be paginated.
```js
let balanceResponse = await queryClient.cosmos.bank.v1beta1.allBalances({ address, pagination: { limit: "1", offset: 0, countTotal: true } });
console.log(balanceResponse);
/*
{
    "balances": [
        {
            "denom": "ublit",
            "amount": "8419418"
        }
    ],
    "pagination": {
        "next_key": "dG9rZW4=",
        "total": "2"
    }
}
*/
```

## Query the current Blit node

```js
let nodeInfo = await queryClient.cosmos.base.tendermint.v1beta1.getNodeInfo()
console.log(nodeInfo);
// Output {default_node_info: {…}, application_version: {…}}
```

# Update your Script

This is how you can update a script's code using `msgClient.signAndBroadcast(address, [message], "auto")`

Note: pay attention to indentation for the code.

```js
let code = `
def greet(name):
    print(f"Hello {name}!")
    return {"name": name}
`;

// Make the message with the blitjs ecoder
let message = blitjs.blit.script.MessageComposer.fromPartial.updateScript({ address, code: code })

// == or make the message object directly ==
/*
let message = {
  "typeUrl": "/blit.script.MsgUpdateScript",
  "value": {
    "address": address,
    "code": code,
    "grantee": ""
  }
}
*/
await msgClient.signAndBroadcast(address, [message], "auto")
// Output: {code: 0, height: 1086258, txIndex: 0, events: Array(8), rawLog: '[{"msg_index":0,"events":[{"type":"message","attri…2m02jkt2"},{"key":"module","value":"script"}]}]}]', …}
```

## Update the code of a different script that has given you Authz permission

### Using the `grantee` field

As a convenience, `UpdateScriptMsg` has a `grantee` field that will automatically create and execute the Authz Exec message if you have the corresponding `/blit.script.MsgUpdateScript` permission.

```js
let newCode = `
def greet(name):
    print(f"Hola, {name}!")
    return {"name": name}
`;

// Make the message with the blitjs encoder
let message = blitjs.blit.script.MessageComposer.fromPartial.updateScript({ otherAddress, code: newCode, grantee: address })

// == or make the message object directly ==
/*
let message = {
  "typeUrl": "/blit.script.MsgUpdateScript",
  "value": {
    "address": otherAddress,
    "code": newCode,
    "grantee": address
  }
}
*/
await msgClient.signAndBroadcast(address, [message], "auto")
// Output: {code: 0, height: 1086258, txIndex: 0, events: Array(8), rawLog: '[{"msg_index":0,"events":[{"type":"message","attri…2m02jkt2"},{"key":"module","value":"script"}]}]}]', …}
```

### Manually creating the Authz MsgExe

Alternatively, you can manually create and run the `MsgExec` and encoded `MsgUpdateScript` message.

```js
let msg1 = blitjs.blit.script.MsgUpdateScript.toProtoMsg({address, code: "# eazy peezy", grantee:"" })

let execMsg = {
  "typeUrl": "/cosmos.authz.v1beta1.MsgExec",
  "value": {
    "grantee": address,
    "msgs": [msg1]
  }
}
let tx = (await msgClient.signAndBroadcast(address, [execMsg], 1.5));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.authz.v1beta1.MsgExecResponse.fromProtoMsg(tx.msgResponses[0]);


// decode the exec responses
blitjs.blit.script.MsgUpdateScriptResponse.decode(decodedResponse.results[0])

// Output: {version: 4n}
```

## Querying a Script object to verify the Update Script worked

This will allow us to verify that the previous command worked and that the code was stored.

```js
let scriptResponse = await queryClient.blit.script.script({ address });
console.log(scriptResponse);
/*
Output: {
    "script": {
        "address": "blit130v2ypunhy9tuurcnjpagpt77e56n72m02jkt2",
        "code": "\ndef greet(name):\n    print(f\"Hello {name}!\")\n    return {\"name\": name}\n",
        "version": "1"
    }
}
*/
```

## How to add a Threshold Decision Policy to a group

Nested messages must be encoded as a proto message like this

```js
let tdpMsg = blitjs.cosmos.group.v1.ThresholdDecisionPolicy.toProtoMsg({
    "threshold": "1",
    "windows": {
        "voting_period": {"seconds": "100"},
        "min_execution_period": {"seconds": "0"}
    }
})
```

Then it can be embedded like this:

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgCreateGroupPolicy",
  "value": {
    "admin": address,
    "groupId": "1",
    "metadata": "some meta data",
    "decisionPolicy": tdpMsg
  }
}

let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)


let decodedResponse = blitjs.cosmos.group.v1.MsgCreateGroupPolicyResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
// Output: {address: 'blit1c799jddmlz7segvg6jrw6w2k6svwafganjdznard3tc74n7td7rqx9h5jn'}
```

# How to run a function in a transaction 

Now it is trivial to call `greet(name="Bob")` in a transaction. Keplr will prompt to sign the transaction before broadcasting it.

```js
let runResp = await runFunction({
  msgClient,
  caller_address: address,
  script_address: address,
  function_name: "greet",
  kwargs: { name: "Bob" }
});

console.log(runResp); 
/*
Output:
{
    "exception": null,
    "gas_limit": 100000,
    "nodes_called": 15,
    "result": {
        "name": "Bob"
    },
    "script_gas_consumed": 45281,
    "stdout": "Hello Bob!\n"
}
*/
```
## Hints

### Out of gas

Q: I'm getting an error like `out of gas in location: WritePerByte; gasWanted: 47347, gasUsed: 48728: out of gas`

A: Try replacing `"auto"` with 1.5 like this:

```
await msgClient.signAndBroadcast(address, [message], "auto")
```

```
await msgClient.signAndBroadcast(address, [message], 1.5)
```

# How to query a function in a script 

This is a read-only callA of the function `greet(name="Bob")`. Nothing is persisted on-chain.

```js
let queryResp = await queryFunction({
  queryClient,
  caller_address: address,
  script_address: address,
  function_name: "greet",
  kwargs: { name: "Bob" }
});
console.log(queryResp);
/* Output
{
    "exception": null,
    "gas_limit": 10000000,
    "nodes_called": 15,
    "result": {
        "name": "Bob"
    },
    "script_gas_consumed": 1538,
    "stdout": "Hello Bob!\n"
}
*/
```

## How to query Storage:

This will list all Storage for a specific address

```js
let storageResponse = await queryClient.blit.storage.storageAll({ filter_address: address });
console.log(storageResponse);
/* Output
{
    "storage": [],
    "pagination": {
        "next_key": null,
        "total": "0"
    }
}
*/
```

## How to create/update Storage at an index

```js
let message1 = blitjs.blit.storage.MessageComposer.fromPartial.createStorage({
    address,
    index: "foo123",
    data: "some data"
})
await msgClient.signAndBroadcast(address, [message1], "auto")
// Output: {code: 0, height: 1090067, txIndex: 0, events: Array(8), rawLog: '[{"msg_index":0,"events":[{"type":"message","attri…m02jkt2"},{"key":"module","value":"storage"}]}]}]', …}

let message2 = blitjs.blit.storage.MessageComposer.fromPartial.updateStorage({
    address,
    index: "foo123",
    data: "some NEW data",
  })

await msgClient.signAndBroadcast(address, [message2], "auto")
// Output: {code: 0, height: 1090191, txIndex: 0, events: Array(8), rawLog: '[{"msg_index":0,"events":[{"type":"message","attri…m02jkt2"},{"key":"module","value":"storage"}]}]}]', …}
```



# Msg Reference

Here are a list of available Msgs and their useage.

## /blit.blit.MsgUpdateParams 

```js
let msg = {
  "typeUrl": "/blit.blit.MsgUpdateParams",
  "value": {
    "authority": "",
    "params": null
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.blit.blit.MsgUpdateParamsResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /blit.script.MsgCreateScript 

```js
let msg = {
  "typeUrl": "/blit.script.MsgCreateScript",
  "value": {
    "creator": "",
    "code": "",
    "msg_type_permissions": [],
    "grantee": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.blit.script.MsgCreateScriptResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /blit.script.MsgRun 

```js
let msg = {
  "typeUrl": "/blit.script.MsgRun",
  "value": {
    "caller_address": "",
    "script_address": "",
    "extra_code": "",
    "function_name": "",
    "kwargs": "",
    "grantee": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.blit.script.MsgRunResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /blit.script.MsgUpdateParams 

```js
let msg = {
  "typeUrl": "/blit.script.MsgUpdateParams",
  "value": {
    "authority": "",
    "params": null
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.blit.script.MsgUpdateParamsResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /blit.script.MsgUpdateScript 

```js
let msg = {
  "typeUrl": "/blit.script.MsgUpdateScript",
  "value": {
    "address": "",
    "code": "",
    "grantee": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.blit.script.MsgUpdateScriptResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /blit.storage.MsgCreateStorage 

```js
let msg = {
  "typeUrl": "/blit.storage.MsgCreateStorage",
  "value": {
    "address": "",
    "index": "",
    "data": "",
    "grantee": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.blit.storage.MsgCreateStorageResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /blit.storage.MsgDeleteStorage 

```js
let msg = {
  "typeUrl": "/blit.storage.MsgDeleteStorage",
  "value": {
    "address": "",
    "index": "",
    "grantee": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.blit.storage.MsgDeleteStorageResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /blit.storage.MsgUpdateParams 

```js
let msg = {
  "typeUrl": "/blit.storage.MsgUpdateParams",
  "value": {
    "authority": "",
    "params": null
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.blit.storage.MsgUpdateParamsResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /blit.storage.MsgUpdateStorage 

```js
let msg = {
  "typeUrl": "/blit.storage.MsgUpdateStorage",
  "value": {
    "address": "",
    "index": "",
    "data": "",
    "grantee": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.blit.storage.MsgUpdateStorageResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.authz.v1beta1.MsgExec 

```js
let msg = {
  "typeUrl": "/cosmos.authz.v1beta1.MsgExec",
  "value": {
    "grantee": "",
    "msgs": []
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.authz.v1beta1.MsgExecResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.authz.v1beta1.MsgGrant 

```js
let msg = {
  "typeUrl": "/cosmos.authz.v1beta1.MsgGrant",
  "value": {
    "granter": "",
    "grantee": "",
    "grant": null
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.authz.v1beta1.MsgGrantResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.authz.v1beta1.MsgRevoke 

```js
let msg = {
  "typeUrl": "/cosmos.authz.v1beta1.MsgRevoke",
  "value": {
    "granter": "",
    "grantee": "",
    "msg_type_url": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.authz.v1beta1.MsgRevokeResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.bank.v1beta1.MsgMultiSend 

```js
let msg = {
  "typeUrl": "/cosmos.bank.v1beta1.MsgMultiSend",
  "value": {
    "inputs": [],
    "outputs": []
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.bank.v1beta1.MsgMultiSendResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.bank.v1beta1.MsgSend 

```js
let msg = {
  "typeUrl": "/cosmos.bank.v1beta1.MsgSend",
  "value": {
    "from_address": "",
    "to_address": "",
    "amount": []
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.bank.v1beta1.MsgSendResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.distribution.v1beta1.MsgFundCommunityPool 

```js
let msg = {
  "typeUrl": "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
  "value": {
    "amount": [],
    "depositor": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.distribution.v1beta1.MsgSetWithdrawAddress 

```js
let msg = {
  "typeUrl": "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
  "value": {
    "delegator_address": "",
    "withdraw_address": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward 

```js
let msg = {
  "typeUrl": "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
  "value": {
    "delegator_address": "",
    "validator_address": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission 

```js
let msg = {
  "typeUrl": "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
  "value": {
    "validator_address": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.feegrant.v1beta1.MsgGrantAllowance 

```js
let msg = {
  "typeUrl": "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
  "value": {
    "granter": "",
    "grantee": "",
    "allowance": null
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.feegrant.v1beta1.MsgRevokeAllowance 

```js
let msg = {
  "typeUrl": "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
  "value": {
    "granter": "",
    "grantee": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.gov.v1.MsgDeposit 

```js
let msg = {
  "typeUrl": "/cosmos.gov.v1.MsgDeposit",
  "value": {
    "proposal_id": "0",
    "depositor": "",
    "amount": []
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1.MsgDepositResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.gov.v1.MsgSubmitProposal 

```js
let msg = {
  "typeUrl": "/cosmos.gov.v1.MsgSubmitProposal",
  "value": {
    "messages": [],
    "initial_deposit": [],
    "proposer": "",
    "metadata": "",
    "title": "",
    "summary": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1.MsgSubmitProposalResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.gov.v1.MsgUpdateParams 

```js
let msg = {
  "typeUrl": "/cosmos.gov.v1.MsgUpdateParams",
  "value": {
    "authority": "",
    "params": null
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1.MsgUpdateParamsResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.gov.v1.MsgVote 

```js
let msg = {
  "typeUrl": "/cosmos.gov.v1.MsgVote",
  "value": {
    "proposal_id": "0",
    "voter": "",
    "option": 0,
    "metadata": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1.MsgVoteResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.gov.v1.MsgVoteWeighted 

```js
let msg = {
  "typeUrl": "/cosmos.gov.v1.MsgVoteWeighted",
  "value": {
    "proposal_id": "0",
    "voter": "",
    "options": [],
    "metadata": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1.MsgVoteWeightedResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.gov.v1beta1.MsgDeposit 

```js
let msg = {
  "typeUrl": "/cosmos.gov.v1beta1.MsgDeposit",
  "value": {
    "proposal_id": "0",
    "depositor": "",
    "amount": []
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1beta1.MsgDepositResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.gov.v1beta1.MsgSubmitProposal 

```js
let msg = {
  "typeUrl": "/cosmos.gov.v1beta1.MsgSubmitProposal",
  "value": {
    "content": null,
    "initial_deposit": [],
    "proposer": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1beta1.MsgSubmitProposalResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.gov.v1beta1.MsgVote 

```js
let msg = {
  "typeUrl": "/cosmos.gov.v1beta1.MsgVote",
  "value": {
    "proposal_id": "0",
    "voter": "",
    "option": 0
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1beta1.MsgVoteResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.gov.v1beta1.MsgVoteWeighted 

```js
let msg = {
  "typeUrl": "/cosmos.gov.v1beta1.MsgVoteWeighted",
  "value": {
    "proposal_id": "0",
    "voter": "",
    "options": []
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1beta1.MsgVoteWeightedResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.group.v1.MsgCreateGroup 

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgCreateGroup",
  "value": {
    "admin": "",
    "members": [],
    "metadata": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgCreateGroupResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.group.v1.MsgCreateGroupPolicy 

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgCreateGroupPolicy",
  "value": {
    "admin": "",
    "group_id": "0",
    "metadata": "",
    "decision_policy": null
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgCreateGroupPolicyResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.group.v1.MsgCreateGroupWithPolicy 

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgCreateGroupWithPolicy",
  "value": {
    "admin": "",
    "members": [],
    "group_metadata": "",
    "group_policy_metadata": "",
    "group_policy_as_admin": false,
    "decision_policy": null
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgCreateGroupWithPolicyResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.group.v1.MsgExec 

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgExec",
  "value": {
    "proposal_id": "0",
    "executor": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgExecResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.group.v1.MsgLeaveGroup 

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgLeaveGroup",
  "value": {
    "address": "",
    "group_id": "0"
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgLeaveGroupResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.group.v1.MsgSubmitProposal 

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgSubmitProposal",
  "value": {
    "group_policy_address": "",
    "proposers": [],
    "metadata": "",
    "messages": [],
    "exec": 0,
    "title": "",
    "summary": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgSubmitProposalResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.group.v1.MsgUpdateGroupAdmin 

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgUpdateGroupAdmin",
  "value": {
    "admin": "",
    "group_id": "0",
    "new_admin": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgUpdateGroupAdminResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.group.v1.MsgUpdateGroupMembers 

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgUpdateGroupMembers",
  "value": {
    "admin": "",
    "group_id": "0",
    "member_updates": []
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgUpdateGroupMembersResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.group.v1.MsgUpdateGroupMetadata 

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgUpdateGroupMetadata",
  "value": {
    "admin": "",
    "group_id": "0",
    "metadata": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgUpdateGroupMetadataResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.group.v1.MsgUpdateGroupPolicyAdmin 

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
  "value": {
    "admin": "",
    "group_policy_address": "",
    "new_admin": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy 

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
  "value": {
    "admin": "",
    "group_policy_address": "",
    "decision_policy": null
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.group.v1.MsgUpdateGroupPolicyMetadata 

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
  "value": {
    "admin": "",
    "group_policy_address": "",
    "metadata": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.group.v1.MsgVote 

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgVote",
  "value": {
    "proposal_id": "0",
    "voter": "",
    "option": 0,
    "metadata": "",
    "exec": 0
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgVoteResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.group.v1.MsgWithdrawProposal 

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgWithdrawProposal",
  "value": {
    "proposal_id": "0",
    "address": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgWithdrawProposalResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.staking.v1beta1.MsgBeginRedelegate 

```js
let msg = {
  "typeUrl": "/cosmos.staking.v1beta1.MsgBeginRedelegate",
  "value": {
    "delegator_address": "",
    "validator_src_address": "",
    "validator_dst_address": "",
    "amount": null
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.staking.v1beta1.MsgBeginRedelegateResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.staking.v1beta1.MsgCreateValidator 

```js
let msg = {
  "typeUrl": "/cosmos.staking.v1beta1.MsgCreateValidator",
  "value": {
    "description": null,
    "commission": null,
    "min_self_delegation": "",
    "delegator_address": "",
    "validator_address": "",
    "pubkey": null,
    "value": null
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.staking.v1beta1.MsgCreateValidatorResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.staking.v1beta1.MsgDelegate 

```js
let msg = {
  "typeUrl": "/cosmos.staking.v1beta1.MsgDelegate",
  "value": {
    "delegator_address": "",
    "validator_address": "",
    "amount": null
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.staking.v1beta1.MsgDelegateResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.staking.v1beta1.MsgEditValidator 

```js
let msg = {
  "typeUrl": "/cosmos.staking.v1beta1.MsgEditValidator",
  "value": {
    "description": null,
    "validator_address": "",
    "commission_rate": "",
    "min_self_delegation": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.staking.v1beta1.MsgEditValidatorResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.staking.v1beta1.MsgUndelegate 

```js
let msg = {
  "typeUrl": "/cosmos.staking.v1beta1.MsgUndelegate",
  "value": {
    "delegator_address": "",
    "validator_address": "",
    "amount": null
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.staking.v1beta1.MsgUndelegateResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

## /cosmos.vesting.v1beta1.MsgCreateVestingAccount 

```js
let msg = {
  "typeUrl": "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
  "value": {
    "from_address": "",
    "to_address": "",
    "amount": [],
    "end_time": "0",
    "delayed": false
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```


## Documentation helper
<details>
<summary>
  Source for generating the Msg examples
</summary>

```js
let items = [...msgClient.registry.types.entries()].sort();
let out = '';
items.map(([k, v]) => {
    if (k.includes('Msg') && !k.includes('ibc.core')) {
        let value = (blitjs.cosmosProtoRegistry.find( ((x ) => {return x[0] == k})) || blitjs.blitProtoRegistry.find(((x ) => {return x[0] == k})))
        if (value !== undefined) out += `
## ${k} 

\`\`\`js
let msg = ${ JSON.stringify({typeUrl:k, value: value[1].fromPartial({})},   function(k, v) { return v === undefined ? null : v}, 2) }
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs${k.replace('/', '.') + "Response"}.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
\`\`\`
`;
    }
});
console.log(out);
```
</details>

## Query Reference

##  /blit.blit.Query/Params

```js
let params = {}
await queryClient.blit.blit.params(params)
```

##  /blit.script.Query/Params

```js
let params = {}
await queryClient.blit.script.params(params)
```

##  /blit.script.Query/Script

```js
let params = {
  "address": ""
}
await queryClient.blit.script.script(params)
```

##  /blit.script.Query/Scripts

```js
let params = {}
await queryClient.blit.script.scripts(params)
```

##  /blit.script.Query/Web

```js
let params = {
  "address": "",
  "httprequest": ""
}
await queryClient.blit.script.web(params)
```

##  /blit.script.Query/Eval

```js
let params = {
  "caller_address": "",
  "script_address": "",
  "extra_code": "",
  "function_name": "",
  "kwargs": "",
  "grantee": ""
}
await queryClient.blit.script.eval(params)
```

##  /blit.storage.Query/Params

```js
let params = {}
await queryClient.blit.storage.params(params)
```

##  /blit.storage.Query/StorageDetail

```js
let params = {
  "address": "",
  "index": ""
}
await queryClient.blit.storage.storageDetail(params)
```

##  /blit.storage.Query/FilterStorage

```js
let params = {
  "filter_address": "",
  "filter_index_prefix": ""
}
await queryClient.blit.storage.filterStorage(params)
```

##  /cosmos.auth.v1beta1.Query/Accounts

```js
let params = {}
await queryClient.cosmos.auth.v1beta1.accounts(params)
```

##  /cosmos.auth.v1beta1.Query/Account

```js
let params = {
  "address": ""
}
await queryClient.cosmos.auth.v1beta1.account(params)
```

##  /cosmos.auth.v1beta1.Query/Params

```js
let params = {}
await queryClient.cosmos.auth.v1beta1.params(params)
```

##  /cosmos.auth.v1beta1.Query/ModuleAccounts

```js
let params = {}
await queryClient.cosmos.auth.v1beta1.moduleAccounts(params)
```

##  /cosmos.auth.v1beta1.Query/ModuleAccountByName

```js
let params = {
  "name": ""
}
await queryClient.cosmos.auth.v1beta1.moduleAccountByName(params)
```

##  /cosmos.auth.v1beta1.Query/AccountAddressByID

```js
let params = {
  "id": "0",
  "account_id": "0"
}
await queryClient.cosmos.auth.v1beta1.accountAddressByID(params)
```

##  /cosmos.auth.v1beta1.Query/AccountInfo

```js
let params = {
  "address": ""
}
await queryClient.cosmos.auth.v1beta1.accountInfo(params)
```

##  /cosmos.authz.v1beta1.Query/Grants

```js
let params = {
  "granter": "",
  "grantee": "",
  "msg_type_url": ""
}
await queryClient.cosmos.authz.v1beta1.grants(params)
```

##  /cosmos.authz.v1beta1.Query/GranterGrants

```js
let params = {
  "granter": ""
}
await queryClient.cosmos.authz.v1beta1.granterGrants(params)
```

##  /cosmos.authz.v1beta1.Query/GranteeGrants

```js
let params = {
  "grantee": ""
}
await queryClient.cosmos.authz.v1beta1.granteeGrants(params)
```

##  /cosmos.bank.v1beta1.Query/Balance

```js
let params = {
  "address": "",
  "denom": ""
}
await queryClient.cosmos.bank.v1beta1.balance(params)
```

##  /cosmos.bank.v1beta1.Query/AllBalances

```js
let params = {
  "address": ""
}
await queryClient.cosmos.bank.v1beta1.allBalances(params)
```

##  /cosmos.bank.v1beta1.Query/SpendableBalances

```js
let params = {
  "address": ""
}
await queryClient.cosmos.bank.v1beta1.spendableBalances(params)
```

##  /cosmos.bank.v1beta1.Query/SpendableBalanceByDenom

```js
let params = {
  "address": "",
  "denom": ""
}
await queryClient.cosmos.bank.v1beta1.spendableBalanceByDenom(params)
```

##  /cosmos.bank.v1beta1.Query/TotalSupply

```js
let params = {}
await queryClient.cosmos.bank.v1beta1.totalSupply(params)
```

##  /cosmos.bank.v1beta1.Query/SupplyOf

```js
let params = {
  "denom": ""
}
await queryClient.cosmos.bank.v1beta1.supplyOf(params)
```

##  /cosmos.bank.v1beta1.Query/Params

```js
let params = {}
await queryClient.cosmos.bank.v1beta1.params(params)
```

##  /cosmos.bank.v1beta1.Query/DenomsMetadata

```js
let params = {}
await queryClient.cosmos.bank.v1beta1.denomsMetadata(params)
```

##  /cosmos.bank.v1beta1.Query/DenomMetadata

```js
let params = {
  "denom": ""
}
await queryClient.cosmos.bank.v1beta1.denomMetadata(params)
```

##  /cosmos.bank.v1beta1.Query/DenomOwners

```js
let params = {
  "denom": ""
}
await queryClient.cosmos.bank.v1beta1.denomOwners(params)
```

##  /cosmos.base.reflection.v2alpha1.GetQuery/ServicesDescriptor

```js
let params = {}
await queryClient.cosmos.base.reflection.v2alpha1.getServicesDescriptor(params)
```

##  /cosmos.base.tendermint.v1beta1.ABCIQuery/

```js
let params = {
  "data": {},
  "path": "",
  "height": "0",
  "prove": false
}
await queryClient.cosmos.base.tendermint.v1beta1.aBCI(params)
```

##  /cosmos.consensus.v1.Query/Params

```js
let params = {}
await queryClient.cosmos.consensus.v1.params(params)
```

##  /cosmos.distribution.v1beta1.Query/Params

```js
let params = {}
await queryClient.cosmos.distribution.v1beta1.params(params)
```

##  /cosmos.distribution.v1beta1.Query/ValidatorDistributionInfo

```js
let params = {
  "validator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.validatorDistributionInfo(params)
```

##  /cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards

```js
let params = {
  "validator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.validatorOutstandingRewards(params)
```

##  /cosmos.distribution.v1beta1.Query/ValidatorCommission

```js
let params = {
  "validator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.validatorCommission(params)
```

##  /cosmos.distribution.v1beta1.Query/ValidatorSlashes

```js
let params = {
  "validator_address": "",
  "starting_height": "0",
  "ending_height": "0"
}
await queryClient.cosmos.distribution.v1beta1.validatorSlashes(params)
```

##  /cosmos.distribution.v1beta1.Query/DelegationRewards

```js
let params = {
  "delegator_address": "",
  "validator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.delegationRewards(params)
```

##  /cosmos.distribution.v1beta1.Query/DelegationTotalRewards

```js
let params = {
  "delegator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.delegationTotalRewards(params)
```

##  /cosmos.distribution.v1beta1.Query/DelegatorValidators

```js
let params = {
  "delegator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.delegatorValidators(params)
```

##  /cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress

```js
let params = {
  "delegator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.delegatorWithdrawAddress(params)
```

##  /cosmos.distribution.v1beta1.Query/CommunityPool

```js
let params = {}
await queryClient.cosmos.distribution.v1beta1.communityPool(params)
```

##  /cosmos.feegrant.v1beta1.Query/Allowance

```js
let params = {
  "granter": "",
  "grantee": ""
}
await queryClient.cosmos.feegrant.v1beta1.allowance(params)
```

##  /cosmos.feegrant.v1beta1.Query/Allowances

```js
let params = {
  "grantee": ""
}
await queryClient.cosmos.feegrant.v1beta1.allowances(params)
```

##  /cosmos.feegrant.v1beta1.Query/AllowancesByGranter

```js
let params = {
  "granter": ""
}
await queryClient.cosmos.feegrant.v1beta1.allowancesByGranter(params)
```

##  /cosmos.gov.v1.Query/Proposal

```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1.proposal(params)
```

##  /cosmos.gov.v1.Query/Proposals

```js
let params = {
  "proposal_status": 0,
  "voter": "",
  "depositor": ""
}
await queryClient.cosmos.gov.v1.proposals(params)
```

##  /cosmos.gov.v1.Query/Vote

```js
let params = {
  "proposal_id": "0",
  "voter": ""
}
await queryClient.cosmos.gov.v1.vote(params)
```

##  /cosmos.gov.v1.Query/Votes

```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1.votes(params)
```

##  /cosmos.gov.v1.Query/Params

```js
let params = {
  "params_type": ""
}
await queryClient.cosmos.gov.v1.params(params)
```

##  /cosmos.gov.v1.Query/Deposit

```js
let params = {
  "proposal_id": "0",
  "depositor": ""
}
await queryClient.cosmos.gov.v1.deposit(params)
```

##  /cosmos.gov.v1.Query/Deposits

```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1.deposits(params)
```

##  /cosmos.gov.v1.Query/TallyResult

```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1.tallyResult(params)
```

##  /cosmos.gov.v1beta1.Query/Proposal

```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1beta1.proposal(params)
```

##  /cosmos.gov.v1beta1.Query/Proposals

```js
let params = {
  "proposal_status": 0,
  "voter": "",
  "depositor": ""
}
await queryClient.cosmos.gov.v1beta1.proposals(params)
```

##  /cosmos.gov.v1beta1.Query/Vote

```js
let params = {
  "proposal_id": "0",
  "voter": ""
}
await queryClient.cosmos.gov.v1beta1.vote(params)
```

##  /cosmos.gov.v1beta1.Query/Votes

```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1beta1.votes(params)
```

##  /cosmos.gov.v1beta1.Query/Params

```js
let params = {
  "params_type": ""
}
await queryClient.cosmos.gov.v1beta1.params(params)
```

##  /cosmos.gov.v1beta1.Query/Deposit

```js
let params = {
  "proposal_id": "0",
  "depositor": ""
}
await queryClient.cosmos.gov.v1beta1.deposit(params)
```

##  /cosmos.gov.v1beta1.Query/Deposits

```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1beta1.deposits(params)
```

##  /cosmos.gov.v1beta1.Query/TallyResult

```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1beta1.tallyResult(params)
```

##  /cosmos.group.v1.Query/GroupInfo

```js
let params = {
  "group_id": "0"
}
await queryClient.cosmos.group.v1.groupInfo(params)
```

##  /cosmos.group.v1.Query/GroupPolicyInfo

```js
let params = {
  "address": ""
}
await queryClient.cosmos.group.v1.groupPolicyInfo(params)
```

##  /cosmos.group.v1.Query/GroupMembers

```js
let params = {
  "group_id": "0"
}
await queryClient.cosmos.group.v1.groupMembers(params)
```

##  /cosmos.group.v1.Query/GroupsByAdmin

```js
let params = {
  "admin": ""
}
await queryClient.cosmos.group.v1.groupsByAdmin(params)
```

##  /cosmos.group.v1.Query/GroupPoliciesByGroup

```js
let params = {
  "group_id": "0"
}
await queryClient.cosmos.group.v1.groupPoliciesByGroup(params)
```

##  /cosmos.group.v1.Query/GroupPoliciesByAdmin

```js
let params = {
  "admin": ""
}
await queryClient.cosmos.group.v1.groupPoliciesByAdmin(params)
```

##  /cosmos.group.v1.Query/Proposal

```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.group.v1.proposal(params)
```

##  /cosmos.group.v1.Query/ProposalsByGroupPolicy

```js
let params = {
  "address": ""
}
await queryClient.cosmos.group.v1.proposalsByGroupPolicy(params)
```

##  /cosmos.group.v1.Query/VoteByProposalVoter

```js
let params = {
  "proposal_id": "0",
  "voter": ""
}
await queryClient.cosmos.group.v1.voteByProposalVoter(params)
```

##  /cosmos.group.v1.Query/VotesByProposal

```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.group.v1.votesByProposal(params)
```

##  /cosmos.group.v1.Query/VotesByVoter

```js
let params = {
  "voter": ""
}
await queryClient.cosmos.group.v1.votesByVoter(params)
```

##  /cosmos.group.v1.Query/GroupsByMember

```js
let params = {
  "address": ""
}
await queryClient.cosmos.group.v1.groupsByMember(params)
```

##  /cosmos.group.v1.Query/TallyResult

```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.group.v1.tallyResult(params)
```

##  /cosmos.group.v1.Query/Groups

```js
let params = {}
await queryClient.cosmos.group.v1.groups(params)
```

##  /cosmos.mint.v1beta1.Query/Params

```js
let params = {}
await queryClient.cosmos.mint.v1beta1.params(params)
```

##  /cosmos.mint.v1beta1.Query/Inflation

```js
let params = {}
await queryClient.cosmos.mint.v1beta1.inflation(params)
```

##  /cosmos.mint.v1beta1.Query/AnnualProvisions

```js
let params = {}
await queryClient.cosmos.mint.v1beta1.annualProvisions(params)
```

##  /cosmos.nft.v1beta1.Query/Balance

```js
let params = {
  "class_id": "",
  "owner": ""
}
await queryClient.cosmos.nft.v1beta1.balance(params)
```

##  /cosmos.nft.v1beta1.Query/Owner

```js
let params = {
  "class_id": "",
  "id": ""
}
await queryClient.cosmos.nft.v1beta1.owner(params)
```

##  /cosmos.nft.v1beta1.Query/Supply

```js
let params = {
  "class_id": ""
}
await queryClient.cosmos.nft.v1beta1.supply(params)
```

##  /cosmos.nft.v1beta1.Query/NFTs

```js
let params = {
  "class_id": "",
  "owner": ""
}
await queryClient.cosmos.nft.v1beta1.nFTs(params)
```

##  /cosmos.nft.v1beta1.Query/NFT

```js
let params = {
  "class_id": "",
  "id": ""
}
await queryClient.cosmos.nft.v1beta1.nFT(params)
```

##  /cosmos.nft.v1beta1.Query/Class

```js
let params = {
  "class_id": ""
}
await queryClient.cosmos.nft.v1beta1.class(params)
```

##  /cosmos.nft.v1beta1.Query/Classes

```js
let params = {}
await queryClient.cosmos.nft.v1beta1.classes(params)
```

##  /cosmos.params.v1beta1.Query/Params

```js
let params = {
  "subspace": "",
  "key": ""
}
await queryClient.cosmos.params.v1beta1.params(params)
```

##  /cosmos.params.v1beta1.Query/Subspaces

```js
let params = {}
await queryClient.cosmos.params.v1beta1.subspaces(params)
```

##  /cosmos.staking.v1beta1.Query/Validators

```js
let params = {
  "status": ""
}
await queryClient.cosmos.staking.v1beta1.validators(params)
```

##  /cosmos.staking.v1beta1.Query/Validator

```js
let params = {
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.validator(params)
```

##  /cosmos.staking.v1beta1.Query/ValidatorDelegations

```js
let params = {
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.validatorDelegations(params)
```

##  /cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations

```js
let params = {
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.validatorUnbondingDelegations(params)
```

##  /cosmos.staking.v1beta1.Query/Delegation

```js
let params = {
  "delegator_addr": "",
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.delegation(params)
```

##  /cosmos.staking.v1beta1.Query/UnbondingDelegation

```js
let params = {
  "delegator_addr": "",
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.unbondingDelegation(params)
```

##  /cosmos.staking.v1beta1.Query/DelegatorDelegations

```js
let params = {
  "delegator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.delegatorDelegations(params)
```

##  /cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations

```js
let params = {
  "delegator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.delegatorUnbondingDelegations(params)
```

##  /cosmos.staking.v1beta1.Query/Redelegations

```js
let params = {
  "delegator_addr": "",
  "src_validator_addr": "",
  "dst_validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.redelegations(params)
```

##  /cosmos.staking.v1beta1.Query/DelegatorValidators

```js
let params = {
  "delegator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.delegatorValidators(params)
```

##  /cosmos.staking.v1beta1.Query/DelegatorValidator

```js
let params = {
  "delegator_addr": "",
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.delegatorValidator(params)
```

##  /cosmos.staking.v1beta1.Query/HistoricalInfo

```js
let params = {
  "height": "0"
}
await queryClient.cosmos.staking.v1beta1.historicalInfo(params)
```

##  /cosmos.staking.v1beta1.Query/Pool

```js
let params = {}
await queryClient.cosmos.staking.v1beta1.pool(params)
```

##  /cosmos.staking.v1beta1.Query/Params

```js
let params = {}
await queryClient.cosmos.staking.v1beta1.params(params)
```

##  /cosmos.upgrade.v1beta1.Query/CurrentPlan

```js
let params = {}
await queryClient.cosmos.upgrade.v1beta1.currentPlan(params)
```

##  /cosmos.upgrade.v1beta1.Query/AppliedPlan

```js
let params = {
  "name": ""
}
await queryClient.cosmos.upgrade.v1beta1.appliedPlan(params)
```

##  /cosmos.upgrade.v1beta1.Query/UpgradedConsensusState

```js
let params = {
  "last_height": "0"
}
await queryClient.cosmos.upgrade.v1beta1.upgradedConsensusState(params)
```

##  /cosmos.upgrade.v1beta1.Query/ModuleVersions

```js
let params = {
  "module_name": ""
}
await queryClient.cosmos.upgrade.v1beta1.moduleVersions(params)
```

##  /cosmos.upgrade.v1beta1.Query/Authority

```js
let params = {}
await queryClient.cosmos.upgrade.v1beta1.authority(params)
```

# Query doc helper
<details>
<summary>
  Source for generating the query examples
</summary>

```

BigInt.prototype.toJSON = function() { return this.toString() }

var flatten = (function (isArray, wrapped) {
    return function (table) {
        return reduce("", [], table);
    };

    function reduce(path, accumulator, table) {
        if (isArray(table)) {
        } else {
            var empty = true;

            if (path) {
                for (var property in table) {
                    var item = table[property], property = path + "." + property, empty = false;
                    if (wrapped(item) !== item) {} // accumulator[property] = item;
                    else reduce(property, accumulator, item);
                }
            } else {
                for (var property in table) {
                    var item = table[property], empty = false;
                    if (wrapped(item) !== item) {} //accumulator[property] = item;
                    else reduce(property, accumulator, item);
                }
            }

            if (empty && path.endsWith("Request") && path.includes("Query")) accumulator.push(path);

            
        }

        return accumulator;
    }
}(Array.isArray, Object));


requestStrings = flatten(JSON.parse(JSON.stringify(blitjs)))

function generateQueryCode(queryRequestStrings) {
    let outputString = '';

    for (let i = 0; i < queryRequestStrings.length; i++) {
        let requestString = queryRequestStrings[i];
        let requestTypeUrl = "/" + requestString.replace('Query', 'Query/').replace('Request', '');;
        let parts = requestString.split('.');
        let namespace = parts.slice(0, -1).join('.');
        let requestClass = parts.slice(-1)[0];
        let methodName = requestClass.replace('Query', '').replace('Request', '')
	methodName = methodName[0].toLowerCase() + methodName.slice(1)
        
        // Ensure the methodName resulted in a non-empty string to avoid erroneous method calls
        if (!methodName) {
            console.error(`Unable to derive method name from request string: ${requestString}`);
            continue;  // Skip to next iteration
        }

        let queryData = eval(`JSON.stringify(blitjs.${requestString}.fromPartial({}), null, 2)`);
        let methodCallStatement = `await queryClient.${namespace}.${methodName}(params)`;


        outputString += `
##  ${requestTypeUrl}

\`\`\`js
let params = ${queryData}
${methodCallStatement}
\`\`\`
`;
    }
    return outputString;
}

resultString = generateQueryCode(requestStrings);
console.log(resultString);


```
</details>

License
-------

This project is licensed under the MIT License.
