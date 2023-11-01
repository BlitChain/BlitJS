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
const _65 = __importStar(require("./nft/v1beta1/event"));
const _66 = __importStar(require("./nft/v1beta1/genesis"));
const _67 = __importStar(require("./nft/v1beta1/nft"));
const _68 = __importStar(require("./nft/v1beta1/query"));
const _69 = __importStar(require("./nft/v1beta1/tx"));
const _70 = __importStar(require("./params/v1beta1/params"));
const _71 = __importStar(require("./params/v1beta1/query"));
const _72 = __importStar(require("./staking/v1beta1/authz"));
const _73 = __importStar(require("./staking/v1beta1/genesis"));
const _74 = __importStar(require("./staking/v1beta1/query"));
const _75 = __importStar(require("./staking/v1beta1/staking"));
const _76 = __importStar(require("./staking/v1beta1/tx"));
const _77 = __importStar(require("./tx/signing/v1beta1/signing"));
const _78 = __importStar(require("./tx/v1beta1/service"));
const _79 = __importStar(require("./tx/v1beta1/tx"));
const _80 = __importStar(require("./upgrade/v1beta1/query"));
const _81 = __importStar(require("./upgrade/v1beta1/tx"));
const _82 = __importStar(require("./upgrade/v1beta1/upgrade"));
const _83 = __importStar(require("./vesting/v1beta1/tx"));
const _84 = __importStar(require("./vesting/v1beta1/vesting"));
const _117 = __importStar(require("./authz/v1beta1/tx.amino"));
const _118 = __importStar(require("./bank/v1beta1/tx.amino"));
const _119 = __importStar(require("./distribution/v1beta1/tx.amino"));
const _120 = __importStar(require("./feegrant/v1beta1/tx.amino"));
const _121 = __importStar(require("./gov/v1/tx.amino"));
const _122 = __importStar(require("./gov/v1beta1/tx.amino"));
const _123 = __importStar(require("./group/v1/tx.amino"));
const _124 = __importStar(require("./nft/v1beta1/tx.amino"));
const _125 = __importStar(require("./staking/v1beta1/tx.amino"));
const _126 = __importStar(require("./upgrade/v1beta1/tx.amino"));
const _127 = __importStar(require("./vesting/v1beta1/tx.amino"));
const _128 = __importStar(require("./authz/v1beta1/tx.registry"));
const _129 = __importStar(require("./bank/v1beta1/tx.registry"));
const _130 = __importStar(require("./distribution/v1beta1/tx.registry"));
const _131 = __importStar(require("./feegrant/v1beta1/tx.registry"));
const _132 = __importStar(require("./gov/v1/tx.registry"));
const _133 = __importStar(require("./gov/v1beta1/tx.registry"));
const _134 = __importStar(require("./group/v1/tx.registry"));
const _135 = __importStar(require("./nft/v1beta1/tx.registry"));
const _136 = __importStar(require("./staking/v1beta1/tx.registry"));
const _137 = __importStar(require("./upgrade/v1beta1/tx.registry"));
const _138 = __importStar(require("./vesting/v1beta1/tx.registry"));
const _139 = __importStar(require("./auth/v1beta1/query.lcd"));
const _140 = __importStar(require("./authz/v1beta1/query.lcd"));
const _141 = __importStar(require("./bank/v1beta1/query.lcd"));
const _142 = __importStar(require("./base/tendermint/v1beta1/query.lcd"));
const _143 = __importStar(require("./distribution/v1beta1/query.lcd"));
const _144 = __importStar(require("./feegrant/v1beta1/query.lcd"));
const _145 = __importStar(require("./gov/v1/query.lcd"));
const _146 = __importStar(require("./gov/v1beta1/query.lcd"));
const _147 = __importStar(require("./group/v1/query.lcd"));
const _148 = __importStar(require("./mint/v1beta1/query.lcd"));
const _149 = __importStar(require("./nft/v1beta1/query.lcd"));
const _150 = __importStar(require("./params/v1beta1/query.lcd"));
const _151 = __importStar(require("./staking/v1beta1/query.lcd"));
const _152 = __importStar(require("./tx/v1beta1/service.lcd"));
const _153 = __importStar(require("./upgrade/v1beta1/query.lcd"));
const _154 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
const _155 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _156 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _157 = __importStar(require("./base/tendermint/v1beta1/query.rpc.Service"));
const _158 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _159 = __importStar(require("./feegrant/v1beta1/query.rpc.Query"));
const _160 = __importStar(require("./gov/v1/query.rpc.Query"));
const _161 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _162 = __importStar(require("./group/v1/query.rpc.Query"));
const _163 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _164 = __importStar(require("./nft/v1beta1/query.rpc.Query"));
const _165 = __importStar(require("./params/v1beta1/query.rpc.Query"));
const _166 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _167 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _168 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _169 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _170 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _171 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _172 = __importStar(require("./feegrant/v1beta1/tx.rpc.msg"));
const _173 = __importStar(require("./gov/v1/tx.rpc.msg"));
const _174 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _175 = __importStar(require("./group/v1/tx.rpc.msg"));
const _176 = __importStar(require("./nft/v1beta1/tx.rpc.msg"));
const _177 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _178 = __importStar(require("./upgrade/v1beta1/tx.rpc.msg"));
const _179 = __importStar(require("./vesting/v1beta1/tx.rpc.msg"));
const _183 = __importStar(require("./lcd"));
const _184 = __importStar(require("./rpc.query"));
const _185 = __importStar(require("./rpc.tx"));
var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._17,
            ..._18,
            ..._19,
            ..._139,
            ..._154
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
            ..._117,
            ..._128,
            ..._140,
            ..._155,
            ..._169
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
            ..._118,
            ..._129,
            ..._141,
            ..._156,
            ..._170
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
                ..._142,
                ..._157
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
            ..._119,
            ..._130,
            ..._143,
            ..._158,
            ..._171
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let feegrant;
    (function (feegrant) {
        feegrant.v1beta1 = {
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
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    let gov;
    (function (gov) {
        gov.v1 = {
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
        gov.v1beta1 = {
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
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let group;
    (function (group) {
        group.v1 = {
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
    })(group = cosmos.group || (cosmos.group = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._62,
            ..._63,
            ..._64,
            ..._148,
            ..._163
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let nft;
    (function (nft) {
        nft.v1beta1 = {
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
    })(nft = cosmos.nft || (cosmos.nft = {}));
    let params;
    (function (params) {
        params.v1beta1 = {
            ..._70,
            ..._71,
            ..._150,
            ..._165
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
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
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._77
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._78,
            ..._79,
            ..._152,
            ..._167
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._80,
            ..._81,
            ..._82,
            ..._126,
            ..._137,
            ..._153,
            ..._168,
            ..._178
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        vesting.v1beta1 = {
            ..._83,
            ..._84,
            ..._127,
            ..._138,
            ..._179
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._183,
        ..._184,
        ..._185
    };
})(cosmos || (exports.cosmos = cosmos = {}));
//# sourceMappingURL=bundle.js.map