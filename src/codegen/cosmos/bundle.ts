//@ts-nocheck
import * as _21 from "./auth/v1beta1/auth";
import * as _22 from "./auth/v1beta1/genesis";
import * as _23 from "./auth/v1beta1/query";
import * as _24 from "./authz/v1beta1/authz";
import * as _25 from "./authz/v1beta1/event";
import * as _26 from "./authz/v1beta1/genesis";
import * as _27 from "./authz/v1beta1/query";
import * as _28 from "./authz/v1beta1/tx";
import * as _29 from "./bank/v1beta1/authz";
import * as _30 from "./bank/v1beta1/bank";
import * as _31 from "./bank/v1beta1/genesis";
import * as _32 from "./bank/v1beta1/query";
import * as _33 from "./bank/v1beta1/tx";
import * as _34 from "./base/abci/v1beta1/abci";
import * as _35 from "./base/query/v1beta1/pagination";
import * as _36 from "./base/reflection/v2alpha1/reflection";
import * as _37 from "./base/tendermint/v1beta1/query";
import * as _38 from "./base/v1beta1/coin";
import * as _39 from "./crypto/ed25519/keys";
import * as _40 from "./crypto/hd/v1/hd";
import * as _41 from "./crypto/keyring/v1/record";
import * as _42 from "./crypto/multisig/keys";
import * as _43 from "./crypto/secp256k1/keys";
import * as _44 from "./crypto/secp256r1/keys";
import * as _45 from "./distribution/v1beta1/distribution";
import * as _46 from "./distribution/v1beta1/genesis";
import * as _47 from "./distribution/v1beta1/query";
import * as _48 from "./distribution/v1beta1/tx";
import * as _49 from "./feegrant/v1beta1/feegrant";
import * as _50 from "./feegrant/v1beta1/genesis";
import * as _51 from "./feegrant/v1beta1/query";
import * as _52 from "./feegrant/v1beta1/tx";
import * as _53 from "./gov/v1/genesis";
import * as _54 from "./gov/v1/gov";
import * as _55 from "./gov/v1/query";
import * as _56 from "./gov/v1/tx";
import * as _57 from "./gov/v1beta1/genesis";
import * as _58 from "./gov/v1beta1/gov";
import * as _59 from "./gov/v1beta1/query";
import * as _60 from "./gov/v1beta1/tx";
import * as _61 from "./group/v1/events";
import * as _62 from "./group/v1/genesis";
import * as _63 from "./group/v1/query";
import * as _64 from "./group/v1/tx";
import * as _65 from "./group/v1/types";
import * as _66 from "./mint/v1beta1/genesis";
import * as _67 from "./mint/v1beta1/mint";
import * as _68 from "./mint/v1beta1/query";
import * as _69 from "./params/v1beta1/params";
import * as _70 from "./params/v1beta1/query";
import * as _71 from "./staking/v1beta1/authz";
import * as _72 from "./staking/v1beta1/genesis";
import * as _73 from "./staking/v1beta1/query";
import * as _74 from "./staking/v1beta1/staking";
import * as _75 from "./staking/v1beta1/tx";
import * as _76 from "./tx/signing/v1beta1/signing";
import * as _77 from "./tx/v1beta1/service";
import * as _78 from "./tx/v1beta1/tx";
import * as _79 from "./upgrade/v1beta1/query";
import * as _80 from "./upgrade/v1beta1/tx";
import * as _81 from "./upgrade/v1beta1/upgrade";
import * as _82 from "./vesting/v1beta1/tx";
import * as _83 from "./vesting/v1beta1/vesting";
import * as _185 from "./authz/v1beta1/tx.amino";
import * as _186 from "./bank/v1beta1/tx.amino";
import * as _187 from "./distribution/v1beta1/tx.amino";
import * as _188 from "./feegrant/v1beta1/tx.amino";
import * as _189 from "./gov/v1/tx.amino";
import * as _190 from "./gov/v1beta1/tx.amino";
import * as _191 from "./group/v1/tx.amino";
import * as _192 from "./staking/v1beta1/tx.amino";
import * as _193 from "./upgrade/v1beta1/tx.amino";
import * as _194 from "./vesting/v1beta1/tx.amino";
import * as _195 from "./authz/v1beta1/tx.registry";
import * as _196 from "./bank/v1beta1/tx.registry";
import * as _197 from "./distribution/v1beta1/tx.registry";
import * as _198 from "./feegrant/v1beta1/tx.registry";
import * as _199 from "./gov/v1/tx.registry";
import * as _200 from "./gov/v1beta1/tx.registry";
import * as _201 from "./group/v1/tx.registry";
import * as _202 from "./staking/v1beta1/tx.registry";
import * as _203 from "./upgrade/v1beta1/tx.registry";
import * as _204 from "./vesting/v1beta1/tx.registry";
import * as _205 from "./auth/v1beta1/query.lcd";
import * as _206 from "./authz/v1beta1/query.lcd";
import * as _207 from "./bank/v1beta1/query.lcd";
import * as _208 from "./base/tendermint/v1beta1/query.lcd";
import * as _209 from "./distribution/v1beta1/query.lcd";
import * as _210 from "./feegrant/v1beta1/query.lcd";
import * as _211 from "./gov/v1/query.lcd";
import * as _212 from "./gov/v1beta1/query.lcd";
import * as _213 from "./group/v1/query.lcd";
import * as _214 from "./mint/v1beta1/query.lcd";
import * as _215 from "./params/v1beta1/query.lcd";
import * as _216 from "./staking/v1beta1/query.lcd";
import * as _217 from "./tx/v1beta1/service.lcd";
import * as _218 from "./upgrade/v1beta1/query.lcd";
import * as _219 from "./auth/v1beta1/query.rpc.Query";
import * as _220 from "./authz/v1beta1/query.rpc.Query";
import * as _221 from "./bank/v1beta1/query.rpc.Query";
import * as _222 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _223 from "./distribution/v1beta1/query.rpc.Query";
import * as _224 from "./feegrant/v1beta1/query.rpc.Query";
import * as _225 from "./gov/v1/query.rpc.Query";
import * as _226 from "./gov/v1beta1/query.rpc.Query";
import * as _227 from "./group/v1/query.rpc.Query";
import * as _228 from "./mint/v1beta1/query.rpc.Query";
import * as _229 from "./params/v1beta1/query.rpc.Query";
import * as _230 from "./staking/v1beta1/query.rpc.Query";
import * as _231 from "./tx/v1beta1/service.rpc.Service";
import * as _232 from "./upgrade/v1beta1/query.rpc.Query";
import * as _233 from "./authz/v1beta1/tx.rpc.msg";
import * as _234 from "./bank/v1beta1/tx.rpc.msg";
import * as _235 from "./distribution/v1beta1/tx.rpc.msg";
import * as _236 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _237 from "./gov/v1/tx.rpc.msg";
import * as _238 from "./gov/v1beta1/tx.rpc.msg";
import * as _239 from "./group/v1/tx.rpc.msg";
import * as _240 from "./staking/v1beta1/tx.rpc.msg";
import * as _241 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _242 from "./vesting/v1beta1/tx.rpc.msg";
import * as _308 from "./lcd";
import * as _309 from "./rpc.query";
import * as _310 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._205,
      ..._219
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._185,
      ..._195,
      ..._206,
      ..._220,
      ..._233
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._186,
      ..._196,
      ..._207,
      ..._221,
      ..._234
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._34
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._35
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._36
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._37,
        ..._208,
        ..._222
      };
    }
    export const v1beta1 = {
      ..._38
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._39
    };
    export namespace hd {
      export const v1 = {
        ..._40
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._41
      };
    }
    export const multisig = {
      ..._42
    };
    export const secp256k1 = {
      ..._43
    };
    export const secp256r1 = {
      ..._44
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._187,
      ..._197,
      ..._209,
      ..._223,
      ..._235
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._188,
      ..._198,
      ..._210,
      ..._224,
      ..._236
    };
  }
  export namespace gov {
    export const v1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._189,
      ..._199,
      ..._211,
      ..._225,
      ..._237
    };
    export const v1beta1 = {
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._190,
      ..._200,
      ..._212,
      ..._226,
      ..._238
    };
  }
  export namespace group {
    export const v1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._191,
      ..._201,
      ..._213,
      ..._227,
      ..._239
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._214,
      ..._228
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._215,
      ..._229
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._192,
      ..._202,
      ..._216,
      ..._230,
      ..._240
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._76
      };
    }
    export const v1beta1 = {
      ..._77,
      ..._78,
      ..._217,
      ..._231
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._193,
      ..._203,
      ..._218,
      ..._232,
      ..._241
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._194,
      ..._204,
      ..._242
    };
  }
  export const ClientFactory = {
    ..._308,
    ..._309,
    ..._310
  };
}