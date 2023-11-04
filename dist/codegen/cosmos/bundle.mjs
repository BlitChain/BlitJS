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
import * as _43 from "./consensus/module/v1/module";
import * as _44 from "./consensus/v1/query";
import * as _45 from "./consensus/v1/tx";
import * as _46 from "./crisis/module/v1/module";
import * as _47 from "./crypto/ed25519/keys";
import * as _48 from "./crypto/hd/v1/hd";
import * as _49 from "./crypto/keyring/v1/record";
import * as _50 from "./crypto/multisig/keys";
import * as _51 from "./crypto/secp256k1/keys";
import * as _52 from "./crypto/secp256r1/keys";
import * as _53 from "./distribution/module/v1/module";
import * as _54 from "./distribution/v1beta1/distribution";
import * as _55 from "./distribution/v1beta1/genesis";
import * as _56 from "./distribution/v1beta1/query";
import * as _57 from "./distribution/v1beta1/tx";
import * as _58 from "./evidence/module/v1/module";
import * as _59 from "./feegrant/module/v1/module";
import * as _60 from "./feegrant/v1beta1/feegrant";
import * as _61 from "./feegrant/v1beta1/genesis";
import * as _62 from "./feegrant/v1beta1/query";
import * as _63 from "./feegrant/v1beta1/tx";
import * as _64 from "./genutil/module/v1/module";
import * as _65 from "./gov/module/v1/module";
import * as _66 from "./gov/v1/genesis";
import * as _67 from "./gov/v1/gov";
import * as _68 from "./gov/v1/query";
import * as _69 from "./gov/v1/tx";
import * as _70 from "./gov/v1beta1/genesis";
import * as _71 from "./gov/v1beta1/gov";
import * as _72 from "./gov/v1beta1/query";
import * as _73 from "./gov/v1beta1/tx";
import * as _74 from "./group/module/v1/module";
import * as _75 from "./group/v1/events";
import * as _76 from "./group/v1/genesis";
import * as _77 from "./group/v1/query";
import * as _78 from "./group/v1/tx";
import * as _79 from "./group/v1/types";
import * as _80 from "./mint/module/v1/module";
import * as _81 from "./mint/v1beta1/genesis";
import * as _82 from "./mint/v1beta1/mint";
import * as _83 from "./mint/v1beta1/query";
import * as _84 from "./mint/v1beta1/tx";
import * as _85 from "./nft/module/v1/module";
import * as _86 from "./nft/v1beta1/event";
import * as _87 from "./nft/v1beta1/genesis";
import * as _88 from "./nft/v1beta1/nft";
import * as _89 from "./nft/v1beta1/query";
import * as _90 from "./nft/v1beta1/tx";
import * as _91 from "./orm/module/v1alpha1/module";
import * as _92 from "./orm/query/v1alpha1/query";
import * as _93 from "./params/module/v1/module";
import * as _94 from "./params/v1beta1/params";
import * as _95 from "./params/v1beta1/query";
import * as _96 from "./query/v1/query";
import * as _97 from "./reflection/v1/reflection";
import * as _98 from "./slashing/module/v1/module";
import * as _99 from "./staking/module/v1/module";
import * as _100 from "./staking/v1beta1/authz";
import * as _101 from "./staking/v1beta1/genesis";
import * as _102 from "./staking/v1beta1/query";
import * as _103 from "./staking/v1beta1/staking";
import * as _104 from "./staking/v1beta1/tx";
import * as _105 from "./tx/config/v1/config";
import * as _106 from "./tx/signing/v1beta1/signing";
import * as _107 from "./tx/v1beta1/service";
import * as _108 from "./tx/v1beta1/tx";
import * as _109 from "./upgrade/module/v1/module";
import * as _110 from "./upgrade/v1beta1/query";
import * as _111 from "./upgrade/v1beta1/tx";
import * as _112 from "./upgrade/v1beta1/upgrade";
import * as _113 from "./vesting/module/v1/module";
import * as _114 from "./vesting/v1beta1/tx";
import * as _115 from "./vesting/v1beta1/vesting";
import * as _148 from "./auth/v1beta1/tx.amino";
import * as _149 from "./authz/v1beta1/tx.amino";
import * as _150 from "./bank/v1beta1/tx.amino";
import * as _151 from "./consensus/v1/tx.amino";
import * as _152 from "./distribution/v1beta1/tx.amino";
import * as _153 from "./feegrant/v1beta1/tx.amino";
import * as _154 from "./gov/v1/tx.amino";
import * as _155 from "./gov/v1beta1/tx.amino";
import * as _156 from "./group/v1/tx.amino";
import * as _157 from "./mint/v1beta1/tx.amino";
import * as _158 from "./nft/v1beta1/tx.amino";
import * as _159 from "./staking/v1beta1/tx.amino";
import * as _160 from "./upgrade/v1beta1/tx.amino";
import * as _161 from "./vesting/v1beta1/tx.amino";
import * as _162 from "./auth/v1beta1/tx.registry";
import * as _163 from "./authz/v1beta1/tx.registry";
import * as _164 from "./bank/v1beta1/tx.registry";
import * as _165 from "./consensus/v1/tx.registry";
import * as _166 from "./distribution/v1beta1/tx.registry";
import * as _167 from "./feegrant/v1beta1/tx.registry";
import * as _168 from "./gov/v1/tx.registry";
import * as _169 from "./gov/v1beta1/tx.registry";
import * as _170 from "./group/v1/tx.registry";
import * as _171 from "./mint/v1beta1/tx.registry";
import * as _172 from "./nft/v1beta1/tx.registry";
import * as _173 from "./staking/v1beta1/tx.registry";
import * as _174 from "./upgrade/v1beta1/tx.registry";
import * as _175 from "./vesting/v1beta1/tx.registry";
import * as _176 from "./auth/v1beta1/query.lcd";
import * as _177 from "./authz/v1beta1/query.lcd";
import * as _178 from "./bank/v1beta1/query.lcd";
import * as _179 from "./base/node/v1beta1/query.lcd";
import * as _180 from "./base/tendermint/v1beta1/query.lcd";
import * as _181 from "./consensus/v1/query.lcd";
import * as _182 from "./distribution/v1beta1/query.lcd";
import * as _183 from "./feegrant/v1beta1/query.lcd";
import * as _184 from "./gov/v1/query.lcd";
import * as _185 from "./gov/v1beta1/query.lcd";
import * as _186 from "./group/v1/query.lcd";
import * as _187 from "./mint/v1beta1/query.lcd";
import * as _188 from "./nft/v1beta1/query.lcd";
import * as _189 from "./params/v1beta1/query.lcd";
import * as _190 from "./staking/v1beta1/query.lcd";
import * as _191 from "./tx/v1beta1/service.lcd";
import * as _192 from "./upgrade/v1beta1/query.lcd";
import * as _193 from "./auth/v1beta1/query.rpc.Query";
import * as _194 from "./authz/v1beta1/query.rpc.Query";
import * as _195 from "./bank/v1beta1/query.rpc.Query";
import * as _196 from "./base/node/v1beta1/query.rpc.Service";
import * as _197 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _198 from "./consensus/v1/query.rpc.Query";
import * as _199 from "./distribution/v1beta1/query.rpc.Query";
import * as _200 from "./feegrant/v1beta1/query.rpc.Query";
import * as _201 from "./gov/v1/query.rpc.Query";
import * as _202 from "./gov/v1beta1/query.rpc.Query";
import * as _203 from "./group/v1/query.rpc.Query";
import * as _204 from "./mint/v1beta1/query.rpc.Query";
import * as _205 from "./nft/v1beta1/query.rpc.Query";
import * as _206 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _207 from "./params/v1beta1/query.rpc.Query";
import * as _208 from "./staking/v1beta1/query.rpc.Query";
import * as _209 from "./tx/v1beta1/service.rpc.Service";
import * as _210 from "./upgrade/v1beta1/query.rpc.Query";
import * as _211 from "./auth/v1beta1/tx.rpc.msg";
import * as _212 from "./authz/v1beta1/tx.rpc.msg";
import * as _213 from "./bank/v1beta1/tx.rpc.msg";
import * as _214 from "./consensus/v1/tx.rpc.msg";
import * as _215 from "./distribution/v1beta1/tx.rpc.msg";
import * as _216 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _217 from "./gov/v1/tx.rpc.msg";
import * as _218 from "./gov/v1beta1/tx.rpc.msg";
import * as _219 from "./group/v1/tx.rpc.msg";
import * as _220 from "./mint/v1beta1/tx.rpc.msg";
import * as _221 from "./nft/v1beta1/tx.rpc.msg";
import * as _222 from "./staking/v1beta1/tx.rpc.msg";
import * as _223 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _224 from "./vesting/v1beta1/tx.rpc.msg";
import * as _228 from "./lcd";
import * as _229 from "./rpc.query";
import * as _230 from "./rpc.tx";
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
})(cosmos || (cosmos = {}));
//# sourceMappingURL=bundle.js.map