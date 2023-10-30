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
exports.createGrpcGateWayClient = void 0;
//@ts-nocheck
const createGrpcGateWayClient = async ({ endpoint }) => {
    endpoint = endpoint.replace(/\/*$/g, "");
    return {
        cosmos: {
            auth: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/auth/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            authz: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/authz/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            bank: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/bank/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            base: {
                tendermint: {
                    v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/base/tendermint/v1beta1/query.rpc.Service")))).ServiceClientImpl(endpoint)
                }
            },
            distribution: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/distribution/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            feegrant: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/feegrant/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            gov: {
                v1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/gov/v1/query.rpc.Query")))).QueryClientImpl(endpoint),
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/gov/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            group: {
                v1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/group/v1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            mint: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/mint/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            params: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/params/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            staking: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/staking/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            tx: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/tx/v1beta1/service.rpc.Service")))).ServiceClientImpl(endpoint)
            },
            upgrade: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/upgrade/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            }
        },
        osmosis: {
            downtimedetector: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./downtime-detector/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            epochs: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./epochs/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            gamm: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./gamm/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint),
                v2: new (await Promise.resolve().then(() => __importStar(require("./gamm/v2/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            ibcratelimit: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./ibc-rate-limit/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            incentives: new (await Promise.resolve().then(() => __importStar(require("./incentives/query.rpc.Query")))).QueryClientImpl(endpoint),
            lockup: new (await Promise.resolve().then(() => __importStar(require("./lockup/query.rpc.Query")))).QueryClientImpl(endpoint),
            mint: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./mint/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            poolincentives: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./pool-incentives/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            protorev: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./protorev/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            superfluid: new (await Promise.resolve().then(() => __importStar(require("./superfluid/query.rpc.Query")))).QueryClientImpl(endpoint),
            swaprouter: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./swaprouter/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            tokenfactory: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./tokenfactory/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            twap: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./twap/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            txfees: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./txfees/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            valsetpref: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./valset-pref/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            }
        }
    };
};
exports.createGrpcGateWayClient = createGrpcGateWayClient;
//# sourceMappingURL=rpc.query.js.map