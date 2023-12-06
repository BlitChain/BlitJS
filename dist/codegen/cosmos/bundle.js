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
const _20 = __importStar(require("./app/runtime/v1alpha1/module"));
const _21 = __importStar(require("./auth/module/v1/module"));
const _22 = __importStar(require("./auth/v1beta1/auth"));
const _23 = __importStar(require("./auth/v1beta1/genesis"));
const _24 = __importStar(require("./auth/v1beta1/query"));
const _25 = __importStar(require("./auth/v1beta1/tx"));
const _26 = __importStar(require("./authz/module/v1/module"));
const _27 = __importStar(require("./authz/v1beta1/authz"));
const _28 = __importStar(require("./authz/v1beta1/event"));
const _29 = __importStar(require("./authz/v1beta1/genesis"));
const _30 = __importStar(require("./authz/v1beta1/query"));
const _31 = __importStar(require("./authz/v1beta1/tx"));
const _32 = __importStar(require("./bank/module/v1/module"));
const _33 = __importStar(require("./bank/v1beta1/authz"));
const _34 = __importStar(require("./bank/v1beta1/bank"));
const _35 = __importStar(require("./bank/v1beta1/genesis"));
const _36 = __importStar(require("./bank/v1beta1/query"));
const _37 = __importStar(require("./bank/v1beta1/tx"));
const _38 = __importStar(require("./base/abci/v1beta1/abci"));
const _39 = __importStar(require("./base/node/v1beta1/query"));
const _40 = __importStar(require("./base/query/v1beta1/pagination"));
const _41 = __importStar(require("./base/reflection/v2alpha1/reflection"));
const _42 = __importStar(require("./base/tendermint/v1beta1/query"));
const _43 = __importStar(require("./base/tendermint/v1beta1/types"));
const _44 = __importStar(require("./base/v1beta1/coin"));
const _45 = __importStar(require("./circuit/module/v1/module"));
const _46 = __importStar(require("./circuit/v1/query"));
const _47 = __importStar(require("./circuit/v1/tx"));
const _48 = __importStar(require("./circuit/v1/types"));
const _49 = __importStar(require("./consensus/module/v1/module"));
const _50 = __importStar(require("./consensus/v1/query"));
const _51 = __importStar(require("./consensus/v1/tx"));
const _52 = __importStar(require("./crisis/module/v1/module"));
const _53 = __importStar(require("./crypto/ed25519/keys"));
const _54 = __importStar(require("./crypto/hd/v1/hd"));
const _55 = __importStar(require("./crypto/keyring/v1/record"));
const _56 = __importStar(require("./crypto/multisig/keys"));
const _57 = __importStar(require("./crypto/secp256k1/keys"));
const _58 = __importStar(require("./crypto/secp256r1/keys"));
const _59 = __importStar(require("./distribution/module/v1/module"));
const _60 = __importStar(require("./distribution/v1beta1/distribution"));
const _61 = __importStar(require("./distribution/v1beta1/genesis"));
const _62 = __importStar(require("./distribution/v1beta1/query"));
const _63 = __importStar(require("./distribution/v1beta1/tx"));
const _64 = __importStar(require("./evidence/module/v1/module"));
const _65 = __importStar(require("./feegrant/module/v1/module"));
const _66 = __importStar(require("./feegrant/v1beta1/feegrant"));
const _67 = __importStar(require("./feegrant/v1beta1/genesis"));
const _68 = __importStar(require("./feegrant/v1beta1/query"));
const _69 = __importStar(require("./feegrant/v1beta1/tx"));
const _70 = __importStar(require("./genutil/module/v1/module"));
const _71 = __importStar(require("./gov/module/v1/module"));
const _72 = __importStar(require("./gov/v1/genesis"));
const _73 = __importStar(require("./gov/v1/gov"));
const _74 = __importStar(require("./gov/v1/query"));
const _75 = __importStar(require("./gov/v1/tx"));
const _76 = __importStar(require("./gov/v1beta1/genesis"));
const _77 = __importStar(require("./gov/v1beta1/gov"));
const _78 = __importStar(require("./gov/v1beta1/query"));
const _79 = __importStar(require("./gov/v1beta1/tx"));
const _80 = __importStar(require("./group/module/v1/module"));
const _81 = __importStar(require("./group/v1/events"));
const _82 = __importStar(require("./group/v1/genesis"));
const _83 = __importStar(require("./group/v1/query"));
const _84 = __importStar(require("./group/v1/tx"));
const _85 = __importStar(require("./group/v1/types"));
const _86 = __importStar(require("./ics23/v1/proofs"));
const _87 = __importStar(require("./mint/module/v1/module"));
const _88 = __importStar(require("./mint/v1beta1/genesis"));
const _89 = __importStar(require("./mint/v1beta1/mint"));
const _90 = __importStar(require("./mint/v1beta1/query"));
const _91 = __importStar(require("./mint/v1beta1/tx"));
const _92 = __importStar(require("./msg/textual/v1/textual"));
const _93 = __importStar(require("./nft/module/v1/module"));
const _94 = __importStar(require("./nft/v1beta1/event"));
const _95 = __importStar(require("./nft/v1beta1/genesis"));
const _96 = __importStar(require("./nft/v1beta1/nft"));
const _97 = __importStar(require("./nft/v1beta1/query"));
const _98 = __importStar(require("./nft/v1beta1/tx"));
const _99 = __importStar(require("./orm/module/v1alpha1/module"));
const _100 = __importStar(require("./orm/query/v1alpha1/query"));
const _101 = __importStar(require("./params/module/v1/module"));
const _102 = __importStar(require("./params/v1beta1/params"));
const _103 = __importStar(require("./params/v1beta1/query"));
const _104 = __importStar(require("./query/v1/query"));
const _105 = __importStar(require("./reflection/v1/reflection"));
const _106 = __importStar(require("./slashing/module/v1/module"));
const _107 = __importStar(require("./staking/module/v1/module"));
const _108 = __importStar(require("./staking/v1beta1/authz"));
const _109 = __importStar(require("./staking/v1beta1/genesis"));
const _110 = __importStar(require("./staking/v1beta1/query"));
const _111 = __importStar(require("./staking/v1beta1/staking"));
const _112 = __importStar(require("./staking/v1beta1/tx"));
const _113 = __importStar(require("./store/internal/kv/v1beta1/kv"));
const _114 = __importStar(require("./store/snapshots/v1/snapshot"));
const _115 = __importStar(require("./store/streaming/abci/grpc"));
const _116 = __importStar(require("./store/v1beta1/commit_info"));
const _117 = __importStar(require("./store/v1beta1/listening"));
const _118 = __importStar(require("./tx/config/v1/config"));
const _119 = __importStar(require("./tx/signing/v1beta1/signing"));
const _120 = __importStar(require("./tx/v1beta1/service"));
const _121 = __importStar(require("./tx/v1beta1/tx"));
const _122 = __importStar(require("./upgrade/module/v1/module"));
const _123 = __importStar(require("./upgrade/v1beta1/query"));
const _124 = __importStar(require("./upgrade/v1beta1/tx"));
const _125 = __importStar(require("./upgrade/v1beta1/upgrade"));
const _126 = __importStar(require("./vesting/module/v1/module"));
const _127 = __importStar(require("./vesting/v1beta1/tx"));
const _128 = __importStar(require("./vesting/v1beta1/vesting"));
const _194 = __importStar(require("./auth/v1beta1/tx.amino"));
const _195 = __importStar(require("./authz/v1beta1/tx.amino"));
const _196 = __importStar(require("./bank/v1beta1/tx.amino"));
const _197 = __importStar(require("./circuit/v1/tx.amino"));
const _198 = __importStar(require("./consensus/v1/tx.amino"));
const _199 = __importStar(require("./distribution/v1beta1/tx.amino"));
const _200 = __importStar(require("./feegrant/v1beta1/tx.amino"));
const _201 = __importStar(require("./gov/v1/tx.amino"));
const _202 = __importStar(require("./gov/v1beta1/tx.amino"));
const _203 = __importStar(require("./group/v1/tx.amino"));
const _204 = __importStar(require("./mint/v1beta1/tx.amino"));
const _205 = __importStar(require("./nft/v1beta1/tx.amino"));
const _206 = __importStar(require("./staking/v1beta1/tx.amino"));
const _207 = __importStar(require("./upgrade/v1beta1/tx.amino"));
const _208 = __importStar(require("./vesting/v1beta1/tx.amino"));
const _209 = __importStar(require("./auth/v1beta1/tx.registry"));
const _210 = __importStar(require("./authz/v1beta1/tx.registry"));
const _211 = __importStar(require("./bank/v1beta1/tx.registry"));
const _212 = __importStar(require("./circuit/v1/tx.registry"));
const _213 = __importStar(require("./consensus/v1/tx.registry"));
const _214 = __importStar(require("./distribution/v1beta1/tx.registry"));
const _215 = __importStar(require("./feegrant/v1beta1/tx.registry"));
const _216 = __importStar(require("./gov/v1/tx.registry"));
const _217 = __importStar(require("./gov/v1beta1/tx.registry"));
const _218 = __importStar(require("./group/v1/tx.registry"));
const _219 = __importStar(require("./mint/v1beta1/tx.registry"));
const _220 = __importStar(require("./nft/v1beta1/tx.registry"));
const _221 = __importStar(require("./staking/v1beta1/tx.registry"));
const _222 = __importStar(require("./upgrade/v1beta1/tx.registry"));
const _223 = __importStar(require("./vesting/v1beta1/tx.registry"));
const _224 = __importStar(require("./auth/v1beta1/query.lcd"));
const _225 = __importStar(require("./authz/v1beta1/query.lcd"));
const _226 = __importStar(require("./bank/v1beta1/query.lcd"));
const _227 = __importStar(require("./base/node/v1beta1/query.lcd"));
const _228 = __importStar(require("./base/tendermint/v1beta1/query.lcd"));
const _229 = __importStar(require("./circuit/v1/query.lcd"));
const _230 = __importStar(require("./consensus/v1/query.lcd"));
const _231 = __importStar(require("./distribution/v1beta1/query.lcd"));
const _232 = __importStar(require("./feegrant/v1beta1/query.lcd"));
const _233 = __importStar(require("./gov/v1/query.lcd"));
const _234 = __importStar(require("./gov/v1beta1/query.lcd"));
const _235 = __importStar(require("./group/v1/query.lcd"));
const _236 = __importStar(require("./mint/v1beta1/query.lcd"));
const _237 = __importStar(require("./nft/v1beta1/query.lcd"));
const _238 = __importStar(require("./params/v1beta1/query.lcd"));
const _239 = __importStar(require("./staking/v1beta1/query.lcd"));
const _240 = __importStar(require("./tx/v1beta1/service.lcd"));
const _241 = __importStar(require("./upgrade/v1beta1/query.lcd"));
const _242 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
const _243 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _244 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _245 = __importStar(require("./base/node/v1beta1/query.rpc.Service"));
const _246 = __importStar(require("./base/tendermint/v1beta1/query.rpc.Service"));
const _247 = __importStar(require("./circuit/v1/query.rpc.Query"));
const _248 = __importStar(require("./consensus/v1/query.rpc.Query"));
const _249 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _250 = __importStar(require("./feegrant/v1beta1/query.rpc.Query"));
const _251 = __importStar(require("./gov/v1/query.rpc.Query"));
const _252 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _253 = __importStar(require("./group/v1/query.rpc.Query"));
const _254 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _255 = __importStar(require("./nft/v1beta1/query.rpc.Query"));
const _256 = __importStar(require("./orm/query/v1alpha1/query.rpc.Query"));
const _257 = __importStar(require("./params/v1beta1/query.rpc.Query"));
const _258 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _259 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _260 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _261 = __importStar(require("./auth/v1beta1/tx.rpc.msg"));
const _262 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _263 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _264 = __importStar(require("./circuit/v1/tx.rpc.msg"));
const _265 = __importStar(require("./consensus/v1/tx.rpc.msg"));
const _266 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _267 = __importStar(require("./feegrant/v1beta1/tx.rpc.msg"));
const _268 = __importStar(require("./gov/v1/tx.rpc.msg"));
const _269 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _270 = __importStar(require("./group/v1/tx.rpc.msg"));
const _271 = __importStar(require("./mint/v1beta1/tx.rpc.msg"));
const _272 = __importStar(require("./nft/v1beta1/tx.rpc.msg"));
const _273 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _274 = __importStar(require("./upgrade/v1beta1/tx.rpc.msg"));
const _275 = __importStar(require("./vesting/v1beta1/tx.rpc.msg"));
const _309 = __importStar(require("./lcd"));
const _310 = __importStar(require("./rpc.query"));
const _311 = __importStar(require("./rpc.tx"));
var cosmos;
(function (cosmos) {
    let app;
    (function (app) {
        let runtime;
        (function (runtime) {
            runtime.v1alpha1 = {
                ..._20
            };
        })(runtime = app.runtime || (app.runtime = {}));
    })(app = cosmos.app || (cosmos.app = {}));
    let auth;
    (function (auth) {
        let module;
        (function (module) {
            module.v1 = {
                ..._21
            };
        })(module = auth.module || (auth.module = {}));
        auth.v1beta1 = {
            ..._22,
            ..._23,
            ..._24,
            ..._25,
            ..._194,
            ..._209,
            ..._224,
            ..._242,
            ..._261
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        let module;
        (function (module) {
            module.v1 = {
                ..._26
            };
        })(module = authz.module || (authz.module = {}));
        authz.v1beta1 = {
            ..._27,
            ..._28,
            ..._29,
            ..._30,
            ..._31,
            ..._195,
            ..._210,
            ..._225,
            ..._243,
            ..._262
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        let module;
        (function (module) {
            module.v1 = {
                ..._32
            };
        })(module = bank.module || (bank.module = {}));
        bank.v1beta1 = {
            ..._33,
            ..._34,
            ..._35,
            ..._36,
            ..._37,
            ..._196,
            ..._211,
            ..._226,
            ..._244,
            ..._263
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._38
            };
        })(abci = base.abci || (base.abci = {}));
        let node;
        (function (node) {
            node.v1beta1 = {
                ..._39,
                ..._227,
                ..._245
            };
        })(node = base.node || (base.node = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._40
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v2alpha1 = {
                ..._41
            };
        })(reflection = base.reflection || (base.reflection = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1beta1 = {
                ..._42,
                ..._43,
                ..._228,
                ..._246
            };
        })(tendermint = base.tendermint || (base.tendermint = {}));
        base.v1beta1 = {
            ..._44
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let circuit;
    (function (circuit) {
        let module;
        (function (module) {
            module.v1 = {
                ..._45
            };
        })(module = circuit.module || (circuit.module = {}));
        circuit.v1 = {
            ..._46,
            ..._47,
            ..._48,
            ..._197,
            ..._212,
            ..._229,
            ..._247,
            ..._264
        };
    })(circuit = cosmos.circuit || (cosmos.circuit = {}));
    let consensus;
    (function (consensus) {
        let module;
        (function (module) {
            module.v1 = {
                ..._49
            };
        })(module = consensus.module || (consensus.module = {}));
        consensus.v1 = {
            ..._50,
            ..._51,
            ..._198,
            ..._213,
            ..._230,
            ..._248,
            ..._265
        };
    })(consensus = cosmos.consensus || (cosmos.consensus = {}));
    let crisis;
    (function (crisis) {
        let module;
        (function (module) {
            module.v1 = {
                ..._52
            };
        })(module = crisis.module || (crisis.module = {}));
    })(crisis = cosmos.crisis || (cosmos.crisis = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._53
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._54
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._55
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._56
        };
        crypto.secp256k1 = {
            ..._57
        };
        crypto.secp256r1 = {
            ..._58
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        let module;
        (function (module) {
            module.v1 = {
                ..._59
            };
        })(module = distribution.module || (distribution.module = {}));
        distribution.v1beta1 = {
            ..._60,
            ..._61,
            ..._62,
            ..._63,
            ..._199,
            ..._214,
            ..._231,
            ..._249,
            ..._266
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let evidence;
    (function (evidence) {
        let module;
        (function (module) {
            module.v1 = {
                ..._64
            };
        })(module = evidence.module || (evidence.module = {}));
    })(evidence = cosmos.evidence || (cosmos.evidence = {}));
    let feegrant;
    (function (feegrant) {
        let module;
        (function (module) {
            module.v1 = {
                ..._65
            };
        })(module = feegrant.module || (feegrant.module = {}));
        feegrant.v1beta1 = {
            ..._66,
            ..._67,
            ..._68,
            ..._69,
            ..._200,
            ..._215,
            ..._232,
            ..._250,
            ..._267
        };
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    let genutil;
    (function (genutil) {
        let module;
        (function (module) {
            module.v1 = {
                ..._70
            };
        })(module = genutil.module || (genutil.module = {}));
    })(genutil = cosmos.genutil || (cosmos.genutil = {}));
    let gov;
    (function (gov) {
        let module;
        (function (module) {
            module.v1 = {
                ..._71
            };
        })(module = gov.module || (gov.module = {}));
        gov.v1 = {
            ..._72,
            ..._73,
            ..._74,
            ..._75,
            ..._201,
            ..._216,
            ..._233,
            ..._251,
            ..._268
        };
        gov.v1beta1 = {
            ..._76,
            ..._77,
            ..._78,
            ..._79,
            ..._202,
            ..._217,
            ..._234,
            ..._252,
            ..._269
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let group;
    (function (group) {
        let module;
        (function (module) {
            module.v1 = {
                ..._80
            };
        })(module = group.module || (group.module = {}));
        group.v1 = {
            ..._81,
            ..._82,
            ..._83,
            ..._84,
            ..._85,
            ..._203,
            ..._218,
            ..._235,
            ..._253,
            ..._270
        };
    })(group = cosmos.group || (cosmos.group = {}));
    let ics23;
    (function (ics23) {
        ics23.v1 = {
            ..._86
        };
    })(ics23 = cosmos.ics23 || (cosmos.ics23 = {}));
    let mint;
    (function (mint) {
        let module;
        (function (module) {
            module.v1 = {
                ..._87
            };
        })(module = mint.module || (mint.module = {}));
        mint.v1beta1 = {
            ..._88,
            ..._89,
            ..._90,
            ..._91,
            ..._204,
            ..._219,
            ..._236,
            ..._254,
            ..._271
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let msg;
    (function (msg) {
        let textual;
        (function (textual) {
            textual.v1 = {
                ..._92
            };
        })(textual = msg.textual || (msg.textual = {}));
    })(msg = cosmos.msg || (cosmos.msg = {}));
    let nft;
    (function (nft) {
        let module;
        (function (module) {
            module.v1 = {
                ..._93
            };
        })(module = nft.module || (nft.module = {}));
        nft.v1beta1 = {
            ..._94,
            ..._95,
            ..._96,
            ..._97,
            ..._98,
            ..._205,
            ..._220,
            ..._237,
            ..._255,
            ..._272
        };
    })(nft = cosmos.nft || (cosmos.nft = {}));
    let orm;
    (function (orm) {
        let module;
        (function (module) {
            module.v1alpha1 = {
                ..._99
            };
        })(module = orm.module || (orm.module = {}));
        let query;
        (function (query) {
            query.v1alpha1 = {
                ..._100,
                ..._256
            };
        })(query = orm.query || (orm.query = {}));
    })(orm = cosmos.orm || (cosmos.orm = {}));
    let params;
    (function (params) {
        let module;
        (function (module) {
            module.v1 = {
                ..._101
            };
        })(module = params.module || (params.module = {}));
        params.v1beta1 = {
            ..._102,
            ..._103,
            ..._238,
            ..._257
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let query;
    (function (query) {
        query.v1 = {
            ..._104
        };
    })(query = cosmos.query || (cosmos.query = {}));
    let reflection;
    (function (reflection) {
        reflection.v1 = {
            ..._105
        };
    })(reflection = cosmos.reflection || (cosmos.reflection = {}));
    let slashing;
    (function (slashing) {
        let module;
        (function (module) {
            module.v1 = {
                ..._106
            };
        })(module = slashing.module || (slashing.module = {}));
    })(slashing = cosmos.slashing || (cosmos.slashing = {}));
    let staking;
    (function (staking) {
        let module;
        (function (module) {
            module.v1 = {
                ..._107
            };
        })(module = staking.module || (staking.module = {}));
        staking.v1beta1 = {
            ..._108,
            ..._109,
            ..._110,
            ..._111,
            ..._112,
            ..._206,
            ..._221,
            ..._239,
            ..._258,
            ..._273
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let store;
    (function (store) {
        let internal;
        (function (internal) {
            let kv;
            (function (kv) {
                kv.v1beta1 = {
                    ..._113
                };
            })(kv = internal.kv || (internal.kv = {}));
        })(internal = store.internal || (store.internal = {}));
        let snapshots;
        (function (snapshots) {
            snapshots.v1 = {
                ..._114
            };
        })(snapshots = store.snapshots || (store.snapshots = {}));
        let streaming;
        (function (streaming) {
            streaming.abci = {
                ..._115
            };
        })(streaming = store.streaming || (store.streaming = {}));
        store.v1beta1 = {
            ..._116,
            ..._117
        };
    })(store = cosmos.store || (cosmos.store = {}));
    let tx;
    (function (tx) {
        let config;
        (function (config) {
            config.v1 = {
                ..._118
            };
        })(config = tx.config || (tx.config = {}));
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._119
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._120,
            ..._121,
            ..._240,
            ..._259
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        let module;
        (function (module) {
            module.v1 = {
                ..._122
            };
        })(module = upgrade.module || (upgrade.module = {}));
        upgrade.v1beta1 = {
            ..._123,
            ..._124,
            ..._125,
            ..._207,
            ..._222,
            ..._241,
            ..._260,
            ..._274
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        let module;
        (function (module) {
            module.v1 = {
                ..._126
            };
        })(module = vesting.module || (vesting.module = {}));
        vesting.v1beta1 = {
            ..._127,
            ..._128,
            ..._208,
            ..._223,
            ..._275
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._309,
        ..._310,
        ..._311
    };
})(cosmos || (exports.cosmos = cosmos = {}));
//# sourceMappingURL=bundle.js.map