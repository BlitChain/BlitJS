//@ts-nocheck
import * as _17 from "./auth/v1beta1/auth";
import * as _18 from "./auth/v1beta1/genesis";
import * as _19 from "./auth/v1beta1/query";
import * as _20 from "./authz/v1beta1/authz";
import * as _21 from "./authz/v1beta1/event";
import * as _22 from "./authz/v1beta1/genesis";
import * as _23 from "./authz/v1beta1/query";
import * as _24 from "./authz/v1beta1/tx";
import * as _25 from "./bank/v1beta1/authz";
import * as _26 from "./bank/v1beta1/bank";
import * as _27 from "./bank/v1beta1/genesis";
import * as _28 from "./bank/v1beta1/query";
import * as _29 from "./bank/v1beta1/tx";
import * as _30 from "./base/abci/v1beta1/abci";
import * as _31 from "./base/query/v1beta1/pagination";
import * as _32 from "./base/reflection/v2alpha1/reflection";
import * as _33 from "./base/tendermint/v1beta1/query";
import * as _34 from "./base/v1beta1/coin";
import * as _35 from "./crypto/ed25519/keys";
import * as _36 from "./crypto/hd/v1/hd";
import * as _37 from "./crypto/keyring/v1/record";
import * as _38 from "./crypto/multisig/keys";
import * as _39 from "./crypto/secp256k1/keys";
import * as _40 from "./crypto/secp256r1/keys";
import * as _41 from "./distribution/v1beta1/distribution";
import * as _42 from "./distribution/v1beta1/genesis";
import * as _43 from "./distribution/v1beta1/query";
import * as _44 from "./distribution/v1beta1/tx";
import * as _45 from "./feegrant/v1beta1/feegrant";
import * as _46 from "./feegrant/v1beta1/genesis";
import * as _47 from "./feegrant/v1beta1/query";
import * as _48 from "./feegrant/v1beta1/tx";
import * as _49 from "./gov/v1/genesis";
import * as _50 from "./gov/v1/gov";
import * as _51 from "./gov/v1/query";
import * as _52 from "./gov/v1/tx";
import * as _53 from "./gov/v1beta1/genesis";
import * as _54 from "./gov/v1beta1/gov";
import * as _55 from "./gov/v1beta1/query";
import * as _56 from "./gov/v1beta1/tx";
import * as _57 from "./group/v1/events";
import * as _58 from "./group/v1/genesis";
import * as _59 from "./group/v1/query";
import * as _60 from "./group/v1/tx";
import * as _61 from "./group/v1/types";
import * as _62 from "./mint/v1beta1/genesis";
import * as _63 from "./mint/v1beta1/mint";
import * as _64 from "./mint/v1beta1/query";
import * as _65 from "./nft/v1beta1/event";
import * as _66 from "./nft/v1beta1/genesis";
import * as _67 from "./nft/v1beta1/nft";
import * as _68 from "./nft/v1beta1/query";
import * as _69 from "./nft/v1beta1/tx";
import * as _70 from "./params/v1beta1/params";
import * as _71 from "./params/v1beta1/query";
import * as _72 from "./staking/v1beta1/authz";
import * as _73 from "./staking/v1beta1/genesis";
import * as _74 from "./staking/v1beta1/query";
import * as _75 from "./staking/v1beta1/staking";
import * as _76 from "./staking/v1beta1/tx";
import * as _77 from "./tx/signing/v1beta1/signing";
import * as _78 from "./tx/v1beta1/service";
import * as _79 from "./tx/v1beta1/tx";
import * as _80 from "./upgrade/v1beta1/query";
import * as _81 from "./upgrade/v1beta1/tx";
import * as _82 from "./upgrade/v1beta1/upgrade";
import * as _83 from "./vesting/v1beta1/tx";
import * as _84 from "./vesting/v1beta1/vesting";
import * as _117 from "./authz/v1beta1/tx.amino";
import * as _118 from "./bank/v1beta1/tx.amino";
import * as _119 from "./distribution/v1beta1/tx.amino";
import * as _120 from "./feegrant/v1beta1/tx.amino";
import * as _121 from "./gov/v1/tx.amino";
import * as _122 from "./gov/v1beta1/tx.amino";
import * as _123 from "./group/v1/tx.amino";
import * as _124 from "./nft/v1beta1/tx.amino";
import * as _125 from "./staking/v1beta1/tx.amino";
import * as _126 from "./upgrade/v1beta1/tx.amino";
import * as _127 from "./vesting/v1beta1/tx.amino";
import * as _128 from "./authz/v1beta1/tx.registry";
import * as _129 from "./bank/v1beta1/tx.registry";
import * as _130 from "./distribution/v1beta1/tx.registry";
import * as _131 from "./feegrant/v1beta1/tx.registry";
import * as _132 from "./gov/v1/tx.registry";
import * as _133 from "./gov/v1beta1/tx.registry";
import * as _134 from "./group/v1/tx.registry";
import * as _135 from "./nft/v1beta1/tx.registry";
import * as _136 from "./staking/v1beta1/tx.registry";
import * as _137 from "./upgrade/v1beta1/tx.registry";
import * as _138 from "./vesting/v1beta1/tx.registry";
import * as _139 from "./auth/v1beta1/query.lcd";
import * as _140 from "./authz/v1beta1/query.lcd";
import * as _141 from "./bank/v1beta1/query.lcd";
import * as _142 from "./base/tendermint/v1beta1/query.lcd";
import * as _143 from "./distribution/v1beta1/query.lcd";
import * as _144 from "./feegrant/v1beta1/query.lcd";
import * as _145 from "./gov/v1/query.lcd";
import * as _146 from "./gov/v1beta1/query.lcd";
import * as _147 from "./group/v1/query.lcd";
import * as _148 from "./mint/v1beta1/query.lcd";
import * as _149 from "./nft/v1beta1/query.lcd";
import * as _150 from "./params/v1beta1/query.lcd";
import * as _151 from "./staking/v1beta1/query.lcd";
import * as _152 from "./tx/v1beta1/service.lcd";
import * as _153 from "./upgrade/v1beta1/query.lcd";
import * as _154 from "./auth/v1beta1/query.rpc.Query";
import * as _155 from "./authz/v1beta1/query.rpc.Query";
import * as _156 from "./bank/v1beta1/query.rpc.Query";
import * as _157 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _158 from "./distribution/v1beta1/query.rpc.Query";
import * as _159 from "./feegrant/v1beta1/query.rpc.Query";
import * as _160 from "./gov/v1/query.rpc.Query";
import * as _161 from "./gov/v1beta1/query.rpc.Query";
import * as _162 from "./group/v1/query.rpc.Query";
import * as _163 from "./mint/v1beta1/query.rpc.Query";
import * as _164 from "./nft/v1beta1/query.rpc.Query";
import * as _165 from "./params/v1beta1/query.rpc.Query";
import * as _166 from "./staking/v1beta1/query.rpc.Query";
import * as _167 from "./tx/v1beta1/service.rpc.Service";
import * as _168 from "./upgrade/v1beta1/query.rpc.Query";
import * as _169 from "./authz/v1beta1/tx.rpc.msg";
import * as _170 from "./bank/v1beta1/tx.rpc.msg";
import * as _171 from "./distribution/v1beta1/tx.rpc.msg";
import * as _172 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _173 from "./gov/v1/tx.rpc.msg";
import * as _174 from "./gov/v1beta1/tx.rpc.msg";
import * as _175 from "./group/v1/tx.rpc.msg";
import * as _176 from "./nft/v1beta1/tx.rpc.msg";
import * as _177 from "./staking/v1beta1/tx.rpc.msg";
import * as _178 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _179 from "./vesting/v1beta1/tx.rpc.msg";
import * as _183 from "./lcd";
import * as _184 from "./rpc.query";
import * as _185 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._139,
      ..._154
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._117,
      ..._128,
      ..._140,
      ..._155,
      ..._169
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._118,
      ..._129,
      ..._141,
      ..._156,
      ..._170
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._30
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._31
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._32
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._33,
        ..._142,
        ..._157
      };
    }
    export const v1beta1 = {
      ..._34
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._35
    };
    export namespace hd {
      export const v1 = {
        ..._36
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._37
      };
    }
    export const multisig = {
      ..._38
    };
    export const secp256k1 = {
      ..._39
    };
    export const secp256r1 = {
      ..._40
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._119,
      ..._130,
      ..._143,
      ..._158,
      ..._171
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._120,
      ..._131,
      ..._144,
      ..._159,
      ..._172
    };
  }
  export namespace gov {
    export const v1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._121,
      ..._132,
      ..._145,
      ..._160,
      ..._173
    };
    export const v1beta1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._122,
      ..._133,
      ..._146,
      ..._161,
      ..._174
    };
  }
  export namespace group {
    export const v1 = {
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._123,
      ..._134,
      ..._147,
      ..._162,
      ..._175
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._148,
      ..._163
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._124,
      ..._135,
      ..._149,
      ..._164,
      ..._176
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._150,
      ..._165
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._125,
      ..._136,
      ..._151,
      ..._166,
      ..._177
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._77
      };
    }
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._152,
      ..._167
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._126,
      ..._137,
      ..._153,
      ..._168,
      ..._178
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._127,
      ..._138,
      ..._179
    };
  }
  export const ClientFactory = {
    ..._183,
    ..._184,
    ..._185
  };
}