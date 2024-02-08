const { join } = require('path');
const telescope = require('@cosmology/telescope').default;
const rimraf = require('rimraf').rimrafSync;
const { AMINO_MAP } = require('./aminos');

const protoDirs = [join(__dirname, '../proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    includeExternalHelpers: true,
    reactQuery: {
      enabled: false
    },
    mbox: {
      enabled: false
    },
    pinia: {
      enabled: false
    },
    tsDisable: {
      disableAll: true
    },
    prototypes: {
      includePackageVar: true,
      removeUnusedImports: true,
      experimentalGlobalProtoNamespace: true,
      interfaces: {
        enabled: true,
        useUnionTypes: true
      },
      excluded: {
        packages: [
          'ibc.applications.fee.v1', // issue with parsing protos (LCD routes with nested objects in params)

          'cosmos.app.v1alpha1',
          'cosmos.app.v1beta1',
          'cosmos.base.kv.v1beta1',
          'cosmos.base.reflection.v1beta1',
          'cosmos.base.snapshots.v1beta1',
          'cosmos.base.store.v1beta1',
          'cosmos.crisis.v1beta1',
          'cosmos.evidence.v1beta1',
          'cosmos.genutil.v1beta1',

          'cosmos.autocli.v1',

          'cosmos.msg.v1',
          'cosmos.capability.v1beta1',
          'cosmos.orm.v1alpha1',
          'cosmos.orm.v1',
          'cosmos.slashing.v1beta1',
          'google.api',
          'ibc.core.port.v1',
          'ibc.core.types.v1'
        ]
      },
      methods: {
        fromJSON: true,
        toJSON: true,
        fromPartial: true,
        fromProto: true,
        toProto: true
      },
      parser: {
        keepCase: true
      }
    },
    typingsFormat: {
      duration: 'string',
      timestamp: 'date',
      useExact: false,
      useDeepPartial: true,
      num64: 'bigint',
      customTypes: {
        useCosmosSDKDec: true
      }
    },
    aminoEncoding: {
      enabled: true,
      exceptions: AMINO_MAP
    },
    lcdClients: {
      enabled: true
    },
    rpcClients: {
      type: 'grpc-gateway',
      enabled: false,
      camelCase: false
    },
    interfaces: {
      useGlobalDecoderRegistry: true
    }
  }
})
  .then(() => {
    console.log('�? all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
