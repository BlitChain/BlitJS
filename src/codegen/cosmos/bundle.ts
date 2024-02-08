//@ts-nocheck
import * as _23 from "./app/runtime/v1alpha1/module";
import * as _24 from "./auth/module/v1/module";
import * as _25 from "./auth/v1beta1/auth";
import * as _26 from "./auth/v1beta1/genesis";
import * as _27 from "./auth/v1beta1/query";
import * as _28 from "./auth/v1beta1/tx";
import * as _29 from "./authz/module/v1/module";
import * as _30 from "./authz/v1beta1/authz";
import * as _31 from "./authz/v1beta1/event";
import * as _32 from "./authz/v1beta1/genesis";
import * as _33 from "./authz/v1beta1/query";
import * as _34 from "./authz/v1beta1/tx";
import * as _35 from "./bank/module/v1/module";
import * as _36 from "./bank/v1beta1/authz";
import * as _37 from "./bank/v1beta1/bank";
import * as _38 from "./bank/v1beta1/genesis";
import * as _39 from "./bank/v1beta1/query";
import * as _40 from "./bank/v1beta1/tx";
import * as _41 from "./base/abci/v1beta1/abci";
import * as _42 from "./base/node/v1beta1/query";
import * as _43 from "./base/query/v1beta1/pagination";
import * as _44 from "./base/reflection/v2alpha1/reflection";
import * as _45 from "./base/tendermint/v1beta1/query";
import * as _46 from "./base/tendermint/v1beta1/types";
import * as _47 from "./base/v1beta1/coin";
import * as _48 from "./circuit/module/v1/module";
import * as _49 from "./circuit/v1/query";
import * as _50 from "./circuit/v1/tx";
import * as _51 from "./circuit/v1/types";
import * as _52 from "./consensus/module/v1/module";
import * as _53 from "./consensus/v1/query";
import * as _54 from "./consensus/v1/tx";
import * as _55 from "./crisis/module/v1/module";
import * as _56 from "./crypto/ed25519/keys";
import * as _57 from "./crypto/hd/v1/hd";
import * as _58 from "./crypto/keyring/v1/record";
import * as _59 from "./crypto/multisig/keys";
import * as _60 from "./crypto/secp256k1/keys";
import * as _61 from "./crypto/secp256r1/keys";
import * as _62 from "./distribution/module/v1/module";
import * as _63 from "./distribution/v1beta1/distribution";
import * as _64 from "./distribution/v1beta1/genesis";
import * as _65 from "./distribution/v1beta1/query";
import * as _66 from "./distribution/v1beta1/tx";
import * as _67 from "./evidence/module/v1/module";
import * as _68 from "./feegrant/module/v1/module";
import * as _69 from "./feegrant/v1beta1/feegrant";
import * as _70 from "./feegrant/v1beta1/genesis";
import * as _71 from "./feegrant/v1beta1/query";
import * as _72 from "./feegrant/v1beta1/tx";
import * as _73 from "./genutil/module/v1/module";
import * as _74 from "./gov/module/v1/module";
import * as _75 from "./gov/v1/genesis";
import * as _76 from "./gov/v1/gov";
import * as _77 from "./gov/v1/query";
import * as _78 from "./gov/v1/tx";
import * as _79 from "./gov/v1beta1/genesis";
import * as _80 from "./gov/v1beta1/gov";
import * as _81 from "./gov/v1beta1/query";
import * as _82 from "./gov/v1beta1/tx";
import * as _83 from "./group/module/v1/module";
import * as _84 from "./group/v1/events";
import * as _85 from "./group/v1/genesis";
import * as _86 from "./group/v1/query";
import * as _87 from "./group/v1/tx";
import * as _88 from "./group/v1/types";
import * as _89 from "./ics23/v1/proofs";
import * as _90 from "./mint/module/v1/module";
import * as _91 from "./mint/v1beta1/genesis";
import * as _92 from "./mint/v1beta1/mint";
import * as _93 from "./mint/v1beta1/query";
import * as _94 from "./mint/v1beta1/tx";
import * as _95 from "./msg/textual/v1/textual";
import * as _96 from "./nft/module/v1/module";
import * as _97 from "./nft/v1beta1/event";
import * as _98 from "./nft/v1beta1/genesis";
import * as _99 from "./nft/v1beta1/nft";
import * as _100 from "./nft/v1beta1/query";
import * as _101 from "./nft/v1beta1/tx";
import * as _102 from "./orm/module/v1alpha1/module";
import * as _103 from "./orm/query/v1alpha1/query";
import * as _104 from "./params/module/v1/module";
import * as _105 from "./params/v1beta1/params";
import * as _106 from "./params/v1beta1/query";
import * as _107 from "./query/v1/query";
import * as _108 from "./reflection/v1/reflection";
import * as _109 from "./slashing/module/v1/module";
import * as _110 from "./staking/module/v1/module";
import * as _111 from "./staking/v1beta1/authz";
import * as _112 from "./staking/v1beta1/genesis";
import * as _113 from "./staking/v1beta1/query";
import * as _114 from "./staking/v1beta1/staking";
import * as _115 from "./staking/v1beta1/tx";
import * as _116 from "./store/internal/kv/v1beta1/kv";
import * as _117 from "./store/snapshots/v1/snapshot";
import * as _118 from "./store/streaming/abci/grpc";
import * as _119 from "./store/v1beta1/commit_info";
import * as _120 from "./store/v1beta1/listening";
import * as _121 from "./tx/config/v1/config";
import * as _122 from "./tx/signing/v1beta1/signing";
import * as _123 from "./tx/v1beta1/service";
import * as _124 from "./tx/v1beta1/tx";
import * as _125 from "./upgrade/module/v1/module";
import * as _126 from "./upgrade/v1beta1/query";
import * as _127 from "./upgrade/v1beta1/tx";
import * as _128 from "./upgrade/v1beta1/upgrade";
import * as _129 from "./vesting/module/v1/module";
import * as _130 from "./vesting/v1beta1/tx";
import * as _131 from "./vesting/v1beta1/vesting";
import * as _192 from "./auth/v1beta1/tx.amino";
import * as _193 from "./authz/v1beta1/tx.amino";
import * as _194 from "./bank/v1beta1/tx.amino";
import * as _195 from "./circuit/v1/tx.amino";
import * as _196 from "./consensus/v1/tx.amino";
import * as _197 from "./distribution/v1beta1/tx.amino";
import * as _198 from "./feegrant/v1beta1/tx.amino";
import * as _199 from "./gov/v1/tx.amino";
import * as _200 from "./gov/v1beta1/tx.amino";
import * as _201 from "./group/v1/tx.amino";
import * as _202 from "./mint/v1beta1/tx.amino";
import * as _203 from "./nft/v1beta1/tx.amino";
import * as _204 from "./staking/v1beta1/tx.amino";
import * as _205 from "./upgrade/v1beta1/tx.amino";
import * as _206 from "./vesting/v1beta1/tx.amino";
import * as _207 from "./auth/v1beta1/tx.registry";
import * as _208 from "./authz/v1beta1/tx.registry";
import * as _209 from "./bank/v1beta1/tx.registry";
import * as _210 from "./circuit/v1/tx.registry";
import * as _211 from "./consensus/v1/tx.registry";
import * as _212 from "./distribution/v1beta1/tx.registry";
import * as _213 from "./feegrant/v1beta1/tx.registry";
import * as _214 from "./gov/v1/tx.registry";
import * as _215 from "./gov/v1beta1/tx.registry";
import * as _216 from "./group/v1/tx.registry";
import * as _217 from "./mint/v1beta1/tx.registry";
import * as _218 from "./nft/v1beta1/tx.registry";
import * as _219 from "./staking/v1beta1/tx.registry";
import * as _220 from "./upgrade/v1beta1/tx.registry";
import * as _221 from "./vesting/v1beta1/tx.registry";
import * as _222 from "./auth/v1beta1/query.lcd";
import * as _223 from "./authz/v1beta1/query.lcd";
import * as _224 from "./bank/v1beta1/query.lcd";
import * as _225 from "./base/node/v1beta1/query.lcd";
import * as _226 from "./base/tendermint/v1beta1/query.lcd";
import * as _227 from "./circuit/v1/query.lcd";
import * as _228 from "./consensus/v1/query.lcd";
import * as _229 from "./distribution/v1beta1/query.lcd";
import * as _230 from "./feegrant/v1beta1/query.lcd";
import * as _231 from "./gov/v1/query.lcd";
import * as _232 from "./gov/v1beta1/query.lcd";
import * as _233 from "./group/v1/query.lcd";
import * as _234 from "./mint/v1beta1/query.lcd";
import * as _235 from "./nft/v1beta1/query.lcd";
import * as _236 from "./params/v1beta1/query.lcd";
import * as _237 from "./staking/v1beta1/query.lcd";
import * as _238 from "./tx/v1beta1/service.lcd";
import * as _239 from "./upgrade/v1beta1/query.lcd";
import * as _259 from "./lcd";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._23
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._24
      };
    }
    export const v1beta1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._192,
      ..._207,
      ..._222
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._29
      };
    }
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._193,
      ..._208,
      ..._223
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._35
      };
    }
    export const v1beta1 = {
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._194,
      ..._209,
      ..._224
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._41
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._42,
        ..._225
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._43
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._44
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._45,
        ..._46,
        ..._226
      };
    }
    export const v1beta1 = {
      ..._47
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._48
      };
    }
    export const v1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._195,
      ..._210,
      ..._227
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._52
      };
    }
    export const v1 = {
      ..._53,
      ..._54,
      ..._196,
      ..._211,
      ..._228
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._55
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._56
    };
    export namespace hd {
      export const v1 = {
        ..._57
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._58
      };
    }
    export const multisig = {
      ..._59
    };
    export const secp256k1 = {
      ..._60
    };
    export const secp256r1 = {
      ..._61
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._62
      };
    }
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._197,
      ..._212,
      ..._229
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._67
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._68
      };
    }
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._198,
      ..._213,
      ..._230
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._73
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._74
      };
    }
    export const v1 = {
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._199,
      ..._214,
      ..._231
    };
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._200,
      ..._215,
      ..._232
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._83
      };
    }
    export const v1 = {
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._201,
      ..._216,
      ..._233
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._89
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._90
      };
    }
    export const v1beta1 = {
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._202,
      ..._217,
      ..._234
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._95
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._96
      };
    }
    export const v1beta1 = {
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._203,
      ..._218,
      ..._235
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._102
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._103
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._104
      };
    }
    export const v1beta1 = {
      ..._105,
      ..._106,
      ..._236
    };
  }
  export namespace query {
    export const v1 = {
      ..._107
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._108
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._109
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._110
      };
    }
    export const v1beta1 = {
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._204,
      ..._219,
      ..._237
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._116
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._117
      };
    }
    export namespace streaming {
      export const abci = {
        ..._118
      };
    }
    export const v1beta1 = {
      ..._119,
      ..._120
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._121
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._122
      };
    }
    export const v1beta1 = {
      ..._123,
      ..._124,
      ..._238
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._125
      };
    }
    export const v1beta1 = {
      ..._126,
      ..._127,
      ..._128,
      ..._205,
      ..._220,
      ..._239
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._129
      };
    }
    export const v1beta1 = {
      ..._130,
      ..._131,
      ..._206,
      ..._221
    };
  }
  export const ClientFactory = {
    ..._259
  };
}