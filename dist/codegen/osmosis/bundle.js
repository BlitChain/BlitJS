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
const _86 = __importStar(require("./downtime-detector/v1beta1/downtime_duration"));
const _87 = __importStar(require("./downtime-detector/v1beta1/genesis"));
const _88 = __importStar(require("./downtime-detector/v1beta1/query"));
const _89 = __importStar(require("./epochs/genesis"));
const _90 = __importStar(require("./epochs/query"));
const _91 = __importStar(require("./gamm/pool-models/balancer/balancerPool"));
const _92 = __importStar(require("./gamm/v1beta1/genesis"));
const _93 = __importStar(require("./gamm/v1beta1/query"));
const _94 = __importStar(require("./gamm/v1beta1/tx"));
const _95 = __importStar(require("./gamm/pool-models/balancer/tx/tx"));
const _96 = __importStar(require("./gamm/pool-models/stableswap/stableswap_pool"));
const _97 = __importStar(require("./gamm/pool-models/stableswap/tx"));
const _98 = __importStar(require("./gamm/v2/query"));
const _99 = __importStar(require("./ibc-rate-limit/v1beta1/params"));
const _100 = __importStar(require("./ibc-rate-limit/v1beta1/query"));
const _101 = __importStar(require("./incentives/gauge"));
const _102 = __importStar(require("./incentives/genesis"));
const _103 = __importStar(require("./incentives/params"));
const _104 = __importStar(require("./incentives/query"));
const _105 = __importStar(require("./incentives/tx"));
const _106 = __importStar(require("./lockup/genesis"));
const _107 = __importStar(require("./lockup/lock"));
const _108 = __importStar(require("./lockup/params"));
const _109 = __importStar(require("./lockup/query"));
const _110 = __importStar(require("./lockup/tx"));
const _111 = __importStar(require("./mint/v1beta1/genesis"));
const _112 = __importStar(require("./mint/v1beta1/mint"));
const _113 = __importStar(require("./mint/v1beta1/query"));
const _114 = __importStar(require("./pool-incentives/v1beta1/genesis"));
const _115 = __importStar(require("./pool-incentives/v1beta1/gov"));
const _116 = __importStar(require("./pool-incentives/v1beta1/incentives"));
const _117 = __importStar(require("./pool-incentives/v1beta1/query"));
const _118 = __importStar(require("./protorev/v1beta1/genesis"));
const _119 = __importStar(require("./protorev/v1beta1/gov"));
const _120 = __importStar(require("./protorev/v1beta1/params"));
const _121 = __importStar(require("./protorev/v1beta1/protorev"));
const _122 = __importStar(require("./protorev/v1beta1/query"));
const _123 = __importStar(require("./protorev/v1beta1/tx"));
const _124 = __importStar(require("./sumtree/v1beta1/tree"));
const _125 = __importStar(require("./superfluid/genesis"));
const _126 = __importStar(require("./superfluid/params"));
const _127 = __importStar(require("./superfluid/query"));
const _128 = __importStar(require("./superfluid/superfluid"));
const _129 = __importStar(require("./superfluid/tx"));
const _130 = __importStar(require("./swaprouter/v1beta1/genesis"));
const _131 = __importStar(require("./swaprouter/v1beta1/module_route"));
const _132 = __importStar(require("./swaprouter/v1beta1/query"));
const _133 = __importStar(require("./swaprouter/v1beta1/swap_route"));
const _134 = __importStar(require("./swaprouter/v1beta1/tx"));
const _135 = __importStar(require("./tokenfactory/v1beta1/authorityMetadata"));
const _136 = __importStar(require("./tokenfactory/v1beta1/genesis"));
const _137 = __importStar(require("./tokenfactory/v1beta1/params"));
const _138 = __importStar(require("./tokenfactory/v1beta1/query"));
const _139 = __importStar(require("./tokenfactory/v1beta1/tx"));
const _140 = __importStar(require("./twap/v1beta1/genesis"));
const _141 = __importStar(require("./twap/v1beta1/query"));
const _142 = __importStar(require("./twap/v1beta1/twap_record"));
const _143 = __importStar(require("./txfees/v1beta1/feetoken"));
const _144 = __importStar(require("./txfees/v1beta1/genesis"));
const _145 = __importStar(require("./txfees/v1beta1/gov"));
const _146 = __importStar(require("./txfees/v1beta1/query"));
const _147 = __importStar(require("./valset-pref/v1beta1/query"));
const _148 = __importStar(require("./valset-pref/v1beta1/state"));
const _149 = __importStar(require("./valset-pref/v1beta1/tx"));
const _234 = __importStar(require("./gamm/pool-models/balancer/tx/tx.amino"));
const _235 = __importStar(require("./gamm/pool-models/stableswap/tx.amino"));
const _236 = __importStar(require("./gamm/v1beta1/tx.amino"));
const _237 = __importStar(require("./incentives/tx.amino"));
const _238 = __importStar(require("./lockup/tx.amino"));
const _239 = __importStar(require("./protorev/v1beta1/tx.amino"));
const _240 = __importStar(require("./superfluid/tx.amino"));
const _241 = __importStar(require("./swaprouter/v1beta1/tx.amino"));
const _242 = __importStar(require("./tokenfactory/v1beta1/tx.amino"));
const _243 = __importStar(require("./valset-pref/v1beta1/tx.amino"));
const _244 = __importStar(require("./gamm/pool-models/balancer/tx/tx.registry"));
const _245 = __importStar(require("./gamm/pool-models/stableswap/tx.registry"));
const _246 = __importStar(require("./gamm/v1beta1/tx.registry"));
const _247 = __importStar(require("./incentives/tx.registry"));
const _248 = __importStar(require("./lockup/tx.registry"));
const _249 = __importStar(require("./protorev/v1beta1/tx.registry"));
const _250 = __importStar(require("./superfluid/tx.registry"));
const _251 = __importStar(require("./swaprouter/v1beta1/tx.registry"));
const _252 = __importStar(require("./tokenfactory/v1beta1/tx.registry"));
const _253 = __importStar(require("./valset-pref/v1beta1/tx.registry"));
const _254 = __importStar(require("./downtime-detector/v1beta1/query.lcd"));
const _255 = __importStar(require("./epochs/query.lcd"));
const _256 = __importStar(require("./gamm/v1beta1/query.lcd"));
const _257 = __importStar(require("./gamm/v2/query.lcd"));
const _258 = __importStar(require("./ibc-rate-limit/v1beta1/query.lcd"));
const _259 = __importStar(require("./incentives/query.lcd"));
const _260 = __importStar(require("./lockup/query.lcd"));
const _261 = __importStar(require("./mint/v1beta1/query.lcd"));
const _262 = __importStar(require("./pool-incentives/v1beta1/query.lcd"));
const _263 = __importStar(require("./protorev/v1beta1/query.lcd"));
const _264 = __importStar(require("./superfluid/query.lcd"));
const _265 = __importStar(require("./swaprouter/v1beta1/query.lcd"));
const _266 = __importStar(require("./tokenfactory/v1beta1/query.lcd"));
const _267 = __importStar(require("./twap/v1beta1/query.lcd"));
const _268 = __importStar(require("./txfees/v1beta1/query.lcd"));
const _269 = __importStar(require("./valset-pref/v1beta1/query.lcd"));
const _270 = __importStar(require("./downtime-detector/v1beta1/query.rpc.Query"));
const _271 = __importStar(require("./epochs/query.rpc.Query"));
const _272 = __importStar(require("./gamm/v1beta1/query.rpc.Query"));
const _273 = __importStar(require("./gamm/v2/query.rpc.Query"));
const _274 = __importStar(require("./ibc-rate-limit/v1beta1/query.rpc.Query"));
const _275 = __importStar(require("./incentives/query.rpc.Query"));
const _276 = __importStar(require("./lockup/query.rpc.Query"));
const _277 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _278 = __importStar(require("./pool-incentives/v1beta1/query.rpc.Query"));
const _279 = __importStar(require("./protorev/v1beta1/query.rpc.Query"));
const _280 = __importStar(require("./superfluid/query.rpc.Query"));
const _281 = __importStar(require("./swaprouter/v1beta1/query.rpc.Query"));
const _282 = __importStar(require("./tokenfactory/v1beta1/query.rpc.Query"));
const _283 = __importStar(require("./twap/v1beta1/query.rpc.Query"));
const _284 = __importStar(require("./txfees/v1beta1/query.rpc.Query"));
const _285 = __importStar(require("./valset-pref/v1beta1/query.rpc.Query"));
const _286 = __importStar(require("./gamm/pool-models/balancer/tx/tx.rpc.msg"));
const _287 = __importStar(require("./gamm/pool-models/stableswap/tx.rpc.msg"));
const _288 = __importStar(require("./gamm/v1beta1/tx.rpc.msg"));
const _289 = __importStar(require("./incentives/tx.rpc.msg"));
const _290 = __importStar(require("./lockup/tx.rpc.msg"));
const _291 = __importStar(require("./protorev/v1beta1/tx.rpc.msg"));
const _292 = __importStar(require("./superfluid/tx.rpc.msg"));
const _293 = __importStar(require("./swaprouter/v1beta1/tx.rpc.msg"));
const _294 = __importStar(require("./tokenfactory/v1beta1/tx.rpc.msg"));
const _295 = __importStar(require("./valset-pref/v1beta1/tx.rpc.msg"));
const _302 = __importStar(require("./lcd"));
const _303 = __importStar(require("./rpc.query"));
const _304 = __importStar(require("./rpc.tx"));
var osmosis;
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
})(osmosis || (exports.osmosis = osmosis = {}));
//# sourceMappingURL=bundle.js.map