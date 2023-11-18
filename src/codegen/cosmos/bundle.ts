//@ts-nocheck
import * as _17 from "./app/runtime/v1alpha1/module";
import * as _18 from "./auth/module/v1/module";
import * as _19 from "./auth/v1beta1/auth";
import * as _20 from "./auth/v1beta1/genesis";
import * as _21 from "./auth/v1beta1/query";
import * as _22 from "./auth/v1beta1/tx";
import * as _23 from "./authz/module/v1/module";
import * as _24 from "./authz/v1beta1/authz";
import * as _25 from "./authz/v1beta1/event";
import * as _26 from "./authz/v1beta1/genesis";
import * as _27 from "./authz/v1beta1/query";
import * as _28 from "./authz/v1beta1/tx";
import * as _29 from "./bank/module/v1/module";
import * as _30 from "./bank/v1beta1/authz";
import * as _31 from "./bank/v1beta1/bank";
import * as _32 from "./bank/v1beta1/genesis";
import * as _33 from "./bank/v1beta1/query";
import * as _34 from "./bank/v1beta1/tx";
import * as _35 from "./base/abci/v1beta1/abci";
import * as _36 from "./base/node/v1beta1/query";
import * as _37 from "./base/query/v1beta1/pagination";
import * as _38 from "./base/reflection/v2alpha1/reflection";
import * as _39 from "./base/tendermint/v1beta1/query";
import * as _40 from "./base/tendermint/v1beta1/types";
import * as _41 from "./base/v1beta1/coin";
import * as _42 from "./capability/module/v1/module";
import * as _43 from "./circuit/module/v1/module";
import * as _44 from "./circuit/v1/query";
import * as _45 from "./circuit/v1/tx";
import * as _46 from "./circuit/v1/types";
import * as _47 from "./consensus/module/v1/module";
import * as _48 from "./consensus/v1/query";
import * as _49 from "./consensus/v1/tx";
import * as _50 from "./crisis/module/v1/module";
import * as _51 from "./crypto/ed25519/keys";
import * as _52 from "./crypto/hd/v1/hd";
import * as _53 from "./crypto/keyring/v1/record";
import * as _54 from "./crypto/multisig/keys";
import * as _55 from "./crypto/secp256k1/keys";
import * as _56 from "./crypto/secp256r1/keys";
import * as _57 from "./distribution/module/v1/module";
import * as _58 from "./distribution/v1beta1/distribution";
import * as _59 from "./distribution/v1beta1/genesis";
import * as _60 from "./distribution/v1beta1/query";
import * as _61 from "./distribution/v1beta1/tx";
import * as _62 from "./evidence/module/v1/module";
import * as _63 from "./feegrant/module/v1/module";
import * as _64 from "./feegrant/v1beta1/feegrant";
import * as _65 from "./feegrant/v1beta1/genesis";
import * as _66 from "./feegrant/v1beta1/query";
import * as _67 from "./feegrant/v1beta1/tx";
import * as _68 from "./genutil/module/v1/module";
import * as _69 from "./gov/module/v1/module";
import * as _70 from "./gov/v1/genesis";
import * as _71 from "./gov/v1/gov";
import * as _72 from "./gov/v1/query";
import * as _73 from "./gov/v1/tx";
import * as _74 from "./gov/v1beta1/genesis";
import * as _75 from "./gov/v1beta1/gov";
import * as _76 from "./gov/v1beta1/query";
import * as _77 from "./gov/v1beta1/tx";
import * as _78 from "./group/module/v1/module";
import * as _79 from "./group/v1/events";
import * as _80 from "./group/v1/genesis";
import * as _81 from "./group/v1/query";
import * as _82 from "./group/v1/tx";
import * as _83 from "./group/v1/types";
import * as _84 from "./mint/module/v1/module";
import * as _85 from "./mint/v1beta1/genesis";
import * as _86 from "./mint/v1beta1/mint";
import * as _87 from "./mint/v1beta1/query";
import * as _88 from "./mint/v1beta1/tx";
import * as _89 from "./msg/textual/v1/textual";
import * as _90 from "./nft/module/v1/module";
import * as _91 from "./nft/v1beta1/event";
import * as _92 from "./nft/v1beta1/genesis";
import * as _93 from "./nft/v1beta1/nft";
import * as _94 from "./nft/v1beta1/query";
import * as _95 from "./nft/v1beta1/tx";
import * as _96 from "./orm/module/v1alpha1/module";
import * as _97 from "./orm/query/v1alpha1/query";
import * as _98 from "./params/module/v1/module";
import * as _99 from "./params/v1beta1/params";
import * as _100 from "./params/v1beta1/query";
import * as _101 from "./query/v1/query";
import * as _102 from "./reflection/v1/reflection";
import * as _103 from "./slashing/module/v1/module";
import * as _104 from "./staking/module/v1/module";
import * as _105 from "./staking/v1beta1/authz";
import * as _106 from "./staking/v1beta1/genesis";
import * as _107 from "./staking/v1beta1/query";
import * as _108 from "./staking/v1beta1/staking";
import * as _109 from "./staking/v1beta1/tx";
import * as _110 from "./store/internal/kv/v1beta1/kv";
import * as _111 from "./store/snapshots/v1/snapshot";
import * as _112 from "./store/streaming/abci/grpc";
import * as _113 from "./store/v1beta1/commit_info";
import * as _114 from "./store/v1beta1/listening";
import * as _115 from "./tx/config/v1/config";
import * as _116 from "./tx/signing/v1beta1/signing";
import * as _117 from "./tx/v1beta1/service";
import * as _118 from "./tx/v1beta1/tx";
import * as _119 from "./upgrade/module/v1/module";
import * as _120 from "./upgrade/v1beta1/query";
import * as _121 from "./upgrade/v1beta1/tx";
import * as _122 from "./upgrade/v1beta1/upgrade";
import * as _123 from "./vesting/module/v1/module";
import * as _124 from "./vesting/v1beta1/tx";
import * as _125 from "./vesting/v1beta1/vesting";
import * as _158 from "./auth/v1beta1/tx.amino";
import * as _159 from "./authz/v1beta1/tx.amino";
import * as _160 from "./bank/v1beta1/tx.amino";
import * as _161 from "./circuit/v1/tx.amino";
import * as _162 from "./consensus/v1/tx.amino";
import * as _163 from "./distribution/v1beta1/tx.amino";
import * as _164 from "./feegrant/v1beta1/tx.amino";
import * as _165 from "./gov/v1/tx.amino";
import * as _166 from "./gov/v1beta1/tx.amino";
import * as _167 from "./group/v1/tx.amino";
import * as _168 from "./mint/v1beta1/tx.amino";
import * as _169 from "./nft/v1beta1/tx.amino";
import * as _170 from "./staking/v1beta1/tx.amino";
import * as _171 from "./upgrade/v1beta1/tx.amino";
import * as _172 from "./vesting/v1beta1/tx.amino";
import * as _173 from "./auth/v1beta1/tx.registry";
import * as _174 from "./authz/v1beta1/tx.registry";
import * as _175 from "./bank/v1beta1/tx.registry";
import * as _176 from "./circuit/v1/tx.registry";
import * as _177 from "./consensus/v1/tx.registry";
import * as _178 from "./distribution/v1beta1/tx.registry";
import * as _179 from "./feegrant/v1beta1/tx.registry";
import * as _180 from "./gov/v1/tx.registry";
import * as _181 from "./gov/v1beta1/tx.registry";
import * as _182 from "./group/v1/tx.registry";
import * as _183 from "./mint/v1beta1/tx.registry";
import * as _184 from "./nft/v1beta1/tx.registry";
import * as _185 from "./staking/v1beta1/tx.registry";
import * as _186 from "./upgrade/v1beta1/tx.registry";
import * as _187 from "./vesting/v1beta1/tx.registry";
import * as _188 from "./auth/v1beta1/query.lcd";
import * as _189 from "./authz/v1beta1/query.lcd";
import * as _190 from "./bank/v1beta1/query.lcd";
import * as _191 from "./base/node/v1beta1/query.lcd";
import * as _192 from "./base/tendermint/v1beta1/query.lcd";
import * as _193 from "./circuit/v1/query.lcd";
import * as _194 from "./consensus/v1/query.lcd";
import * as _195 from "./distribution/v1beta1/query.lcd";
import * as _196 from "./feegrant/v1beta1/query.lcd";
import * as _197 from "./gov/v1/query.lcd";
import * as _198 from "./gov/v1beta1/query.lcd";
import * as _199 from "./group/v1/query.lcd";
import * as _200 from "./mint/v1beta1/query.lcd";
import * as _201 from "./nft/v1beta1/query.lcd";
import * as _202 from "./params/v1beta1/query.lcd";
import * as _203 from "./staking/v1beta1/query.lcd";
import * as _204 from "./tx/v1beta1/service.lcd";
import * as _205 from "./upgrade/v1beta1/query.lcd";
import * as _206 from "./auth/v1beta1/query.rpc.Query";
import * as _207 from "./authz/v1beta1/query.rpc.Query";
import * as _208 from "./bank/v1beta1/query.rpc.Query";
import * as _209 from "./base/node/v1beta1/query.rpc.Service";
import * as _210 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _211 from "./circuit/v1/query.rpc.Query";
import * as _212 from "./consensus/v1/query.rpc.Query";
import * as _213 from "./distribution/v1beta1/query.rpc.Query";
import * as _214 from "./feegrant/v1beta1/query.rpc.Query";
import * as _215 from "./gov/v1/query.rpc.Query";
import * as _216 from "./gov/v1beta1/query.rpc.Query";
import * as _217 from "./group/v1/query.rpc.Query";
import * as _218 from "./mint/v1beta1/query.rpc.Query";
import * as _219 from "./nft/v1beta1/query.rpc.Query";
import * as _220 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _221 from "./params/v1beta1/query.rpc.Query";
import * as _222 from "./staking/v1beta1/query.rpc.Query";
import * as _223 from "./tx/v1beta1/service.rpc.Service";
import * as _224 from "./upgrade/v1beta1/query.rpc.Query";
import * as _225 from "./auth/v1beta1/tx.rpc.msg";
import * as _226 from "./authz/v1beta1/tx.rpc.msg";
import * as _227 from "./bank/v1beta1/tx.rpc.msg";
import * as _228 from "./circuit/v1/tx.rpc.msg";
import * as _229 from "./consensus/v1/tx.rpc.msg";
import * as _230 from "./distribution/v1beta1/tx.rpc.msg";
import * as _231 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _232 from "./gov/v1/tx.rpc.msg";
import * as _233 from "./gov/v1beta1/tx.rpc.msg";
import * as _234 from "./group/v1/tx.rpc.msg";
import * as _235 from "./mint/v1beta1/tx.rpc.msg";
import * as _236 from "./nft/v1beta1/tx.rpc.msg";
import * as _237 from "./staking/v1beta1/tx.rpc.msg";
import * as _238 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _239 from "./vesting/v1beta1/tx.rpc.msg";
import * as _243 from "./lcd";
import * as _244 from "./rpc.query";
import * as _245 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._17
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._18
      };
    }
    export const v1beta1 = {
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._158,
      ..._173,
      ..._188,
      ..._206,
      ..._225
    };
  }
  export namespace authz {
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
      ..._28,
      ..._159,
      ..._174,
      ..._189,
      ..._207,
      ..._226
    };
  }
  export namespace bank {
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
      ..._160,
      ..._175,
      ..._190,
      ..._208,
      ..._227
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._35
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._36,
        ..._191,
        ..._209
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._37
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._38
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._39,
        ..._40,
        ..._192,
        ..._210
      };
    }
    export const v1beta1 = {
      ..._41
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._42
      };
    }
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._43
      };
    }
    export const v1 = {
      ..._44,
      ..._45,
      ..._46,
      ..._161,
      ..._176,
      ..._193,
      ..._211,
      ..._228
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._47
      };
    }
    export const v1 = {
      ..._48,
      ..._49,
      ..._162,
      ..._177,
      ..._194,
      ..._212,
      ..._229
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._50
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._51
    };
    export namespace hd {
      export const v1 = {
        ..._52
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._53
      };
    }
    export const multisig = {
      ..._54
    };
    export const secp256k1 = {
      ..._55
    };
    export const secp256r1 = {
      ..._56
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._57
      };
    }
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._163,
      ..._178,
      ..._195,
      ..._213,
      ..._230
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._62
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._63
      };
    }
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._164,
      ..._179,
      ..._196,
      ..._214,
      ..._231
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._68
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._69
      };
    }
    export const v1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._165,
      ..._180,
      ..._197,
      ..._215,
      ..._232
    };
    export const v1beta1 = {
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._166,
      ..._181,
      ..._198,
      ..._216,
      ..._233
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._78
      };
    }
    export const v1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._167,
      ..._182,
      ..._199,
      ..._217,
      ..._234
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._84
      };
    }
    export const v1beta1 = {
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._168,
      ..._183,
      ..._200,
      ..._218,
      ..._235
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._89
      };
    }
  }
  export namespace nft {
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
      ..._95,
      ..._169,
      ..._184,
      ..._201,
      ..._219,
      ..._236
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._96
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._97,
        ..._220
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._98
      };
    }
    export const v1beta1 = {
      ..._99,
      ..._100,
      ..._202,
      ..._221
    };
  }
  export namespace query {
    export const v1 = {
      ..._101
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._102
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._103
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._104
      };
    }
    export const v1beta1 = {
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._170,
      ..._185,
      ..._203,
      ..._222,
      ..._237
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._110
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._111
      };
    }
    export namespace streaming {
      export const abci = {
        ..._112
      };
    }
    export const v1beta1 = {
      ..._113,
      ..._114
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._115
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._116
      };
    }
    export const v1beta1 = {
      ..._117,
      ..._118,
      ..._204,
      ..._223
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._119
      };
    }
    export const v1beta1 = {
      ..._120,
      ..._121,
      ..._122,
      ..._171,
      ..._186,
      ..._205,
      ..._224,
      ..._238
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._123
      };
    }
    export const v1beta1 = {
      ..._124,
      ..._125,
      ..._172,
      ..._187,
      ..._239
    };
  }
  export const ClientFactory = {
    ..._243,
    ..._244,
    ..._245
  };
}