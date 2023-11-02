import * as blitjs from './codegen';

export default blitjs;

// Query client setup
export const makeQueryClient = async ({ restEndpoint }) => {
  return await blitjs.blit.ClientFactory.createLCDClient({
    restEndpoint
  });
};

// Client setup for Keplr
export const makeKeplrClient = ({ rpcEndpoint, restEndpoint, chainId }) => {
  return new Promise((resolve, reject) => {
    if (!window.keplr) {
      reject(new Error('Please install keplr extension'));
    } else {
      try {
        window.keplr
          .experimentalSuggestChain({
            features: [],
            chainId: chainId,
            chainName: 'Blit Testnet',
            rpc: rpcEndpoint,
            rest: restEndpoint,
            stakeCurrency: {
              coinDenom: 'blit',
              coinMinimalDenom: 'blit',
              coinDecimals: 0
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
                coinMinimalDenom: 'blit',
                coinDecimals: 0
              }
            ],
            feeCurrencies: [
              {
                coinDenom: 'blit',
                coinMinimalDenom: 'blit',
                coinDecimals: 0,
                gasPriceStep: { low: 0.0, average: 0.000001, high: 1 }
              }
            ]
          })
          .then(() => {
            window.keplr.enable(chainId);
            window.getOfflineSigner(chainId).then((offlineSigner) => {
              blitjs
                .getSigningBlitClient({
                  rpcEndpoint,
                  signer: offlineSigner
                })
                .then((client) => {
                  client.gasPrice = '0.000001blit';
                  resolve(client);
                });
            });
          });
      } catch (error) {
        reject(error);
      }
    }
  });
};

export const runFunction = async ({
  msgClient,
  caller_address,
  script_address,
  function_name,
  kwargs,
  extra_code,
  grantee
}) => {
  const message = blitjs.blit.script.MessageComposer.withTypeUrl.run({
    caller_address,
    script_address,
    function_name,
    kwargs: JSON.stringify(kwargs),
    extra_code,
    grantee
  });
  const gasMultiple = 1.5;
  const resp = await msgClient.signAndBroadcast(
    caller_address,
    [message],
    gasMultiple
  );
  if (resp.code !== 0) {
    // So we split into lines and get the last line which is the error
    const lastLine = resp.rawLog.split('\n').slice(-1)[0];
    // strip ": Exception in Script" only from lastLine (technically this will remove it anywhere in the result, but that's fine)
    const result = lastLine.replace(': Exception in Script', '');
    try {
      return JSON.parse(result);
    } catch (e) {
      if (e instanceof SyntaxError) {
        throw new Error(resp.rawLog);
      }
      throw e; // re-throw the error if it's not a SyntaxError
    }
  }
  const msgResponse = resp.msgResponses[0];
  try {
    // Parse the response
    return JSON.parse(
      blitjs.blit.script.MsgRunResponse.fromProtoMsg(msgResponse).response
    );
  } catch (e) {
    if (e instanceof SyntaxError) {
      throw new Error(resp.rawLog);
    }
    throw e; // re-throw the error if it's not a SyntaxError
  }
};

export const queryFunction = async ({
  queryClient,
  script_address,
  caller_address,
  function_name,
  kwargs,
  extra_code,
  grantee
}) => {
  const response = await queryClient.blit.script.eval({
    script_address,
    caller_address,
    function_name,
    kwargs: JSON.stringify(kwargs),
    extra_code,
    grantee
  });
  try {
    return JSON.parse(response.response);
  } catch (SyntaxError) {
    return response;
  }
};
