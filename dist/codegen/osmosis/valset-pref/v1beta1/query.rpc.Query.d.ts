import * as fm from "../../../grpc-gateway";
import { UserValidatorPreferencesRequest, UserValidatorPreferencesResponse } from "./query";
export declare class Query {
    /** Returns the list of ValidatorPreferences for the user. */
    static UserValidatorPreferences(request: UserValidatorPreferencesRequest, initRequest?: fm.InitReq): Promise<UserValidatorPreferencesResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Returns the list of ValidatorPreferences for the user. */
    UserValidatorPreferences(req: UserValidatorPreferencesRequest, headers?: HeadersInit): Promise<UserValidatorPreferencesResponse>;
}
