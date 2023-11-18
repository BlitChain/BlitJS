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
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./auth/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            authz: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./authz/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            bank: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./bank/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            base: {
                node: {
                    v1beta1: new (await Promise.resolve().then(() => __importStar(require("./base/node/v1beta1/query.rpc.Service")))).ServiceClientImpl(endpoint)
                },
                tendermint: {
                    v1beta1: new (await Promise.resolve().then(() => __importStar(require("./base/tendermint/v1beta1/query.rpc.Service")))).ServiceClientImpl(endpoint)
                }
            },
            circuit: {
                v1: new (await Promise.resolve().then(() => __importStar(require("./circuit/v1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            consensus: {
                v1: new (await Promise.resolve().then(() => __importStar(require("./consensus/v1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            distribution: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./distribution/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            feegrant: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./feegrant/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            gov: {
                v1: new (await Promise.resolve().then(() => __importStar(require("./gov/v1/query.rpc.Query")))).QueryClientImpl(endpoint),
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./gov/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            group: {
                v1: new (await Promise.resolve().then(() => __importStar(require("./group/v1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            mint: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./mint/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            nft: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./nft/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            orm: {
                query: {
                    v1alpha1: new (await Promise.resolve().then(() => __importStar(require("./orm/query/v1alpha1/query.rpc.Query")))).QueryClientImpl(endpoint)
                }
            },
            params: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./params/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            staking: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./staking/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            tx: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./tx/v1beta1/service.rpc.Service")))).ServiceClientImpl(endpoint)
            },
            upgrade: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./upgrade/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            }
        }
    };
};
exports.createGrpcGateWayClient = createGrpcGateWayClient;
//# sourceMappingURL=rpc.query.js.map