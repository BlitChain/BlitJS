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
const _22 = __importStar(require("./app/runtime/v1alpha1/module"));
const _23 = __importStar(require("./auth/module/v1/module"));
const _24 = __importStar(require("./auth/v1beta1/auth"));
const _25 = __importStar(require("./auth/v1beta1/genesis"));
const _26 = __importStar(require("./auth/v1beta1/query"));
const _27 = __importStar(require("./auth/v1beta1/tx"));
const _28 = __importStar(require("./authz/module/v1/module"));
const _29 = __importStar(require("./authz/v1beta1/authz"));
const _30 = __importStar(require("./authz/v1beta1/event"));
const _31 = __importStar(require("./authz/v1beta1/genesis"));
const _32 = __importStar(require("./authz/v1beta1/query"));
const _33 = __importStar(require("./authz/v1beta1/tx"));
const _34 = __importStar(require("./bank/module/v1/module"));
const _35 = __importStar(require("./bank/v1beta1/authz"));
const _36 = __importStar(require("./bank/v1beta1/bank"));
const _37 = __importStar(require("./bank/v1beta1/genesis"));
const _38 = __importStar(require("./bank/v1beta1/query"));
const _39 = __importStar(require("./bank/v1beta1/tx"));
const _40 = __importStar(require("./base/abci/v1beta1/abci"));
const _41 = __importStar(require("./base/node/v1beta1/query"));
const _42 = __importStar(require("./base/query/v1beta1/pagination"));
const _43 = __importStar(require("./base/reflection/v2alpha1/reflection"));
const _44 = __importStar(require("./base/tendermint/v1beta1/query"));
const _45 = __importStar(require("./base/tendermint/v1beta1/types"));
const _46 = __importStar(require("./base/v1beta1/coin"));
const _47 = __importStar(require("./circuit/module/v1/module"));
const _48 = __importStar(require("./circuit/v1/query"));
const _49 = __importStar(require("./circuit/v1/tx"));
const _50 = __importStar(require("./circuit/v1/types"));
const _51 = __importStar(require("./consensus/module/v1/module"));
const _52 = __importStar(require("./consensus/v1/query"));
const _53 = __importStar(require("./consensus/v1/tx"));
const _54 = __importStar(require("./crisis/module/v1/module"));
const _55 = __importStar(require("./crypto/ed25519/keys"));
const _56 = __importStar(require("./crypto/hd/v1/hd"));
const _57 = __importStar(require("./crypto/keyring/v1/record"));
const _58 = __importStar(require("./crypto/multisig/keys"));
const _59 = __importStar(require("./crypto/secp256k1/keys"));
const _60 = __importStar(require("./crypto/secp256r1/keys"));
const _61 = __importStar(require("./distribution/module/v1/module"));
const _62 = __importStar(require("./distribution/v1beta1/distribution"));
const _63 = __importStar(require("./distribution/v1beta1/genesis"));
const _64 = __importStar(require("./distribution/v1beta1/query"));
const _65 = __importStar(require("./distribution/v1beta1/tx"));
const _66 = __importStar(require("./evidence/module/v1/module"));
const _67 = __importStar(require("./feegrant/module/v1/module"));
const _68 = __importStar(require("./feegrant/v1beta1/feegrant"));
const _69 = __importStar(require("./feegrant/v1beta1/genesis"));
const _70 = __importStar(require("./feegrant/v1beta1/query"));
const _71 = __importStar(require("./feegrant/v1beta1/tx"));
const _72 = __importStar(require("./genutil/module/v1/module"));
const _73 = __importStar(require("./gov/module/v1/module"));
const _74 = __importStar(require("./gov/v1/genesis"));
const _75 = __importStar(require("./gov/v1/gov"));
const _76 = __importStar(require("./gov/v1/query"));
const _77 = __importStar(require("./gov/v1/tx"));
const _78 = __importStar(require("./gov/v1beta1/genesis"));
const _79 = __importStar(require("./gov/v1beta1/gov"));
const _80 = __importStar(require("./gov/v1beta1/query"));
const _81 = __importStar(require("./gov/v1beta1/tx"));
const _82 = __importStar(require("./group/module/v1/module"));
const _83 = __importStar(require("./group/v1/events"));
const _84 = __importStar(require("./group/v1/genesis"));
const _85 = __importStar(require("./group/v1/query"));
const _86 = __importStar(require("./group/v1/tx"));
const _87 = __importStar(require("./group/v1/types"));
const _88 = __importStar(require("./ics23/v1/proofs"));
const _89 = __importStar(require("./mint/module/v1/module"));
const _90 = __importStar(require("./mint/v1beta1/genesis"));
const _91 = __importStar(require("./mint/v1beta1/mint"));
const _92 = __importStar(require("./mint/v1beta1/query"));
const _93 = __importStar(require("./mint/v1beta1/tx"));
const _94 = __importStar(require("./msg/textual/v1/textual"));
const _95 = __importStar(require("./nft/module/v1/module"));
const _96 = __importStar(require("./nft/v1beta1/event"));
const _97 = __importStar(require("./nft/v1beta1/genesis"));
const _98 = __importStar(require("./nft/v1beta1/nft"));
const _99 = __importStar(require("./nft/v1beta1/query"));
const _100 = __importStar(require("./nft/v1beta1/tx"));
const _101 = __importStar(require("./orm/module/v1alpha1/module"));
const _102 = __importStar(require("./orm/query/v1alpha1/query"));
const _103 = __importStar(require("./params/module/v1/module"));
const _104 = __importStar(require("./params/v1beta1/params"));
const _105 = __importStar(require("./params/v1beta1/query"));
const _106 = __importStar(require("./query/v1/query"));
const _107 = __importStar(require("./reflection/v1/reflection"));
const _108 = __importStar(require("./slashing/module/v1/module"));
const _109 = __importStar(require("./staking/module/v1/module"));
const _110 = __importStar(require("./staking/v1beta1/authz"));
const _111 = __importStar(require("./staking/v1beta1/genesis"));
const _112 = __importStar(require("./staking/v1beta1/query"));
const _113 = __importStar(require("./staking/v1beta1/staking"));
const _114 = __importStar(require("./staking/v1beta1/tx"));
const _115 = __importStar(require("./store/internal/kv/v1beta1/kv"));
const _116 = __importStar(require("./store/snapshots/v1/snapshot"));
const _117 = __importStar(require("./store/streaming/abci/grpc"));
const _118 = __importStar(require("./store/v1beta1/commit_info"));
const _119 = __importStar(require("./store/v1beta1/listening"));
const _120 = __importStar(require("./tx/config/v1/config"));
const _121 = __importStar(require("./tx/signing/v1beta1/signing"));
const _122 = __importStar(require("./tx/v1beta1/service"));
const _123 = __importStar(require("./tx/v1beta1/tx"));
const _124 = __importStar(require("./upgrade/module/v1/module"));
const _125 = __importStar(require("./upgrade/v1beta1/query"));
const _126 = __importStar(require("./upgrade/v1beta1/tx"));
const _127 = __importStar(require("./upgrade/v1beta1/upgrade"));
const _128 = __importStar(require("./vesting/module/v1/module"));
const _129 = __importStar(require("./vesting/v1beta1/tx"));
const _130 = __importStar(require("./vesting/v1beta1/vesting"));
const _196 = __importStar(require("./auth/v1beta1/tx.amino"));
const _197 = __importStar(require("./authz/v1beta1/tx.amino"));
const _198 = __importStar(require("./bank/v1beta1/tx.amino"));
const _199 = __importStar(require("./circuit/v1/tx.amino"));
const _200 = __importStar(require("./consensus/v1/tx.amino"));
const _201 = __importStar(require("./distribution/v1beta1/tx.amino"));
const _202 = __importStar(require("./feegrant/v1beta1/tx.amino"));
const _203 = __importStar(require("./gov/v1/tx.amino"));
const _204 = __importStar(require("./gov/v1beta1/tx.amino"));
const _205 = __importStar(require("./group/v1/tx.amino"));
const _206 = __importStar(require("./mint/v1beta1/tx.amino"));
const _207 = __importStar(require("./nft/v1beta1/tx.amino"));
const _208 = __importStar(require("./staking/v1beta1/tx.amino"));
const _209 = __importStar(require("./upgrade/v1beta1/tx.amino"));
const _210 = __importStar(require("./vesting/v1beta1/tx.amino"));
const _211 = __importStar(require("./auth/v1beta1/tx.registry"));
const _212 = __importStar(require("./authz/v1beta1/tx.registry"));
const _213 = __importStar(require("./bank/v1beta1/tx.registry"));
const _214 = __importStar(require("./circuit/v1/tx.registry"));
const _215 = __importStar(require("./consensus/v1/tx.registry"));
const _216 = __importStar(require("./distribution/v1beta1/tx.registry"));
const _217 = __importStar(require("./feegrant/v1beta1/tx.registry"));
const _218 = __importStar(require("./gov/v1/tx.registry"));
const _219 = __importStar(require("./gov/v1beta1/tx.registry"));
const _220 = __importStar(require("./group/v1/tx.registry"));
const _221 = __importStar(require("./mint/v1beta1/tx.registry"));
const _222 = __importStar(require("./nft/v1beta1/tx.registry"));
const _223 = __importStar(require("./staking/v1beta1/tx.registry"));
const _224 = __importStar(require("./upgrade/v1beta1/tx.registry"));
const _225 = __importStar(require("./vesting/v1beta1/tx.registry"));
const _226 = __importStar(require("./auth/v1beta1/query.lcd"));
const _227 = __importStar(require("./authz/v1beta1/query.lcd"));
const _228 = __importStar(require("./bank/v1beta1/query.lcd"));
const _229 = __importStar(require("./base/node/v1beta1/query.lcd"));
const _230 = __importStar(require("./base/tendermint/v1beta1/query.lcd"));
const _231 = __importStar(require("./circuit/v1/query.lcd"));
const _232 = __importStar(require("./consensus/v1/query.lcd"));
const _233 = __importStar(require("./distribution/v1beta1/query.lcd"));
const _234 = __importStar(require("./feegrant/v1beta1/query.lcd"));
const _235 = __importStar(require("./gov/v1/query.lcd"));
const _236 = __importStar(require("./gov/v1beta1/query.lcd"));
const _237 = __importStar(require("./group/v1/query.lcd"));
const _238 = __importStar(require("./mint/v1beta1/query.lcd"));
const _239 = __importStar(require("./nft/v1beta1/query.lcd"));
const _240 = __importStar(require("./params/v1beta1/query.lcd"));
const _241 = __importStar(require("./staking/v1beta1/query.lcd"));
const _242 = __importStar(require("./tx/v1beta1/service.lcd"));
const _243 = __importStar(require("./upgrade/v1beta1/query.lcd"));
const _244 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
const _245 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _246 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _247 = __importStar(require("./base/node/v1beta1/query.rpc.Service"));
const _248 = __importStar(require("./base/tendermint/v1beta1/query.rpc.Service"));
const _249 = __importStar(require("./circuit/v1/query.rpc.Query"));
const _250 = __importStar(require("./consensus/v1/query.rpc.Query"));
const _251 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _252 = __importStar(require("./feegrant/v1beta1/query.rpc.Query"));
const _253 = __importStar(require("./gov/v1/query.rpc.Query"));
const _254 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _255 = __importStar(require("./group/v1/query.rpc.Query"));
const _256 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _257 = __importStar(require("./nft/v1beta1/query.rpc.Query"));
const _258 = __importStar(require("./orm/query/v1alpha1/query.rpc.Query"));
const _259 = __importStar(require("./params/v1beta1/query.rpc.Query"));
const _260 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _261 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _262 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _263 = __importStar(require("./auth/v1beta1/tx.rpc.msg"));
const _264 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _265 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _266 = __importStar(require("./circuit/v1/tx.rpc.msg"));
const _267 = __importStar(require("./consensus/v1/tx.rpc.msg"));
const _268 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _269 = __importStar(require("./feegrant/v1beta1/tx.rpc.msg"));
const _270 = __importStar(require("./gov/v1/tx.rpc.msg"));
const _271 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _272 = __importStar(require("./group/v1/tx.rpc.msg"));
const _273 = __importStar(require("./mint/v1beta1/tx.rpc.msg"));
const _274 = __importStar(require("./nft/v1beta1/tx.rpc.msg"));
const _275 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _276 = __importStar(require("./upgrade/v1beta1/tx.rpc.msg"));
const _277 = __importStar(require("./vesting/v1beta1/tx.rpc.msg"));
const _311 = __importStar(require("./lcd"));
const _312 = __importStar(require("./rpc.query"));
const _313 = __importStar(require("./rpc.tx"));
var cosmos;
(function (cosmos) {
    let app;
    (function (app) {
        let runtime;
        (function (runtime) {
            runtime.v1alpha1 = {
                ..._22
            };
        })(runtime = app.runtime || (app.runtime = {}));
    })(app = cosmos.app || (cosmos.app = {}));
    let auth;
    (function (auth) {
        let module;
        (function (module) {
            module.v1 = {
                ..._23
            };
        })(module = auth.module || (auth.module = {}));
        auth.v1beta1 = {
            ..._24,
            ..._25,
            ..._26,
            ..._27,
            ..._196,
            ..._211,
            ..._226,
            ..._244,
            ..._263
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        let module;
        (function (module) {
            module.v1 = {
                ..._28
            };
        })(module = authz.module || (authz.module = {}));
        authz.v1beta1 = {
            ..._29,
            ..._30,
            ..._31,
            ..._32,
            ..._33,
            ..._197,
            ..._212,
            ..._227,
            ..._245,
            ..._264
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        let module;
        (function (module) {
            module.v1 = {
                ..._34
            };
        })(module = bank.module || (bank.module = {}));
        bank.v1beta1 = {
            ..._35,
            ..._36,
            ..._37,
            ..._38,
            ..._39,
            ..._198,
            ..._213,
            ..._228,
            ..._246,
            ..._265
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._40
            };
        })(abci = base.abci || (base.abci = {}));
        let node;
        (function (node) {
            node.v1beta1 = {
                ..._41,
                ..._229,
                ..._247
            };
        })(node = base.node || (base.node = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._42
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v2alpha1 = {
                ..._43
            };
        })(reflection = base.reflection || (base.reflection = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1beta1 = {
                ..._44,
                ..._45,
                ..._230,
                ..._248
            };
        })(tendermint = base.tendermint || (base.tendermint = {}));
        base.v1beta1 = {
            ..._46
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let circuit;
    (function (circuit) {
        let module;
        (function (module) {
            module.v1 = {
                ..._47
            };
        })(module = circuit.module || (circuit.module = {}));
        circuit.v1 = {
            ..._48,
            ..._49,
            ..._50,
            ..._199,
            ..._214,
            ..._231,
            ..._249,
            ..._266
        };
    })(circuit = cosmos.circuit || (cosmos.circuit = {}));
    let consensus;
    (function (consensus) {
        let module;
        (function (module) {
            module.v1 = {
                ..._51
            };
        })(module = consensus.module || (consensus.module = {}));
        consensus.v1 = {
            ..._52,
            ..._53,
            ..._200,
            ..._215,
            ..._232,
            ..._250,
            ..._267
        };
    })(consensus = cosmos.consensus || (cosmos.consensus = {}));
    let crisis;
    (function (crisis) {
        let module;
        (function (module) {
            module.v1 = {
                ..._54
            };
        })(module = crisis.module || (crisis.module = {}));
    })(crisis = cosmos.crisis || (cosmos.crisis = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._55
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._56
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._57
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._58
        };
        crypto.secp256k1 = {
            ..._59
        };
        crypto.secp256r1 = {
            ..._60
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        let module;
        (function (module) {
            module.v1 = {
                ..._61
            };
        })(module = distribution.module || (distribution.module = {}));
        distribution.v1beta1 = {
            ..._62,
            ..._63,
            ..._64,
            ..._65,
            ..._201,
            ..._216,
            ..._233,
            ..._251,
            ..._268
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let evidence;
    (function (evidence) {
        let module;
        (function (module) {
            module.v1 = {
                ..._66
            };
        })(module = evidence.module || (evidence.module = {}));
    })(evidence = cosmos.evidence || (cosmos.evidence = {}));
    let feegrant;
    (function (feegrant) {
        let module;
        (function (module) {
            module.v1 = {
                ..._67
            };
        })(module = feegrant.module || (feegrant.module = {}));
        feegrant.v1beta1 = {
            ..._68,
            ..._69,
            ..._70,
            ..._71,
            ..._202,
            ..._217,
            ..._234,
            ..._252,
            ..._269
        };
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    let genutil;
    (function (genutil) {
        let module;
        (function (module) {
            module.v1 = {
                ..._72
            };
        })(module = genutil.module || (genutil.module = {}));
    })(genutil = cosmos.genutil || (cosmos.genutil = {}));
    let gov;
    (function (gov) {
        let module;
        (function (module) {
            module.v1 = {
                ..._73
            };
        })(module = gov.module || (gov.module = {}));
        gov.v1 = {
            ..._74,
            ..._75,
            ..._76,
            ..._77,
            ..._203,
            ..._218,
            ..._235,
            ..._253,
            ..._270
        };
        gov.v1beta1 = {
            ..._78,
            ..._79,
            ..._80,
            ..._81,
            ..._204,
            ..._219,
            ..._236,
            ..._254,
            ..._271
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let group;
    (function (group) {
        let module;
        (function (module) {
            module.v1 = {
                ..._82
            };
        })(module = group.module || (group.module = {}));
        group.v1 = {
            ..._83,
            ..._84,
            ..._85,
            ..._86,
            ..._87,
            ..._205,
            ..._220,
            ..._237,
            ..._255,
            ..._272
        };
    })(group = cosmos.group || (cosmos.group = {}));
    let ics23;
    (function (ics23) {
        ics23.v1 = {
            ..._88
        };
    })(ics23 = cosmos.ics23 || (cosmos.ics23 = {}));
    let mint;
    (function (mint) {
        let module;
        (function (module) {
            module.v1 = {
                ..._89
            };
        })(module = mint.module || (mint.module = {}));
        mint.v1beta1 = {
            ..._90,
            ..._91,
            ..._92,
            ..._93,
            ..._206,
            ..._221,
            ..._238,
            ..._256,
            ..._273
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let msg;
    (function (msg) {
        let textual;
        (function (textual) {
            textual.v1 = {
                ..._94
            };
        })(textual = msg.textual || (msg.textual = {}));
    })(msg = cosmos.msg || (cosmos.msg = {}));
    let nft;
    (function (nft) {
        let module;
        (function (module) {
            module.v1 = {
                ..._95
            };
        })(module = nft.module || (nft.module = {}));
        nft.v1beta1 = {
            ..._96,
            ..._97,
            ..._98,
            ..._99,
            ..._100,
            ..._207,
            ..._222,
            ..._239,
            ..._257,
            ..._274
        };
    })(nft = cosmos.nft || (cosmos.nft = {}));
    let orm;
    (function (orm) {
        let module;
        (function (module) {
            module.v1alpha1 = {
                ..._101
            };
        })(module = orm.module || (orm.module = {}));
        let query;
        (function (query) {
            query.v1alpha1 = {
                ..._102,
                ..._258
            };
        })(query = orm.query || (orm.query = {}));
    })(orm = cosmos.orm || (cosmos.orm = {}));
    let params;
    (function (params) {
        let module;
        (function (module) {
            module.v1 = {
                ..._103
            };
        })(module = params.module || (params.module = {}));
        params.v1beta1 = {
            ..._104,
            ..._105,
            ..._240,
            ..._259
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let query;
    (function (query) {
        query.v1 = {
            ..._106
        };
    })(query = cosmos.query || (cosmos.query = {}));
    let reflection;
    (function (reflection) {
        reflection.v1 = {
            ..._107
        };
    })(reflection = cosmos.reflection || (cosmos.reflection = {}));
    let slashing;
    (function (slashing) {
        let module;
        (function (module) {
            module.v1 = {
                ..._108
            };
        })(module = slashing.module || (slashing.module = {}));
    })(slashing = cosmos.slashing || (cosmos.slashing = {}));
    let staking;
    (function (staking) {
        let module;
        (function (module) {
            module.v1 = {
                ..._109
            };
        })(module = staking.module || (staking.module = {}));
        staking.v1beta1 = {
            ..._110,
            ..._111,
            ..._112,
            ..._113,
            ..._114,
            ..._208,
            ..._223,
            ..._241,
            ..._260,
            ..._275
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let store;
    (function (store) {
        let internal;
        (function (internal) {
            let kv;
            (function (kv) {
                kv.v1beta1 = {
                    ..._115
                };
            })(kv = internal.kv || (internal.kv = {}));
        })(internal = store.internal || (store.internal = {}));
        let snapshots;
        (function (snapshots) {
            snapshots.v1 = {
                ..._116
            };
        })(snapshots = store.snapshots || (store.snapshots = {}));
        let streaming;
        (function (streaming) {
            streaming.abci = {
                ..._117
            };
        })(streaming = store.streaming || (store.streaming = {}));
        store.v1beta1 = {
            ..._118,
            ..._119
        };
    })(store = cosmos.store || (cosmos.store = {}));
    let tx;
    (function (tx) {
        let config;
        (function (config) {
            config.v1 = {
                ..._120
            };
        })(config = tx.config || (tx.config = {}));
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._121
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._122,
            ..._123,
            ..._242,
            ..._261
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        let module;
        (function (module) {
            module.v1 = {
                ..._124
            };
        })(module = upgrade.module || (upgrade.module = {}));
        upgrade.v1beta1 = {
            ..._125,
            ..._126,
            ..._127,
            ..._209,
            ..._224,
            ..._243,
            ..._262,
            ..._276
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        let module;
        (function (module) {
            module.v1 = {
                ..._128
            };
        })(module = vesting.module || (vesting.module = {}));
        vesting.v1beta1 = {
            ..._129,
            ..._130,
            ..._210,
            ..._225,
            ..._277
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._311,
        ..._312,
        ..._313
    };
})(cosmos || (exports.cosmos = cosmos = {}));
//# sourceMappingURL=bundle.js.map