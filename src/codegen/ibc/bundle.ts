//@ts-nocheck
import * as _137 from "./applications/interchain_accounts/controller/v1/controller";
import * as _138 from "./applications/interchain_accounts/controller/v1/query";
import * as _139 from "./applications/interchain_accounts/controller/v1/tx";
import * as _140 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _141 from "./applications/interchain_accounts/host/v1/host";
import * as _142 from "./applications/interchain_accounts/host/v1/query";
import * as _143 from "./applications/interchain_accounts/host/v1/tx";
import * as _144 from "./applications/interchain_accounts/v1/account";
import * as _145 from "./applications/interchain_accounts/v1/metadata";
import * as _146 from "./applications/interchain_accounts/v1/packet";
import * as _147 from "./applications/transfer/v1/authz";
import * as _148 from "./applications/transfer/v1/genesis";
import * as _149 from "./applications/transfer/v1/query";
import * as _150 from "./applications/transfer/v1/transfer";
import * as _151 from "./applications/transfer/v1/tx";
import * as _152 from "./applications/transfer/v2/packet";
import * as _153 from "./core/channel/v1/channel";
import * as _154 from "./core/channel/v1/genesis";
import * as _155 from "./core/channel/v1/query";
import * as _156 from "./core/channel/v1/tx";
import * as _157 from "./core/client/v1/client";
import * as _158 from "./core/client/v1/genesis";
import * as _159 from "./core/client/v1/query";
import * as _160 from "./core/client/v1/tx";
import * as _161 from "./core/commitment/v1/commitment";
import * as _162 from "./core/connection/v1/connection";
import * as _163 from "./core/connection/v1/genesis";
import * as _164 from "./core/connection/v1/query";
import * as _165 from "./core/connection/v1/tx";
import * as _166 from "./lightclients/localhost/v2/localhost";
import * as _167 from "./lightclients/solomachine/v2/solomachine";
import * as _168 from "./lightclients/solomachine/v3/solomachine";
import * as _169 from "./lightclients/tendermint/v1/tendermint";
import * as _278 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _279 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _280 from "./applications/transfer/v1/tx.amino";
import * as _281 from "./core/channel/v1/tx.amino";
import * as _282 from "./core/client/v1/tx.amino";
import * as _283 from "./core/connection/v1/tx.amino";
import * as _284 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _285 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _286 from "./applications/transfer/v1/tx.registry";
import * as _287 from "./core/channel/v1/tx.registry";
import * as _288 from "./core/client/v1/tx.registry";
import * as _289 from "./core/connection/v1/tx.registry";
import * as _290 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _291 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _292 from "./applications/transfer/v1/query.lcd";
import * as _293 from "./core/channel/v1/query.lcd";
import * as _294 from "./core/client/v1/query.lcd";
import * as _295 from "./core/connection/v1/query.lcd";
import * as _296 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _297 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _298 from "./applications/transfer/v1/query.rpc.Query";
import * as _299 from "./core/channel/v1/query.rpc.Query";
import * as _300 from "./core/client/v1/query.rpc.Query";
import * as _301 from "./core/connection/v1/query.rpc.Query";
import * as _302 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _303 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _304 from "./applications/transfer/v1/tx.rpc.msg";
import * as _305 from "./core/channel/v1/tx.rpc.msg";
import * as _306 from "./core/client/v1/tx.rpc.msg";
import * as _307 from "./core/connection/v1/tx.rpc.msg";
import * as _314 from "./lcd";
import * as _315 from "./rpc.query";
import * as _316 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._137,
          ..._138,
          ..._139,
          ..._278,
          ..._284,
          ..._290,
          ..._296,
          ..._302
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._140
        };
      }
      export namespace host {
        export const v1 = {
          ..._141,
          ..._142,
          ..._143,
          ..._279,
          ..._285,
          ..._291,
          ..._297,
          ..._303
        };
      }
      export const v1 = {
        ..._144,
        ..._145,
        ..._146
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._147,
        ..._148,
        ..._149,
        ..._150,
        ..._151,
        ..._280,
        ..._286,
        ..._292,
        ..._298,
        ..._304
      };
      export const v2 = {
        ..._152
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._153,
        ..._154,
        ..._155,
        ..._156,
        ..._281,
        ..._287,
        ..._293,
        ..._299,
        ..._305
      };
    }
    export namespace client {
      export const v1 = {
        ..._157,
        ..._158,
        ..._159,
        ..._160,
        ..._282,
        ..._288,
        ..._294,
        ..._300,
        ..._306
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._161
      };
    }
    export namespace connection {
      export const v1 = {
        ..._162,
        ..._163,
        ..._164,
        ..._165,
        ..._283,
        ..._289,
        ..._295,
        ..._301,
        ..._307
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._166
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._167
      };
      export const v3 = {
        ..._168
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._169
      };
    }
  }
  export const ClientFactory = {
    ..._314,
    ..._315,
    ..._316
  };
}