//@ts-nocheck
import * as _86 from "./downtime-detector/v1beta1/downtime_duration";
import * as _87 from "./downtime-detector/v1beta1/genesis";
import * as _88 from "./downtime-detector/v1beta1/query";
import * as _89 from "./epochs/genesis";
import * as _90 from "./epochs/query";
import * as _91 from "./gamm/pool-models/balancer/balancerPool";
import * as _92 from "./gamm/v1beta1/genesis";
import * as _93 from "./gamm/v1beta1/query";
import * as _94 from "./gamm/v1beta1/tx";
import * as _95 from "./gamm/pool-models/balancer/tx/tx";
import * as _96 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _97 from "./gamm/pool-models/stableswap/tx";
import * as _98 from "./gamm/v2/query";
import * as _99 from "./ibc-rate-limit/v1beta1/params";
import * as _100 from "./ibc-rate-limit/v1beta1/query";
import * as _101 from "./incentives/gauge";
import * as _102 from "./incentives/genesis";
import * as _103 from "./incentives/params";
import * as _104 from "./incentives/query";
import * as _105 from "./incentives/tx";
import * as _106 from "./lockup/genesis";
import * as _107 from "./lockup/lock";
import * as _108 from "./lockup/params";
import * as _109 from "./lockup/query";
import * as _110 from "./lockup/tx";
import * as _111 from "./mint/v1beta1/genesis";
import * as _112 from "./mint/v1beta1/mint";
import * as _113 from "./mint/v1beta1/query";
import * as _114 from "./pool-incentives/v1beta1/genesis";
import * as _115 from "./pool-incentives/v1beta1/gov";
import * as _116 from "./pool-incentives/v1beta1/incentives";
import * as _117 from "./pool-incentives/v1beta1/query";
import * as _118 from "./protorev/v1beta1/genesis";
import * as _119 from "./protorev/v1beta1/gov";
import * as _120 from "./protorev/v1beta1/params";
import * as _121 from "./protorev/v1beta1/protorev";
import * as _122 from "./protorev/v1beta1/query";
import * as _123 from "./protorev/v1beta1/tx";
import * as _124 from "./sumtree/v1beta1/tree";
import * as _125 from "./superfluid/genesis";
import * as _126 from "./superfluid/params";
import * as _127 from "./superfluid/query";
import * as _128 from "./superfluid/superfluid";
import * as _129 from "./superfluid/tx";
import * as _130 from "./swaprouter/v1beta1/genesis";
import * as _131 from "./swaprouter/v1beta1/module_route";
import * as _132 from "./swaprouter/v1beta1/query";
import * as _133 from "./swaprouter/v1beta1/swap_route";
import * as _134 from "./swaprouter/v1beta1/tx";
import * as _135 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _136 from "./tokenfactory/v1beta1/genesis";
import * as _137 from "./tokenfactory/v1beta1/params";
import * as _138 from "./tokenfactory/v1beta1/query";
import * as _139 from "./tokenfactory/v1beta1/tx";
import * as _140 from "./twap/v1beta1/genesis";
import * as _141 from "./twap/v1beta1/query";
import * as _142 from "./twap/v1beta1/twap_record";
import * as _143 from "./txfees/v1beta1/feetoken";
import * as _144 from "./txfees/v1beta1/genesis";
import * as _145 from "./txfees/v1beta1/gov";
import * as _146 from "./txfees/v1beta1/query";
import * as _147 from "./valset-pref/v1beta1/query";
import * as _148 from "./valset-pref/v1beta1/state";
import * as _149 from "./valset-pref/v1beta1/tx";
import * as _234 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _235 from "./gamm/pool-models/stableswap/tx.amino";
import * as _236 from "./gamm/v1beta1/tx.amino";
import * as _237 from "./incentives/tx.amino";
import * as _238 from "./lockup/tx.amino";
import * as _239 from "./protorev/v1beta1/tx.amino";
import * as _240 from "./superfluid/tx.amino";
import * as _241 from "./swaprouter/v1beta1/tx.amino";
import * as _242 from "./tokenfactory/v1beta1/tx.amino";
import * as _243 from "./valset-pref/v1beta1/tx.amino";
import * as _244 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _245 from "./gamm/pool-models/stableswap/tx.registry";
import * as _246 from "./gamm/v1beta1/tx.registry";
import * as _247 from "./incentives/tx.registry";
import * as _248 from "./lockup/tx.registry";
import * as _249 from "./protorev/v1beta1/tx.registry";
import * as _250 from "./superfluid/tx.registry";
import * as _251 from "./swaprouter/v1beta1/tx.registry";
import * as _252 from "./tokenfactory/v1beta1/tx.registry";
import * as _253 from "./valset-pref/v1beta1/tx.registry";
import * as _254 from "./downtime-detector/v1beta1/query.lcd";
import * as _255 from "./epochs/query.lcd";
import * as _256 from "./gamm/v1beta1/query.lcd";
import * as _257 from "./gamm/v2/query.lcd";
import * as _258 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _259 from "./incentives/query.lcd";
import * as _260 from "./lockup/query.lcd";
import * as _261 from "./mint/v1beta1/query.lcd";
import * as _262 from "./pool-incentives/v1beta1/query.lcd";
import * as _263 from "./protorev/v1beta1/query.lcd";
import * as _264 from "./superfluid/query.lcd";
import * as _265 from "./swaprouter/v1beta1/query.lcd";
import * as _266 from "./tokenfactory/v1beta1/query.lcd";
import * as _267 from "./twap/v1beta1/query.lcd";
import * as _268 from "./txfees/v1beta1/query.lcd";
import * as _269 from "./valset-pref/v1beta1/query.lcd";
import * as _270 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _271 from "./epochs/query.rpc.Query";
import * as _272 from "./gamm/v1beta1/query.rpc.Query";
import * as _273 from "./gamm/v2/query.rpc.Query";
import * as _274 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _275 from "./incentives/query.rpc.Query";
import * as _276 from "./lockup/query.rpc.Query";
import * as _277 from "./mint/v1beta1/query.rpc.Query";
import * as _278 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _279 from "./protorev/v1beta1/query.rpc.Query";
import * as _280 from "./superfluid/query.rpc.Query";
import * as _281 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _282 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _283 from "./twap/v1beta1/query.rpc.Query";
import * as _284 from "./txfees/v1beta1/query.rpc.Query";
import * as _285 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _286 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _287 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _288 from "./gamm/v1beta1/tx.rpc.msg";
import * as _289 from "./incentives/tx.rpc.msg";
import * as _290 from "./lockup/tx.rpc.msg";
import * as _291 from "./protorev/v1beta1/tx.rpc.msg";
import * as _292 from "./superfluid/tx.rpc.msg";
import * as _293 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _294 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _295 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _302 from "./lcd";
import * as _303 from "./rpc.query";
import * as _304 from "./rpc.tx";
export var osmosis;
(function (osmosis) {
    let downtimedetector;
    (function (downtimedetector) {
        downtimedetector.v1beta1 = {
            ..._86,
            ..._87,
            ..._88,
            ..._254,
            ..._270
        };
    })(downtimedetector = osmosis.downtimedetector || (osmosis.downtimedetector = {}));
    let epochs;
    (function (epochs) {
        epochs.v1beta1 = {
            ..._89,
            ..._90,
            ..._255,
            ..._271
        };
    })(epochs = osmosis.epochs || (osmosis.epochs = {}));
    let gamm;
    (function (gamm) {
        gamm.v1beta1 = {
            ..._91,
            ..._92,
            ..._93,
            ..._94,
            ..._236,
            ..._246,
            ..._256,
            ..._272,
            ..._288
        };
        let poolmodels;
        (function (poolmodels) {
            let balancer;
            (function (balancer) {
                balancer.v1beta1 = {
                    ..._95,
                    ..._234,
                    ..._244,
                    ..._286
                };
            })(balancer = poolmodels.balancer || (poolmodels.balancer = {}));
            let stableswap;
            (function (stableswap) {
                stableswap.v1beta1 = {
                    ..._96,
                    ..._97,
                    ..._235,
                    ..._245,
                    ..._287
                };
            })(stableswap = poolmodels.stableswap || (poolmodels.stableswap = {}));
        })(poolmodels = gamm.poolmodels || (gamm.poolmodels = {}));
        gamm.v2 = {
            ..._98,
            ..._257,
            ..._273
        };
    })(gamm = osmosis.gamm || (osmosis.gamm = {}));
    let ibcratelimit;
    (function (ibcratelimit) {
        ibcratelimit.v1beta1 = {
            ..._99,
            ..._100,
            ..._258,
            ..._274
        };
    })(ibcratelimit = osmosis.ibcratelimit || (osmosis.ibcratelimit = {}));
    osmosis.incentives = {
        ..._101,
        ..._102,
        ..._103,
        ..._104,
        ..._105,
        ..._237,
        ..._247,
        ..._259,
        ..._275,
        ..._289
    };
    osmosis.lockup = {
        ..._106,
        ..._107,
        ..._108,
        ..._109,
        ..._110,
        ..._238,
        ..._248,
        ..._260,
        ..._276,
        ..._290
    };
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._111,
            ..._112,
            ..._113,
            ..._261,
            ..._277
        };
    })(mint = osmosis.mint || (osmosis.mint = {}));
    let poolincentives;
    (function (poolincentives) {
        poolincentives.v1beta1 = {
            ..._114,
            ..._115,
            ..._116,
            ..._117,
            ..._262,
            ..._278
        };
    })(poolincentives = osmosis.poolincentives || (osmosis.poolincentives = {}));
    let protorev;
    (function (protorev) {
        protorev.v1beta1 = {
            ..._118,
            ..._119,
            ..._120,
            ..._121,
            ..._122,
            ..._123,
            ..._239,
            ..._249,
            ..._263,
            ..._279,
            ..._291
        };
    })(protorev = osmosis.protorev || (osmosis.protorev = {}));
    let store;
    (function (store) {
        store.v1beta1 = {
            ..._124
        };
    })(store = osmosis.store || (osmosis.store = {}));
    osmosis.superfluid = {
        ..._125,
        ..._126,
        ..._127,
        ..._128,
        ..._129,
        ..._240,
        ..._250,
        ..._264,
        ..._280,
        ..._292
    };
    let swaprouter;
    (function (swaprouter) {
        swaprouter.v1beta1 = {
            ..._130,
            ..._131,
            ..._132,
            ..._133,
            ..._134,
            ..._241,
            ..._251,
            ..._265,
            ..._281,
            ..._293
        };
    })(swaprouter = osmosis.swaprouter || (osmosis.swaprouter = {}));
    let tokenfactory;
    (function (tokenfactory) {
        tokenfactory.v1beta1 = {
            ..._135,
            ..._136,
            ..._137,
            ..._138,
            ..._139,
            ..._242,
            ..._252,
            ..._266,
            ..._282,
            ..._294
        };
    })(tokenfactory = osmosis.tokenfactory || (osmosis.tokenfactory = {}));
    let twap;
    (function (twap) {
        twap.v1beta1 = {
            ..._140,
            ..._141,
            ..._142,
            ..._267,
            ..._283
        };
    })(twap = osmosis.twap || (osmosis.twap = {}));
    let txfees;
    (function (txfees) {
        txfees.v1beta1 = {
            ..._143,
            ..._144,
            ..._145,
            ..._146,
            ..._268,
            ..._284
        };
    })(txfees = osmosis.txfees || (osmosis.txfees = {}));
    let valsetpref;
    (function (valsetpref) {
        valsetpref.v1beta1 = {
            ..._147,
            ..._148,
            ..._149,
            ..._243,
            ..._253,
            ..._269,
            ..._285,
            ..._295
        };
    })(valsetpref = osmosis.valsetpref || (osmosis.valsetpref = {}));
    osmosis.ClientFactory = {
        ..._302,
        ..._303,
        ..._304
    };
})(osmosis || (osmosis = {}));
//# sourceMappingURL=bundle.js.map