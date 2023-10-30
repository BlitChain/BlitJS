"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cosmos = void 0;
//@ts-nocheck
const _17 = __importStar(require("./auth/v1beta1/auth"));
const _18 = __importStar(require("./auth/v1beta1/genesis"));
const _19 = __importStar(require("./auth/v1beta1/query"));
const _20 = __importStar(require("./authz/v1beta1/authz"));
const _21 = __importStar(require("./authz/v1beta1/event"));
const _22 = __importStar(require("./authz/v1beta1/genesis"));
const _23 = __importStar(require("./authz/v1beta1/query"));
const _24 = __importStar(require("./authz/v1beta1/tx"));
const _25 = __importStar(require("./bank/v1beta1/authz"));
const _26 = __importStar(require("./bank/v1beta1/bank"));
const _27 = __importStar(require("./bank/v1beta1/genesis"));
const _28 = __importStar(require("./bank/v1beta1/query"));
const _29 = __importStar(require("./bank/v1beta1/tx"));
const _30 = __importStar(require("./base/abci/v1beta1/abci"));
const _31 = __importStar(require("./base/query/v1beta1/pagination"));
const _32 = __importStar(require("./base/reflection/v2alpha1/reflection"));
const _33 = __importStar(require("./base/tendermint/v1beta1/query"));
const _34 = __importStar(require("./base/v1beta1/coin"));
const _35 = __importStar(require("./crypto/ed25519/keys"));
const _36 = __importStar(require("./crypto/hd/v1/hd"));
const _37 = __importStar(require("./crypto/keyring/v1/record"));
const _38 = __importStar(require("./crypto/multisig/keys"));
const _39 = __importStar(require("./crypto/secp256k1/keys"));
const _40 = __importStar(require("./crypto/secp256r1/keys"));
const _41 = __importStar(require("./distribution/v1beta1/distribution"));
const _42 = __importStar(require("./distribution/v1beta1/genesis"));
const _43 = __importStar(require("./distribution/v1beta1/query"));
const _44 = __importStar(require("./distribution/v1beta1/tx"));
const _45 = __importStar(require("./feegrant/v1beta1/feegrant"));
const _46 = __importStar(require("./feegrant/v1beta1/genesis"));
const _47 = __importStar(require("./feegrant/v1beta1/query"));
const _48 = __importStar(require("./feegrant/v1beta1/tx"));
const _49 = __importStar(require("./gov/v1/genesis"));
const _50 = __importStar(require("./gov/v1/gov"));
const _51 = __importStar(require("./gov/v1/query"));
const _52 = __importStar(require("./gov/v1/tx"));
const _53 = __importStar(require("./gov/v1beta1/genesis"));
const _54 = __importStar(require("./gov/v1beta1/gov"));
const _55 = __importStar(require("./gov/v1beta1/query"));
const _56 = __importStar(require("./gov/v1beta1/tx"));
const _57 = __importStar(require("./group/v1/events"));
const _58 = __importStar(require("./group/v1/genesis"));
const _59 = __importStar(require("./group/v1/query"));
const _60 = __importStar(require("./group/v1/tx"));
const _61 = __importStar(require("./group/v1/types"));
const _62 = __importStar(require("./mint/v1beta1/genesis"));
const _63 = __importStar(require("./mint/v1beta1/mint"));
const _64 = __importStar(require("./mint/v1beta1/query"));
const _65 = __importStar(require("./params/v1beta1/params"));
const _66 = __importStar(require("./params/v1beta1/query"));
const _67 = __importStar(require("./staking/v1beta1/authz"));
const _68 = __importStar(require("./staking/v1beta1/genesis"));
const _69 = __importStar(require("./staking/v1beta1/query"));
const _70 = __importStar(require("./staking/v1beta1/staking"));
const _71 = __importStar(require("./staking/v1beta1/tx"));
const _72 = __importStar(require("./tx/signing/v1beta1/signing"));
const _73 = __importStar(require("./tx/v1beta1/service"));
const _74 = __importStar(require("./tx/v1beta1/tx"));
const _75 = __importStar(require("./upgrade/v1beta1/query"));
const _76 = __importStar(require("./upgrade/v1beta1/tx"));
const _77 = __importStar(require("./upgrade/v1beta1/upgrade"));
const _78 = __importStar(require("./vesting/v1beta1/tx"));
const _79 = __importStar(require("./vesting/v1beta1/vesting"));
const _176 = __importStar(require("./authz/v1beta1/tx.amino"));
const _177 = __importStar(require("./bank/v1beta1/tx.amino"));
const _178 = __importStar(require("./distribution/v1beta1/tx.amino"));
const _179 = __importStar(require("./feegrant/v1beta1/tx.amino"));
const _180 = __importStar(require("./gov/v1/tx.amino"));
const _181 = __importStar(require("./gov/v1beta1/tx.amino"));
const _182 = __importStar(require("./group/v1/tx.amino"));
const _183 = __importStar(require("./staking/v1beta1/tx.amino"));
const _184 = __importStar(require("./upgrade/v1beta1/tx.amino"));
const _185 = __importStar(require("./vesting/v1beta1/tx.amino"));
const _186 = __importStar(require("./authz/v1beta1/tx.registry"));
const _187 = __importStar(require("./bank/v1beta1/tx.registry"));
const _188 = __importStar(require("./distribution/v1beta1/tx.registry"));
const _189 = __importStar(require("./feegrant/v1beta1/tx.registry"));
const _190 = __importStar(require("./gov/v1/tx.registry"));
const _191 = __importStar(require("./gov/v1beta1/tx.registry"));
const _192 = __importStar(require("./group/v1/tx.registry"));
const _193 = __importStar(require("./staking/v1beta1/tx.registry"));
const _194 = __importStar(require("./upgrade/v1beta1/tx.registry"));
const _195 = __importStar(require("./vesting/v1beta1/tx.registry"));
const _196 = __importStar(require("./auth/v1beta1/query.lcd"));
const _197 = __importStar(require("./authz/v1beta1/query.lcd"));
const _198 = __importStar(require("./bank/v1beta1/query.lcd"));
const _199 = __importStar(require("./base/tendermint/v1beta1/query.lcd"));
const _200 = __importStar(require("./distribution/v1beta1/query.lcd"));
const _201 = __importStar(require("./feegrant/v1beta1/query.lcd"));
const _202 = __importStar(require("./gov/v1/query.lcd"));
const _203 = __importStar(require("./gov/v1beta1/query.lcd"));
const _204 = __importStar(require("./group/v1/query.lcd"));
const _205 = __importStar(require("./mint/v1beta1/query.lcd"));
const _206 = __importStar(require("./params/v1beta1/query.lcd"));
const _207 = __importStar(require("./staking/v1beta1/query.lcd"));
const _208 = __importStar(require("./tx/v1beta1/service.lcd"));
const _209 = __importStar(require("./upgrade/v1beta1/query.lcd"));
const _210 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
const _211 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _212 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _213 = __importStar(require("./base/tendermint/v1beta1/query.rpc.Service"));
const _214 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _215 = __importStar(require("./feegrant/v1beta1/query.rpc.Query"));
const _216 = __importStar(require("./gov/v1/query.rpc.Query"));
const _217 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _218 = __importStar(require("./group/v1/query.rpc.Query"));
const _219 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _220 = __importStar(require("./params/v1beta1/query.rpc.Query"));
const _221 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _222 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _223 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _224 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _225 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _226 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _227 = __importStar(require("./feegrant/v1beta1/tx.rpc.msg"));
const _228 = __importStar(require("./gov/v1/tx.rpc.msg"));
const _229 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _230 = __importStar(require("./group/v1/tx.rpc.msg"));
const _231 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _232 = __importStar(require("./upgrade/v1beta1/tx.rpc.msg"));
const _233 = __importStar(require("./vesting/v1beta1/tx.rpc.msg"));
const _299 = __importStar(require("./lcd"));
const _300 = __importStar(require("./rpc.query"));
const _301 = __importStar(require("./rpc.tx"));
var cosmos;
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
})(cosmos || (exports.cosmos = cosmos = {}));
//# sourceMappingURL=bundle.js.map