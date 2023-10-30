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
import * as _65 from "./params/v1beta1/params";
import * as _66 from "./params/v1beta1/query";
import * as _67 from "./staking/v1beta1/authz";
import * as _68 from "./staking/v1beta1/genesis";
import * as _69 from "./staking/v1beta1/query";
import * as _70 from "./staking/v1beta1/staking";
import * as _71 from "./staking/v1beta1/tx";
import * as _72 from "./tx/signing/v1beta1/signing";
import * as _73 from "./tx/v1beta1/service";
import * as _74 from "./tx/v1beta1/tx";
import * as _75 from "./upgrade/v1beta1/query";
import * as _76 from "./upgrade/v1beta1/tx";
import * as _77 from "./upgrade/v1beta1/upgrade";
import * as _78 from "./vesting/v1beta1/tx";
import * as _79 from "./vesting/v1beta1/vesting";
import * as _176 from "./authz/v1beta1/tx.amino";
import * as _177 from "./bank/v1beta1/tx.amino";
import * as _178 from "./distribution/v1beta1/tx.amino";
import * as _179 from "./feegrant/v1beta1/tx.amino";
import * as _180 from "./gov/v1/tx.amino";
import * as _181 from "./gov/v1beta1/tx.amino";
import * as _182 from "./group/v1/tx.amino";
import * as _183 from "./staking/v1beta1/tx.amino";
import * as _184 from "./upgrade/v1beta1/tx.amino";
import * as _185 from "./vesting/v1beta1/tx.amino";
import * as _186 from "./authz/v1beta1/tx.registry";
import * as _187 from "./bank/v1beta1/tx.registry";
import * as _188 from "./distribution/v1beta1/tx.registry";
import * as _189 from "./feegrant/v1beta1/tx.registry";
import * as _190 from "./gov/v1/tx.registry";
import * as _191 from "./gov/v1beta1/tx.registry";
import * as _192 from "./group/v1/tx.registry";
import * as _193 from "./staking/v1beta1/tx.registry";
import * as _194 from "./upgrade/v1beta1/tx.registry";
import * as _195 from "./vesting/v1beta1/tx.registry";
import * as _196 from "./auth/v1beta1/query.lcd";
import * as _197 from "./authz/v1beta1/query.lcd";
import * as _198 from "./bank/v1beta1/query.lcd";
import * as _199 from "./base/tendermint/v1beta1/query.lcd";
import * as _200 from "./distribution/v1beta1/query.lcd";
import * as _201 from "./feegrant/v1beta1/query.lcd";
import * as _202 from "./gov/v1/query.lcd";
import * as _203 from "./gov/v1beta1/query.lcd";
import * as _204 from "./group/v1/query.lcd";
import * as _205 from "./mint/v1beta1/query.lcd";
import * as _206 from "./params/v1beta1/query.lcd";
import * as _207 from "./staking/v1beta1/query.lcd";
import * as _208 from "./tx/v1beta1/service.lcd";
import * as _209 from "./upgrade/v1beta1/query.lcd";
import * as _210 from "./auth/v1beta1/query.rpc.Query";
import * as _211 from "./authz/v1beta1/query.rpc.Query";
import * as _212 from "./bank/v1beta1/query.rpc.Query";
import * as _213 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _214 from "./distribution/v1beta1/query.rpc.Query";
import * as _215 from "./feegrant/v1beta1/query.rpc.Query";
import * as _216 from "./gov/v1/query.rpc.Query";
import * as _217 from "./gov/v1beta1/query.rpc.Query";
import * as _218 from "./group/v1/query.rpc.Query";
import * as _219 from "./mint/v1beta1/query.rpc.Query";
import * as _220 from "./params/v1beta1/query.rpc.Query";
import * as _221 from "./staking/v1beta1/query.rpc.Query";
import * as _222 from "./tx/v1beta1/service.rpc.Service";
import * as _223 from "./upgrade/v1beta1/query.rpc.Query";
import * as _224 from "./authz/v1beta1/tx.rpc.msg";
import * as _225 from "./bank/v1beta1/tx.rpc.msg";
import * as _226 from "./distribution/v1beta1/tx.rpc.msg";
import * as _227 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _228 from "./gov/v1/tx.rpc.msg";
import * as _229 from "./gov/v1beta1/tx.rpc.msg";
import * as _230 from "./group/v1/tx.rpc.msg";
import * as _231 from "./staking/v1beta1/tx.rpc.msg";
import * as _232 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _233 from "./vesting/v1beta1/tx.rpc.msg";
import * as _299 from "./lcd";
import * as _300 from "./rpc.query";
import * as _301 from "./rpc.tx";
export var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._17,
            ..._18,
            ..._19,
            ..._196,
            ..._210
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        authz.v1beta1 = {
            ..._20,
            ..._21,
            ..._22,
            ..._23,
            ..._24,
            ..._176,
            ..._186,
            ..._197,
            ..._211,
            ..._224
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        bank.v1beta1 = {
            ..._25,
            ..._26,
            ..._27,
            ..._28,
            ..._29,
            ..._177,
            ..._187,
            ..._198,
            ..._212,
            ..._225
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._30
            };
        })(abci = base.abci || (base.abci = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._31
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v2alpha1 = {
                ..._32
            };
        })(reflection = base.reflection || (base.reflection = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1beta1 = {
                ..._33,
                ..._199,
                ..._213
            };
        })(tendermint = base.tendermint || (base.tendermint = {}));
        base.v1beta1 = {
            ..._34
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._35
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._36
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._37
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._38
        };
        crypto.secp256k1 = {
            ..._39
        };
        crypto.secp256r1 = {
            ..._40
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        distribution.v1beta1 = {
            ..._41,
            ..._42,
            ..._43,
            ..._44,
            ..._178,
            ..._188,
            ..._200,
            ..._214,
            ..._226
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let feegrant;
    (function (feegrant) {
        feegrant.v1beta1 = {
            ..._45,
            ..._46,
            ..._47,
            ..._48,
            ..._179,
            ..._189,
            ..._201,
            ..._215,
            ..._227
        };
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    let gov;
    (function (gov) {
        gov.v1 = {
            ..._49,
            ..._50,
            ..._51,
            ..._52,
            ..._180,
            ..._190,
            ..._202,
            ..._216,
            ..._228
        };
        gov.v1beta1 = {
            ..._53,
            ..._54,
            ..._55,
            ..._56,
            ..._181,
            ..._191,
            ..._203,
            ..._217,
            ..._229
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let group;
    (function (group) {
        group.v1 = {
            ..._57,
            ..._58,
            ..._59,
            ..._60,
            ..._61,
            ..._182,
            ..._192,
            ..._204,
            ..._218,
            ..._230
        };
    })(group = cosmos.group || (cosmos.group = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._62,
            ..._63,
            ..._64,
            ..._205,
            ..._219
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let params;
    (function (params) {
        params.v1beta1 = {
            ..._65,
            ..._66,
            ..._206,
            ..._220
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._67,
            ..._68,
            ..._69,
            ..._70,
            ..._71,
            ..._183,
            ..._193,
            ..._207,
            ..._221,
            ..._231
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._72
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._73,
            ..._74,
            ..._208,
            ..._222
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._75,
            ..._76,
            ..._77,
            ..._184,
            ..._194,
            ..._209,
            ..._223,
            ..._232
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        vesting.v1beta1 = {
            ..._78,
            ..._79,
            ..._185,
            ..._195,
            ..._233
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._299,
        ..._300,
        ..._301
    };
})(cosmos || (cosmos = {}));
//# sourceMappingURL=bundle.js.map