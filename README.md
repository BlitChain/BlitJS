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
let msg = {
  "typeUrl": "/blit.blit.MsgUpdateParams",
  "value": {
    "authority": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.blit.blit.MsgResponseUpdateParams.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /blit.script.MsgCreateScript

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
let decodedResponse = blitjs.blit.script.MsgResponseCreateScript.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /blit.script.MsgRun

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
let decodedResponse = blitjs.blit.script.MsgResponseRun.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /blit.script.MsgUpdateParams

```js
let msg = {
  "typeUrl": "/blit.script.MsgUpdateParams",
  "value": {
    "authority": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.blit.script.MsgResponseUpdateParams.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /blit.script.MsgUpdateScript

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
let decodedResponse = blitjs.blit.script.MsgResponseUpdateScript.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /blit.storage.MsgCreateStorage

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
let decodedResponse = blitjs.blit.storage.MsgResponseCreateStorage.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /blit.storage.MsgDeleteStorage

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
let decodedResponse = blitjs.blit.storage.MsgResponseDeleteStorage.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /blit.storage.MsgUpdateParams

```js
let msg = {
  "typeUrl": "/blit.storage.MsgUpdateParams",
  "value": {
    "authority": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.blit.storage.MsgResponseUpdateParams.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /blit.storage.MsgUpdateStorage

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
let decodedResponse = blitjs.blit.storage.MsgResponseUpdateStorage.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.authz.v1beta1.MsgExec

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
let decodedResponse = blitjs.cosmos.authz.v1beta1.MsgResponseExec.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.authz.v1beta1.MsgGrant

```js
let msg = {
  "typeUrl": "/cosmos.authz.v1beta1.MsgGrant",
  "value": {
    "granter": "",
    "grantee": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.authz.v1beta1.MsgResponseGrant.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.authz.v1beta1.MsgRevoke

```js
let msg = {
  "typeUrl": "/cosmos.authz.v1beta1.MsgRevoke",
  "value": {
    "granter": "",
    "grantee": "",
    "msgTypeUrl": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.authz.v1beta1.MsgResponseRevoke.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.bank.v1beta1.MsgMultiSend

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
let decodedResponse = blitjs.cosmos.bank.v1beta1.MsgResponseMultiSend.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.bank.v1beta1.MsgSend

```js
let msg = {
  "typeUrl": "/cosmos.bank.v1beta1.MsgSend",
  "value": {
    "fromAddress": "",
    "toAddress": "",
    "amount": []
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.bank.v1beta1.MsgResponseSend.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.distribution.v1beta1.MsgFundCommunityPool

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
let decodedResponse = blitjs.cosmos.distribution.v1beta1.MsgResponseFundCommunityPool.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.distribution.v1beta1.MsgSetWithdrawAddress

```js
let msg = {
  "typeUrl": "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
  "value": {
    "delegatorAddress": "",
    "withdrawAddress": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.distribution.v1beta1.MsgResponseSetWithdrawAddress.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward

```js
let msg = {
  "typeUrl": "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
  "value": {
    "delegatorAddress": "",
    "validatorAddress": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.distribution.v1beta1.MsgResponseWithdrawDelegatorReward.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission

```js
let msg = {
  "typeUrl": "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
  "value": {
    "validatorAddress": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.distribution.v1beta1.MsgResponseWithdrawValidatorCommission.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.feegrant.v1beta1.MsgGrantAllowance

```js
let msg = {
  "typeUrl": "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
  "value": {
    "granter": "",
    "grantee": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.feegrant.v1beta1.MsgResponseGrantAllowance.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.feegrant.v1beta1.MsgRevokeAllowance

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
let decodedResponse = blitjs.cosmos.feegrant.v1beta1.MsgResponseRevokeAllowance.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.gov.v1.MsgDeposit

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1.MsgResponseDeposit.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.gov.v1.MsgSubmitProposal

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1.MsgResponseSubmitProposal.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.gov.v1.MsgUpdateParams

```js
let msg = {
  "typeUrl": "/cosmos.gov.v1.MsgUpdateParams",
  "value": {
    "authority": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1.MsgResponseUpdateParams.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.gov.v1.MsgVote

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1.MsgResponseVote.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.gov.v1.MsgVoteWeighted

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1.MsgResponseVoteWeighted.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.gov.v1beta1.MsgDeposit

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1beta1.MsgResponseDeposit.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.gov.v1beta1.MsgSubmitProposal

```js
let msg = {
  "typeUrl": "/cosmos.gov.v1beta1.MsgSubmitProposal",
  "value": {
    "initialDeposit": [],
    "proposer": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1beta1.MsgResponseSubmitProposal.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.gov.v1beta1.MsgVote

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1beta1.MsgResponseVote.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.gov.v1beta1.MsgVoteWeighted

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.gov.v1beta1.MsgResponseVoteWeighted.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.group.v1.MsgCreateGroup

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
let decodedResponse = blitjs.cosmos.group.v1.MsgResponseCreateGroup.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.group.v1.MsgCreateGroupPolicy

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgResponseCreateGroupPolicy.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.group.v1.MsgCreateGroupWithPolicy

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgCreateGroupWithPolicy",
  "value": {
    "admin": "",
    "members": [],
    "groupMetadata": "",
    "groupPolicyMetadata": "",
    "groupPolicyAsAdmin": false
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgResponseCreateGroupWithPolicy.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.group.v1.MsgExec

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgResponseExec.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.group.v1.MsgLeaveGroup

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgResponseLeaveGroup.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.group.v1.MsgSubmitProposal

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgResponseSubmitProposal.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.group.v1.MsgUpdateGroupAdmin

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgResponseUpdateGroupAdmin.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.group.v1.MsgUpdateGroupMembers

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgResponseUpdateGroupMembers.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.group.v1.MsgUpdateGroupMetadata

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgResponseUpdateGroupMetadata.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.group.v1.MsgUpdateGroupPolicyAdmin

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
  "value": {
    "admin": "",
    "groupPolicyAddress": "",
    "newAdmin": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgResponseUpdateGroupPolicyAdmin.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
  "value": {
    "admin": "",
    "groupPolicyAddress": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgResponseUpdateGroupPolicyDecisionPolicy.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.group.v1.MsgUpdateGroupPolicyMetadata

```js
let msg = {
  "typeUrl": "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
  "value": {
    "admin": "",
    "groupPolicyAddress": "",
    "metadata": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgResponseUpdateGroupPolicyMetadata.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.group.v1.MsgVote

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgResponseVote.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.group.v1.MsgWithdrawProposal

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.group.v1.MsgResponseWithdrawProposal.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.staking.v1beta1.MsgBeginRedelegate

```js
let msg = {
  "typeUrl": "/cosmos.staking.v1beta1.MsgBeginRedelegate",
  "value": {
    "delegatorAddress": "",
    "validatorSrcAddress": "",
    "validatorDstAddress": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.staking.v1beta1.MsgResponseBeginRedelegate.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.staking.v1beta1.MsgCreateValidator

```js
let msg = {
  "typeUrl": "/cosmos.staking.v1beta1.MsgCreateValidator",
  "value": {
    "minSelfDelegation": "",
    "delegatorAddress": "",
    "validatorAddress": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.staking.v1beta1.MsgResponseCreateValidator.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.staking.v1beta1.MsgDelegate

```js
let msg = {
  "typeUrl": "/cosmos.staking.v1beta1.MsgDelegate",
  "value": {
    "delegatorAddress": "",
    "validatorAddress": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.staking.v1beta1.MsgResponseDelegate.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.staking.v1beta1.MsgEditValidator

```js
let msg = {
  "typeUrl": "/cosmos.staking.v1beta1.MsgEditValidator",
  "value": {
    "validatorAddress": "",
    "commissionRate": "",
    "minSelfDelegation": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.staking.v1beta1.MsgResponseEditValidator.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.staking.v1beta1.MsgUndelegate

```js
let msg = {
  "typeUrl": "/cosmos.staking.v1beta1.MsgUndelegate",
  "value": {
    "delegatorAddress": "",
    "validatorAddress": ""
  }
}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.staking.v1beta1.MsgResponseUndelegate.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /cosmos.vesting.v1beta1.MsgCreateVestingAccount

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.cosmos.vesting.v1beta1.MsgResponseCreateVestingAccount.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```

### /ibc.applications.transfer.v1.MsgTransfer

```js
let msg = {
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
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs.ibc.applications.transfer.v1.MsgResponseTransfer.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
```


<details>
<summary>
  Source for generating the Msg examples
</summary>


```js
let items = [...msgClient.registry.types.entries()].sort();
let out = '';
items.map(([k, v]) => {
    if (k.includes('Msg') && !k.includes('ibc.core')) {
        out += `
### ${k}

\`\`\`js
let msg = ${JSON.stringify({typeUrl:k, value: v.fromPartial({})}, null, 2)}
let tx = (await msgClient.signAndBroadcast(address, [msg], "auto"));
if (tx.code !== 0) throw new Error("Oh no! " + tx.rawLog)
let decodedResponse = blitjs${k.replace('/', '.').replace('Msg', 'MsgResponse')}.fromProtoMsg(tx.msgResponses[0]);
console.log(decodedResponse);
\`\`\`
`;
    }
});
console.log(out);
```
</details>

### Query Reference


###  blit.blit.QueryParamsRequest
```js
let params = {}
await queryClient.blit.blit.params(params)

```

###  blit.script.QueryParamsRequest
```js
let params = {}
await queryClient.blit.script.params(params)

```

###  blit.script.QueryScriptRequest
```js
let params = {
  "address": ""
}
await queryClient.blit.script.script(params)

```

###  blit.script.QueryScriptsRequest
```js
let params = {}
await queryClient.blit.script.scripts(params)

```

###  blit.script.QueryWebRequest
```js
let params = {
  "address": "",
  "httprequest": ""
}
await queryClient.blit.script.web(params)

```

###  blit.script.QueryEvalRequest
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

###  blit.storage.QueryParamsRequest
```js
let params = {}
await queryClient.blit.storage.params(params)

```

###  blit.storage.QueryStorageDetailRequest
```js
let params = {
  "address": "",
  "index": ""
}
await queryClient.blit.storage.storageDetail(params)

```

###  blit.storage.QueryFilterStorageRequest
```js
let params = {
  "filter_address": "",
  "filter_index_prefix": ""
}
await queryClient.blit.storage.filterStorage(params)

```

###  cosmos.auth.v1beta1.QueryAccountsRequest
```js
let params = {}
await queryClient.cosmos.auth.v1beta1.accounts(params)

```

###  cosmos.auth.v1beta1.QueryAccountRequest
```js
let params = {
  "address": ""
}
await queryClient.cosmos.auth.v1beta1.account(params)

```

###  cosmos.auth.v1beta1.QueryModuleAccountsRequest
```js
let params = {}
await queryClient.cosmos.auth.v1beta1.moduleAccounts(params)

```

###  cosmos.auth.v1beta1.QueryParamsRequest
```js
let params = {}
await queryClient.cosmos.auth.v1beta1.params(params)

```

###  cosmos.authz.v1beta1.QueryGrantsRequest
```js
let params = {
  "granter": "",
  "grantee": "",
  "msg_type_url": ""
}
await queryClient.cosmos.authz.v1beta1.grants(params)

```

###  cosmos.authz.v1beta1.QueryGranterGrantsRequest
```js
let params = {
  "granter": ""
}
await queryClient.cosmos.authz.v1beta1.granterGrants(params)

```

###  cosmos.authz.v1beta1.QueryGranteeGrantsRequest
```js
let params = {
  "grantee": ""
}
await queryClient.cosmos.authz.v1beta1.granteeGrants(params)

```

###  cosmos.bank.v1beta1.QueryBalanceRequest
```js
let params = {
  "address": "",
  "denom": ""
}
await queryClient.cosmos.bank.v1beta1.balance(params)

```

###  cosmos.bank.v1beta1.QueryAllBalancesRequest
```js
let params = {
  "address": ""
}
await queryClient.cosmos.bank.v1beta1.allBalances(params)

```

###  cosmos.bank.v1beta1.QuerySpendableBalancesRequest
```js
let params = {
  "address": ""
}
await queryClient.cosmos.bank.v1beta1.spendableBalances(params)

```

###  cosmos.bank.v1beta1.QueryTotalSupplyRequest
```js
let params = {}
await queryClient.cosmos.bank.v1beta1.totalSupply(params)

```

###  cosmos.bank.v1beta1.QuerySupplyOfRequest
```js
let params = {
  "denom": ""
}
await queryClient.cosmos.bank.v1beta1.supplyOf(params)

```

###  cosmos.bank.v1beta1.QueryParamsRequest
```js
let params = {}
await queryClient.cosmos.bank.v1beta1.params(params)

```

###  cosmos.bank.v1beta1.QueryDenomsMetadataRequest
```js
let params = {}
await queryClient.cosmos.bank.v1beta1.denomsMetadata(params)

```

###  cosmos.bank.v1beta1.QueryDenomMetadataRequest
```js
let params = {
  "denom": ""
}
await queryClient.cosmos.bank.v1beta1.denomMetadata(params)

```

###  cosmos.bank.v1beta1.QueryDenomOwnersRequest
```js
let params = {
  "denom": ""
}
await queryClient.cosmos.bank.v1beta1.denomOwners(params)

```

###  cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest
```js
let params = {}
await queryClient.cosmos.base.reflection.v2alpha1.getServicesDescriptor(params)

```

###  cosmos.distribution.v1beta1.QueryParamsRequest
```js
let params = {}
await queryClient.cosmos.distribution.v1beta1.params(params)

```

###  cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest
```js
let params = {
  "validator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.validatorOutstandingRewards(params)

```

###  cosmos.distribution.v1beta1.QueryValidatorCommissionRequest
```js
let params = {
  "validator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.validatorCommission(params)

```

###  cosmos.distribution.v1beta1.QueryValidatorSlashesRequest
```js
let params = {
  "validator_address": "",
  "starting_height": "0",
  "ending_height": "0"
}
await queryClient.cosmos.distribution.v1beta1.validatorSlashes(params)

```

###  cosmos.distribution.v1beta1.QueryDelegationRewardsRequest
```js
let params = {
  "delegator_address": "",
  "validator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.delegationRewards(params)

```

###  cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest
```js
let params = {
  "delegator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.delegationTotalRewards(params)

```

###  cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest
```js
let params = {
  "delegator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.delegatorValidators(params)

```

###  cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest
```js
let params = {
  "delegator_address": ""
}
await queryClient.cosmos.distribution.v1beta1.delegatorWithdrawAddress(params)

```

###  cosmos.distribution.v1beta1.QueryCommunityPoolRequest
```js
let params = {}
await queryClient.cosmos.distribution.v1beta1.communityPool(params)

```

###  cosmos.feegrant.v1beta1.QueryAllowanceRequest
```js
let params = {
  "granter": "",
  "grantee": ""
}
await queryClient.cosmos.feegrant.v1beta1.allowance(params)

```

###  cosmos.feegrant.v1beta1.QueryAllowancesRequest
```js
let params = {
  "grantee": ""
}
await queryClient.cosmos.feegrant.v1beta1.allowances(params)

```

###  cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest
```js
let params = {
  "granter": ""
}
await queryClient.cosmos.feegrant.v1beta1.allowancesByGranter(params)

```

###  cosmos.gov.v1.QueryProposalRequest
```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1.proposal(params)

```

###  cosmos.gov.v1.QueryProposalsRequest
```js
let params = {
  "proposal_status": 0,
  "voter": "",
  "depositor": ""
}
await queryClient.cosmos.gov.v1.proposals(params)

```

###  cosmos.gov.v1.QueryVoteRequest
```js
let params = {
  "proposal_id": "0",
  "voter": ""
}
await queryClient.cosmos.gov.v1.vote(params)

```

###  cosmos.gov.v1.QueryVotesRequest
```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1.votes(params)

```

###  cosmos.gov.v1.QueryParamsRequest
```js
let params = {
  "params_type": ""
}
await queryClient.cosmos.gov.v1.params(params)

```

###  cosmos.gov.v1.QueryDepositRequest
```js
let params = {
  "proposal_id": "0",
  "depositor": ""
}
await queryClient.cosmos.gov.v1.deposit(params)

```

###  cosmos.gov.v1.QueryDepositsRequest
```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1.deposits(params)

```

###  cosmos.gov.v1.QueryTallyResultRequest
```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1.tallyResult(params)

```

###  cosmos.gov.v1beta1.QueryProposalRequest
```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1beta1.proposal(params)

```

###  cosmos.gov.v1beta1.QueryProposalsRequest
```js
let params = {
  "proposal_status": 0,
  "voter": "",
  "depositor": ""
}
await queryClient.cosmos.gov.v1beta1.proposals(params)

```

###  cosmos.gov.v1beta1.QueryVoteRequest
```js
let params = {
  "proposal_id": "0",
  "voter": ""
}
await queryClient.cosmos.gov.v1beta1.vote(params)

```

###  cosmos.gov.v1beta1.QueryVotesRequest
```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1beta1.votes(params)

```

###  cosmos.gov.v1beta1.QueryParamsRequest
```js
let params = {
  "params_type": ""
}
await queryClient.cosmos.gov.v1beta1.params(params)

```

###  cosmos.gov.v1beta1.QueryDepositRequest
```js
let params = {
  "proposal_id": "0",
  "depositor": ""
}
await queryClient.cosmos.gov.v1beta1.deposit(params)

```

###  cosmos.gov.v1beta1.QueryDepositsRequest
```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1beta1.deposits(params)

```

###  cosmos.gov.v1beta1.QueryTallyResultRequest
```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.gov.v1beta1.tallyResult(params)

```

###  cosmos.group.v1.QueryGroupInfoRequest
```js
let params = {
  "group_id": "0"
}
await queryClient.cosmos.group.v1.groupInfo(params)

```

###  cosmos.group.v1.QueryGroupPolicyInfoRequest
```js
let params = {
  "address": ""
}
await queryClient.cosmos.group.v1.groupPolicyInfo(params)

```

###  cosmos.group.v1.QueryGroupMembersRequest
```js
let params = {
  "group_id": "0"
}
await queryClient.cosmos.group.v1.groupMembers(params)

```

###  cosmos.group.v1.QueryGroupsByAdminRequest
```js
let params = {
  "admin": ""
}
await queryClient.cosmos.group.v1.groupsByAdmin(params)

```

###  cosmos.group.v1.QueryGroupPoliciesByGroupRequest
```js
let params = {
  "group_id": "0"
}
await queryClient.cosmos.group.v1.groupPoliciesByGroup(params)

```

###  cosmos.group.v1.QueryGroupPoliciesByAdminRequest
```js
let params = {
  "admin": ""
}
await queryClient.cosmos.group.v1.groupPoliciesByAdmin(params)

```

###  cosmos.group.v1.QueryProposalRequest
```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.group.v1.proposal(params)

```

###  cosmos.group.v1.QueryProposalsByGroupPolicyRequest
```js
let params = {
  "address": ""
}
await queryClient.cosmos.group.v1.proposalsByGroupPolicy(params)

```

###  cosmos.group.v1.QueryVoteByProposalVoterRequest
```js
let params = {
  "proposal_id": "0",
  "voter": ""
}
await queryClient.cosmos.group.v1.voteByProposalVoter(params)

```

###  cosmos.group.v1.QueryVotesByProposalRequest
```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.group.v1.votesByProposal(params)

```

###  cosmos.group.v1.QueryVotesByVoterRequest
```js
let params = {
  "voter": ""
}
await queryClient.cosmos.group.v1.votesByVoter(params)

```

###  cosmos.group.v1.QueryGroupsByMemberRequest
```js
let params = {
  "address": ""
}
await queryClient.cosmos.group.v1.groupsByMember(params)

```

###  cosmos.group.v1.QueryTallyResultRequest
```js
let params = {
  "proposal_id": "0"
}
await queryClient.cosmos.group.v1.tallyResult(params)

```

###  cosmos.mint.v1beta1.QueryParamsRequest
```js
let params = {}
await queryClient.cosmos.mint.v1beta1.params(params)

```

###  cosmos.mint.v1beta1.QueryInflationRequest
```js
let params = {}
await queryClient.cosmos.mint.v1beta1.inflation(params)

```

###  cosmos.mint.v1beta1.QueryAnnualProvisionsRequest
```js
let params = {}
await queryClient.cosmos.mint.v1beta1.annualProvisions(params)

```

###  cosmos.nft.v1beta1.QueryBalanceRequest
```js
let params = {
  "class_id": "",
  "owner": ""
}
await queryClient.cosmos.nft.v1beta1.balance(params)

```

###  cosmos.nft.v1beta1.QueryOwnerRequest
```js
let params = {
  "class_id": "",
  "id": ""
}
await queryClient.cosmos.nft.v1beta1.owner(params)

```

###  cosmos.nft.v1beta1.QuerySupplyRequest
```js
let params = {
  "class_id": ""
}
await queryClient.cosmos.nft.v1beta1.supply(params)

```

###  cosmos.nft.v1beta1.QueryNFTsRequest
```js
let params = {
  "class_id": "",
  "owner": ""
}
await queryClient.cosmos.nft.v1beta1.nFTs(params)

```

###  cosmos.nft.v1beta1.QueryNFTRequest
```js
let params = {
  "class_id": "",
  "id": ""
}
await queryClient.cosmos.nft.v1beta1.nFT(params)

```

###  cosmos.nft.v1beta1.QueryClassRequest
```js
let params = {
  "class_id": ""
}
await queryClient.cosmos.nft.v1beta1.class(params)

```

###  cosmos.nft.v1beta1.QueryClassesRequest
```js
let params = {}
await queryClient.cosmos.nft.v1beta1.classes(params)

```

###  cosmos.params.v1beta1.QueryParamsRequest
```js
let params = {
  "subspace": "",
  "key": ""
}
await queryClient.cosmos.params.v1beta1.params(params)

```

###  cosmos.params.v1beta1.QuerySubspacesRequest
```js
let params = {}
await queryClient.cosmos.params.v1beta1.subspaces(params)

```

###  cosmos.staking.v1beta1.QueryValidatorsRequest
```js
let params = {
  "status": ""
}
await queryClient.cosmos.staking.v1beta1.validators(params)

```

###  cosmos.staking.v1beta1.QueryValidatorRequest
```js
let params = {
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.validator(params)

```

###  cosmos.staking.v1beta1.QueryValidatorDelegationsRequest
```js
let params = {
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.validatorDelegations(params)

```

###  cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest
```js
let params = {
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.validatorUnbondingDelegations(params)

```

###  cosmos.staking.v1beta1.QueryDelegationRequest
```js
let params = {
  "delegator_addr": "",
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.delegation(params)

```

###  cosmos.staking.v1beta1.QueryUnbondingDelegationRequest
```js
let params = {
  "delegator_addr": "",
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.unbondingDelegation(params)

```

###  cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest
```js
let params = {
  "delegator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.delegatorDelegations(params)

```

###  cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest
```js
let params = {
  "delegator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.delegatorUnbondingDelegations(params)

```

###  cosmos.staking.v1beta1.QueryRedelegationsRequest
```js
let params = {
  "delegator_addr": "",
  "src_validator_addr": "",
  "dst_validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.redelegations(params)

```

###  cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest
```js
let params = {
  "delegator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.delegatorValidators(params)

```

###  cosmos.staking.v1beta1.QueryDelegatorValidatorRequest
```js
let params = {
  "delegator_addr": "",
  "validator_addr": ""
}
await queryClient.cosmos.staking.v1beta1.delegatorValidator(params)

```

###  cosmos.staking.v1beta1.QueryHistoricalInfoRequest
```js
let params = {
  "height": "0"
}
await queryClient.cosmos.staking.v1beta1.historicalInfo(params)

```

###  cosmos.staking.v1beta1.QueryPoolRequest
```js
let params = {}
await queryClient.cosmos.staking.v1beta1.pool(params)

```

###  cosmos.staking.v1beta1.QueryParamsRequest
```js
let params = {}
await queryClient.cosmos.staking.v1beta1.params(params)

```

###  cosmos.upgrade.v1beta1.QueryCurrentPlanRequest
```js
let params = {}
await queryClient.cosmos.upgrade.v1beta1.currentPlan(params)

```

###  cosmos.upgrade.v1beta1.QueryAppliedPlanRequest
```js
let params = {
  "name": ""
}
await queryClient.cosmos.upgrade.v1beta1.appliedPlan(params)

```

###  cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest
```js
let params = {
  "last_height": "0"
}
await queryClient.cosmos.upgrade.v1beta1.upgradedConsensusState(params)

```

###  cosmos.upgrade.v1beta1.QueryModuleVersionsRequest
```js
let params = {
  "module_name": ""
}
await queryClient.cosmos.upgrade.v1beta1.moduleVersions(params)

```

###  cosmos.upgrade.v1beta1.QueryAuthorityRequest
```js
let params = {}
await queryClient.cosmos.upgrade.v1beta1.authority(params)

```

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
        let methodCallStatement = `await queryClient.${namespace}.${methodName}(params)\n`;


        outputString += `
###  ${requestString}
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
