BlitJS
=====================

BlitJS is a library designed to facilitate interactions with Blit using JavaScript. This a guide on how to set up and use the BlitJS library in your project.

Installation
------------

Choose one of the options below

#### Script Tag

Include BlitJS in your project by adding the following script tag in your HTML file:

```html
<script type="module">
import blitjs from "https://cdn.jsdelivr.net/npm/@blitchain/blitjs/+esm";

// example usage below
</script>
```

#### NPM

Install via npm:

```bash
npm install @blitchain/blitjs
```


#### Brower Console

```js
blitjs = (await import("https://cdn.jsdelivr.net/npm/@blitchain/blitjs/+esm")).default;
```

### Creating the Clients:

1.  Here is a helper function to automate connecting to Keplr.

```js
  // Query client setup
  const makeQueryClient = async ({restEndpoint}) => {
    return await blitjs.blit.ClientFactory.createLCDClient({
      restEndpoint,
    });
  };

// Client setup for Keplr
const makeKeplrClient = ({rpcEndpoint, restEndpoint, chainId}) => {
  return new Promise(async (resolve, reject) => {
    if (!window.keplr) {
      reject(new Error("Please install keplr extension"));
    } else {
      try {
        await window.keplr.experimentalSuggestChain({
          features: [],
          chainId: chainId,
          chainName: "Blit Testnet",
          rpc: rpcEndpoint,
          rest: restEndpoint,
          stakeCurrency: {
            coinDenom: "blit",
            coinMinimalDenom: "blit",
            coinDecimals: 0,
          },
          bip44: {
            coinType: 118,
          },
          bech32Config: {
            bech32PrefixAccAddr: "blit",
            bech32PrefixAccPub: "blitpub",
            bech32PrefixValAddr: "blitvaloper",
            bech32PrefixValPub: "blitvaloperpub",
            bech32PrefixConsAddr: "blitvalcons",
            bech32PrefixConsPub: "blitvalconspub",
          },
          currencies: [
            {
              coinDenom: "blit",
              coinMinimalDenom: "blit",
              coinDecimals: 0,
            },
          ],
          feeCurrencies: [
            {
              coinDenom: "blit",
              coinMinimalDenom: "blit",
              coinDecimals: 0,
              gasPriceStep: { low: 0.0, average: 0.000001, high: 1 },
            },
          ],
        });
        await window.keplr.enable(chainId);
        let offlineSigner = await window.getOfflineSigner(chainId);
        let client = await blitjs.getSigningBlitClient({
          rpcEndpoint,
          signer: offlineSigner
        });
        client.gasPrice = "0.000001blit"
        resolve(client);
      } catch (error) {
        reject(error);
      }
    }
  });
};
```

Creat clients and connect to the Blit node:

```js
let rpcEndpoint = "http://testnet.blitchain.net:26657";
let restEndpoint = "http://testnet.blitchain.net:1317";
let chainId = "blit-dev";

let msgClient = await makeKeplrClient({ rpcEndpoint, restEndpoint, chainId });
let queryClient = await makeQueryClient({ restEndpoint });
```

### Getting the Address:

```js
let address = (await msgClient.signer.getAccounts())[0].address;
console.log(address)
// Output blit123someaddress
```

### Querying the chain:

Here is how to query the balance of an address and an example of using pagination. All querys that return lists can be paginated.
```js
let balanceResponse = await queryClient.cosmos.bank.v1beta1.allBalances({ address, pagination: { limit: "1", offset: 0, countTotal: true } });
console.log(balanceResponse);
/*
{
    "balances": [
        {
            "denom": "blit",
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

Here is how to query the details of the Blit node the client is connected to.

```js
let nodeInfo = await queryClient.cosmos.base.tendermint.v1beta1.getNodeInfo()
console.log(nodeInfo);
// Output {default_node_info: {…}, application_version: {…}}
```

### Update the code of your script

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


### Querying a Script object to verify the Update Script worked

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

### Helpers for interacting with functions defined in a script

The `runScriptFunction` function defined here executes a script function on the blockchain, and returns the result or an error, if any.

```js
const runScriptFunction = async ({ msgClient, caller_address, script_address, function_name, kwargs }) => {
  let message = blitjs.blit.script.MessageComposer.withTypeUrl.run({
    caller_address,
    script_address,
    function_name,
    kwargs: JSON.stringify(kwargs),
  });
  let gasMultiple = 1.5  
  let resp = await msgClient.signAndBroadcast(caller_address, [message], gasMultiple)
  if (resp.code !== 0) {
    // So we split into lines and get the last line which is the error
    let lastLine = resp.rawLog.split("\n").slice(-1)[0];
    // strip ": Exception in Script" only from lastLine (technically this will remove it anywhere in the result, but that's fine)
    let result = lastLine.replace(": Exception in Script", "");
    try {
      return JSON.parse(result);
    } catch (e) {
      if (e instanceof SyntaxError) {
        throw new Error(resp.rawLog);
      }
      throw e;  // re-throw the error if it's not a SyntaxError
    }
  }
  let msgResponse = resp.msgResponses[0];
  try {
    // Parse the response
    return JSON.parse(
      blitjs.blit.script.MsgRunResponse.fromProtoMsg(msgResponse).response
    );
  } catch (e) {
    if (e instanceof SyntaxError) {
      throw new Error(resp.rawLog);
    }
    throw e;  // re-throw the error if it's not a SyntaxError
  }
};

```

#### How to call a function in a transaction 

Now it is trivial to call `greet(name="Bob")` in a transaction. Keplr will prompt to sign the transaction before broadcasting it.

```js
let runResp = await runScriptFunction({
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

The `queryScriptFunction` function defined below executes a script function as a query and returns the result or an error, if any.
It is a read-only operation that does not create a transaction or persist state. This is useful when you want to see the output of a function 
without a transaction, especially when debugging.

```js
const queryScriptFunction = async ({ queryClient, script_address, caller_address, function_name, kwargs, extra_code, grantee }) => {
    const response = await queryClient.blit.script.eval({
      script_address,
      caller_address,
      function_name,
      kwargs: JSON.stringify(kwargs),
      extra_code, 
      grantee,  
    });
  try {
    return JSON.parse(response.response);
  } catch (SyntaxError) {
    return response;
  }
};
```

#### How to call a function in a script using `queryScriptFunction`
This is a read-only eval of the function `greet(name="Bob")`.

```js
let queryResp = await queryScriptFunction({
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

### How to query Storage:

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

### How to create then update some storage at an index

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



## Msg Reference


### /blit.blit.MsgUpdateParams

```js
{
  "typeUrl": "/blit.blit.MsgUpdateParams",
  "value": {
    "authority": ""
  }
}
```        

### /blit.script.MsgCreateScript

```js
{
  "typeUrl": "/blit.script.MsgCreateScript",
  "value": {
    "creator": "",
    "code": "",
    "msg_type_permissions": [],
    "grantee": ""
  }
}
```        

### /blit.script.MsgRun

```js
{
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
```        

### /blit.script.MsgUpdateParams

```js
{
  "typeUrl": "/blit.script.MsgUpdateParams",
  "value": {
    "authority": ""
  }
}
```        

### /blit.script.MsgUpdateScript

```js
{
  "typeUrl": "/blit.script.MsgUpdateScript",
  "value": {
    "address": "",
    "code": "",
    "grantee": ""
  }
}
```        

### /blit.storage.MsgCreateStorage

```js
{
  "typeUrl": "/blit.storage.MsgCreateStorage",
  "value": {
    "address": "",
    "index": "",
    "data": "",
    "grantee": ""
  }
}
```        

### /blit.storage.MsgDeleteStorage

```js
{
  "typeUrl": "/blit.storage.MsgDeleteStorage",
  "value": {
    "address": "",
    "index": "",
    "grantee": ""
  }
}
```        

### /blit.storage.MsgUpdateParams

```js
{
  "typeUrl": "/blit.storage.MsgUpdateParams",
  "value": {
    "authority": ""
  }
}
```        

### /blit.storage.MsgUpdateStorage

```js
{
  "typeUrl": "/blit.storage.MsgUpdateStorage",
  "value": {
    "address": "",
    "index": "",
    "data": "",
    "grantee": ""
  }
}
```        

### /cosmos.authz.v1beta1.MsgExec

```js
{
  "typeUrl": "/cosmos.authz.v1beta1.MsgExec",
  "value": {
    "grantee": "",
    "msgs": []
  }
}
```        

### /cosmos.authz.v1beta1.MsgGrant

```js
{
  "typeUrl": "/cosmos.authz.v1beta1.MsgGrant",
  "value": {
    "granter": "",
    "grantee": ""
  }
}
```        

### /cosmos.authz.v1beta1.MsgRevoke

```js
{
  "typeUrl": "/cosmos.authz.v1beta1.MsgRevoke",
  "value": {
    "granter": "",
    "grantee": "",
    "msgTypeUrl": ""
  }
}
```        

### /cosmos.bank.v1beta1.MsgMultiSend

```js
{
  "typeUrl": "/cosmos.bank.v1beta1.MsgMultiSend",
  "value": {
    "inputs": [],
    "outputs": []
  }
}
```        

### /cosmos.bank.v1beta1.MsgSend

```js
{
  "typeUrl": "/cosmos.bank.v1beta1.MsgSend",
  "value": {
    "fromAddress": "",
    "toAddress": "",
    "amount": []
  }
}
```        

### /cosmos.distribution.v1beta1.MsgFundCommunityPool

```js
{
  "typeUrl": "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
  "value": {
    "amount": [],
    "depositor": ""
  }
}
```        

### /cosmos.distribution.v1beta1.MsgSetWithdrawAddress

```js
{
  "typeUrl": "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
  "value": {
    "delegatorAddress": "",
    "withdrawAddress": ""
  }
}
```        

### /cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward

```js
{
  "typeUrl": "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
  "value": {
    "delegatorAddress": "",
    "validatorAddress": ""
  }
}
```        

### /cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission

```js
{
  "typeUrl": "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
  "value": {
    "validatorAddress": ""
  }
}
```        

### /cosmos.feegrant.v1beta1.MsgGrantAllowance

```js
{
  "typeUrl": "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
  "value": {
    "granter": "",
    "grantee": ""
  }
}
```        

### /cosmos.feegrant.v1beta1.MsgRevokeAllowance

```js
{
  "typeUrl": "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
  "value": {
    "granter": "",
    "grantee": ""
  }
}
```        

### /cosmos.gov.v1.MsgDeposit

```js
{
  "typeUrl": "/cosmos.gov.v1.MsgDeposit",
  "value": {
    "proposalId": {
      "low": 0,
      "high": 0,
      "unsigned": true
    },
    "depositor": "",
    "amount": []
  }
}
```        

### /cosmos.gov.v1.MsgSubmitProposal

```js
{
  "typeUrl": "/cosmos.gov.v1.MsgSubmitProposal",
  "value": {
    "messages": [],
    "initialDeposit": [],
    "proposer": "",
    "metadata": "",
    "title": "",
    "summary": ""
  }
}
```        

### /cosmos.gov.v1.MsgUpdateParams

```js
{
  "typeUrl": "/cosmos.gov.v1.MsgUpdateParams",
  "value": {
    "authority": ""
  }
}
```        

### /cosmos.gov.v1.MsgVote

```js
{
  "typeUrl": "/cosmos.gov.v1.MsgVote",
  "value": {
    "proposalId": {
      "low": 0,
      "high": 0,
      "unsigned": true
    },
    "voter": "",
    "option": 0,
    "metadata": ""
  }
}
```        

### /cosmos.gov.v1.MsgVoteWeighted

```js
{
  "typeUrl": "/cosmos.gov.v1.MsgVoteWeighted",
  "value": {
    "proposalId": {
      "low": 0,
      "high": 0,
      "unsigned": true
    },
    "voter": "",
    "options": [],
    "metadata": ""
  }
}
```        

### /cosmos.gov.v1beta1.MsgDeposit

```js
{
  "typeUrl": "/cosmos.gov.v1beta1.MsgDeposit",
  "value": {
    "proposalId": {
      "low": 0,
      "high": 0,
      "unsigned": true
    },
    "depositor": "",
    "amount": []
  }
}
```        

### /cosmos.gov.v1beta1.MsgSubmitProposal

```js
{
  "typeUrl": "/cosmos.gov.v1beta1.MsgSubmitProposal",
  "value": {
    "initialDeposit": [],
    "proposer": ""
  }
}
```        

### /cosmos.gov.v1beta1.MsgVote

```js
{
  "typeUrl": "/cosmos.gov.v1beta1.MsgVote",
  "value": {
    "proposalId": {
      "low": 0,
      "high": 0,
      "unsigned": true
    },
    "voter": "",
    "option": 0
  }
}
```        

### /cosmos.gov.v1beta1.MsgVoteWeighted

```js
{
  "typeUrl": "/cosmos.gov.v1beta1.MsgVoteWeighted",
  "value": {
    "proposalId": {
      "low": 0,
      "high": 0,
      "unsigned": true
    },
    "voter": "",
    "options": []
  }
}
```        

### /cosmos.group.v1.MsgCreateGroup

```js
{
  "typeUrl": "/cosmos.group.v1.MsgCreateGroup",
  "value": {
    "admin": "",
    "members": [],
    "metadata": ""
  }
}
```        

### /cosmos.group.v1.MsgCreateGroupPolicy

```js
{
  "typeUrl": "/cosmos.group.v1.MsgCreateGroupPolicy",
  "value": {
    "admin": "",
    "groupId": {
      "low": 0,
      "high": 0,
      "unsigned": true
    },
    "metadata": ""
  }
}
```        

### /cosmos.group.v1.MsgCreateGroupWithPolicy

```js
{
  "typeUrl": "/cosmos.group.v1.MsgCreateGroupWithPolicy",
  "value": {
    "admin": "",
    "members": [],
    "groupMetadata": "",
    "groupPolicyMetadata": "",
    "groupPolicyAsAdmin": false
  }
}
```        

### /cosmos.group.v1.MsgExec

```js
{
  "typeUrl": "/cosmos.group.v1.MsgExec",
  "value": {
    "proposalId": {
      "low": 0,
      "high": 0,
      "unsigned": true
    },
    "executor": ""
  }
}
```        

### /cosmos.group.v1.MsgLeaveGroup

```js
{
  "typeUrl": "/cosmos.group.v1.MsgLeaveGroup",
  "value": {
    "address": "",
    "groupId": {
      "low": 0,
      "high": 0,
      "unsigned": true
    }
  }
}
```        

### /cosmos.group.v1.MsgSubmitProposal

```js
{
  "typeUrl": "/cosmos.group.v1.MsgSubmitProposal",
  "value": {
    "groupPolicyAddress": "",
    "proposers": [],
    "metadata": "",
    "messages": [],
    "exec": 0,
    "title": "",
    "summary": ""
  }
}
```        

### /cosmos.group.v1.MsgUpdateGroupAdmin

```js
{
  "typeUrl": "/cosmos.group.v1.MsgUpdateGroupAdmin",
  "value": {
    "admin": "",
    "groupId": {
      "low": 0,
      "high": 0,
      "unsigned": true
    },
    "newAdmin": ""
  }
}
```        

### /cosmos.group.v1.MsgUpdateGroupMembers

```js
{
  "typeUrl": "/cosmos.group.v1.MsgUpdateGroupMembers",
  "value": {
    "admin": "",
    "groupId": {
      "low": 0,
      "high": 0,
      "unsigned": true
    },
    "memberUpdates": []
  }
}
```        

### /cosmos.group.v1.MsgUpdateGroupMetadata

```js
{
  "typeUrl": "/cosmos.group.v1.MsgUpdateGroupMetadata",
  "value": {
    "admin": "",
    "groupId": {
      "low": 0,
      "high": 0,
      "unsigned": true
    },
    "metadata": ""
  }
}
```        

### /cosmos.group.v1.MsgUpdateGroupPolicyAdmin

```js
{
  "typeUrl": "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
  "value": {
    "admin": "",
    "groupPolicyAddress": "",
    "newAdmin": ""
  }
}
```        

### /cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy

```js
{
  "typeUrl": "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
  "value": {
    "admin": "",
    "groupPolicyAddress": ""
  }
}
```        

### /cosmos.group.v1.MsgUpdateGroupPolicyMetadata

```js
{
  "typeUrl": "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
  "value": {
    "admin": "",
    "groupPolicyAddress": "",
    "metadata": ""
  }
}
```        

### /cosmos.group.v1.MsgVote

```js
{
  "typeUrl": "/cosmos.group.v1.MsgVote",
  "value": {
    "proposalId": {
      "low": 0,
      "high": 0,
      "unsigned": true
    },
    "voter": "",
    "option": 0,
    "metadata": "",
    "exec": 0
  }
}
```        

### /cosmos.group.v1.MsgWithdrawProposal

```js
{
  "typeUrl": "/cosmos.group.v1.MsgWithdrawProposal",
  "value": {
    "proposalId": {
      "low": 0,
      "high": 0,
      "unsigned": true
    },
    "address": ""
  }
}
```        

### /cosmos.staking.v1beta1.MsgBeginRedelegate

```js
{
  "typeUrl": "/cosmos.staking.v1beta1.MsgBeginRedelegate",
  "value": {
    "delegatorAddress": "",
    "validatorSrcAddress": "",
    "validatorDstAddress": ""
  }
}
```        

### /cosmos.staking.v1beta1.MsgCreateValidator

```js
{
  "typeUrl": "/cosmos.staking.v1beta1.MsgCreateValidator",
  "value": {
    "minSelfDelegation": "",
    "delegatorAddress": "",
    "validatorAddress": ""
  }
}
```        

### /cosmos.staking.v1beta1.MsgDelegate

```js
{
  "typeUrl": "/cosmos.staking.v1beta1.MsgDelegate",
  "value": {
    "delegatorAddress": "",
    "validatorAddress": ""
  }
}
```        

### /cosmos.staking.v1beta1.MsgEditValidator

```js
{
  "typeUrl": "/cosmos.staking.v1beta1.MsgEditValidator",
  "value": {
    "validatorAddress": "",
    "commissionRate": "",
    "minSelfDelegation": ""
  }
}
```        

### /cosmos.staking.v1beta1.MsgUndelegate

```js
{
  "typeUrl": "/cosmos.staking.v1beta1.MsgUndelegate",
  "value": {
    "delegatorAddress": "",
    "validatorAddress": ""
  }
}
```        

### /cosmos.vesting.v1beta1.MsgCreateVestingAccount

```js
{
  "typeUrl": "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
  "value": {
    "fromAddress": "",
    "toAddress": "",
    "amount": [],
    "endTime": {
      "low": 0,
      "high": 0,
      "unsigned": false
    },
    "delayed": false
  }
}
```        

### /ibc.applications.transfer.v1.MsgTransfer

```js
{
  "typeUrl": "/ibc.applications.transfer.v1.MsgTransfer",
  "value": {
    "sourcePort": "",
    "sourceChannel": "",
    "sender": "",
    "receiver": "",
    "timeoutTimestamp": {
      "low": 0,
      "high": 0,
      "unsigned": true
    },
    "memo": ""
  }
}
```        

The list was created with this snippet

```js
let items = [...msgClient.registry.types.entries()].sort()
let out = ''
items.map(([k, v]) => { 
    if (k.includes('Msg') && !k.includes('ibc.core')) {
        out += `
### ${k}

\`\`\`js
${JSON.stringify({typeUrl:k, value: v.fromPartial({})}, null, 2)}
\`\`\`        
`} })
console.log(out)
 
``` 

### Query Reference


###  blit.blit.QueryParamsRequest
```js
let paramsQueryData = {}
await queryClient.blit.blit.params(paramsQueryData)

```

###  blit.script.QueryParamsRequest
```js
let paramsQueryData = {}
await queryClient.blit.script.params(paramsQueryData)

```

###  blit.script.QueryScriptRequest
```js
let scriptQueryData = {
  "address": ""
}
await queryClient.blit.script.script(scriptQueryData)

```

###  blit.script.QueryScriptsRequest
```js
let scriptsQueryData = {}
await queryClient.blit.script.scripts(scriptsQueryData)

```

###  blit.script.QueryWebRequest
```js
let webQueryData = {
  "address": "",
  "httprequest": ""
}
await queryClient.blit.script.web(webQueryData)

```

###  blit.script.QueryEvalRequest
```js
let evalQueryData = {
  "caller_address": "",
  "script_address": "",
  "extra_code": "",
  "function_name": "",
  "kwargs": "",
  "grantee": ""
}
await queryClient.blit.script.eval(evalQueryData)

```

###  blit.storage.QueryParamsRequest
```js
let paramsQueryData = {}
await queryClient.blit.storage.params(paramsQueryData)

```

###  blit.storage.QueryStorageDetailRequest
```js
let storageDetailQueryData = {
  "address": "",
  "index": ""
}
await queryClient.blit.storage.storageDetail(storageDetailQueryData)

```

###  blit.storage.QueryFilterStorageRequest
```js
let filterStorageQueryData = {
  "filter_address": "",
  "filter_index_prefix": ""
}
await queryClient.blit.storage.filterStorage(filterStorageQueryData)

```

###  cosmos.auth.v1beta1.QueryAccountsRequest
```js
let accountsQueryData = {}
await queryClient.cosmos.auth.v1beta1.accounts(accountsQueryData)

```

###  cosmos.auth.v1beta1.QueryAccountRequest
```js
let accountQueryData = {
  "address": ""
}
await queryClient.cosmos.auth.v1beta1.account(accountQueryData)

```

###  cosmos.auth.v1beta1.QueryModuleAccountsRequest
```js
let moduleAccountsQueryData = {}
await queryClient.cosmos.auth.v1beta1.moduleAccounts(moduleAccountsQueryData)

```

###  cosmos.auth.v1beta1.QueryParamsRequest
```js
let paramsQueryData = {}
await queryClient.cosmos.auth.v1beta1.params(paramsQueryData)

```

###  cosmos.authz.v1beta1.QueryGrantsRequest
```js
let grantsQueryData = {
  "granter": "",
  "grantee": "",
  "msg_type_url": ""
}
await queryClient.cosmos.authz.v1beta1.grants(grantsQueryData)

```

###  cosmos.authz.v1beta1.QueryGranterGrantsRequest
```js
let granterGrantsQueryData = {
  "granter": ""
}
await queryClient.cosmos.authz.v1beta1.granterGrants(granterGrantsQueryData)

```

###  cosmos.authz.v1beta1.QueryGranteeGrantsRequest
```js
let granteeGrantsQueryData = {
  "grantee": ""
}
await queryClient.cosmos.authz.v1beta1.granteeGrants(granteeGrantsQueryData)

```

###  cosmos.bank.v1beta1.QueryBalanceRequest
```js
let balanceQueryData = {
  "address": "",
  "denom": ""
}
await queryClient.cosmos.bank.v1beta1.balance(balanceQueryData)

```

###  cosmos.bank.v1beta1.QueryAllBalancesRequest
```js
let allBalancesQueryData = {
  "address": ""
}
await queryClient.cosmos.bank.v1beta1.allBalances(allBalancesQueryData)

```

###  cosmos.bank.v1beta1.QuerySpendableBalancesRequest
```js
let spendableBalancesQueryData = {
  "address": ""
}
await queryClient.cosmos.bank.v1beta1.spendableBalances(spendableBalancesQueryData)

```

###  cosmos.bank.v1beta1.QueryTotalSupplyRequest
```js
let totalSupplyQueryData = {}
await queryClient.cosmos.bank.v1beta1.totalSupply(totalSupplyQueryData)

```

###  cosmos.bank.v1beta1.QuerySupplyOfRequest
```js
let supplyOfQueryData = {
  "denom": ""
}
await queryClient.cosmos.bank.v1beta1.supplyOf(supplyOfQueryData)

```

###  cosmos.bank.v1beta1.QueryParamsRequest
```js
let paramsQueryData = {}
await queryClient.cosmos.bank.v1beta1.params(paramsQueryData)

```

###  cosmos.bank.v1beta1.QueryDenomsMetadataRequest
```js
let denomsMetadataQueryData = {}
await queryClient.cosmos.bank.v1beta1.denomsMetadata(denomsMetadataQueryData)

```

###  cosmos.bank.v1beta1.QueryDenomMetadataRequest
```js
let denomMetadataQueryData = {
  "denom": ""
}
await queryClient.cosmos.bank.v1beta1.denomMetadata(denomMetadataQueryData)

```

###  cosmos.bank.v1beta1.QueryDenomOwnersRequest
```js
let denomOwnersQueryData = {
  "denom": ""
}
await queryClient.cosmos.bank.v1beta1.denomOwners(denomOwnersQueryData)

```

###  cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest
```js
let getServicesDescriptorQueryData = {}
await queryClient.cosmos.base.reflection.v2alpha1.getServicesDescriptor(getServicesDescriptorQueryData)

```

###  cosmos.distribution.v1beta1.QueryParamsRequest
```js
let paramsQueryData = {}
await queryClient.cosmos.distribution.v1beta1.params(paramsQueryData)

```

###  cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest
```js
let validatorOutstandingRewardsQueryData = {
  "validator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.validatorOutstandingRewards(validatorOutstandingRewardsQueryData)

```

###  cosmos.distribution.v1beta1.QueryValidatorCommissionRequest
```js
let validatorCommissionQueryData = {
  "validator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.validatorCommission(validatorCommissionQueryData)

```

###  cosmos.distribution.v1beta1.QueryValidatorSlashesRequest
```js
let validatorSlashesQueryData = {
  "validator_address": "",
  "starting_height": "0",
  "ending_height": "0"
}
await queryClient.cosmos.distribution.v1beta1.validatorSlashes(validatorSlashesQueryData)

```

###  cosmos.distribution.v1beta1.QueryDelegationRewardsRequest
```js
let delegationRewardsQueryData = {
  "delegator_address": "",
  "validator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.delegationRewards(delegationRewardsQueryData)

```

###  cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest
```js
let delegationTotalRewardsQueryData = {
  "delegator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.delegationTotalRewards(delegationTotalRewardsQueryData)

```

###  cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest
```js
let delegatorValidatorsQueryData = {
  "delegator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.delegatorValidators(delegatorValidatorsQueryData)

```

###  cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest
```js
let delegatorWithdrawAddressQueryData = {
  "delegator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.delegatorWithdrawAddress(delegatorWithdrawAddressQueryData)

```

###  cosmos.distribution.v1beta1.QueryCommunityPoolRequest
```js
let communityPoolQueryData = {}
await queryClient.cosmos.distribution.v1beta1.communityPool(communityPoolQueryData)

```

###  cosmos.feegrant.v1beta1.QueryAllowanceRequest
```js
let allowanceQueryData = {
  "granter": "",
  "grantee": ""
}
await queryClient.cosmos.feegrant.v1beta1.allowance(allowanceQueryData)

```

###  cosmos.feegrant.v1beta1.QueryAllowancesRequest
```js
let allowancesQueryData = {
  "grantee": ""
}
await queryClient.cosmos.feegrant.v1beta1.allowances(allowancesQueryData)

```

###  cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest
```js
let allowancesByGranterQueryData = {
  "granter": ""
}
await queryClient.cosmos.feegrant.v1beta1.allowancesByGranter(allowancesByGranterQueryData)

```

###  cosmos.gov.v1.QueryProposalRequest
```js
let proposalQueryData = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1.proposal(proposalQueryData)

```

###  cosmos.gov.v1.QueryProposalsRequest
```js
let proposalsQueryData = {
  "proposal_status": 0,
  "voter": "",
  "depositor": ""
}
await queryClient.cosmos.gov.v1.proposals(proposalsQueryData)

```

###  cosmos.gov.v1.QueryVoteRequest
```js
let voteQueryData = {
  "proposal_id": "0",
  "voter": ""
}
await queryClient.cosmos.gov.v1.vote(voteQueryData)

```

###  cosmos.gov.v1.QueryVotesRequest
```js
let votesQueryData = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1.votes(votesQueryData)

```

###  cosmos.gov.v1.QueryParamsRequest
```js
let paramsQueryData = {
  "params_type": ""
}
await queryClient.cosmos.gov.v1.params(paramsQueryData)

```

###  cosmos.gov.v1.QueryDepositRequest
```js
let depositQueryData = {
  "proposal_id": "0",
  "depositor": ""
}
await queryClient.cosmos.gov.v1.deposit(depositQueryData)

```

###  cosmos.gov.v1.QueryDepositsRequest
```js
let depositsQueryData = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1.deposits(depositsQueryData)

```

###  cosmos.gov.v1.QueryTallyResultRequest
```js
let tallyResultQueryData = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1.tallyResult(tallyResultQueryData)

```

###  cosmos.gov.v1beta1.QueryProposalRequest
```js
let proposalQueryData = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1beta1.proposal(proposalQueryData)

```

###  cosmos.gov.v1beta1.QueryProposalsRequest
```js
let proposalsQueryData = {
  "proposal_status": 0,
  "voter": "",
  "depositor": ""
}
await queryClient.cosmos.gov.v1beta1.proposals(proposalsQueryData)

```

###  cosmos.gov.v1beta1.QueryVoteRequest
```js
let voteQueryData = {
  "proposal_id": "0",
  "voter": ""
}
await queryClient.cosmos.gov.v1beta1.vote(voteQueryData)

```

###  cosmos.gov.v1beta1.QueryVotesRequest
```js
let votesQueryData = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1beta1.votes(votesQueryData)

```

###  cosmos.gov.v1beta1.QueryParamsRequest
```js
let paramsQueryData = {
  "params_type": ""
}
await queryClient.cosmos.gov.v1beta1.params(paramsQueryData)

```

###  cosmos.gov.v1beta1.QueryDepositRequest
```js
let depositQueryData = {
  "proposal_id": "0",
  "depositor": ""
}
await queryClient.cosmos.gov.v1beta1.deposit(depositQueryData)

```

###  cosmos.gov.v1beta1.QueryDepositsRequest
```js
let depositsQueryData = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1beta1.deposits(depositsQueryData)

```

###  cosmos.gov.v1beta1.QueryTallyResultRequest
```js
let tallyResultQueryData = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1beta1.tallyResult(tallyResultQueryData)

```

###  cosmos.group.v1.QueryGroupInfoRequest
```js
let groupInfoQueryData = {
  "group_id": "0"
}
await queryClient.cosmos.group.v1.groupInfo(groupInfoQueryData)

```

###  cosmos.group.v1.QueryGroupPolicyInfoRequest
```js
let groupPolicyInfoQueryData = {
  "address": ""
}
await queryClient.cosmos.group.v1.groupPolicyInfo(groupPolicyInfoQueryData)

```

###  cosmos.group.v1.QueryGroupMembersRequest
```js
let groupMembersQueryData = {
  "group_id": "0"
}
await queryClient.cosmos.group.v1.groupMembers(groupMembersQueryData)

```

###  cosmos.group.v1.QueryGroupsByAdminRequest
```js
let groupsByAdminQueryData = {
  "admin": ""
}
await queryClient.cosmos.group.v1.groupsByAdmin(groupsByAdminQueryData)

```

###  cosmos.group.v1.QueryGroupPoliciesByGroupRequest
```js
let groupPoliciesByGroupQueryData = {
  "group_id": "0"
}
await queryClient.cosmos.group.v1.groupPoliciesByGroup(groupPoliciesByGroupQueryData)

```

###  cosmos.group.v1.QueryGroupPoliciesByAdminRequest
```js
let groupPoliciesByAdminQueryData = {
  "admin": ""
}
await queryClient.cosmos.group.v1.groupPoliciesByAdmin(groupPoliciesByAdminQueryData)

```

###  cosmos.group.v1.QueryProposalRequest
```js
let proposalQueryData = {
  "proposal_id": "0"
}
await queryClient.cosmos.group.v1.proposal(proposalQueryData)

```

###  cosmos.group.v1.QueryProposalsByGroupPolicyRequest
```js
let proposalsByGroupPolicyQueryData = {
  "address": ""
}
await queryClient.cosmos.group.v1.proposalsByGroupPolicy(proposalsByGroupPolicyQueryData)

```

###  cosmos.group.v1.QueryVoteByProposalVoterRequest
```js
let voteByProposalVoterQueryData = {
  "proposal_id": "0",
  "voter": ""
}
await queryClient.cosmos.group.v1.voteByProposalVoter(voteByProposalVoterQueryData)

```

###  cosmos.group.v1.QueryVotesByProposalRequest
```js
let votesByProposalQueryData = {
  "proposal_id": "0"
}
await queryClient.cosmos.group.v1.votesByProposal(votesByProposalQueryData)

```

###  cosmos.group.v1.QueryVotesByVoterRequest
```js
let votesByVoterQueryData = {
  "voter": ""
}
await queryClient.cosmos.group.v1.votesByVoter(votesByVoterQueryData)

```

###  cosmos.group.v1.QueryGroupsByMemberRequest
```js
let groupsByMemberQueryData = {
  "address": ""
}
await queryClient.cosmos.group.v1.groupsByMember(groupsByMemberQueryData)

```

###  cosmos.group.v1.QueryTallyResultRequest
```js
let tallyResultQueryData = {
  "proposal_id": "0"
}
await queryClient.cosmos.group.v1.tallyResult(tallyResultQueryData)

```

###  cosmos.mint.v1beta1.QueryParamsRequest
```js
let paramsQueryData = {}
await queryClient.cosmos.mint.v1beta1.params(paramsQueryData)

```

###  cosmos.mint.v1beta1.QueryInflationRequest
```js
let inflationQueryData = {}
await queryClient.cosmos.mint.v1beta1.inflation(inflationQueryData)

```

###  cosmos.mint.v1beta1.QueryAnnualProvisionsRequest
```js
let annualProvisionsQueryData = {}
await queryClient.cosmos.mint.v1beta1.annualProvisions(annualProvisionsQueryData)

```

###  cosmos.nft.v1beta1.QueryBalanceRequest
```js
let balanceQueryData = {
  "class_id": "",
  "owner": ""
}
await queryClient.cosmos.nft.v1beta1.balance(balanceQueryData)

```

###  cosmos.nft.v1beta1.QueryOwnerRequest
```js
let ownerQueryData = {
  "class_id": "",
  "id": ""
}
await queryClient.cosmos.nft.v1beta1.owner(ownerQueryData)

```

###  cosmos.nft.v1beta1.QuerySupplyRequest
```js
let supplyQueryData = {
  "class_id": ""
}
await queryClient.cosmos.nft.v1beta1.supply(supplyQueryData)

```

###  cosmos.nft.v1beta1.QueryNFTsRequest
```js
let nFTsQueryData = {
  "class_id": "",
  "owner": ""
}
await queryClient.cosmos.nft.v1beta1.nFTs(nFTsQueryData)

```

###  cosmos.nft.v1beta1.QueryNFTRequest
```js
let nFTQueryData = {
  "class_id": "",
  "id": ""
}
await queryClient.cosmos.nft.v1beta1.nFT(nFTQueryData)

```

###  cosmos.nft.v1beta1.QueryClassRequest
```js
let classQueryData = {
  "class_id": ""
}
await queryClient.cosmos.nft.v1beta1.class(classQueryData)

```

###  cosmos.nft.v1beta1.QueryClassesRequest
```js
let classesQueryData = {}
await queryClient.cosmos.nft.v1beta1.classes(classesQueryData)

```

###  cosmos.params.v1beta1.QueryParamsRequest
```js
let paramsQueryData = {
  "subspace": "",
  "key": ""
}
await queryClient.cosmos.params.v1beta1.params(paramsQueryData)

```

###  cosmos.params.v1beta1.QuerySubspacesRequest
```js
let subspacesQueryData = {}
await queryClient.cosmos.params.v1beta1.subspaces(subspacesQueryData)

```

###  cosmos.staking.v1beta1.QueryValidatorsRequest
```js
let validatorsQueryData = {
  "status": ""
}
await queryClient.cosmos.staking.v1beta1.validators(validatorsQueryData)

```

###  cosmos.staking.v1beta1.QueryValidatorRequest
```js
let validatorQueryData = {
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.validator(validatorQueryData)

```

###  cosmos.staking.v1beta1.QueryValidatorDelegationsRequest
```js
let validatorDelegationsQueryData = {
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.validatorDelegations(validatorDelegationsQueryData)

```

###  cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest
```js
let validatorUnbondingDelegationsQueryData = {
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.validatorUnbondingDelegations(validatorUnbondingDelegationsQueryData)

```

###  cosmos.staking.v1beta1.QueryDelegationRequest
```js
let delegationQueryData = {
  "delegator_addr": "",
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.delegation(delegationQueryData)

```

###  cosmos.staking.v1beta1.QueryUnbondingDelegationRequest
```js
let unbondingDelegationQueryData = {
  "delegator_addr": "",
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.unbondingDelegation(unbondingDelegationQueryData)

```

###  cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest
```js
let delegatorDelegationsQueryData = {
  "delegator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.delegatorDelegations(delegatorDelegationsQueryData)

```

###  cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest
```js
let delegatorUnbondingDelegationsQueryData = {
  "delegator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.delegatorUnbondingDelegations(delegatorUnbondingDelegationsQueryData)

```

###  cosmos.staking.v1beta1.QueryRedelegationsRequest
```js
let redelegationsQueryData = {
  "delegator_addr": "",
  "src_validator_addr": "",
  "dst_validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.redelegations(redelegationsQueryData)

```

###  cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest
```js
let delegatorValidatorsQueryData = {
  "delegator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.delegatorValidators(delegatorValidatorsQueryData)

```

###  cosmos.staking.v1beta1.QueryDelegatorValidatorRequest
```js
let delegatorValidatorQueryData = {
  "delegator_addr": "",
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.delegatorValidator(delegatorValidatorQueryData)

```

###  cosmos.staking.v1beta1.QueryHistoricalInfoRequest
```js
let historicalInfoQueryData = {
  "height": "0"
}
await queryClient.cosmos.staking.v1beta1.historicalInfo(historicalInfoQueryData)

```

###  cosmos.staking.v1beta1.QueryPoolRequest
```js
let poolQueryData = {}
await queryClient.cosmos.staking.v1beta1.pool(poolQueryData)

```

###  cosmos.staking.v1beta1.QueryParamsRequest
```js
let paramsQueryData = {}
await queryClient.cosmos.staking.v1beta1.params(paramsQueryData)

```

###  cosmos.upgrade.v1beta1.QueryCurrentPlanRequest
```js
let currentPlanQueryData = {}
await queryClient.cosmos.upgrade.v1beta1.currentPlan(currentPlanQueryData)

```

###  cosmos.upgrade.v1beta1.QueryAppliedPlanRequest
```js
let appliedPlanQueryData = {
  "name": ""
}
await queryClient.cosmos.upgrade.v1beta1.appliedPlan(appliedPlanQueryData)

```

###  cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest
```js
let upgradedConsensusStateQueryData = {
  "last_height": "0"
}
await queryClient.cosmos.upgrade.v1beta1.upgradedConsensusState(upgradedConsensusStateQueryData)

```

###  cosmos.upgrade.v1beta1.QueryModuleVersionsRequest
```js
let moduleVersionsQueryData = {
  "module_name": ""
}
await queryClient.cosmos.upgrade.v1beta1.moduleVersions(moduleVersionsQueryData)

```

###  cosmos.upgrade.v1beta1.QueryAuthorityRequest
```js
let authorityQueryData = {}
await queryClient.cosmos.upgrade.v1beta1.authority(authorityQueryData)

```


License
-------

This project is licensed under the MIT License.
