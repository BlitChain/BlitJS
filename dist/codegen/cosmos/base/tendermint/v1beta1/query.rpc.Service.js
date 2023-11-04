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
exports.ServiceClientImpl = exports.Service = void 0;
//@ts-nocheck
const fm = __importStar(require("../../../../grpc-gateway"));
class Service {
    /** GetNodeInfo queries the current node info. */
    static GetNodeInfo(request, initRequest) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/node_info?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** GetSyncing queries node syncing. */
    static GetSyncing(request, initRequest) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/syncing?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** GetLatestBlock returns the latest block. */
    static GetLatestBlock(request, initRequest) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/blocks/latest?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** GetBlockByHeight queries block for given height. */
    static GetBlockByHeight(request, initRequest) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/blocks/${request["height"]}?${fm.renderURLSearchParams({
            ...request
        }, ["height"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** GetLatestValidatorSet queries latest validator-set. */
    static GetLatestValidatorSet(request, initRequest) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/validatorsets/latest?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** GetValidatorSetByHeight queries validator-set at a given height. */
    static GetValidatorSetByHeight(request, initRequest) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/validatorsets/${request["height"]}?${fm.renderURLSearchParams({
            ...request
        }, ["height"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * ABCIQuery defines a query handler that supports ABCI queries directly to the
     * application, bypassing Tendermint completely. The ABCI query must contain
     * a valid and supported path, including app, custom, p2p, and store.
     *
     * Since: cosmos-sdk 0.46
     */
    static ABCIQuery(request, initRequest) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/ABCIQuery`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
exports.Service = Service;
class ServiceClientImpl {
    url;
    constructor(url) {
        this.url = url;
    }
    /** GetNodeInfo queries the current node info. */
    async GetNodeInfo(req, headers) {
        return Service.GetNodeInfo(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GetSyncing queries node syncing. */
    async GetSyncing(req, headers) {
        return Service.GetSyncing(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GetLatestBlock returns the latest block. */
    async GetLatestBlock(req, headers) {
        return Service.GetLatestBlock(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GetBlockByHeight queries block for given height. */
    async GetBlockByHeight(req, headers) {
        return Service.GetBlockByHeight(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GetLatestValidatorSet queries latest validator-set. */
    async GetLatestValidatorSet(req, headers) {
        return Service.GetLatestValidatorSet(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GetValidatorSetByHeight queries validator-set at a given height. */
    async GetValidatorSetByHeight(req, headers) {
        return Service.GetValidatorSetByHeight(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ABCIQuery defines a query handler that supports ABCI queries directly to the
     * application, bypassing Tendermint completely. The ABCI query must contain
     * a valid and supported path, including app, custom, p2p, and store.
     *
     * Since: cosmos-sdk 0.46
     */
    async ABCIQuery(req, headers) {
        return Service.ABCIQuery(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.ServiceClientImpl = ServiceClientImpl;
//# sourceMappingURL=query.rpc.Service.js.map