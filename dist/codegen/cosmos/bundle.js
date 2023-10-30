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
const _21 = __importStar(require("./auth/v1beta1/auth"));
const _22 = __importStar(require("./auth/v1beta1/genesis"));
const _23 = __importStar(require("./auth/v1beta1/query"));
const _24 = __importStar(require("./authz/v1beta1/authz"));
const _25 = __importStar(require("./authz/v1beta1/event"));
const _26 = __importStar(require("./authz/v1beta1/genesis"));
const _27 = __importStar(require("./authz/v1beta1/query"));
const _28 = __importStar(require("./authz/v1beta1/tx"));
const _29 = __importStar(require("./bank/v1beta1/authz"));
const _30 = __importStar(require("./bank/v1beta1/bank"));
const _31 = __importStar(require("./bank/v1beta1/genesis"));
const _32 = __importStar(require("./bank/v1beta1/query"));
const _33 = __importStar(require("./bank/v1beta1/tx"));
const _34 = __importStar(require("./base/abci/v1beta1/abci"));
const _35 = __importStar(require("./base/query/v1beta1/pagination"));
const _36 = __importStar(require("./base/reflection/v2alpha1/reflection"));
const _37 = __importStar(require("./base/tendermint/v1beta1/query"));
const _38 = __importStar(require("./base/v1beta1/coin"));
const _39 = __importStar(require("./crypto/ed25519/keys"));
const _40 = __importStar(require("./crypto/hd/v1/hd"));
const _41 = __importStar(require("./crypto/keyring/v1/record"));
const _42 = __importStar(require("./crypto/multisig/keys"));
const _43 = __importStar(require("./crypto/secp256k1/keys"));
const _44 = __importStar(require("./crypto/secp256r1/keys"));
const _45 = __importStar(require("./distribution/v1beta1/distribution"));
const _46 = __importStar(require("./distribution/v1beta1/genesis"));
const _47 = __importStar(require("./distribution/v1beta1/query"));
const _48 = __importStar(require("./distribution/v1beta1/tx"));
const _49 = __importStar(require("./feegrant/v1beta1/feegrant"));
const _50 = __importStar(require("./feegrant/v1beta1/genesis"));
const _51 = __importStar(require("./feegrant/v1beta1/query"));
const _52 = __importStar(require("./feegrant/v1beta1/tx"));
const _53 = __importStar(require("./gov/v1/genesis"));
const _54 = __importStar(require("./gov/v1/gov"));
const _55 = __importStar(require("./gov/v1/query"));
const _56 = __importStar(require("./gov/v1/tx"));
const _57 = __importStar(require("./gov/v1beta1/genesis"));
const _58 = __importStar(require("./gov/v1beta1/gov"));
const _59 = __importStar(require("./gov/v1beta1/query"));
const _60 = __importStar(require("./gov/v1beta1/tx"));
const _61 = __importStar(require("./group/v1/events"));
const _62 = __importStar(require("./group/v1/genesis"));
const _63 = __importStar(require("./group/v1/query"));
const _64 = __importStar(require("./group/v1/tx"));
const _65 = __importStar(require("./group/v1/types"));
const _66 = __importStar(require("./mint/v1beta1/genesis"));
const _67 = __importStar(require("./mint/v1beta1/mint"));
const _68 = __importStar(require("./mint/v1beta1/query"));
const _69 = __importStar(require("./params/v1beta1/params"));
const _70 = __importStar(require("./params/v1beta1/query"));
const _71 = __importStar(require("./staking/v1beta1/authz"));
const _72 = __importStar(require("./staking/v1beta1/genesis"));
const _73 = __importStar(require("./staking/v1beta1/query"));
const _74 = __importStar(require("./staking/v1beta1/staking"));
const _75 = __importStar(require("./staking/v1beta1/tx"));
const _76 = __importStar(require("./tx/signing/v1beta1/signing"));
const _77 = __importStar(require("./tx/v1beta1/service"));
const _78 = __importStar(require("./tx/v1beta1/tx"));
const _79 = __importStar(require("./upgrade/v1beta1/query"));
const _80 = __importStar(require("./upgrade/v1beta1/tx"));
const _81 = __importStar(require("./upgrade/v1beta1/upgrade"));
const _82 = __importStar(require("./vesting/v1beta1/tx"));
const _83 = __importStar(require("./vesting/v1beta1/vesting"));
const _185 = __importStar(require("./authz/v1beta1/tx.amino"));
const _186 = __importStar(require("./bank/v1beta1/tx.amino"));
const _187 = __importStar(require("./distribution/v1beta1/tx.amino"));
const _188 = __importStar(require("./feegrant/v1beta1/tx.amino"));
const _189 = __importStar(require("./gov/v1/tx.amino"));
const _190 = __importStar(require("./gov/v1beta1/tx.amino"));
const _191 = __importStar(require("./group/v1/tx.amino"));
const _192 = __importStar(require("./staking/v1beta1/tx.amino"));
const _193 = __importStar(require("./upgrade/v1beta1/tx.amino"));
const _194 = __importStar(require("./vesting/v1beta1/tx.amino"));
const _195 = __importStar(require("./authz/v1beta1/tx.registry"));
const _196 = __importStar(require("./bank/v1beta1/tx.registry"));
const _197 = __importStar(require("./distribution/v1beta1/tx.registry"));
const _198 = __importStar(require("./feegrant/v1beta1/tx.registry"));
const _199 = __importStar(require("./gov/v1/tx.registry"));
const _200 = __importStar(require("./gov/v1beta1/tx.registry"));
const _201 = __importStar(require("./group/v1/tx.registry"));
const _202 = __importStar(require("./staking/v1beta1/tx.registry"));
const _203 = __importStar(require("./upgrade/v1beta1/tx.registry"));
const _204 = __importStar(require("./vesting/v1beta1/tx.registry"));
const _205 = __importStar(require("./auth/v1beta1/query.lcd"));
const _206 = __importStar(require("./authz/v1beta1/query.lcd"));
const _207 = __importStar(require("./bank/v1beta1/query.lcd"));
const _208 = __importStar(require("./base/tendermint/v1beta1/query.lcd"));
const _209 = __importStar(require("./distribution/v1beta1/query.lcd"));
const _210 = __importStar(require("./feegrant/v1beta1/query.lcd"));
const _211 = __importStar(require("./gov/v1/query.lcd"));
const _212 = __importStar(require("./gov/v1beta1/query.lcd"));
const _213 = __importStar(require("./group/v1/query.lcd"));
const _214 = __importStar(require("./mint/v1beta1/query.lcd"));
const _215 = __importStar(require("./params/v1beta1/query.lcd"));
const _216 = __importStar(require("./staking/v1beta1/query.lcd"));
const _217 = __importStar(require("./tx/v1beta1/service.lcd"));
const _218 = __importStar(require("./upgrade/v1beta1/query.lcd"));
const _219 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
const _220 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _221 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _222 = __importStar(require("./base/tendermint/v1beta1/query.rpc.Service"));
const _223 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _224 = __importStar(require("./feegrant/v1beta1/query.rpc.Query"));
const _225 = __importStar(require("./gov/v1/query.rpc.Query"));
const _226 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _227 = __importStar(require("./group/v1/query.rpc.Query"));
const _228 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _229 = __importStar(require("./params/v1beta1/query.rpc.Query"));
const _230 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _231 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _232 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _233 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _234 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _235 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _236 = __importStar(require("./feegrant/v1beta1/tx.rpc.msg"));
const _237 = __importStar(require("./gov/v1/tx.rpc.msg"));
const _238 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _239 = __importStar(require("./group/v1/tx.rpc.msg"));
const _240 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _241 = __importStar(require("./upgrade/v1beta1/tx.rpc.msg"));
const _242 = __importStar(require("./vesting/v1beta1/tx.rpc.msg"));
const _308 = __importStar(require("./lcd"));
const _309 = __importStar(require("./rpc.query"));
const _310 = __importStar(require("./rpc.tx"));
var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._21,
            ..._22,
            ..._23,
            ..._205,
            ..._219
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        authz.v1beta1 = {
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
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        bank.v1beta1 = {
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
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._34
            };
        })(abci = base.abci || (base.abci = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._35
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v2alpha1 = {
                ..._36
            };
        })(reflection = base.reflection || (base.reflection = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1beta1 = {
                ..._37,
                ..._208,
                ..._222
            };
        })(tendermint = base.tendermint || (base.tendermint = {}));
        base.v1beta1 = {
            ..._38
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._39
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._40
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._41
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._42
        };
        crypto.secp256k1 = {
            ..._43
        };
        crypto.secp256r1 = {
            ..._44
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        distribution.v1beta1 = {
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
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let feegrant;
    (function (feegrant) {
        feegrant.v1beta1 = {
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
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    let gov;
    (function (gov) {
        gov.v1 = {
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
        gov.v1beta1 = {
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
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let group;
    (function (group) {
        group.v1 = {
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
    })(group = cosmos.group || (cosmos.group = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._66,
            ..._67,
            ..._68,
            ..._214,
            ..._228
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let params;
    (function (params) {
        params.v1beta1 = {
            ..._69,
            ..._70,
            ..._215,
            ..._229
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
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
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._76
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._77,
            ..._78,
            ..._217,
            ..._231
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._79,
            ..._80,
            ..._81,
            ..._193,
            ..._203,
            ..._218,
            ..._232,
            ..._241
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        vesting.v1beta1 = {
            ..._82,
            ..._83,
            ..._194,
            ..._204,
            ..._242
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._308,
        ..._309,
        ..._310
    };
})(cosmos || (exports.cosmos = cosmos = {}));
//# sourceMappingURL=bundle.js.map