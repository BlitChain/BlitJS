BlitJS
=====================

BlitJS is a library designed to facilitate interactions with Blit using JavaScript. This a guide on how to set up and use the BlitJS library in your project.

Installation
------------

#### Script Tag:

Include BlitJS in your project by adding the following script tag in your HTML file:

```html
<script type="module">
import blitjs from "https://cdn.jsdelivr.net/npm/@blitchain/blitjs/+esm";

// example usage below
</script>
```

#### NPM:

Install via npm:

```bash
npm install @blitchain/blitjs
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


### Querying a Script object to Verify the Update Script Works:

This will allow us to verify that the previous command worked and that the code is as expected.

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

### Helper functions for interacting with function in a script

The `runScriptFunction` function defined here executes a script function on the blockchain, using `sendMsg` defined above and returns the result or an error, if any.

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

#### Example 

Now it is trivial to call `greet(name="Bob")` in a transaction.

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
const queryScriptFunction = async ({ queryClient, script_address, called_address, function_name, kwargs }) => {
  try {
    const response = await queryClient.blit.script.eval({
      script_address,
      called_address,
      function_name,
      kwargs: JSON.stringify(kwargs)
    });
    return JSON.parse(response.response);
  } catch (error) {
    console.error('Error evaluating script:', error);
    throw error;
  }
};
```

#### Example of `queryScriptFunction`
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

### Querying Storage:

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

### Create then Update Storage:

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
A: Try replacing `"auto"`, which defaults to a gasMultiple of 1.3, to 1.5.

# Available Msg Types


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


License
-------

This project is licensed under the MIT License.
