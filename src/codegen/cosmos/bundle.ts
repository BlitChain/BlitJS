//@ts-nocheck
import * as _22 from "./app/runtime/v1alpha1/module";
import * as _23 from "./auth/module/v1/module";
import * as _24 from "./auth/v1beta1/auth";
import * as _25 from "./auth/v1beta1/genesis";
import * as _26 from "./auth/v1beta1/query";
import * as _27 from "./auth/v1beta1/tx";
import * as _28 from "./authz/module/v1/module";
import * as _29 from "./authz/v1beta1/authz";
import * as _30 from "./authz/v1beta1/event";
import * as _31 from "./authz/v1beta1/genesis";
import * as _32 from "./authz/v1beta1/query";
import * as _33 from "./authz/v1beta1/tx";
import * as _34 from "./bank/module/v1/module";
import * as _35 from "./bank/v1beta1/authz";
import * as _36 from "./bank/v1beta1/bank";
import * as _37 from "./bank/v1beta1/genesis";
import * as _38 from "./bank/v1beta1/query";
import * as _39 from "./bank/v1beta1/tx";
import * as _40 from "./base/abci/v1beta1/abci";
import * as _41 from "./base/node/v1beta1/query";
import * as _42 from "./base/query/v1beta1/pagination";
import * as _43 from "./base/reflection/v2alpha1/reflection";
import * as _44 from "./base/tendermint/v1beta1/query";
import * as _45 from "./base/tendermint/v1beta1/types";
import * as _46 from "./base/v1beta1/coin";
import * as _47 from "./circuit/module/v1/module";
import * as _48 from "./circuit/v1/query";
import * as _49 from "./circuit/v1/tx";
import * as _50 from "./circuit/v1/types";
import * as _51 from "./consensus/module/v1/module";
import * as _52 from "./consensus/v1/query";
import * as _53 from "./consensus/v1/tx";
import * as _54 from "./crisis/module/v1/module";
import * as _55 from "./crypto/ed25519/keys";
import * as _56 from "./crypto/hd/v1/hd";
import * as _57 from "./crypto/keyring/v1/record";
import * as _58 from "./crypto/multisig/keys";
import * as _59 from "./crypto/secp256k1/keys";
import * as _60 from "./crypto/secp256r1/keys";
import * as _61 from "./distribution/module/v1/module";
import * as _62 from "./distribution/v1beta1/distribution";
import * as _63 from "./distribution/v1beta1/genesis";
import * as _64 from "./distribution/v1beta1/query";
import * as _65 from "./distribution/v1beta1/tx";
import * as _66 from "./evidence/module/v1/module";
import * as _67 from "./feegrant/module/v1/module";
import * as _68 from "./feegrant/v1beta1/feegrant";
import * as _69 from "./feegrant/v1beta1/genesis";
import * as _70 from "./feegrant/v1beta1/query";
import * as _71 from "./feegrant/v1beta1/tx";
import * as _72 from "./genutil/module/v1/module";
import * as _73 from "./gov/module/v1/module";
import * as _74 from "./gov/v1/genesis";
import * as _75 from "./gov/v1/gov";
import * as _76 from "./gov/v1/query";
import * as _77 from "./gov/v1/tx";
import * as _78 from "./gov/v1beta1/genesis";
import * as _79 from "./gov/v1beta1/gov";
import * as _80 from "./gov/v1beta1/query";
import * as _81 from "./gov/v1beta1/tx";
import * as _82 from "./group/module/v1/module";
import * as _83 from "./group/v1/events";
import * as _84 from "./group/v1/genesis";
import * as _85 from "./group/v1/query";
import * as _86 from "./group/v1/tx";
import * as _87 from "./group/v1/types";
import * as _88 from "./ics23/v1/proofs";
import * as _89 from "./mint/module/v1/module";
import * as _90 from "./mint/v1beta1/genesis";
import * as _91 from "./mint/v1beta1/mint";
import * as _92 from "./mint/v1beta1/query";
import * as _93 from "./mint/v1beta1/tx";
import * as _94 from "./msg/textual/v1/textual";
import * as _95 from "./nft/module/v1/module";
import * as _96 from "./nft/v1beta1/event";
import * as _97 from "./nft/v1beta1/genesis";
import * as _98 from "./nft/v1beta1/nft";
import * as _99 from "./nft/v1beta1/query";
import * as _100 from "./nft/v1beta1/tx";
import * as _101 from "./orm/module/v1alpha1/module";
import * as _102 from "./orm/query/v1alpha1/query";
import * as _103 from "./params/module/v1/module";
import * as _104 from "./params/v1beta1/params";
import * as _105 from "./params/v1beta1/query";
import * as _106 from "./query/v1/query";
import * as _107 from "./reflection/v1/reflection";
import * as _108 from "./slashing/module/v1/module";
import * as _109 from "./staking/module/v1/module";
import * as _110 from "./staking/v1beta1/authz";
import * as _111 from "./staking/v1beta1/genesis";
import * as _112 from "./staking/v1beta1/query";
import * as _113 from "./staking/v1beta1/staking";
import * as _114 from "./staking/v1beta1/tx";
import * as _115 from "./store/internal/kv/v1beta1/kv";
import * as _116 from "./store/snapshots/v1/snapshot";
import * as _117 from "./store/streaming/abci/grpc";
import * as _118 from "./store/v1beta1/commit_info";
import * as _119 from "./store/v1beta1/listening";
import * as _120 from "./tx/config/v1/config";
import * as _121 from "./tx/signing/v1beta1/signing";
import * as _122 from "./tx/v1beta1/service";
import * as _123 from "./tx/v1beta1/tx";
import * as _124 from "./upgrade/module/v1/module";
import * as _125 from "./upgrade/v1beta1/query";
import * as _126 from "./upgrade/v1beta1/tx";
import * as _127 from "./upgrade/v1beta1/upgrade";
import * as _128 from "./vesting/module/v1/module";
import * as _129 from "./vesting/v1beta1/tx";
import * as _130 from "./vesting/v1beta1/vesting";
import * as _196 from "./auth/v1beta1/tx.amino";
import * as _197 from "./authz/v1beta1/tx.amino";
import * as _198 from "./bank/v1beta1/tx.amino";
import * as _199 from "./circuit/v1/tx.amino";
import * as _200 from "./consensus/v1/tx.amino";
import * as _201 from "./distribution/v1beta1/tx.amino";
import * as _202 from "./feegrant/v1beta1/tx.amino";
import * as _203 from "./gov/v1/tx.amino";
import * as _204 from "./gov/v1beta1/tx.amino";
import * as _205 from "./group/v1/tx.amino";
import * as _206 from "./mint/v1beta1/tx.amino";
import * as _207 from "./nft/v1beta1/tx.amino";
import * as _208 from "./staking/v1beta1/tx.amino";
import * as _209 from "./upgrade/v1beta1/tx.amino";
import * as _210 from "./vesting/v1beta1/tx.amino";
import * as _211 from "./auth/v1beta1/tx.registry";
import * as _212 from "./authz/v1beta1/tx.registry";
import * as _213 from "./bank/v1beta1/tx.registry";
import * as _214 from "./circuit/v1/tx.registry";
import * as _215 from "./consensus/v1/tx.registry";
import * as _216 from "./distribution/v1beta1/tx.registry";
import * as _217 from "./feegrant/v1beta1/tx.registry";
import * as _218 from "./gov/v1/tx.registry";
import * as _219 from "./gov/v1beta1/tx.registry";
import * as _220 from "./group/v1/tx.registry";
import * as _221 from "./mint/v1beta1/tx.registry";
import * as _222 from "./nft/v1beta1/tx.registry";
import * as _223 from "./staking/v1beta1/tx.registry";
import * as _224 from "./upgrade/v1beta1/tx.registry";
import * as _225 from "./vesting/v1beta1/tx.registry";
import * as _226 from "./auth/v1beta1/query.lcd";
import * as _227 from "./authz/v1beta1/query.lcd";
import * as _228 from "./bank/v1beta1/query.lcd";
import * as _229 from "./base/node/v1beta1/query.lcd";
import * as _230 from "./base/tendermint/v1beta1/query.lcd";
import * as _231 from "./circuit/v1/query.lcd";
import * as _232 from "./consensus/v1/query.lcd";
import * as _233 from "./distribution/v1beta1/query.lcd";
import * as _234 from "./feegrant/v1beta1/query.lcd";
import * as _235 from "./gov/v1/query.lcd";
import * as _236 from "./gov/v1beta1/query.lcd";
import * as _237 from "./group/v1/query.lcd";
import * as _238 from "./mint/v1beta1/query.lcd";
import * as _239 from "./nft/v1beta1/query.lcd";
import * as _240 from "./params/v1beta1/query.lcd";
import * as _241 from "./staking/v1beta1/query.lcd";
import * as _242 from "./tx/v1beta1/service.lcd";
import * as _243 from "./upgrade/v1beta1/query.lcd";
import * as _244 from "./auth/v1beta1/query.rpc.Query";
import * as _245 from "./authz/v1beta1/query.rpc.Query";
import * as _246 from "./bank/v1beta1/query.rpc.Query";
import * as _247 from "./base/node/v1beta1/query.rpc.Service";
import * as _248 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _249 from "./circuit/v1/query.rpc.Query";
import * as _250 from "./consensus/v1/query.rpc.Query";
import * as _251 from "./distribution/v1beta1/query.rpc.Query";
import * as _252 from "./feegrant/v1beta1/query.rpc.Query";
import * as _253 from "./gov/v1/query.rpc.Query";
import * as _254 from "./gov/v1beta1/query.rpc.Query";
import * as _255 from "./group/v1/query.rpc.Query";
import * as _256 from "./mint/v1beta1/query.rpc.Query";
import * as _257 from "./nft/v1beta1/query.rpc.Query";
import * as _258 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _259 from "./params/v1beta1/query.rpc.Query";
import * as _260 from "./staking/v1beta1/query.rpc.Query";
import * as _261 from "./tx/v1beta1/service.rpc.Service";
import * as _262 from "./upgrade/v1beta1/query.rpc.Query";
import * as _263 from "./auth/v1beta1/tx.rpc.msg";
import * as _264 from "./authz/v1beta1/tx.rpc.msg";
import * as _265 from "./bank/v1beta1/tx.rpc.msg";
import * as _266 from "./circuit/v1/tx.rpc.msg";
import * as _267 from "./consensus/v1/tx.rpc.msg";
import * as _268 from "./distribution/v1beta1/tx.rpc.msg";
import * as _269 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _270 from "./gov/v1/tx.rpc.msg";
import * as _271 from "./gov/v1beta1/tx.rpc.msg";
import * as _272 from "./group/v1/tx.rpc.msg";
import * as _273 from "./mint/v1beta1/tx.rpc.msg";
import * as _274 from "./nft/v1beta1/tx.rpc.msg";
import * as _275 from "./staking/v1beta1/tx.rpc.msg";
import * as _276 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _277 from "./vesting/v1beta1/tx.rpc.msg";
import * as _311 from "./lcd";
import * as _312 from "./rpc.query";
import * as _313 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._22
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._23
      };
    }
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._196,
      ..._211,
      ..._226,
      ..._244,
      ..._263
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._28
      };
    }
    export const v1beta1 = {
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._197,
      ..._212,
      ..._227,
      ..._245,
      ..._264
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._34
      };
    }
    export const v1beta1 = {
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._198,
      ..._213,
      ..._228,
      ..._246,
      ..._265
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._40
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._41,
        ..._229,
        ..._247
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._42
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._43
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._44,
        ..._45,
        ..._230,
        ..._248
      };
    }
    export const v1beta1 = {
      ..._46
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._47
      };
    }
    export const v1 = {
      ..._48,
      ..._49,
      ..._50,
      ..._199,
      ..._214,
      ..._231,
      ..._249,
      ..._266
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._51
      };
    }
    export const v1 = {
      ..._52,
      ..._53,
      ..._200,
      ..._215,
      ..._232,
      ..._250,
      ..._267
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._54
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._55
    };
    export namespace hd {
      export const v1 = {
        ..._56
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._57
      };
    }
    export const multisig = {
      ..._58
    };
    export const secp256k1 = {
      ..._59
    };
    export const secp256r1 = {
      ..._60
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._61
      };
    }
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._201,
      ..._216,
      ..._233,
      ..._251,
      ..._268
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._66
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._67
      };
    }
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._202,
      ..._217,
      ..._234,
      ..._252,
      ..._269
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._72
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._73
      };
    }
    export const v1 = {
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._203,
      ..._218,
      ..._235,
      ..._253,
      ..._270
    };
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._204,
      ..._219,
      ..._236,
      ..._254,
      ..._271
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._82
      };
    }
    export const v1 = {
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._205,
      ..._220,
      ..._237,
      ..._255,
      ..._272
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._88
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._89
      };
    }
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._206,
      ..._221,
      ..._238,
      ..._256,
      ..._273
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._94
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._95
      };
    }
    export const v1beta1 = {
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._207,
      ..._222,
      ..._239,
      ..._257,
      ..._274
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._101
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._102,
        ..._258
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._103
      };
    }
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._240,
      ..._259
    };
  }
  export namespace query {
    export const v1 = {
      ..._106
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._107
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._108
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._109
      };
    }
    export const v1beta1 = {
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._208,
      ..._223,
      ..._241,
      ..._260,
      ..._275
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._115
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._116
      };
    }
    export namespace streaming {
      export const abci = {
        ..._117
      };
    }
    export const v1beta1 = {
      ..._118,
      ..._119
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._120
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._121
      };
    }
    export const v1beta1 = {
      ..._122,
      ..._123,
      ..._242,
      ..._261
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._124
      };
    }
    export const v1beta1 = {
      ..._125,
      ..._126,
      ..._127,
      ..._209,
      ..._224,
      ..._243,
      ..._262,
      ..._276
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._128
      };
    }
    export const v1beta1 = {
      ..._129,
      ..._130,
      ..._210,
      ..._225,
      ..._277
    };
  }
  export const ClientFactory = {
    ..._311,
    ..._312,
    ..._313
  };
}