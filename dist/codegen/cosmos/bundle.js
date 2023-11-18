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
const _17 = __importStar(require("./app/runtime/v1alpha1/module"));
const _18 = __importStar(require("./auth/module/v1/module"));
const _19 = __importStar(require("./auth/v1beta1/auth"));
const _20 = __importStar(require("./auth/v1beta1/genesis"));
const _21 = __importStar(require("./auth/v1beta1/query"));
const _22 = __importStar(require("./auth/v1beta1/tx"));
const _23 = __importStar(require("./authz/module/v1/module"));
const _24 = __importStar(require("./authz/v1beta1/authz"));
const _25 = __importStar(require("./authz/v1beta1/event"));
const _26 = __importStar(require("./authz/v1beta1/genesis"));
const _27 = __importStar(require("./authz/v1beta1/query"));
const _28 = __importStar(require("./authz/v1beta1/tx"));
const _29 = __importStar(require("./bank/module/v1/module"));
const _30 = __importStar(require("./bank/v1beta1/authz"));
const _31 = __importStar(require("./bank/v1beta1/bank"));
const _32 = __importStar(require("./bank/v1beta1/genesis"));
const _33 = __importStar(require("./bank/v1beta1/query"));
const _34 = __importStar(require("./bank/v1beta1/tx"));
const _35 = __importStar(require("./base/abci/v1beta1/abci"));
const _36 = __importStar(require("./base/node/v1beta1/query"));
const _37 = __importStar(require("./base/query/v1beta1/pagination"));
const _38 = __importStar(require("./base/reflection/v2alpha1/reflection"));
const _39 = __importStar(require("./base/tendermint/v1beta1/query"));
const _40 = __importStar(require("./base/tendermint/v1beta1/types"));
const _41 = __importStar(require("./base/v1beta1/coin"));
const _42 = __importStar(require("./capability/module/v1/module"));
const _43 = __importStar(require("./circuit/module/v1/module"));
const _44 = __importStar(require("./circuit/v1/query"));
const _45 = __importStar(require("./circuit/v1/tx"));
const _46 = __importStar(require("./circuit/v1/types"));
const _47 = __importStar(require("./consensus/module/v1/module"));
const _48 = __importStar(require("./consensus/v1/query"));
const _49 = __importStar(require("./consensus/v1/tx"));
const _50 = __importStar(require("./crisis/module/v1/module"));
const _51 = __importStar(require("./crypto/ed25519/keys"));
const _52 = __importStar(require("./crypto/hd/v1/hd"));
const _53 = __importStar(require("./crypto/keyring/v1/record"));
const _54 = __importStar(require("./crypto/multisig/keys"));
const _55 = __importStar(require("./crypto/secp256k1/keys"));
const _56 = __importStar(require("./crypto/secp256r1/keys"));
const _57 = __importStar(require("./distribution/module/v1/module"));
const _58 = __importStar(require("./distribution/v1beta1/distribution"));
const _59 = __importStar(require("./distribution/v1beta1/genesis"));
const _60 = __importStar(require("./distribution/v1beta1/query"));
const _61 = __importStar(require("./distribution/v1beta1/tx"));
const _62 = __importStar(require("./evidence/module/v1/module"));
const _63 = __importStar(require("./feegrant/module/v1/module"));
const _64 = __importStar(require("./feegrant/v1beta1/feegrant"));
const _65 = __importStar(require("./feegrant/v1beta1/genesis"));
const _66 = __importStar(require("./feegrant/v1beta1/query"));
const _67 = __importStar(require("./feegrant/v1beta1/tx"));
const _68 = __importStar(require("./genutil/module/v1/module"));
const _69 = __importStar(require("./gov/module/v1/module"));
const _70 = __importStar(require("./gov/v1/genesis"));
const _71 = __importStar(require("./gov/v1/gov"));
const _72 = __importStar(require("./gov/v1/query"));
const _73 = __importStar(require("./gov/v1/tx"));
const _74 = __importStar(require("./gov/v1beta1/genesis"));
const _75 = __importStar(require("./gov/v1beta1/gov"));
const _76 = __importStar(require("./gov/v1beta1/query"));
const _77 = __importStar(require("./gov/v1beta1/tx"));
const _78 = __importStar(require("./group/module/v1/module"));
const _79 = __importStar(require("./group/v1/events"));
const _80 = __importStar(require("./group/v1/genesis"));
const _81 = __importStar(require("./group/v1/query"));
const _82 = __importStar(require("./group/v1/tx"));
const _83 = __importStar(require("./group/v1/types"));
const _84 = __importStar(require("./mint/module/v1/module"));
const _85 = __importStar(require("./mint/v1beta1/genesis"));
const _86 = __importStar(require("./mint/v1beta1/mint"));
const _87 = __importStar(require("./mint/v1beta1/query"));
const _88 = __importStar(require("./mint/v1beta1/tx"));
const _89 = __importStar(require("./msg/textual/v1/textual"));
const _90 = __importStar(require("./nft/module/v1/module"));
const _91 = __importStar(require("./nft/v1beta1/event"));
const _92 = __importStar(require("./nft/v1beta1/genesis"));
const _93 = __importStar(require("./nft/v1beta1/nft"));
const _94 = __importStar(require("./nft/v1beta1/query"));
const _95 = __importStar(require("./nft/v1beta1/tx"));
const _96 = __importStar(require("./orm/module/v1alpha1/module"));
const _97 = __importStar(require("./orm/query/v1alpha1/query"));
const _98 = __importStar(require("./params/module/v1/module"));
const _99 = __importStar(require("./params/v1beta1/params"));
const _100 = __importStar(require("./params/v1beta1/query"));
const _101 = __importStar(require("./query/v1/query"));
const _102 = __importStar(require("./reflection/v1/reflection"));
const _103 = __importStar(require("./slashing/module/v1/module"));
const _104 = __importStar(require("./staking/module/v1/module"));
const _105 = __importStar(require("./staking/v1beta1/authz"));
const _106 = __importStar(require("./staking/v1beta1/genesis"));
const _107 = __importStar(require("./staking/v1beta1/query"));
const _108 = __importStar(require("./staking/v1beta1/staking"));
const _109 = __importStar(require("./staking/v1beta1/tx"));
const _110 = __importStar(require("./store/internal/kv/v1beta1/kv"));
const _111 = __importStar(require("./store/snapshots/v1/snapshot"));
const _112 = __importStar(require("./store/streaming/abci/grpc"));
const _113 = __importStar(require("./store/v1beta1/commit_info"));
const _114 = __importStar(require("./store/v1beta1/listening"));
const _115 = __importStar(require("./tx/config/v1/config"));
const _116 = __importStar(require("./tx/signing/v1beta1/signing"));
const _117 = __importStar(require("./tx/v1beta1/service"));
const _118 = __importStar(require("./tx/v1beta1/tx"));
const _119 = __importStar(require("./upgrade/module/v1/module"));
const _120 = __importStar(require("./upgrade/v1beta1/query"));
const _121 = __importStar(require("./upgrade/v1beta1/tx"));
const _122 = __importStar(require("./upgrade/v1beta1/upgrade"));
const _123 = __importStar(require("./vesting/module/v1/module"));
const _124 = __importStar(require("./vesting/v1beta1/tx"));
const _125 = __importStar(require("./vesting/v1beta1/vesting"));
const _158 = __importStar(require("./auth/v1beta1/tx.amino"));
const _159 = __importStar(require("./authz/v1beta1/tx.amino"));
const _160 = __importStar(require("./bank/v1beta1/tx.amino"));
const _161 = __importStar(require("./circuit/v1/tx.amino"));
const _162 = __importStar(require("./consensus/v1/tx.amino"));
const _163 = __importStar(require("./distribution/v1beta1/tx.amino"));
const _164 = __importStar(require("./feegrant/v1beta1/tx.amino"));
const _165 = __importStar(require("./gov/v1/tx.amino"));
const _166 = __importStar(require("./gov/v1beta1/tx.amino"));
const _167 = __importStar(require("./group/v1/tx.amino"));
const _168 = __importStar(require("./mint/v1beta1/tx.amino"));
const _169 = __importStar(require("./nft/v1beta1/tx.amino"));
const _170 = __importStar(require("./staking/v1beta1/tx.amino"));
const _171 = __importStar(require("./upgrade/v1beta1/tx.amino"));
const _172 = __importStar(require("./vesting/v1beta1/tx.amino"));
const _173 = __importStar(require("./auth/v1beta1/tx.registry"));
const _174 = __importStar(require("./authz/v1beta1/tx.registry"));
const _175 = __importStar(require("./bank/v1beta1/tx.registry"));
const _176 = __importStar(require("./circuit/v1/tx.registry"));
const _177 = __importStar(require("./consensus/v1/tx.registry"));
const _178 = __importStar(require("./distribution/v1beta1/tx.registry"));
const _179 = __importStar(require("./feegrant/v1beta1/tx.registry"));
const _180 = __importStar(require("./gov/v1/tx.registry"));
const _181 = __importStar(require("./gov/v1beta1/tx.registry"));
const _182 = __importStar(require("./group/v1/tx.registry"));
const _183 = __importStar(require("./mint/v1beta1/tx.registry"));
const _184 = __importStar(require("./nft/v1beta1/tx.registry"));
const _185 = __importStar(require("./staking/v1beta1/tx.registry"));
const _186 = __importStar(require("./upgrade/v1beta1/tx.registry"));
const _187 = __importStar(require("./vesting/v1beta1/tx.registry"));
const _188 = __importStar(require("./auth/v1beta1/query.lcd"));
const _189 = __importStar(require("./authz/v1beta1/query.lcd"));
const _190 = __importStar(require("./bank/v1beta1/query.lcd"));
const _191 = __importStar(require("./base/node/v1beta1/query.lcd"));
const _192 = __importStar(require("./base/tendermint/v1beta1/query.lcd"));
const _193 = __importStar(require("./circuit/v1/query.lcd"));
const _194 = __importStar(require("./consensus/v1/query.lcd"));
const _195 = __importStar(require("./distribution/v1beta1/query.lcd"));
const _196 = __importStar(require("./feegrant/v1beta1/query.lcd"));
const _197 = __importStar(require("./gov/v1/query.lcd"));
const _198 = __importStar(require("./gov/v1beta1/query.lcd"));
const _199 = __importStar(require("./group/v1/query.lcd"));
const _200 = __importStar(require("./mint/v1beta1/query.lcd"));
const _201 = __importStar(require("./nft/v1beta1/query.lcd"));
const _202 = __importStar(require("./params/v1beta1/query.lcd"));
const _203 = __importStar(require("./staking/v1beta1/query.lcd"));
const _204 = __importStar(require("./tx/v1beta1/service.lcd"));
const _205 = __importStar(require("./upgrade/v1beta1/query.lcd"));
const _206 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
const _207 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _208 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _209 = __importStar(require("./base/node/v1beta1/query.rpc.Service"));
const _210 = __importStar(require("./base/tendermint/v1beta1/query.rpc.Service"));
const _211 = __importStar(require("./circuit/v1/query.rpc.Query"));
const _212 = __importStar(require("./consensus/v1/query.rpc.Query"));
const _213 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _214 = __importStar(require("./feegrant/v1beta1/query.rpc.Query"));
const _215 = __importStar(require("./gov/v1/query.rpc.Query"));
const _216 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _217 = __importStar(require("./group/v1/query.rpc.Query"));
const _218 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _219 = __importStar(require("./nft/v1beta1/query.rpc.Query"));
const _220 = __importStar(require("./orm/query/v1alpha1/query.rpc.Query"));
const _221 = __importStar(require("./params/v1beta1/query.rpc.Query"));
const _222 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _223 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _224 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _225 = __importStar(require("./auth/v1beta1/tx.rpc.msg"));
const _226 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _227 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _228 = __importStar(require("./circuit/v1/tx.rpc.msg"));
const _229 = __importStar(require("./consensus/v1/tx.rpc.msg"));
const _230 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _231 = __importStar(require("./feegrant/v1beta1/tx.rpc.msg"));
const _232 = __importStar(require("./gov/v1/tx.rpc.msg"));
const _233 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _234 = __importStar(require("./group/v1/tx.rpc.msg"));
const _235 = __importStar(require("./mint/v1beta1/tx.rpc.msg"));
const _236 = __importStar(require("./nft/v1beta1/tx.rpc.msg"));
const _237 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _238 = __importStar(require("./upgrade/v1beta1/tx.rpc.msg"));
const _239 = __importStar(require("./vesting/v1beta1/tx.rpc.msg"));
const _243 = __importStar(require("./lcd"));
const _244 = __importStar(require("./rpc.query"));
const _245 = __importStar(require("./rpc.tx"));
var cosmos;
(function (cosmos) {
    let app;
    (function (app) {
        let runtime;
        (function (runtime) {
            runtime.v1alpha1 = {
                ..._17
            };
        })(runtime = app.runtime || (app.runtime = {}));
    })(app = cosmos.app || (cosmos.app = {}));
    let auth;
    (function (auth) {
        let module;
        (function (module) {
            module.v1 = {
                ..._18
            };
        })(module = auth.module || (auth.module = {}));
        auth.v1beta1 = {
            ..._19,
            ..._20,
            ..._21,
            ..._22,
            ..._158,
            ..._173,
            ..._188,
            ..._206,
            ..._225
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        let module;
        (function (module) {
            module.v1 = {
                ..._23
            };
        })(module = authz.module || (authz.module = {}));
        authz.v1beta1 = {
            ..._24,
            ..._25,
            ..._26,
            ..._27,
            ..._28,
            ..._159,
            ..._174,
            ..._189,
            ..._207,
            ..._226
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        let module;
        (function (module) {
            module.v1 = {
                ..._29
            };
        })(module = bank.module || (bank.module = {}));
        bank.v1beta1 = {
            ..._30,
            ..._31,
            ..._32,
            ..._33,
            ..._34,
            ..._160,
            ..._175,
            ..._190,
            ..._208,
            ..._227
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._35
            };
        })(abci = base.abci || (base.abci = {}));
        let node;
        (function (node) {
            node.v1beta1 = {
                ..._36,
                ..._191,
                ..._209
            };
        })(node = base.node || (base.node = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._37
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v2alpha1 = {
                ..._38
            };
        })(reflection = base.reflection || (base.reflection = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1beta1 = {
                ..._39,
                ..._40,
                ..._192,
                ..._210
            };
        })(tendermint = base.tendermint || (base.tendermint = {}));
        base.v1beta1 = {
            ..._41
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let capability;
    (function (capability) {
        let module;
        (function (module) {
            module.v1 = {
                ..._42
            };
        })(module = capability.module || (capability.module = {}));
    })(capability = cosmos.capability || (cosmos.capability = {}));
    let circuit;
    (function (circuit) {
        let module;
        (function (module) {
            module.v1 = {
                ..._43
            };
        })(module = circuit.module || (circuit.module = {}));
        circuit.v1 = {
            ..._44,
            ..._45,
            ..._46,
            ..._161,
            ..._176,
            ..._193,
            ..._211,
            ..._228
        };
    })(circuit = cosmos.circuit || (cosmos.circuit = {}));
    let consensus;
    (function (consensus) {
        let module;
        (function (module) {
            module.v1 = {
                ..._47
            };
        })(module = consensus.module || (consensus.module = {}));
        consensus.v1 = {
            ..._48,
            ..._49,
            ..._162,
            ..._177,
            ..._194,
            ..._212,
            ..._229
        };
    })(consensus = cosmos.consensus || (cosmos.consensus = {}));
    let crisis;
    (function (crisis) {
        let module;
        (function (module) {
            module.v1 = {
                ..._50
            };
        })(module = crisis.module || (crisis.module = {}));
    })(crisis = cosmos.crisis || (cosmos.crisis = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._51
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._52
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._53
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._54
        };
        crypto.secp256k1 = {
            ..._55
        };
        crypto.secp256r1 = {
            ..._56
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        let module;
        (function (module) {
            module.v1 = {
                ..._57
            };
        })(module = distribution.module || (distribution.module = {}));
        distribution.v1beta1 = {
            ..._58,
            ..._59,
            ..._60,
            ..._61,
            ..._163,
            ..._178,
            ..._195,
            ..._213,
            ..._230
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let evidence;
    (function (evidence) {
        let module;
        (function (module) {
            module.v1 = {
                ..._62
            };
        })(module = evidence.module || (evidence.module = {}));
    })(evidence = cosmos.evidence || (cosmos.evidence = {}));
    let feegrant;
    (function (feegrant) {
        let module;
        (function (module) {
            module.v1 = {
                ..._63
            };
        })(module = feegrant.module || (feegrant.module = {}));
        feegrant.v1beta1 = {
            ..._64,
            ..._65,
            ..._66,
            ..._67,
            ..._164,
            ..._179,
            ..._196,
            ..._214,
            ..._231
        };
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    let genutil;
    (function (genutil) {
        let module;
        (function (module) {
            module.v1 = {
                ..._68
            };
        })(module = genutil.module || (genutil.module = {}));
    })(genutil = cosmos.genutil || (cosmos.genutil = {}));
    let gov;
    (function (gov) {
        let module;
        (function (module) {
            module.v1 = {
                ..._69
            };
        })(module = gov.module || (gov.module = {}));
        gov.v1 = {
            ..._70,
            ..._71,
            ..._72,
            ..._73,
            ..._165,
            ..._180,
            ..._197,
            ..._215,
            ..._232
        };
        gov.v1beta1 = {
            ..._74,
            ..._75,
            ..._76,
            ..._77,
            ..._166,
            ..._181,
            ..._198,
            ..._216,
            ..._233
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let group;
    (function (group) {
        let module;
        (function (module) {
            module.v1 = {
                ..._78
            };
        })(module = group.module || (group.module = {}));
        group.v1 = {
            ..._79,
            ..._80,
            ..._81,
            ..._82,
            ..._83,
            ..._167,
            ..._182,
            ..._199,
            ..._217,
            ..._234
        };
    })(group = cosmos.group || (cosmos.group = {}));
    let mint;
    (function (mint) {
        let module;
        (function (module) {
            module.v1 = {
                ..._84
            };
        })(module = mint.module || (mint.module = {}));
        mint.v1beta1 = {
            ..._85,
            ..._86,
            ..._87,
            ..._88,
            ..._168,
            ..._183,
            ..._200,
            ..._218,
            ..._235
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let msg;
    (function (msg) {
        let textual;
        (function (textual) {
            textual.v1 = {
                ..._89
            };
        })(textual = msg.textual || (msg.textual = {}));
    })(msg = cosmos.msg || (cosmos.msg = {}));
    let nft;
    (function (nft) {
        let module;
        (function (module) {
            module.v1 = {
                ..._90
            };
        })(module = nft.module || (nft.module = {}));
        nft.v1beta1 = {
            ..._91,
            ..._92,
            ..._93,
            ..._94,
            ..._95,
            ..._169,
            ..._184,
            ..._201,
            ..._219,
            ..._236
        };
    })(nft = cosmos.nft || (cosmos.nft = {}));
    let orm;
    (function (orm) {
        let module;
        (function (module) {
            module.v1alpha1 = {
                ..._96
            };
        })(module = orm.module || (orm.module = {}));
        let query;
        (function (query) {
            query.v1alpha1 = {
                ..._97,
                ..._220
            };
        })(query = orm.query || (orm.query = {}));
    })(orm = cosmos.orm || (cosmos.orm = {}));
    let params;
    (function (params) {
        let module;
        (function (module) {
            module.v1 = {
                ..._98
            };
        })(module = params.module || (params.module = {}));
        params.v1beta1 = {
            ..._99,
            ..._100,
            ..._202,
            ..._221
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let query;
    (function (query) {
        query.v1 = {
            ..._101
        };
    })(query = cosmos.query || (cosmos.query = {}));
    let reflection;
    (function (reflection) {
        reflection.v1 = {
            ..._102
        };
    })(reflection = cosmos.reflection || (cosmos.reflection = {}));
    let slashing;
    (function (slashing) {
        let module;
        (function (module) {
            module.v1 = {
                ..._103
            };
        })(module = slashing.module || (slashing.module = {}));
    })(slashing = cosmos.slashing || (cosmos.slashing = {}));
    let staking;
    (function (staking) {
        let module;
        (function (module) {
            module.v1 = {
                ..._104
            };
        })(module = staking.module || (staking.module = {}));
        staking.v1beta1 = {
            ..._105,
            ..._106,
            ..._107,
            ..._108,
            ..._109,
            ..._170,
            ..._185,
            ..._203,
            ..._222,
            ..._237
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let store;
    (function (store) {
        let internal;
        (function (internal) {
            let kv;
            (function (kv) {
                kv.v1beta1 = {
                    ..._110
                };
            })(kv = internal.kv || (internal.kv = {}));
        })(internal = store.internal || (store.internal = {}));
        let snapshots;
        (function (snapshots) {
            snapshots.v1 = {
                ..._111
            };
        })(snapshots = store.snapshots || (store.snapshots = {}));
        let streaming;
        (function (streaming) {
            streaming.abci = {
                ..._112
            };
        })(streaming = store.streaming || (store.streaming = {}));
        store.v1beta1 = {
            ..._113,
            ..._114
        };
    })(store = cosmos.store || (cosmos.store = {}));
    let tx;
    (function (tx) {
        let config;
        (function (config) {
            config.v1 = {
                ..._115
            };
        })(config = tx.config || (tx.config = {}));
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._116
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._117,
            ..._118,
            ..._204,
            ..._223
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        let module;
        (function (module) {
            module.v1 = {
                ..._119
            };
        })(module = upgrade.module || (upgrade.module = {}));
        upgrade.v1beta1 = {
            ..._120,
            ..._121,
            ..._122,
            ..._171,
            ..._186,
            ..._205,
            ..._224,
            ..._238
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        let module;
        (function (module) {
            module.v1 = {
                ..._123
            };
        })(module = vesting.module || (vesting.module = {}));
        vesting.v1beta1 = {
            ..._124,
            ..._125,
            ..._172,
            ..._187,
            ..._239
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._243,
        ..._244,
        ..._245
    };
})(cosmos || (exports.cosmos = cosmos = {}));
//# sourceMappingURL=bundle.js.map