Blitjs 
=====================

Blitjs is a library designed to facilitate interactions with the Blit using JavaScript. This a guide on how to set up and use the Blitjs library in your project.

Installation
------------

### Script Tag:

Include Blitjs in your project by adding the following script tag in your HTML file:

```html
<script type="module">
import blitjs from "https://cdn.jsdelivr.net/npm/@blitchain/blitjs/+esm";

// example usage below
</script>
```

### NPM:

Install via npm:

```bash
npm install @blitchain/blitjs
```

### Creating the Clients:

1.  Setup Client with Keplr:

```js
let rpcEndpoint = "http://localhost:26657";
let restEndpoint = "http://localhost:1317";
let chainId = "blit-dev";

let msgClient = await makeKeplrClient({ rpcEndpoint, restEndpoint, chainId });
let queryClient = await makeQueryClient({ restEndpoint });
```

### Getting the Address:

```js
let address = (await msgClient.signer.getAccounts())[0].address;
```

### Querying the chain:

Here is how to query the balance of an address.
```js
let balanceResponse = await queryClient.cosmos.bank.v1beta1.allBalances({ address, pagination: { limit: "1", offset: 0, countTotal: true } });
console.log(balanceResponse);
```

Here is how to query the details of the Blit node the client is connected to.

```js
let nodeInfo = await queryClient.cosmos.base.tendermint.v1beta1.getNodeInfo()
console.log(nodeInfo);
```

Helper Functions Definitions
----------------------------

The following helper functions are an easy way to interact with the Blit Scripts using Blitjs.
Note: These are only a suggestion, feel free to update and modify them to the requirements of you project.

### `sendMsg` Function:

The `sendMsg` function signs and broadcasts a message to the blockchain. 
Note: It has hardcoded no gas fee, but you may want to do something more complex. 

```
const sendMsg = async ({ msgClient, address, message }) => {
  let fee = {
    amount: [{ amount: "0", denom: "blit" }],
    gas: "100000",
  };
  let response = await msgClient.signAndBroadcast(address, [message], fee);
  return response;
};
```

#### Example usage

This is how you can update a script's code using the `sendMsg` above.

Note: pay attention to indentation for the code.

```js
let code = `
def greet(name):
    print(f"Hello {name}!")
    return {"name": name}
`;

// Make the message with the blitjs ecoder
let message = blitjs.blit.script.MessageComposer.fromPartial.updateScript({ address, code: code })

// == or make the message direction ==
let message = {
  "typeUrl": "/blit.script.MsgUpdateScript",
  "value": {
    "address": address",
    "code": code,
    "grantee": ""
  }
}
*/

await sendMsg({
  client: msgClient,
  address,
  message
});
```


### Querying a Script object to Verify the Update Script Works:

This will allow us to verify that the previous command worked and that the code is as expected.

```js
let scriptResponse = await queryClient.blit.script.script({ address });
console.log(scriptResponse);
```

### Helper functions for interacting with a script

The `runScriptFunction` function defined here executes a script function on the blockchain, using `sendMsg` defined above and returns the result or an error, if any.

```js
const runScriptFunction = async ({ msgClient, caller_address, script_address, function_name, kwargs }) => {
  let msg = blitjs.blit.script.MessageComposer.withTypeUrl.run({
    caller_address,
    script_address,
    function_name,
    kwargs: JSON.stringify(kwargs),
  });
  let resp = await sendMsg(msgClient, caller_address, msg);
  if (resp.code !== 0) {
    // So we split into lines and get the last line which is the error
    let lastLine = resp.rawLog.split("\n").slice(-1)[0];
    // strip ": Exception in Script" only from lastLine (technically this will remove it anywhere in the result, but that's fine)
    let result = lastLine.replace(": Exception in Script", "");
    return JSON.parse(result);
  }
  let msgResponse = resp.msgResponses[0];
  // Parse the response
  return JSON.parse(
    blitjs.blit.script.MsgRunResponse.fromProtoMsg(msgResponse).response
  );
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

console.log(runResp);  // Outputs the result of the function execution
```

The `queryScriptFunction` function defined below executes a script function as a query and returns the result or an error, if any.
It is a read-only operation that does not create a transaction or persist state. This is useful when you want to see the output of a function 
without a transaction, especially when debugging.

```
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

#### Example
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
```

### Querying Storage:

This will list all Storage for a specific address

```js
let storageResponse = await queryClient.blit.storage.storageAll({ filter_address: address });
console.log(storageResponse);
```

### Create then Update Storage:

```js
let message1 = blitjs.blit.storage.MessageComposer.fromPartial.createStorage({
    address,
    index: "foo123",
    data: "some data"
})
await sendMsg({
  client: msgClient,
  address,
  message: message1
});

let message2 = blitjs.blit.storage.MessageComposer.fromPartial.updateStorage({
    address,
    index: "foo123",
    data: "some NEW data",
  })
await sendMsg({
  client: msgClient,
  address,
  message: message2
});
```

These steps illustrate how you can interact with the Blit Development Chain using the Blitjs library, covering a range of operations from setting up clients to querying and updating the blockchain.

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
