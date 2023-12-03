//@ts-nocheck
import * as _18 from "./auth/v1beta1/auth";
import * as _19 from "./auth/v1beta1/genesis";
import * as _20 from "./auth/v1beta1/query";
import * as _21 from "./authz/v1beta1/authz";
import * as _22 from "./authz/v1beta1/event";
import * as _23 from "./authz/v1beta1/genesis";
import * as _24 from "./authz/v1beta1/query";
import * as _25 from "./authz/v1beta1/tx";
import * as _26 from "./bank/v1beta1/authz";
import * as _27 from "./bank/v1beta1/bank";
import * as _28 from "./bank/v1beta1/genesis";
import * as _29 from "./bank/v1beta1/query";
import * as _30 from "./bank/v1beta1/tx";
import * as _31 from "./base/abci/v1beta1/abci";
import * as _32 from "./base/query/v1beta1/pagination";
import * as _33 from "./base/reflection/v2alpha1/reflection";
import * as _34 from "./base/tendermint/v1beta1/query";
import * as _35 from "./base/v1beta1/coin";
import * as _36 from "./crypto/ed25519/keys";
import * as _37 from "./crypto/hd/v1/hd";
import * as _38 from "./crypto/keyring/v1/record";
import * as _39 from "./crypto/multisig/keys";
import * as _40 from "./crypto/secp256k1/keys";
import * as _41 from "./crypto/secp256r1/keys";
import * as _42 from "./distribution/v1beta1/distribution";
import * as _43 from "./distribution/v1beta1/genesis";
import * as _44 from "./distribution/v1beta1/query";
import * as _45 from "./distribution/v1beta1/tx";
import * as _46 from "./feegrant/v1beta1/feegrant";
import * as _47 from "./feegrant/v1beta1/genesis";
import * as _48 from "./feegrant/v1beta1/query";
import * as _49 from "./feegrant/v1beta1/tx";
import * as _50 from "./gov/v1/genesis";
import * as _51 from "./gov/v1/gov";
import * as _52 from "./gov/v1/query";
import * as _53 from "./gov/v1/tx";
import * as _54 from "./gov/v1beta1/genesis";
import * as _55 from "./gov/v1beta1/gov";
import * as _56 from "./gov/v1beta1/query";
import * as _57 from "./gov/v1beta1/tx";
import * as _58 from "./group/v1/events";
import * as _59 from "./group/v1/genesis";
import * as _60 from "./group/v1/query";
import * as _61 from "./group/v1/tx";
import * as _62 from "./group/v1/types";
import * as _63 from "./ics23/v1/proofs";
import * as _64 from "./mint/v1beta1/genesis";
import * as _65 from "./mint/v1beta1/mint";
import * as _66 from "./mint/v1beta1/query";
import * as _67 from "./nft/v1beta1/event";
import * as _68 from "./nft/v1beta1/genesis";
import * as _69 from "./nft/v1beta1/nft";
import * as _70 from "./nft/v1beta1/query";
import * as _71 from "./nft/v1beta1/tx";
import * as _72 from "./params/v1beta1/params";
import * as _73 from "./params/v1beta1/query";
import * as _74 from "./staking/v1beta1/authz";
import * as _75 from "./staking/v1beta1/genesis";
import * as _76 from "./staking/v1beta1/query";
import * as _77 from "./staking/v1beta1/staking";
import * as _78 from "./staking/v1beta1/tx";
import * as _79 from "./tx/signing/v1beta1/signing";
import * as _80 from "./tx/v1beta1/service";
import * as _81 from "./tx/v1beta1/tx";
import * as _82 from "./upgrade/v1beta1/query";
import * as _83 from "./upgrade/v1beta1/tx";
import * as _84 from "./upgrade/v1beta1/upgrade";
import * as _85 from "./vesting/v1beta1/tx";
import * as _86 from "./vesting/v1beta1/vesting";
import * as _152 from "./authz/v1beta1/tx.amino";
import * as _153 from "./bank/v1beta1/tx.amino";
import * as _154 from "./distribution/v1beta1/tx.amino";
import * as _155 from "./feegrant/v1beta1/tx.amino";
import * as _156 from "./gov/v1/tx.amino";
import * as _157 from "./gov/v1beta1/tx.amino";
import * as _158 from "./group/v1/tx.amino";
import * as _159 from "./nft/v1beta1/tx.amino";
import * as _160 from "./staking/v1beta1/tx.amino";
import * as _161 from "./upgrade/v1beta1/tx.amino";
import * as _162 from "./vesting/v1beta1/tx.amino";
import * as _163 from "./authz/v1beta1/tx.registry";
import * as _164 from "./bank/v1beta1/tx.registry";
import * as _165 from "./distribution/v1beta1/tx.registry";
import * as _166 from "./feegrant/v1beta1/tx.registry";
import * as _167 from "./gov/v1/tx.registry";
import * as _168 from "./gov/v1beta1/tx.registry";
import * as _169 from "./group/v1/tx.registry";
import * as _170 from "./nft/v1beta1/tx.registry";
import * as _171 from "./staking/v1beta1/tx.registry";
import * as _172 from "./upgrade/v1beta1/tx.registry";
import * as _173 from "./vesting/v1beta1/tx.registry";
import * as _174 from "./auth/v1beta1/query.lcd";
import * as _175 from "./authz/v1beta1/query.lcd";
import * as _176 from "./bank/v1beta1/query.lcd";
import * as _177 from "./base/tendermint/v1beta1/query.lcd";
import * as _178 from "./distribution/v1beta1/query.lcd";
import * as _179 from "./feegrant/v1beta1/query.lcd";
import * as _180 from "./gov/v1/query.lcd";
import * as _181 from "./gov/v1beta1/query.lcd";
import * as _182 from "./group/v1/query.lcd";
import * as _183 from "./mint/v1beta1/query.lcd";
import * as _184 from "./nft/v1beta1/query.lcd";
import * as _185 from "./params/v1beta1/query.lcd";
import * as _186 from "./staking/v1beta1/query.lcd";
import * as _187 from "./tx/v1beta1/service.lcd";
import * as _188 from "./upgrade/v1beta1/query.lcd";
import * as _189 from "./auth/v1beta1/query.rpc.Query";
import * as _190 from "./authz/v1beta1/query.rpc.Query";
import * as _191 from "./bank/v1beta1/query.rpc.Query";
import * as _192 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _193 from "./distribution/v1beta1/query.rpc.Query";
import * as _194 from "./feegrant/v1beta1/query.rpc.Query";
import * as _195 from "./gov/v1/query.rpc.Query";
import * as _196 from "./gov/v1beta1/query.rpc.Query";
import * as _197 from "./group/v1/query.rpc.Query";
import * as _198 from "./mint/v1beta1/query.rpc.Query";
import * as _199 from "./nft/v1beta1/query.rpc.Query";
import * as _200 from "./params/v1beta1/query.rpc.Query";
import * as _201 from "./staking/v1beta1/query.rpc.Query";
import * as _202 from "./tx/v1beta1/service.rpc.Service";
import * as _203 from "./upgrade/v1beta1/query.rpc.Query";
import * as _204 from "./authz/v1beta1/tx.rpc.msg";
import * as _205 from "./bank/v1beta1/tx.rpc.msg";
import * as _206 from "./distribution/v1beta1/tx.rpc.msg";
import * as _207 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _208 from "./gov/v1/tx.rpc.msg";
import * as _209 from "./gov/v1beta1/tx.rpc.msg";
import * as _210 from "./group/v1/tx.rpc.msg";
import * as _211 from "./nft/v1beta1/tx.rpc.msg";
import * as _212 from "./staking/v1beta1/tx.rpc.msg";
import * as _213 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _214 from "./vesting/v1beta1/tx.rpc.msg";
import * as _248 from "./lcd";
import * as _249 from "./rpc.query";
import * as _250 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._18,
      ..._19,
      ..._20,
      ..._174,
      ..._189
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._152,
      ..._163,
      ..._175,
      ..._190,
      ..._204
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._153,
      ..._164,
      ..._176,
      ..._191,
      ..._205
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._31
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._32
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._33
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._34,
        ..._177,
        ..._192
      };
    }
    export const v1beta1 = {
      ..._35
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._36
    };
    export namespace hd {
      export const v1 = {
        ..._37
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._38
      };
    }
    export const multisig = {
      ..._39
    };
    export const secp256k1 = {
      ..._40
    };
    export const secp256r1 = {
      ..._41
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._154,
      ..._165,
      ..._178,
      ..._193,
      ..._206
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._155,
      ..._166,
      ..._179,
      ..._194,
      ..._207
    };
  }
  export namespace gov {
    export const v1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._156,
      ..._167,
      ..._180,
      ..._195,
      ..._208
    };
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._157,
      ..._168,
      ..._181,
      ..._196,
      ..._209
    };
  }
  export namespace group {
    export const v1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._158,
      ..._169,
      ..._182,
      ..._197,
      ..._210
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._63
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._183,
      ..._198
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._159,
      ..._170,
      ..._184,
      ..._199,
      ..._211
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._185,
      ..._200
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._160,
      ..._171,
      ..._186,
      ..._201,
      ..._212
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._79
      };
    }
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._187,
      ..._202
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._161,
      ..._172,
      ..._188,
      ..._203,
      ..._213
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._85,
      ..._86,
      ..._162,
      ..._173,
      ..._214
    };
  }
  export const ClientFactory = {
    ..._248,
    ..._249,
    ..._250
  };
}