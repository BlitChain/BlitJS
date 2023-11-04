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
const _43 = __importStar(require("./consensus/module/v1/module"));
const _44 = __importStar(require("./consensus/v1/query"));
const _45 = __importStar(require("./consensus/v1/tx"));
const _46 = __importStar(require("./crisis/module/v1/module"));
const _47 = __importStar(require("./crypto/ed25519/keys"));
const _48 = __importStar(require("./crypto/hd/v1/hd"));
const _49 = __importStar(require("./crypto/keyring/v1/record"));
const _50 = __importStar(require("./crypto/multisig/keys"));
const _51 = __importStar(require("./crypto/secp256k1/keys"));
const _52 = __importStar(require("./crypto/secp256r1/keys"));
const _53 = __importStar(require("./distribution/module/v1/module"));
const _54 = __importStar(require("./distribution/v1beta1/distribution"));
const _55 = __importStar(require("./distribution/v1beta1/genesis"));
const _56 = __importStar(require("./distribution/v1beta1/query"));
const _57 = __importStar(require("./distribution/v1beta1/tx"));
const _58 = __importStar(require("./evidence/module/v1/module"));
const _59 = __importStar(require("./feegrant/module/v1/module"));
const _60 = __importStar(require("./feegrant/v1beta1/feegrant"));
const _61 = __importStar(require("./feegrant/v1beta1/genesis"));
const _62 = __importStar(require("./feegrant/v1beta1/query"));
const _63 = __importStar(require("./feegrant/v1beta1/tx"));
const _64 = __importStar(require("./genutil/module/v1/module"));
const _65 = __importStar(require("./gov/module/v1/module"));
const _66 = __importStar(require("./gov/v1/genesis"));
const _67 = __importStar(require("./gov/v1/gov"));
const _68 = __importStar(require("./gov/v1/query"));
const _69 = __importStar(require("./gov/v1/tx"));
const _70 = __importStar(require("./gov/v1beta1/genesis"));
const _71 = __importStar(require("./gov/v1beta1/gov"));
const _72 = __importStar(require("./gov/v1beta1/query"));
const _73 = __importStar(require("./gov/v1beta1/tx"));
const _74 = __importStar(require("./group/module/v1/module"));
const _75 = __importStar(require("./group/v1/events"));
const _76 = __importStar(require("./group/v1/genesis"));
const _77 = __importStar(require("./group/v1/query"));
const _78 = __importStar(require("./group/v1/tx"));
const _79 = __importStar(require("./group/v1/types"));
const _80 = __importStar(require("./mint/module/v1/module"));
const _81 = __importStar(require("./mint/v1beta1/genesis"));
const _82 = __importStar(require("./mint/v1beta1/mint"));
const _83 = __importStar(require("./mint/v1beta1/query"));
const _84 = __importStar(require("./mint/v1beta1/tx"));
const _85 = __importStar(require("./nft/module/v1/module"));
const _86 = __importStar(require("./nft/v1beta1/event"));
const _87 = __importStar(require("./nft/v1beta1/genesis"));
const _88 = __importStar(require("./nft/v1beta1/nft"));
const _89 = __importStar(require("./nft/v1beta1/query"));
const _90 = __importStar(require("./nft/v1beta1/tx"));
const _91 = __importStar(require("./orm/module/v1alpha1/module"));
const _92 = __importStar(require("./orm/query/v1alpha1/query"));
const _93 = __importStar(require("./params/module/v1/module"));
const _94 = __importStar(require("./params/v1beta1/params"));
const _95 = __importStar(require("./params/v1beta1/query"));
const _96 = __importStar(require("./query/v1/query"));
const _97 = __importStar(require("./reflection/v1/reflection"));
const _98 = __importStar(require("./slashing/module/v1/module"));
const _99 = __importStar(require("./staking/module/v1/module"));
const _100 = __importStar(require("./staking/v1beta1/authz"));
const _101 = __importStar(require("./staking/v1beta1/genesis"));
const _102 = __importStar(require("./staking/v1beta1/query"));
const _103 = __importStar(require("./staking/v1beta1/staking"));
const _104 = __importStar(require("./staking/v1beta1/tx"));
const _105 = __importStar(require("./tx/config/v1/config"));
const _106 = __importStar(require("./tx/signing/v1beta1/signing"));
const _107 = __importStar(require("./tx/v1beta1/service"));
const _108 = __importStar(require("./tx/v1beta1/tx"));
const _109 = __importStar(require("./upgrade/module/v1/module"));
const _110 = __importStar(require("./upgrade/v1beta1/query"));
const _111 = __importStar(require("./upgrade/v1beta1/tx"));
const _112 = __importStar(require("./upgrade/v1beta1/upgrade"));
const _113 = __importStar(require("./vesting/module/v1/module"));
const _114 = __importStar(require("./vesting/v1beta1/tx"));
const _115 = __importStar(require("./vesting/v1beta1/vesting"));
const _148 = __importStar(require("./auth/v1beta1/tx.amino"));
const _149 = __importStar(require("./authz/v1beta1/tx.amino"));
const _150 = __importStar(require("./bank/v1beta1/tx.amino"));
const _151 = __importStar(require("./consensus/v1/tx.amino"));
const _152 = __importStar(require("./distribution/v1beta1/tx.amino"));
const _153 = __importStar(require("./feegrant/v1beta1/tx.amino"));
const _154 = __importStar(require("./gov/v1/tx.amino"));
const _155 = __importStar(require("./gov/v1beta1/tx.amino"));
const _156 = __importStar(require("./group/v1/tx.amino"));
const _157 = __importStar(require("./mint/v1beta1/tx.amino"));
const _158 = __importStar(require("./nft/v1beta1/tx.amino"));
const _159 = __importStar(require("./staking/v1beta1/tx.amino"));
const _160 = __importStar(require("./upgrade/v1beta1/tx.amino"));
const _161 = __importStar(require("./vesting/v1beta1/tx.amino"));
const _162 = __importStar(require("./auth/v1beta1/tx.registry"));
const _163 = __importStar(require("./authz/v1beta1/tx.registry"));
const _164 = __importStar(require("./bank/v1beta1/tx.registry"));
const _165 = __importStar(require("./consensus/v1/tx.registry"));
const _166 = __importStar(require("./distribution/v1beta1/tx.registry"));
const _167 = __importStar(require("./feegrant/v1beta1/tx.registry"));
const _168 = __importStar(require("./gov/v1/tx.registry"));
const _169 = __importStar(require("./gov/v1beta1/tx.registry"));
const _170 = __importStar(require("./group/v1/tx.registry"));
const _171 = __importStar(require("./mint/v1beta1/tx.registry"));
const _172 = __importStar(require("./nft/v1beta1/tx.registry"));
const _173 = __importStar(require("./staking/v1beta1/tx.registry"));
const _174 = __importStar(require("./upgrade/v1beta1/tx.registry"));
const _175 = __importStar(require("./vesting/v1beta1/tx.registry"));
const _176 = __importStar(require("./auth/v1beta1/query.lcd"));
const _177 = __importStar(require("./authz/v1beta1/query.lcd"));
const _178 = __importStar(require("./bank/v1beta1/query.lcd"));
const _179 = __importStar(require("./base/node/v1beta1/query.lcd"));
const _180 = __importStar(require("./base/tendermint/v1beta1/query.lcd"));
const _181 = __importStar(require("./consensus/v1/query.lcd"));
const _182 = __importStar(require("./distribution/v1beta1/query.lcd"));
const _183 = __importStar(require("./feegrant/v1beta1/query.lcd"));
const _184 = __importStar(require("./gov/v1/query.lcd"));
const _185 = __importStar(require("./gov/v1beta1/query.lcd"));
const _186 = __importStar(require("./group/v1/query.lcd"));
const _187 = __importStar(require("./mint/v1beta1/query.lcd"));
const _188 = __importStar(require("./nft/v1beta1/query.lcd"));
const _189 = __importStar(require("./params/v1beta1/query.lcd"));
const _190 = __importStar(require("./staking/v1beta1/query.lcd"));
const _191 = __importStar(require("./tx/v1beta1/service.lcd"));
const _192 = __importStar(require("./upgrade/v1beta1/query.lcd"));
const _193 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
const _194 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _195 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _196 = __importStar(require("./base/node/v1beta1/query.rpc.Service"));
const _197 = __importStar(require("./base/tendermint/v1beta1/query.rpc.Service"));
const _198 = __importStar(require("./consensus/v1/query.rpc.Query"));
const _199 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _200 = __importStar(require("./feegrant/v1beta1/query.rpc.Query"));
const _201 = __importStar(require("./gov/v1/query.rpc.Query"));
const _202 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _203 = __importStar(require("./group/v1/query.rpc.Query"));
const _204 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _205 = __importStar(require("./nft/v1beta1/query.rpc.Query"));
const _206 = __importStar(require("./orm/query/v1alpha1/query.rpc.Query"));
const _207 = __importStar(require("./params/v1beta1/query.rpc.Query"));
const _208 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _209 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _210 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _211 = __importStar(require("./auth/v1beta1/tx.rpc.msg"));
const _212 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _213 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _214 = __importStar(require("./consensus/v1/tx.rpc.msg"));
const _215 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _216 = __importStar(require("./feegrant/v1beta1/tx.rpc.msg"));
const _217 = __importStar(require("./gov/v1/tx.rpc.msg"));
const _218 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _219 = __importStar(require("./group/v1/tx.rpc.msg"));
const _220 = __importStar(require("./mint/v1beta1/tx.rpc.msg"));
const _221 = __importStar(require("./nft/v1beta1/tx.rpc.msg"));
const _222 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _223 = __importStar(require("./upgrade/v1beta1/tx.rpc.msg"));
const _224 = __importStar(require("./vesting/v1beta1/tx.rpc.msg"));
const _228 = __importStar(require("./lcd"));
const _229 = __importStar(require("./rpc.query"));
const _230 = __importStar(require("./rpc.tx"));
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
            ..._148,
            ..._162,
            ..._176,
            ..._193,
            ..._211
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
            ..._149,
            ..._163,
            ..._177,
            ..._194,
            ..._212
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
            ..._150,
            ..._164,
            ..._178,
            ..._195,
            ..._213
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
                ..._179,
                ..._196
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
                ..._180,
                ..._197
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
    let consensus;
    (function (consensus) {
        let module;
        (function (module) {
            module.v1 = {
                ..._43
            };
        })(module = consensus.module || (consensus.module = {}));
        consensus.v1 = {
            ..._44,
            ..._45,
            ..._151,
            ..._165,
            ..._181,
            ..._198,
            ..._214
        };
    })(consensus = cosmos.consensus || (cosmos.consensus = {}));
    let crisis;
    (function (crisis) {
        let module;
        (function (module) {
            module.v1 = {
                ..._46
            };
        })(module = crisis.module || (crisis.module = {}));
    })(crisis = cosmos.crisis || (cosmos.crisis = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._47
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._48
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._49
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._50
        };
        crypto.secp256k1 = {
            ..._51
        };
        crypto.secp256r1 = {
            ..._52
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        let module;
        (function (module) {
            module.v1 = {
                ..._53
            };
        })(module = distribution.module || (distribution.module = {}));
        distribution.v1beta1 = {
            ..._54,
            ..._55,
            ..._56,
            ..._57,
            ..._152,
            ..._166,
            ..._182,
            ..._199,
            ..._215
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let evidence;
    (function (evidence) {
        let module;
        (function (module) {
            module.v1 = {
                ..._58
            };
        })(module = evidence.module || (evidence.module = {}));
    })(evidence = cosmos.evidence || (cosmos.evidence = {}));
    let feegrant;
    (function (feegrant) {
        let module;
        (function (module) {
            module.v1 = {
                ..._59
            };
        })(module = feegrant.module || (feegrant.module = {}));
        feegrant.v1beta1 = {
            ..._60,
            ..._61,
            ..._62,
            ..._63,
            ..._153,
            ..._167,
            ..._183,
            ..._200,
            ..._216
        };
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    let genutil;
    (function (genutil) {
        let module;
        (function (module) {
            module.v1 = {
                ..._64
            };
        })(module = genutil.module || (genutil.module = {}));
    })(genutil = cosmos.genutil || (cosmos.genutil = {}));
    let gov;
    (function (gov) {
        let module;
        (function (module) {
            module.v1 = {
                ..._65
            };
        })(module = gov.module || (gov.module = {}));
        gov.v1 = {
            ..._66,
            ..._67,
            ..._68,
            ..._69,
            ..._154,
            ..._168,
            ..._184,
            ..._201,
            ..._217
        };
        gov.v1beta1 = {
            ..._70,
            ..._71,
            ..._72,
            ..._73,
            ..._155,
            ..._169,
            ..._185,
            ..._202,
            ..._218
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let group;
    (function (group) {
        let module;
        (function (module) {
            module.v1 = {
                ..._74
            };
        })(module = group.module || (group.module = {}));
        group.v1 = {
            ..._75,
            ..._76,
            ..._77,
            ..._78,
            ..._79,
            ..._156,
            ..._170,
            ..._186,
            ..._203,
            ..._219
        };
    })(group = cosmos.group || (cosmos.group = {}));
    let mint;
    (function (mint) {
        let module;
        (function (module) {
            module.v1 = {
                ..._80
            };
        })(module = mint.module || (mint.module = {}));
        mint.v1beta1 = {
            ..._81,
            ..._82,
            ..._83,
            ..._84,
            ..._157,
            ..._171,
            ..._187,
            ..._204,
            ..._220
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let nft;
    (function (nft) {
        let module;
        (function (module) {
            module.v1 = {
                ..._85
            };
        })(module = nft.module || (nft.module = {}));
        nft.v1beta1 = {
            ..._86,
            ..._87,
            ..._88,
            ..._89,
            ..._90,
            ..._158,
            ..._172,
            ..._188,
            ..._205,
            ..._221
        };
    })(nft = cosmos.nft || (cosmos.nft = {}));
    let orm;
    (function (orm) {
        let module;
        (function (module) {
            module.v1alpha1 = {
                ..._91
            };
        })(module = orm.module || (orm.module = {}));
        let query;
        (function (query) {
            query.v1alpha1 = {
                ..._92,
                ..._206
            };
        })(query = orm.query || (orm.query = {}));
    })(orm = cosmos.orm || (cosmos.orm = {}));
    let params;
    (function (params) {
        let module;
        (function (module) {
            module.v1 = {
                ..._93
            };
        })(module = params.module || (params.module = {}));
        params.v1beta1 = {
            ..._94,
            ..._95,
            ..._189,
            ..._207
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let query;
    (function (query) {
        query.v1 = {
            ..._96
        };
    })(query = cosmos.query || (cosmos.query = {}));
    let reflection;
    (function (reflection) {
        reflection.v1 = {
            ..._97
        };
    })(reflection = cosmos.reflection || (cosmos.reflection = {}));
    let slashing;
    (function (slashing) {
        let module;
        (function (module) {
            module.v1 = {
                ..._98
            };
        })(module = slashing.module || (slashing.module = {}));
    })(slashing = cosmos.slashing || (cosmos.slashing = {}));
    let staking;
    (function (staking) {
        let module;
        (function (module) {
            module.v1 = {
                ..._99
            };
        })(module = staking.module || (staking.module = {}));
        staking.v1beta1 = {
            ..._100,
            ..._101,
            ..._102,
            ..._103,
            ..._104,
            ..._159,
            ..._173,
            ..._190,
            ..._208,
            ..._222
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let config;
        (function (config) {
            config.v1 = {
                ..._105
            };
        })(config = tx.config || (tx.config = {}));
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._106
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._107,
            ..._108,
            ..._191,
            ..._209
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        let module;
        (function (module) {
            module.v1 = {
                ..._109
            };
        })(module = upgrade.module || (upgrade.module = {}));
        upgrade.v1beta1 = {
            ..._110,
            ..._111,
            ..._112,
            ..._160,
            ..._174,
            ..._192,
            ..._210,
            ..._223
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        let module;
        (function (module) {
            module.v1 = {
                ..._113
            };
        })(module = vesting.module || (vesting.module = {}));
        vesting.v1beta1 = {
            ..._114,
            ..._115,
            ..._161,
            ..._175,
            ..._224
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._228,
        ..._229,
        ..._230
    };
})(cosmos || (exports.cosmos = cosmos = {}));
//# sourceMappingURL=bundle.js.map