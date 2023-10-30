//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
export class Service {
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
}
export class ServiceClientImpl {
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
}
//# sourceMappingURL=query.rpc.Service.js.map