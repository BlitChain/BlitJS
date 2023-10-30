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
exports.osmosis = void 0;
//@ts-nocheck
const _90 = __importStar(require("./downtime-detector/v1beta1/downtime_duration"));
const _91 = __importStar(require("./downtime-detector/v1beta1/genesis"));
const _92 = __importStar(require("./downtime-detector/v1beta1/query"));
const _93 = __importStar(require("./epochs/genesis"));
const _94 = __importStar(require("./epochs/query"));
const _95 = __importStar(require("./gamm/pool-models/balancer/balancerPool"));
const _96 = __importStar(require("./gamm/v1beta1/genesis"));
const _97 = __importStar(require("./gamm/v1beta1/query"));
const _98 = __importStar(require("./gamm/v1beta1/tx"));
const _99 = __importStar(require("./gamm/pool-models/balancer/tx/tx"));
const _100 = __importStar(require("./gamm/pool-models/stableswap/stableswap_pool"));
const _101 = __importStar(require("./gamm/pool-models/stableswap/tx"));
const _102 = __importStar(require("./gamm/v2/query"));
const _103 = __importStar(require("./ibc-rate-limit/v1beta1/params"));
const _104 = __importStar(require("./ibc-rate-limit/v1beta1/query"));
const _105 = __importStar(require("./incentives/gauge"));
const _106 = __importStar(require("./incentives/genesis"));
const _107 = __importStar(require("./incentives/params"));
const _108 = __importStar(require("./incentives/query"));
const _109 = __importStar(require("./incentives/tx"));
const _110 = __importStar(require("./lockup/genesis"));
const _111 = __importStar(require("./lockup/lock"));
const _112 = __importStar(require("./lockup/params"));
const _113 = __importStar(require("./lockup/query"));
const _114 = __importStar(require("./lockup/tx"));
const _115 = __importStar(require("./mint/v1beta1/genesis"));
const _116 = __importStar(require("./mint/v1beta1/mint"));
const _117 = __importStar(require("./mint/v1beta1/query"));
const _118 = __importStar(require("./pool-incentives/v1beta1/genesis"));
const _119 = __importStar(require("./pool-incentives/v1beta1/gov"));
const _120 = __importStar(require("./pool-incentives/v1beta1/incentives"));
const _121 = __importStar(require("./pool-incentives/v1beta1/query"));
const _122 = __importStar(require("./protorev/v1beta1/genesis"));
const _123 = __importStar(require("./protorev/v1beta1/gov"));
const _124 = __importStar(require("./protorev/v1beta1/params"));
const _125 = __importStar(require("./protorev/v1beta1/protorev"));
const _126 = __importStar(require("./protorev/v1beta1/query"));
const _127 = __importStar(require("./protorev/v1beta1/tx"));
const _128 = __importStar(require("./sumtree/v1beta1/tree"));
const _129 = __importStar(require("./superfluid/genesis"));
const _130 = __importStar(require("./superfluid/params"));
const _131 = __importStar(require("./superfluid/query"));
const _132 = __importStar(require("./superfluid/superfluid"));
const _133 = __importStar(require("./superfluid/tx"));
const _134 = __importStar(require("./swaprouter/v1beta1/genesis"));
const _135 = __importStar(require("./swaprouter/v1beta1/module_route"));
const _136 = __importStar(require("./swaprouter/v1beta1/query"));
const _137 = __importStar(require("./swaprouter/v1beta1/swap_route"));
const _138 = __importStar(require("./swaprouter/v1beta1/tx"));
const _139 = __importStar(require("./tokenfactory/v1beta1/authorityMetadata"));
const _140 = __importStar(require("./tokenfactory/v1beta1/genesis"));
const _141 = __importStar(require("./tokenfactory/v1beta1/params"));
const _142 = __importStar(require("./tokenfactory/v1beta1/query"));
const _143 = __importStar(require("./tokenfactory/v1beta1/tx"));
const _144 = __importStar(require("./twap/v1beta1/genesis"));
const _145 = __importStar(require("./twap/v1beta1/query"));
const _146 = __importStar(require("./twap/v1beta1/twap_record"));
const _147 = __importStar(require("./txfees/v1beta1/feetoken"));
const _148 = __importStar(require("./txfees/v1beta1/genesis"));
const _149 = __importStar(require("./txfees/v1beta1/gov"));
const _150 = __importStar(require("./txfees/v1beta1/query"));
const _151 = __importStar(require("./valset-pref/v1beta1/query"));
const _152 = __importStar(require("./valset-pref/v1beta1/state"));
const _153 = __importStar(require("./valset-pref/v1beta1/tx"));
const _243 = __importStar(require("./gamm/pool-models/balancer/tx/tx.amino"));
const _244 = __importStar(require("./gamm/pool-models/stableswap/tx.amino"));
const _245 = __importStar(require("./gamm/v1beta1/tx.amino"));
const _246 = __importStar(require("./incentives/tx.amino"));
const _247 = __importStar(require("./lockup/tx.amino"));
const _248 = __importStar(require("./protorev/v1beta1/tx.amino"));
const _249 = __importStar(require("./superfluid/tx.amino"));
const _250 = __importStar(require("./swaprouter/v1beta1/tx.amino"));
const _251 = __importStar(require("./tokenfactory/v1beta1/tx.amino"));
const _252 = __importStar(require("./valset-pref/v1beta1/tx.amino"));
const _253 = __importStar(require("./gamm/pool-models/balancer/tx/tx.registry"));
const _254 = __importStar(require("./gamm/pool-models/stableswap/tx.registry"));
const _255 = __importStar(require("./gamm/v1beta1/tx.registry"));
const _256 = __importStar(require("./incentives/tx.registry"));
const _257 = __importStar(require("./lockup/tx.registry"));
const _258 = __importStar(require("./protorev/v1beta1/tx.registry"));
const _259 = __importStar(require("./superfluid/tx.registry"));
const _260 = __importStar(require("./swaprouter/v1beta1/tx.registry"));
const _261 = __importStar(require("./tokenfactory/v1beta1/tx.registry"));
const _262 = __importStar(require("./valset-pref/v1beta1/tx.registry"));
const _263 = __importStar(require("./downtime-detector/v1beta1/query.lcd"));
const _264 = __importStar(require("./epochs/query.lcd"));
const _265 = __importStar(require("./gamm/v1beta1/query.lcd"));
const _266 = __importStar(require("./gamm/v2/query.lcd"));
const _267 = __importStar(require("./ibc-rate-limit/v1beta1/query.lcd"));
const _268 = __importStar(require("./incentives/query.lcd"));
const _269 = __importStar(require("./lockup/query.lcd"));
const _270 = __importStar(require("./mint/v1beta1/query.lcd"));
const _271 = __importStar(require("./pool-incentives/v1beta1/query.lcd"));
const _272 = __importStar(require("./protorev/v1beta1/query.lcd"));
const _273 = __importStar(require("./superfluid/query.lcd"));
const _274 = __importStar(require("./swaprouter/v1beta1/query.lcd"));
const _275 = __importStar(require("./tokenfactory/v1beta1/query.lcd"));
const _276 = __importStar(require("./twap/v1beta1/query.lcd"));
const _277 = __importStar(require("./txfees/v1beta1/query.lcd"));
const _278 = __importStar(require("./valset-pref/v1beta1/query.lcd"));
const _279 = __importStar(require("./downtime-detector/v1beta1/query.rpc.Query"));
const _280 = __importStar(require("./epochs/query.rpc.Query"));
const _281 = __importStar(require("./gamm/v1beta1/query.rpc.Query"));
const _282 = __importStar(require("./gamm/v2/query.rpc.Query"));
const _283 = __importStar(require("./ibc-rate-limit/v1beta1/query.rpc.Query"));
const _284 = __importStar(require("./incentives/query.rpc.Query"));
const _285 = __importStar(require("./lockup/query.rpc.Query"));
const _286 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _287 = __importStar(require("./pool-incentives/v1beta1/query.rpc.Query"));
const _288 = __importStar(require("./protorev/v1beta1/query.rpc.Query"));
const _289 = __importStar(require("./superfluid/query.rpc.Query"));
const _290 = __importStar(require("./swaprouter/v1beta1/query.rpc.Query"));
const _291 = __importStar(require("./tokenfactory/v1beta1/query.rpc.Query"));
const _292 = __importStar(require("./twap/v1beta1/query.rpc.Query"));
const _293 = __importStar(require("./txfees/v1beta1/query.rpc.Query"));
const _294 = __importStar(require("./valset-pref/v1beta1/query.rpc.Query"));
const _295 = __importStar(require("./gamm/pool-models/balancer/tx/tx.rpc.msg"));
const _296 = __importStar(require("./gamm/pool-models/stableswap/tx.rpc.msg"));
const _297 = __importStar(require("./gamm/v1beta1/tx.rpc.msg"));
const _298 = __importStar(require("./incentives/tx.rpc.msg"));
const _299 = __importStar(require("./lockup/tx.rpc.msg"));
const _300 = __importStar(require("./protorev/v1beta1/tx.rpc.msg"));
const _301 = __importStar(require("./superfluid/tx.rpc.msg"));
const _302 = __importStar(require("./swaprouter/v1beta1/tx.rpc.msg"));
const _303 = __importStar(require("./tokenfactory/v1beta1/tx.rpc.msg"));
const _304 = __importStar(require("./valset-pref/v1beta1/tx.rpc.msg"));
const _311 = __importStar(require("./lcd"));
const _312 = __importStar(require("./rpc.query"));
const _313 = __importStar(require("./rpc.tx"));
var osmosis;
(function (osmosis) {
    let downtimedetector;
    (function (downtimedetector) {
        downtimedetector.v1beta1 = {
            ..._90,
            ..._91,
            ..._92,
            ..._263,
            ..._279
        };
    })(downtimedetector = osmosis.downtimedetector || (osmosis.downtimedetector = {}));
    let epochs;
    (function (epochs) {
        epochs.v1beta1 = {
            ..._93,
            ..._94,
            ..._264,
            ..._280
        };
    })(epochs = osmosis.epochs || (osmosis.epochs = {}));
    let gamm;
    (function (gamm) {
        gamm.v1beta1 = {
            ..._95,
            ..._96,
            ..._97,
            ..._98,
            ..._245,
            ..._255,
            ..._265,
            ..._281,
            ..._297
        };
        let poolmodels;
        (function (poolmodels) {
            let balancer;
            (function (balancer) {
                balancer.v1beta1 = {
                    ..._99,
                    ..._243,
                    ..._253,
                    ..._295
                };
            })(balancer = poolmodels.balancer || (poolmodels.balancer = {}));
            let stableswap;
            (function (stableswap) {
                stableswap.v1beta1 = {
                    ..._100,
                    ..._101,
                    ..._244,
                    ..._254,
                    ..._296
                };
            })(stableswap = poolmodels.stableswap || (poolmodels.stableswap = {}));
        })(poolmodels = gamm.poolmodels || (gamm.poolmodels = {}));
        gamm.v2 = {
            ..._102,
            ..._266,
            ..._282
        };
    })(gamm = osmosis.gamm || (osmosis.gamm = {}));
    let ibcratelimit;
    (function (ibcratelimit) {
        ibcratelimit.v1beta1 = {
            ..._103,
            ..._104,
            ..._267,
            ..._283
        };
    })(ibcratelimit = osmosis.ibcratelimit || (osmosis.ibcratelimit = {}));
    osmosis.incentives = {
        ..._105,
        ..._106,
        ..._107,
        ..._108,
        ..._109,
        ..._246,
        ..._256,
        ..._268,
        ..._284,
        ..._298
    };
    osmosis.lockup = {
        ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._247,
        ..._257,
        ..._269,
        ..._285,
        ..._299
    };
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._115,
            ..._116,
            ..._117,
            ..._270,
            ..._286
        };
    })(mint = osmosis.mint || (osmosis.mint = {}));
    let poolincentives;
    (function (poolincentives) {
        poolincentives.v1beta1 = {
            ..._118,
            ..._119,
            ..._120,
            ..._121,
            ..._271,
            ..._287
        };
    })(poolincentives = osmosis.poolincentives || (osmosis.poolincentives = {}));
    let protorev;
    (function (protorev) {
        protorev.v1beta1 = {
            ..._122,
            ..._123,
            ..._124,
            ..._125,
            ..._126,
            ..._127,
            ..._248,
            ..._258,
            ..._272,
            ..._288,
            ..._300
        };
    })(protorev = osmosis.protorev || (osmosis.protorev = {}));
    let store;
    (function (store) {
        store.v1beta1 = {
            ..._128
        };
    })(store = osmosis.store || (osmosis.store = {}));
    osmosis.superfluid = {
        ..._129,
        ..._130,
        ..._131,
        ..._132,
        ..._133,
        ..._249,
        ..._259,
        ..._273,
        ..._289,
        ..._301
    };
    let swaprouter;
    (function (swaprouter) {
        swaprouter.v1beta1 = {
            ..._134,
            ..._135,
            ..._136,
            ..._137,
            ..._138,
            ..._250,
            ..._260,
            ..._274,
            ..._290,
            ..._302
        };
    })(swaprouter = osmosis.swaprouter || (osmosis.swaprouter = {}));
    let tokenfactory;
    (function (tokenfactory) {
        tokenfactory.v1beta1 = {
            ..._139,
            ..._140,
            ..._141,
            ..._142,
            ..._143,
            ..._251,
            ..._261,
            ..._275,
            ..._291,
            ..._303
        };
    })(tokenfactory = osmosis.tokenfactory || (osmosis.tokenfactory = {}));
    let twap;
    (function (twap) {
        twap.v1beta1 = {
            ..._144,
            ..._145,
            ..._146,
            ..._276,
            ..._292
        };
    })(twap = osmosis.twap || (osmosis.twap = {}));
    let txfees;
    (function (txfees) {
        txfees.v1beta1 = {
            ..._147,
            ..._148,
            ..._149,
            ..._150,
            ..._277,
            ..._293
        };
    })(txfees = osmosis.txfees || (osmosis.txfees = {}));
    let valsetpref;
    (function (valsetpref) {
        valsetpref.v1beta1 = {
            ..._151,
            ..._152,
            ..._153,
            ..._252,
            ..._262,
            ..._278,
            ..._294,
            ..._304
        };
    })(valsetpref = osmosis.valsetpref || (osmosis.valsetpref = {}));
    osmosis.ClientFactory = {
        ..._311,
        ..._312,
        ..._313
    };
})(osmosis || (exports.osmosis = osmosis = {}));
//# sourceMappingURL=bundle.js.map