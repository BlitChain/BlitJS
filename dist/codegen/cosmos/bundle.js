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
const _18 = __importStar(require("./auth/v1beta1/auth"));
const _19 = __importStar(require("./auth/v1beta1/genesis"));
const _20 = __importStar(require("./auth/v1beta1/query"));
const _21 = __importStar(require("./authz/v1beta1/authz"));
const _22 = __importStar(require("./authz/v1beta1/event"));
const _23 = __importStar(require("./authz/v1beta1/genesis"));
const _24 = __importStar(require("./authz/v1beta1/query"));
const _25 = __importStar(require("./authz/v1beta1/tx"));
const _26 = __importStar(require("./bank/v1beta1/authz"));
const _27 = __importStar(require("./bank/v1beta1/bank"));
const _28 = __importStar(require("./bank/v1beta1/genesis"));
const _29 = __importStar(require("./bank/v1beta1/query"));
const _30 = __importStar(require("./bank/v1beta1/tx"));
const _31 = __importStar(require("./base/abci/v1beta1/abci"));
const _32 = __importStar(require("./base/query/v1beta1/pagination"));
const _33 = __importStar(require("./base/reflection/v2alpha1/reflection"));
const _34 = __importStar(require("./base/tendermint/v1beta1/query"));
const _35 = __importStar(require("./base/v1beta1/coin"));
const _36 = __importStar(require("./crypto/ed25519/keys"));
const _37 = __importStar(require("./crypto/hd/v1/hd"));
const _38 = __importStar(require("./crypto/keyring/v1/record"));
const _39 = __importStar(require("./crypto/multisig/keys"));
const _40 = __importStar(require("./crypto/secp256k1/keys"));
const _41 = __importStar(require("./crypto/secp256r1/keys"));
const _42 = __importStar(require("./distribution/v1beta1/distribution"));
const _43 = __importStar(require("./distribution/v1beta1/genesis"));
const _44 = __importStar(require("./distribution/v1beta1/query"));
const _45 = __importStar(require("./distribution/v1beta1/tx"));
const _46 = __importStar(require("./feegrant/v1beta1/feegrant"));
const _47 = __importStar(require("./feegrant/v1beta1/genesis"));
const _48 = __importStar(require("./feegrant/v1beta1/query"));
const _49 = __importStar(require("./feegrant/v1beta1/tx"));
const _50 = __importStar(require("./gov/v1/genesis"));
const _51 = __importStar(require("./gov/v1/gov"));
const _52 = __importStar(require("./gov/v1/query"));
const _53 = __importStar(require("./gov/v1/tx"));
const _54 = __importStar(require("./gov/v1beta1/genesis"));
const _55 = __importStar(require("./gov/v1beta1/gov"));
const _56 = __importStar(require("./gov/v1beta1/query"));
const _57 = __importStar(require("./gov/v1beta1/tx"));
const _58 = __importStar(require("./group/v1/events"));
const _59 = __importStar(require("./group/v1/genesis"));
const _60 = __importStar(require("./group/v1/query"));
const _61 = __importStar(require("./group/v1/tx"));
const _62 = __importStar(require("./group/v1/types"));
const _63 = __importStar(require("./ics23/v1/proofs"));
const _64 = __importStar(require("./mint/v1beta1/genesis"));
const _65 = __importStar(require("./mint/v1beta1/mint"));
const _66 = __importStar(require("./mint/v1beta1/query"));
const _67 = __importStar(require("./nft/v1beta1/event"));
const _68 = __importStar(require("./nft/v1beta1/genesis"));
const _69 = __importStar(require("./nft/v1beta1/nft"));
const _70 = __importStar(require("./nft/v1beta1/query"));
const _71 = __importStar(require("./nft/v1beta1/tx"));
const _72 = __importStar(require("./params/v1beta1/params"));
const _73 = __importStar(require("./params/v1beta1/query"));
const _74 = __importStar(require("./staking/v1beta1/authz"));
const _75 = __importStar(require("./staking/v1beta1/genesis"));
const _76 = __importStar(require("./staking/v1beta1/query"));
const _77 = __importStar(require("./staking/v1beta1/staking"));
const _78 = __importStar(require("./staking/v1beta1/tx"));
const _79 = __importStar(require("./tx/signing/v1beta1/signing"));
const _80 = __importStar(require("./tx/v1beta1/service"));
const _81 = __importStar(require("./tx/v1beta1/tx"));
const _82 = __importStar(require("./upgrade/v1beta1/query"));
const _83 = __importStar(require("./upgrade/v1beta1/tx"));
const _84 = __importStar(require("./upgrade/v1beta1/upgrade"));
const _85 = __importStar(require("./vesting/v1beta1/tx"));
const _86 = __importStar(require("./vesting/v1beta1/vesting"));
const _152 = __importStar(require("./authz/v1beta1/tx.amino"));
const _153 = __importStar(require("./bank/v1beta1/tx.amino"));
const _154 = __importStar(require("./distribution/v1beta1/tx.amino"));
const _155 = __importStar(require("./feegrant/v1beta1/tx.amino"));
const _156 = __importStar(require("./gov/v1/tx.amino"));
const _157 = __importStar(require("./gov/v1beta1/tx.amino"));
const _158 = __importStar(require("./group/v1/tx.amino"));
const _159 = __importStar(require("./nft/v1beta1/tx.amino"));
const _160 = __importStar(require("./staking/v1beta1/tx.amino"));
const _161 = __importStar(require("./upgrade/v1beta1/tx.amino"));
const _162 = __importStar(require("./vesting/v1beta1/tx.amino"));
const _163 = __importStar(require("./authz/v1beta1/tx.registry"));
const _164 = __importStar(require("./bank/v1beta1/tx.registry"));
const _165 = __importStar(require("./distribution/v1beta1/tx.registry"));
const _166 = __importStar(require("./feegrant/v1beta1/tx.registry"));
const _167 = __importStar(require("./gov/v1/tx.registry"));
const _168 = __importStar(require("./gov/v1beta1/tx.registry"));
const _169 = __importStar(require("./group/v1/tx.registry"));
const _170 = __importStar(require("./nft/v1beta1/tx.registry"));
const _171 = __importStar(require("./staking/v1beta1/tx.registry"));
const _172 = __importStar(require("./upgrade/v1beta1/tx.registry"));
const _173 = __importStar(require("./vesting/v1beta1/tx.registry"));
const _174 = __importStar(require("./auth/v1beta1/query.lcd"));
const _175 = __importStar(require("./authz/v1beta1/query.lcd"));
const _176 = __importStar(require("./bank/v1beta1/query.lcd"));
const _177 = __importStar(require("./base/tendermint/v1beta1/query.lcd"));
const _178 = __importStar(require("./distribution/v1beta1/query.lcd"));
const _179 = __importStar(require("./feegrant/v1beta1/query.lcd"));
const _180 = __importStar(require("./gov/v1/query.lcd"));
const _181 = __importStar(require("./gov/v1beta1/query.lcd"));
const _182 = __importStar(require("./group/v1/query.lcd"));
const _183 = __importStar(require("./mint/v1beta1/query.lcd"));
const _184 = __importStar(require("./nft/v1beta1/query.lcd"));
const _185 = __importStar(require("./params/v1beta1/query.lcd"));
const _186 = __importStar(require("./staking/v1beta1/query.lcd"));
const _187 = __importStar(require("./tx/v1beta1/service.lcd"));
const _188 = __importStar(require("./upgrade/v1beta1/query.lcd"));
const _189 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
const _190 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _191 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _192 = __importStar(require("./base/tendermint/v1beta1/query.rpc.Service"));
const _193 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _194 = __importStar(require("./feegrant/v1beta1/query.rpc.Query"));
const _195 = __importStar(require("./gov/v1/query.rpc.Query"));
const _196 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _197 = __importStar(require("./group/v1/query.rpc.Query"));
const _198 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _199 = __importStar(require("./nft/v1beta1/query.rpc.Query"));
const _200 = __importStar(require("./params/v1beta1/query.rpc.Query"));
const _201 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _202 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _203 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _204 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _205 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _206 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _207 = __importStar(require("./feegrant/v1beta1/tx.rpc.msg"));
const _208 = __importStar(require("./gov/v1/tx.rpc.msg"));
const _209 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _210 = __importStar(require("./group/v1/tx.rpc.msg"));
const _211 = __importStar(require("./nft/v1beta1/tx.rpc.msg"));
const _212 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _213 = __importStar(require("./upgrade/v1beta1/tx.rpc.msg"));
const _214 = __importStar(require("./vesting/v1beta1/tx.rpc.msg"));
const _248 = __importStar(require("./lcd"));
const _249 = __importStar(require("./rpc.query"));
const _250 = __importStar(require("./rpc.tx"));
var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._18,
            ..._19,
            ..._20,
            ..._174,
            ..._189
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        authz.v1beta1 = {
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
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        bank.v1beta1 = {
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
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._31
            };
        })(abci = base.abci || (base.abci = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._32
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v2alpha1 = {
                ..._33
            };
        })(reflection = base.reflection || (base.reflection = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1beta1 = {
                ..._34,
                ..._177,
                ..._192
            };
        })(tendermint = base.tendermint || (base.tendermint = {}));
        base.v1beta1 = {
            ..._35
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._36
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._37
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._38
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._39
        };
        crypto.secp256k1 = {
            ..._40
        };
        crypto.secp256r1 = {
            ..._41
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        distribution.v1beta1 = {
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
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let feegrant;
    (function (feegrant) {
        feegrant.v1beta1 = {
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
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    let gov;
    (function (gov) {
        gov.v1 = {
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
        gov.v1beta1 = {
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
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let group;
    (function (group) {
        group.v1 = {
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
    })(group = cosmos.group || (cosmos.group = {}));
    let ics23;
    (function (ics23) {
        ics23.v1 = {
            ..._63
        };
    })(ics23 = cosmos.ics23 || (cosmos.ics23 = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._64,
            ..._65,
            ..._66,
            ..._183,
            ..._198
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let nft;
    (function (nft) {
        nft.v1beta1 = {
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
    })(nft = cosmos.nft || (cosmos.nft = {}));
    let params;
    (function (params) {
        params.v1beta1 = {
            ..._72,
            ..._73,
            ..._185,
            ..._200
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
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
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._79
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._80,
            ..._81,
            ..._187,
            ..._202
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._82,
            ..._83,
            ..._84,
            ..._161,
            ..._172,
            ..._188,
            ..._203,
            ..._213
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        vesting.v1beta1 = {
            ..._85,
            ..._86,
            ..._162,
            ..._173,
            ..._214
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._248,
        ..._249,
        ..._250
    };
})(cosmos || (exports.cosmos = cosmos = {}));
//# sourceMappingURL=bundle.js.map