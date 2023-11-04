//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Service {
    /** Simulate simulates executing a transaction for estimating gas usage. */
    static Simulate(request, initRequest) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/Simulate`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** GetTx fetches a tx by hash. */
    static GetTx(request, initRequest) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/txs/${request["hash"]}?${fm.renderURLSearchParams({
            ...request
        }, ["hash"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** BroadcastTx broadcast transaction. */
    static BroadcastTx(request, initRequest) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/BroadcastTx`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** GetTxsEvent fetches txs by event. */
    static GetTxsEvent(request, initRequest) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/txs?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     */
    static GetBlockWithTxs(request, initRequest) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/txs/block/${request["height"]}?${fm.renderURLSearchParams({
            ...request
        }, ["height"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * TxDecode decodes the transaction.
     *
     * Since: cosmos-sdk 0.47
     */
    static TxDecode(request, initRequest) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/TxDecode`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * TxEncode encodes the transaction.
     *
     * Since: cosmos-sdk 0.47
     */
    static TxEncode(request, initRequest) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/TxEncode`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
     *
     * Since: cosmos-sdk 0.47
     */
    static TxEncodeAmino(request, initRequest) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/TxEncodeAmino`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
     *
     * Since: cosmos-sdk 0.47
     */
    static TxDecodeAmino(request, initRequest) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/TxDecodeAmino`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
export class ServiceClientImpl {
    url;
    constructor(url) {
        this.url = url;
    }
    /** Simulate simulates executing a transaction for estimating gas usage. */
    async Simulate(req, headers) {
        return Service.Simulate(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GetTx fetches a tx by hash. */
    async GetTx(req, headers) {
        return Service.GetTx(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** BroadcastTx broadcast transaction. */
    async BroadcastTx(req, headers) {
        return Service.BroadcastTx(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GetTxsEvent fetches txs by event. */
    async GetTxsEvent(req, headers) {
        return Service.GetTxsEvent(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     */
    async GetBlockWithTxs(req, headers) {
        return Service.GetBlockWithTxs(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * TxDecode decodes the transaction.
     *
     * Since: cosmos-sdk 0.47
     */
    async TxDecode(req, headers) {
        return Service.TxDecode(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * TxEncode encodes the transaction.
     *
     * Since: cosmos-sdk 0.47
     */
    async TxEncode(req, headers) {
        return Service.TxEncode(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
     *
     * Since: cosmos-sdk 0.47
     */
    async TxEncodeAmino(req, headers) {
        return Service.TxEncodeAmino(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
     *
     * Since: cosmos-sdk 0.47
     */
    async TxDecodeAmino(req, headers) {
        return Service.TxDecodeAmino(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=service.rpc.Service.js.map