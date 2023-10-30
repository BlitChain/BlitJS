//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetScriptRequest, QueryGetScriptResponseSDKType, QueryAllScriptRequest, QueryAllScriptResponseSDKType, QueryEval, QueryEvalResponseSDKType, QueryWebRequest, QueryWebResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.script = this.script.bind(this);
    this.scriptAll = this.scriptAll.bind(this);
    this.eval = this.eval.bind(this);
    this.web = this.web.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `blit/script/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Script items. */
  async script(params: QueryGetScriptRequest): Promise<QueryGetScriptResponseSDKType> {
    const endpoint = `blit/script/script/${params.address}`;
    return await this.req.get<QueryGetScriptResponseSDKType>(endpoint);
  }
  /* ScriptAll */
  async scriptAll(params: QueryAllScriptRequest = {
    pagination: undefined
  }): Promise<QueryAllScriptResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `blit/script/script`;
    return await this.req.get<QueryAllScriptResponseSDKType>(endpoint, options);
  }
  /* Runs the function and returns the result. */
  async eval(params: QueryEval): Promise<QueryEvalResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.caller_address !== "undefined") {
      options.params.caller_address = params.caller_address;
    }
    if (typeof params?.extra_code !== "undefined") {
      options.params.extra_code = params.extra_code;
    }
    if (typeof params?.function_name !== "undefined") {
      options.params.function_name = params.function_name;
    }
    if (typeof params?.kwargs !== "undefined") {
      options.params.kwargs = params.kwargs;
    }
    if (typeof params?.grantee !== "undefined") {
      options.params.grantee = params.grantee;
    }
    const endpoint = `blit/script/eval/${params.script_address}`;
    return await this.req.get<QueryEvalResponseSDKType>(endpoint, options);
  }
  /* Queries the WSGI web application function of a script. */
  async web(params: QueryWebRequest): Promise<QueryWebResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.httprequest !== "undefined") {
      options.params.httprequest = params.httprequest;
    }
    const endpoint = `blit/script/web/${params.address}`;
    return await this.req.get<QueryWebResponseSDKType>(endpoint, options);
  }
}