//@ts-nocheck
import * as _17 from "./app/runtime/v1alpha1/module";
import * as _18 from "./auth/module/v1/module";
import * as _19 from "./auth/v1beta1/auth";
import * as _20 from "./auth/v1beta1/genesis";
import * as _21 from "./auth/v1beta1/query";
import * as _22 from "./auth/v1beta1/tx";
import * as _23 from "./authz/module/v1/module";
import * as _24 from "./authz/v1beta1/authz";
import * as _25 from "./authz/v1beta1/event";
import * as _26 from "./authz/v1beta1/genesis";
import * as _27 from "./authz/v1beta1/query";
import * as _28 from "./authz/v1beta1/tx";
import * as _29 from "./bank/module/v1/module";
import * as _30 from "./bank/v1beta1/authz";
import * as _31 from "./bank/v1beta1/bank";
import * as _32 from "./bank/v1beta1/genesis";
import * as _33 from "./bank/v1beta1/query";
import * as _34 from "./bank/v1beta1/tx";
import * as _35 from "./base/abci/v1beta1/abci";
import * as _36 from "./base/node/v1beta1/query";
import * as _37 from "./base/query/v1beta1/pagination";
import * as _38 from "./base/reflection/v2alpha1/reflection";
import * as _39 from "./base/tendermint/v1beta1/query";
import * as _40 from "./base/tendermint/v1beta1/types";
import * as _41 from "./base/v1beta1/coin";
import * as _42 from "./capability/module/v1/module";
import * as _43 from "./circuit/module/v1/module";
import * as _44 from "./circuit/v1/query";
import * as _45 from "./circuit/v1/tx";
import * as _46 from "./circuit/v1/types";
import * as _47 from "./consensus/module/v1/module";
import * as _48 from "./consensus/v1/query";
import * as _49 from "./consensus/v1/tx";
import * as _50 from "./crisis/module/v1/module";
import * as _51 from "./crypto/ed25519/keys";
import * as _52 from "./crypto/hd/v1/hd";
import * as _53 from "./crypto/keyring/v1/record";
import * as _54 from "./crypto/multisig/keys";
import * as _55 from "./crypto/secp256k1/keys";
import * as _56 from "./crypto/secp256r1/keys";
import * as _57 from "./distribution/module/v1/module";
import * as _58 from "./distribution/v1beta1/distribution";
import * as _59 from "./distribution/v1beta1/genesis";
import * as _60 from "./distribution/v1beta1/query";
import * as _61 from "./distribution/v1beta1/tx";
import * as _62 from "./evidence/module/v1/module";
import * as _63 from "./feegrant/module/v1/module";
import * as _64 from "./feegrant/v1beta1/feegrant";
import * as _65 from "./feegrant/v1beta1/genesis";
import * as _66 from "./feegrant/v1beta1/query";
import * as _67 from "./feegrant/v1beta1/tx";
import * as _68 from "./genutil/module/v1/module";
import * as _69 from "./gov/module/v1/module";
import * as _70 from "./gov/v1/genesis";
import * as _71 from "./gov/v1/gov";
import * as _72 from "./gov/v1/query";
import * as _73 from "./gov/v1/tx";
import * as _74 from "./gov/v1beta1/genesis";
import * as _75 from "./gov/v1beta1/gov";
import * as _76 from "./gov/v1beta1/query";
import * as _77 from "./gov/v1beta1/tx";
import * as _78 from "./group/module/v1/module";
import * as _79 from "./group/v1/events";
import * as _80 from "./group/v1/genesis";
import * as _81 from "./group/v1/query";
import * as _82 from "./group/v1/tx";
import * as _83 from "./group/v1/types";
import * as _84 from "./mint/module/v1/module";
import * as _85 from "./mint/v1beta1/genesis";
import * as _86 from "./mint/v1beta1/mint";
import * as _87 from "./mint/v1beta1/query";
import * as _88 from "./mint/v1beta1/tx";
import * as _89 from "./msg/textual/v1/textual";
import * as _90 from "./nft/module/v1/module";
import * as _91 from "./nft/v1beta1/event";
import * as _92 from "./nft/v1beta1/genesis";
import * as _93 from "./nft/v1beta1/nft";
import * as _94 from "./nft/v1beta1/query";
import * as _95 from "./nft/v1beta1/tx";
import * as _96 from "./orm/module/v1alpha1/module";
import * as _97 from "./orm/query/v1alpha1/query";
import * as _98 from "./params/module/v1/module";
import * as _99 from "./params/v1beta1/params";
import * as _100 from "./params/v1beta1/query";
import * as _101 from "./query/v1/query";
import * as _102 from "./reflection/v1/reflection";
import * as _103 from "./slashing/module/v1/module";
import * as _104 from "./staking/module/v1/module";
import * as _105 from "./staking/v1beta1/authz";
import * as _106 from "./staking/v1beta1/genesis";
import * as _107 from "./staking/v1beta1/query";
import * as _108 from "./staking/v1beta1/staking";
import * as _109 from "./staking/v1beta1/tx";
import * as _110 from "./store/internal/kv/v1beta1/kv";
import * as _111 from "./store/snapshots/v1/snapshot";
import * as _112 from "./store/streaming/abci/grpc";
import * as _113 from "./store/v1beta1/commit_info";
import * as _114 from "./store/v1beta1/listening";
import * as _115 from "./tx/config/v1/config";
import * as _116 from "./tx/signing/v1beta1/signing";
import * as _117 from "./tx/v1beta1/service";
import * as _118 from "./tx/v1beta1/tx";
import * as _119 from "./upgrade/module/v1/module";
import * as _120 from "./upgrade/v1beta1/query";
import * as _121 from "./upgrade/v1beta1/tx";
import * as _122 from "./upgrade/v1beta1/upgrade";
import * as _123 from "./vesting/module/v1/module";
import * as _124 from "./vesting/v1beta1/tx";
import * as _125 from "./vesting/v1beta1/vesting";
import * as _158 from "./auth/v1beta1/tx.amino";
import * as _159 from "./authz/v1beta1/tx.amino";
import * as _160 from "./bank/v1beta1/tx.amino";
import * as _161 from "./circuit/v1/tx.amino";
import * as _162 from "./consensus/v1/tx.amino";
import * as _163 from "./distribution/v1beta1/tx.amino";
import * as _164 from "./feegrant/v1beta1/tx.amino";
import * as _165 from "./gov/v1/tx.amino";
import * as _166 from "./gov/v1beta1/tx.amino";
import * as _167 from "./group/v1/tx.amino";
import * as _168 from "./mint/v1beta1/tx.amino";
import * as _169 from "./nft/v1beta1/tx.amino";
import * as _170 from "./staking/v1beta1/tx.amino";
import * as _171 from "./upgrade/v1beta1/tx.amino";
import * as _172 from "./vesting/v1beta1/tx.amino";
import * as _173 from "./auth/v1beta1/tx.registry";
import * as _174 from "./authz/v1beta1/tx.registry";
import * as _175 from "./bank/v1beta1/tx.registry";
import * as _176 from "./circuit/v1/tx.registry";
import * as _177 from "./consensus/v1/tx.registry";
import * as _178 from "./distribution/v1beta1/tx.registry";
import * as _179 from "./feegrant/v1beta1/tx.registry";
import * as _180 from "./gov/v1/tx.registry";
import * as _181 from "./gov/v1beta1/tx.registry";
import * as _182 from "./group/v1/tx.registry";
import * as _183 from "./mint/v1beta1/tx.registry";
import * as _184 from "./nft/v1beta1/tx.registry";
import * as _185 from "./staking/v1beta1/tx.registry";
import * as _186 from "./upgrade/v1beta1/tx.registry";
import * as _187 from "./vesting/v1beta1/tx.registry";
import * as _188 from "./auth/v1beta1/query.lcd";
import * as _189 from "./authz/v1beta1/query.lcd";
import * as _190 from "./bank/v1beta1/query.lcd";
import * as _191 from "./base/node/v1beta1/query.lcd";
import * as _192 from "./base/tendermint/v1beta1/query.lcd";
import * as _193 from "./circuit/v1/query.lcd";
import * as _194 from "./consensus/v1/query.lcd";
import * as _195 from "./distribution/v1beta1/query.lcd";
import * as _196 from "./feegrant/v1beta1/query.lcd";
import * as _197 from "./gov/v1/query.lcd";
import * as _198 from "./gov/v1beta1/query.lcd";
import * as _199 from "./group/v1/query.lcd";
import * as _200 from "./mint/v1beta1/query.lcd";
import * as _201 from "./nft/v1beta1/query.lcd";
import * as _202 from "./params/v1beta1/query.lcd";
import * as _203 from "./staking/v1beta1/query.lcd";
import * as _204 from "./tx/v1beta1/service.lcd";
import * as _205 from "./upgrade/v1beta1/query.lcd";
import * as _206 from "./auth/v1beta1/query.rpc.Query";
import * as _207 from "./authz/v1beta1/query.rpc.Query";
import * as _208 from "./bank/v1beta1/query.rpc.Query";
import * as _209 from "./base/node/v1beta1/query.rpc.Service";
import * as _210 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _211 from "./circuit/v1/query.rpc.Query";
import * as _212 from "./consensus/v1/query.rpc.Query";
import * as _213 from "./distribution/v1beta1/query.rpc.Query";
import * as _214 from "./feegrant/v1beta1/query.rpc.Query";
import * as _215 from "./gov/v1/query.rpc.Query";
import * as _216 from "./gov/v1beta1/query.rpc.Query";
import * as _217 from "./group/v1/query.rpc.Query";
import * as _218 from "./mint/v1beta1/query.rpc.Query";
import * as _219 from "./nft/v1beta1/query.rpc.Query";
import * as _220 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _221 from "./params/v1beta1/query.rpc.Query";
import * as _222 from "./staking/v1beta1/query.rpc.Query";
import * as _223 from "./tx/v1beta1/service.rpc.Service";
import * as _224 from "./upgrade/v1beta1/query.rpc.Query";
import * as _225 from "./auth/v1beta1/tx.rpc.msg";
import * as _226 from "./authz/v1beta1/tx.rpc.msg";
import * as _227 from "./bank/v1beta1/tx.rpc.msg";
import * as _228 from "./circuit/v1/tx.rpc.msg";
import * as _229 from "./consensus/v1/tx.rpc.msg";
import * as _230 from "./distribution/v1beta1/tx.rpc.msg";
import * as _231 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _232 from "./gov/v1/tx.rpc.msg";
import * as _233 from "./gov/v1beta1/tx.rpc.msg";
import * as _234 from "./group/v1/tx.rpc.msg";
import * as _235 from "./mint/v1beta1/tx.rpc.msg";
import * as _236 from "./nft/v1beta1/tx.rpc.msg";
import * as _237 from "./staking/v1beta1/tx.rpc.msg";
import * as _238 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _239 from "./vesting/v1beta1/tx.rpc.msg";
import * as _243 from "./lcd";
import * as _244 from "./rpc.query";
import * as _245 from "./rpc.tx";
export var cosmos;
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
})(cosmos || (cosmos = {}));
//# sourceMappingURL=bundle.js.map