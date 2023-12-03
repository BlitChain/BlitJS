//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
import { QueryDenomTracesRequest, QueryDenomTracesResponse, QueryDenomTraceRequest, QueryDenomTraceResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
export class Query {
  /** DenomTraces queries all denomination traces. */
  static DenomTraces(request: QueryDenomTracesRequest, initRequest?: fm.InitReq): Promise<QueryDenomTracesResponse> {
    return fm.fetchReq(`/ibc/apps/transfer/v1/denom_traces?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DenomTrace queries a denomination trace information. */
  static DenomTrace(request: QueryDenomTraceRequest, initRequest?: fm.InitReq): Promise<QueryDenomTraceResponse> {
    return fm.fetchReq(`/ibc/apps/transfer/v1/denom_traces/${request["hash=**"]}?${fm.renderURLSearchParams({
      ...request
    }, ["hash=**"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Params queries all parameters of the ibc-transfer module. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/ibc/apps/transfer/v1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DenomHash queries a denomination hash information. */
  static DenomHash(request: QueryDenomHashRequest, initRequest?: fm.InitReq): Promise<QueryDenomHashResponse> {
    return fm.fetchReq(`/ibc/apps/transfer/v1/denom_hashes/${request["trace=**"]}?${fm.renderURLSearchParams({
      ...request
    }, ["trace=**"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** EscrowAddress returns the escrow address for a particular port and channel id. */
  static EscrowAddress(request: QueryEscrowAddressRequest, initRequest?: fm.InitReq): Promise<QueryEscrowAddressResponse> {
    return fm.fetchReq(`/ibc/apps/transfer/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/escrow_address?${fm.renderURLSearchParams({
      ...request
    }, ["channel_id", "port_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
  static TotalEscrowForDenom(request: QueryTotalEscrowForDenomRequest, initRequest?: fm.InitReq): Promise<QueryTotalEscrowForDenomResponse> {
    return fm.fetchReq(`/ibc/apps/transfer/v1/denoms/${request["denom=**"]}/total_escrow?${fm.renderURLSearchParams({
      ...request
    }, ["denom=**"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class QueryClientImpl {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** DenomTraces queries all denomination traces. */
  async DenomTraces(req: QueryDenomTracesRequest, headers?: HeadersInit): Promise<QueryDenomTracesResponse> {
    return Query.DenomTraces(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DenomTrace queries a denomination trace information. */
  async DenomTrace(req: QueryDenomTraceRequest, headers?: HeadersInit): Promise<QueryDenomTraceResponse> {
    return Query.DenomTrace(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Params queries all parameters of the ibc-transfer module. */
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DenomHash queries a denomination hash information. */
  async DenomHash(req: QueryDenomHashRequest, headers?: HeadersInit): Promise<QueryDenomHashResponse> {
    return Query.DenomHash(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** EscrowAddress returns the escrow address for a particular port and channel id. */
  async EscrowAddress(req: QueryEscrowAddressRequest, headers?: HeadersInit): Promise<QueryEscrowAddressResponse> {
    return Query.EscrowAddress(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
  async TotalEscrowForDenom(req: QueryTotalEscrowForDenomRequest, headers?: HeadersInit): Promise<QueryTotalEscrowForDenomResponse> {
    return Query.TotalEscrowForDenom(req, {
      headers,
      pathPrefix: this.url
    });
  }
}