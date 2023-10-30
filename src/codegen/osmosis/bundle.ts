//@ts-nocheck
import * as _90 from "./downtime-detector/v1beta1/downtime_duration";
import * as _91 from "./downtime-detector/v1beta1/genesis";
import * as _92 from "./downtime-detector/v1beta1/query";
import * as _93 from "./epochs/genesis";
import * as _94 from "./epochs/query";
import * as _95 from "./gamm/pool-models/balancer/balancerPool";
import * as _96 from "./gamm/v1beta1/genesis";
import * as _97 from "./gamm/v1beta1/query";
import * as _98 from "./gamm/v1beta1/tx";
import * as _99 from "./gamm/pool-models/balancer/tx/tx";
import * as _100 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _101 from "./gamm/pool-models/stableswap/tx";
import * as _102 from "./gamm/v2/query";
import * as _103 from "./ibc-rate-limit/v1beta1/params";
import * as _104 from "./ibc-rate-limit/v1beta1/query";
import * as _105 from "./incentives/gauge";
import * as _106 from "./incentives/genesis";
import * as _107 from "./incentives/params";
import * as _108 from "./incentives/query";
import * as _109 from "./incentives/tx";
import * as _110 from "./lockup/genesis";
import * as _111 from "./lockup/lock";
import * as _112 from "./lockup/params";
import * as _113 from "./lockup/query";
import * as _114 from "./lockup/tx";
import * as _115 from "./mint/v1beta1/genesis";
import * as _116 from "./mint/v1beta1/mint";
import * as _117 from "./mint/v1beta1/query";
import * as _118 from "./pool-incentives/v1beta1/genesis";
import * as _119 from "./pool-incentives/v1beta1/gov";
import * as _120 from "./pool-incentives/v1beta1/incentives";
import * as _121 from "./pool-incentives/v1beta1/query";
import * as _122 from "./protorev/v1beta1/genesis";
import * as _123 from "./protorev/v1beta1/gov";
import * as _124 from "./protorev/v1beta1/params";
import * as _125 from "./protorev/v1beta1/protorev";
import * as _126 from "./protorev/v1beta1/query";
import * as _127 from "./protorev/v1beta1/tx";
import * as _128 from "./sumtree/v1beta1/tree";
import * as _129 from "./superfluid/genesis";
import * as _130 from "./superfluid/params";
import * as _131 from "./superfluid/query";
import * as _132 from "./superfluid/superfluid";
import * as _133 from "./superfluid/tx";
import * as _134 from "./swaprouter/v1beta1/genesis";
import * as _135 from "./swaprouter/v1beta1/module_route";
import * as _136 from "./swaprouter/v1beta1/query";
import * as _137 from "./swaprouter/v1beta1/swap_route";
import * as _138 from "./swaprouter/v1beta1/tx";
import * as _139 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _140 from "./tokenfactory/v1beta1/genesis";
import * as _141 from "./tokenfactory/v1beta1/params";
import * as _142 from "./tokenfactory/v1beta1/query";
import * as _143 from "./tokenfactory/v1beta1/tx";
import * as _144 from "./twap/v1beta1/genesis";
import * as _145 from "./twap/v1beta1/query";
import * as _146 from "./twap/v1beta1/twap_record";
import * as _147 from "./txfees/v1beta1/feetoken";
import * as _148 from "./txfees/v1beta1/genesis";
import * as _149 from "./txfees/v1beta1/gov";
import * as _150 from "./txfees/v1beta1/query";
import * as _151 from "./valset-pref/v1beta1/query";
import * as _152 from "./valset-pref/v1beta1/state";
import * as _153 from "./valset-pref/v1beta1/tx";
import * as _243 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _244 from "./gamm/pool-models/stableswap/tx.amino";
import * as _245 from "./gamm/v1beta1/tx.amino";
import * as _246 from "./incentives/tx.amino";
import * as _247 from "./lockup/tx.amino";
import * as _248 from "./protorev/v1beta1/tx.amino";
import * as _249 from "./superfluid/tx.amino";
import * as _250 from "./swaprouter/v1beta1/tx.amino";
import * as _251 from "./tokenfactory/v1beta1/tx.amino";
import * as _252 from "./valset-pref/v1beta1/tx.amino";
import * as _253 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _254 from "./gamm/pool-models/stableswap/tx.registry";
import * as _255 from "./gamm/v1beta1/tx.registry";
import * as _256 from "./incentives/tx.registry";
import * as _257 from "./lockup/tx.registry";
import * as _258 from "./protorev/v1beta1/tx.registry";
import * as _259 from "./superfluid/tx.registry";
import * as _260 from "./swaprouter/v1beta1/tx.registry";
import * as _261 from "./tokenfactory/v1beta1/tx.registry";
import * as _262 from "./valset-pref/v1beta1/tx.registry";
import * as _263 from "./downtime-detector/v1beta1/query.lcd";
import * as _264 from "./epochs/query.lcd";
import * as _265 from "./gamm/v1beta1/query.lcd";
import * as _266 from "./gamm/v2/query.lcd";
import * as _267 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _268 from "./incentives/query.lcd";
import * as _269 from "./lockup/query.lcd";
import * as _270 from "./mint/v1beta1/query.lcd";
import * as _271 from "./pool-incentives/v1beta1/query.lcd";
import * as _272 from "./protorev/v1beta1/query.lcd";
import * as _273 from "./superfluid/query.lcd";
import * as _274 from "./swaprouter/v1beta1/query.lcd";
import * as _275 from "./tokenfactory/v1beta1/query.lcd";
import * as _276 from "./twap/v1beta1/query.lcd";
import * as _277 from "./txfees/v1beta1/query.lcd";
import * as _278 from "./valset-pref/v1beta1/query.lcd";
import * as _279 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _280 from "./epochs/query.rpc.Query";
import * as _281 from "./gamm/v1beta1/query.rpc.Query";
import * as _282 from "./gamm/v2/query.rpc.Query";
import * as _283 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _284 from "./incentives/query.rpc.Query";
import * as _285 from "./lockup/query.rpc.Query";
import * as _286 from "./mint/v1beta1/query.rpc.Query";
import * as _287 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _288 from "./protorev/v1beta1/query.rpc.Query";
import * as _289 from "./superfluid/query.rpc.Query";
import * as _290 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _291 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _292 from "./twap/v1beta1/query.rpc.Query";
import * as _293 from "./txfees/v1beta1/query.rpc.Query";
import * as _294 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _295 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _296 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _297 from "./gamm/v1beta1/tx.rpc.msg";
import * as _298 from "./incentives/tx.rpc.msg";
import * as _299 from "./lockup/tx.rpc.msg";
import * as _300 from "./protorev/v1beta1/tx.rpc.msg";
import * as _301 from "./superfluid/tx.rpc.msg";
import * as _302 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _303 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _304 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _311 from "./lcd";
import * as _312 from "./rpc.query";
import * as _313 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._263,
      ..._279
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._93,
      ..._94,
      ..._264,
      ..._280
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._245,
      ..._255,
      ..._265,
      ..._281,
      ..._297
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._99,
          ..._243,
          ..._253,
          ..._295
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._100,
          ..._101,
          ..._244,
          ..._254,
          ..._296
        };
      }
    }
    export const v2 = {
      ..._102,
      ..._266,
      ..._282
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._103,
      ..._104,
      ..._267,
      ..._283
    };
  }
  export const incentives = {
    ..._105,
    ..._106,
    ..._107,
    ..._108,
    ..._109,
    ..._246,
    ..._256,
    ..._268,
    ..._284,
    ..._298
  };
  export const lockup = {
    ..._110,
    ..._111,
    ..._112,
    ..._113,
    ..._114,
    ..._247,
    ..._257,
    ..._269,
    ..._285,
    ..._299
  };
  export namespace mint {
    export const v1beta1 = {
      ..._115,
      ..._116,
      ..._117,
      ..._270,
      ..._286
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._271,
      ..._287
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._248,
      ..._258,
      ..._272,
      ..._288,
      ..._300
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._128
    };
  }
  export const superfluid = {
    ..._129,
    ..._130,
    ..._131,
    ..._132,
    ..._133,
    ..._249,
    ..._259,
    ..._273,
    ..._289,
    ..._301
  };
  export namespace swaprouter {
    export const v1beta1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._250,
      ..._260,
      ..._274,
      ..._290,
      ..._302
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._251,
      ..._261,
      ..._275,
      ..._291,
      ..._303
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._144,
      ..._145,
      ..._146,
      ..._276,
      ..._292
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._277,
      ..._293
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._151,
      ..._152,
      ..._153,
      ..._252,
      ..._262,
      ..._278,
      ..._294,
      ..._304
    };
  }
  export const ClientFactory = {
    ..._311,
    ..._312,
    ..._313
  };
}