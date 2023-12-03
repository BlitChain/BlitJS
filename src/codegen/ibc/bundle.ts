//@ts-nocheck
import * as _93 from "./applications/interchain_accounts/controller/v1/controller";
import * as _94 from "./applications/interchain_accounts/controller/v1/query";
import * as _95 from "./applications/interchain_accounts/controller/v1/tx";
import * as _96 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _97 from "./applications/interchain_accounts/host/v1/host";
import * as _98 from "./applications/interchain_accounts/host/v1/query";
import * as _99 from "./applications/interchain_accounts/host/v1/tx";
import * as _100 from "./applications/interchain_accounts/v1/account";
import * as _101 from "./applications/interchain_accounts/v1/metadata";
import * as _102 from "./applications/interchain_accounts/v1/packet";
import * as _103 from "./applications/transfer/v1/authz";
import * as _104 from "./applications/transfer/v1/genesis";
import * as _105 from "./applications/transfer/v1/query";
import * as _106 from "./applications/transfer/v1/transfer";
import * as _107 from "./applications/transfer/v1/tx";
import * as _108 from "./applications/transfer/v2/packet";
import * as _109 from "./core/channel/v1/channel";
import * as _110 from "./core/channel/v1/genesis";
import * as _111 from "./core/channel/v1/query";
import * as _112 from "./core/channel/v1/tx";
import * as _113 from "./core/client/v1/client";
import * as _114 from "./core/client/v1/genesis";
import * as _115 from "./core/client/v1/query";
import * as _116 from "./core/client/v1/tx";
import * as _117 from "./core/commitment/v1/commitment";
import * as _118 from "./core/connection/v1/connection";
import * as _119 from "./core/connection/v1/genesis";
import * as _120 from "./core/connection/v1/query";
import * as _121 from "./core/connection/v1/tx";
import * as _122 from "./lightclients/localhost/v2/localhost";
import * as _123 from "./lightclients/solomachine/v2/solomachine";
import * as _124 from "./lightclients/solomachine/v3/solomachine";
import * as _125 from "./lightclients/tendermint/v1/tendermint";
import * as _215 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _216 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _217 from "./applications/transfer/v1/tx.amino";
import * as _218 from "./core/channel/v1/tx.amino";
import * as _219 from "./core/client/v1/tx.amino";
import * as _220 from "./core/connection/v1/tx.amino";
import * as _221 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _222 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _223 from "./applications/transfer/v1/tx.registry";
import * as _224 from "./core/channel/v1/tx.registry";
import * as _225 from "./core/client/v1/tx.registry";
import * as _226 from "./core/connection/v1/tx.registry";
import * as _227 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _228 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _229 from "./applications/transfer/v1/query.lcd";
import * as _230 from "./core/channel/v1/query.lcd";
import * as _231 from "./core/client/v1/query.lcd";
import * as _232 from "./core/connection/v1/query.lcd";
import * as _233 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _234 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _235 from "./applications/transfer/v1/query.rpc.Query";
import * as _236 from "./core/channel/v1/query.rpc.Query";
import * as _237 from "./core/client/v1/query.rpc.Query";
import * as _238 from "./core/connection/v1/query.rpc.Query";
import * as _239 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _240 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _241 from "./applications/transfer/v1/tx.rpc.msg";
import * as _242 from "./core/channel/v1/tx.rpc.msg";
import * as _243 from "./core/client/v1/tx.rpc.msg";
import * as _244 from "./core/connection/v1/tx.rpc.msg";
import * as _251 from "./lcd";
import * as _252 from "./rpc.query";
import * as _253 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._93,
          ..._94,
          ..._95,
          ..._215,
          ..._221,
          ..._227,
          ..._233,
          ..._239
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._96
        };
      }
      export namespace host {
        export const v1 = {
          ..._97,
          ..._98,
          ..._99,
          ..._216,
          ..._222,
          ..._228,
          ..._234,
          ..._240
        };
      }
      export const v1 = {
        ..._100,
        ..._101,
        ..._102
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._103,
        ..._104,
        ..._105,
        ..._106,
        ..._107,
        ..._217,
        ..._223,
        ..._229,
        ..._235,
        ..._241
      };
      export const v2 = {
        ..._108
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._109,
        ..._110,
        ..._111,
        ..._112,
        ..._218,
        ..._224,
        ..._230,
        ..._236,
        ..._242
      };
    }
    export namespace client {
      export const v1 = {
        ..._113,
        ..._114,
        ..._115,
        ..._116,
        ..._219,
        ..._225,
        ..._231,
        ..._237,
        ..._243
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._117
      };
    }
    export namespace connection {
      export const v1 = {
        ..._118,
        ..._119,
        ..._120,
        ..._121,
        ..._220,
        ..._226,
        ..._232,
        ..._238,
        ..._244
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._122
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._123
      };
      export const v3 = {
        ..._124
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._125
      };
    }
  }
  export const ClientFactory = {
    ..._251,
    ..._252,
    ..._253
  };
}