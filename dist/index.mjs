import * as blitjs from './codegen';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
export default blitjs;
const makeChainInfo = async ({ rpcEndpoint, restEndpoint }) => {
    const queryClient = await blitjs.blit.ClientFactory.createLCDClient({
        restEndpoint
    });
    const nodeInfo = await queryClient.cosmos.base.tendermint.v1beta1.getNodeInfo();
    const chainId = nodeInfo.default_node_info.network;
    let chainName = 'Blit';
    if (chainId.includes('test')) {
        chainName = `${chainName} Testnet (${chainId})`;
    }
    if (chainId.includes('dev')) {
        chainName = `${chainName} Devnet (${chainId})`;
    }
    return {
        features: [],
        chainId: chainId,
        chainName: chainName,
        rpc: rpcEndpoint,
        rest: restEndpoint,
        stakeCurrency: {
            coinDenom: 'blit',
            coinMinimalDenom: 'ublit',
            coinDecimals: 6
        },
        bip44: {
            coinType: 118
        },
        bech32Config: {
            bech32PrefixAccAddr: 'blit',
            bech32PrefixAccPub: 'blitpub',
            bech32PrefixValAddr: 'blitvaloper',
            bech32PrefixValPub: 'blitvaloperpub',
            bech32PrefixConsAddr: 'blitvalcons',
            bech32PrefixConsPub: 'blitvalconspub'
        },
        currencies: [
            {
                coinDenom: 'blit',
                coinMinimalDenom: 'ublit',
                coinDecimals: 6
            }
        ],
        feeCurrencies: [
            {
                coinDenom: 'blit',
                coinMinimalDenom: 'ublit',
                coinDecimals: 0,
                gasPriceStep: { low: 0.0, average: 0.000001, high: 1 }
            }
        ]
    };
};
const makeKeplrClient = async ({ rpcEndpoint, restEndpoint }) => {
    if (!window.keplr) {
        throw new Error('Please install keplr extension');
    }
    const chainInfo = await makeChainInfo({ rpcEndpoint, restEndpoint });
    await window.keplr.experimentalSuggestChain(chainInfo);
    await window.keplr.enable(chainInfo.chainId);
    const offlineSigner = window.getOfflineSigner(chainInfo.chainId);
    const client = await blitjs.getSigningBlitClient({
        rpcEndpoint,
        signer: offlineSigner
    });
    const ibcClient = await blitjs.getSigningIbcClient({
        rpcEndpoint,
        signer: offlineSigner
    });
    ibcClient.registry.types.forEach((value, key) => {
        // add the ibc types to the blit client if they don't exist
        if (!client.registry.types.has(key)) {
            client.registry.types.set(key, value);
        }
    });
    client.gasPrice = '0ublit';
    return client;
};
const runFunction = async ({ msgClient, attached_messages = [], caller_address, script_address, function_name, kwargs, extra_code, grantee, gasMultiple = 1.5 }) => {
    const message = blitjs.blit.script.MessageComposer.withTypeUrl.run({
        attached_messages: JSON.stringify(attached_messages),
        caller_address,
        script_address,
        function_name,
        kwargs: JSON.stringify(kwargs),
        extra_code,
        grantee
    });
    try {
        var resp = await msgClient.signAndBroadcast(grantee, [message], gasMultiple);
        if (resp.code === 0) {
            const msgResponse = resp.msgResponses[0];
            try {
                // Parse the response
                return {
                    tx: resp,
                    result: JSON.parse(blitjs.blit.script.MsgRunResponse.fromProtoMsg(msgResponse).response)
                };
            }
            catch (e) {
                if (e instanceof SyntaxError) {
                    throw new Error(resp.rawLog);
                }
                throw e; // re-throw the error if it's not a SyntaxError
            }
        }
        else {
            // So we split into lines and get the last line which is the error
            const lastLine = resp.rawLog.split('\n').slice(-1)[0];
            // strip ": Exception in Script" only from lastLine (technically this will remove it anywhere in the result, but that's fine)
            const result = lastLine.replace(': Exception in Script', '');
            try {
                return { tx: resp, result: JSON.parse(result) };
            }
            catch (e) {
                if (e instanceof SyntaxError) {
                    throw new Error(resp.rawLog);
                }
                throw e; // re-throw the error if it's not a SyntaxError
            }
        }
    }
    catch (e) {
        try {
            let result = e.message.split('\n').slice(-1)[0];
            //find last }
            const lastBracket = result.lastIndexOf('}');
            //remove everything after last }
            result = result.substring(0, lastBracket + 1);
            return { tx: null, result: JSON.parse(result) };
        }
        catch (e2) {
            throw e; // re-throw the error if it's not a SyntaxError
        }
    }
};
const makeJsClient = async ({ mnemonic, rpcEndpoint, restEndpoint }) => {
    if (!mnemonic) {
        mnemonic = (await DirectSecp256k1HdWallet.generate(24)).secret.data;
    }
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix: 'blit'
    });
    const client = await blitjs.getSigningBlitClient({
        rpcEndpoint,
        signer
    });
    client.gasPrice = '0ublit';
    const ibcClient = await blitjs.getSigningIbcClient({
        rpcEndpoint,
        signer
    });
    ibcClient.registry.types.forEach((value, key) => {
        // add the ibc types to the blit client if they don't exist
        if (!client.registry.types.has(key)) {
            client.registry.types.set(key, value);
        }
    });
    return client;
};
const queryFunction = async ({ attached_messages = [], queryClient, script_address, caller_address, function_name, kwargs, extra_code, grantee }) => {
    const response = await queryClient.blit.script.eval({
        attached_messages: JSON.stringify(attached_messages),
        script_address,
        caller_address,
        function_name,
        kwargs: JSON.stringify(kwargs),
        extra_code,
        grantee
    });
    try {
        return JSON.parse(response.response);
    }
    catch (SyntaxError) {
        return response;
    }
};
export const experimentalHelpers = {
    makeKeplrClient,
    makeJsClient,
    runFunction,
    queryFunction,
    makeChainInfo
};
//# sourceMappingURL=index.js.map