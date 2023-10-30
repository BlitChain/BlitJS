import { ValidatorPreference, ValidatorPreferenceAmino, ValidatorPreferenceSDKType } from "./state";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Request type for UserValidatorPreferences. */
export interface UserValidatorPreferencesRequest {
    /** user account address */
    address: string;
}
export interface UserValidatorPreferencesRequestProtoMsg {
    type_url: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesRequest";
    value: Uint8Array;
}
export interface UserValidatorPreferencesRequestProtoMsg {
    type_url: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesRequest";
    value: Uint8Array;
}
/** Request type for UserValidatorPreferences. */
export interface UserValidatorPreferencesRequestAmino {
    /** user account address */
    address: string;
}
export interface UserValidatorPreferencesRequestAminoMsg {
    type: "osmosis/valsetpref/user-validator-preferences-request";
    value: UserValidatorPreferencesRequestAmino;
}
/** Request type for UserValidatorPreferences. */
export interface UserValidatorPreferencesRequestSDKType {
    address: string;
}
/** Response type the QueryUserValidatorPreferences query request */
export interface UserValidatorPreferencesResponse {
    preferences: ValidatorPreference[];
}
export interface UserValidatorPreferencesResponseProtoMsg {
    type_url: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesResponse";
    value: Uint8Array;
}
export interface UserValidatorPreferencesResponseProtoMsg {
    type_url: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesResponse";
    value: Uint8Array;
}
/** Response type the QueryUserValidatorPreferences query request */
export interface UserValidatorPreferencesResponseAmino {
    preferences: ValidatorPreferenceAmino[];
}
export interface UserValidatorPreferencesResponseAminoMsg {
    type: "osmosis/valsetpref/user-validator-preferences-response";
    value: UserValidatorPreferencesResponseAmino;
}
/** Response type the QueryUserValidatorPreferences query request */
export interface UserValidatorPreferencesResponseSDKType {
    preferences: ValidatorPreferenceSDKType[];
}
export declare const UserValidatorPreferencesRequest: {
    typeUrl: string;
    encode(message: UserValidatorPreferencesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserValidatorPreferencesRequest;
    fromJSON(object: any): UserValidatorPreferencesRequest;
    toJSON(message: UserValidatorPreferencesRequest): unknown;
    fromPartial(object: Partial<UserValidatorPreferencesRequest>): UserValidatorPreferencesRequest;
    fromSDK(object: UserValidatorPreferencesRequestSDKType): UserValidatorPreferencesRequest;
    toSDK(message: UserValidatorPreferencesRequest): UserValidatorPreferencesRequestSDKType;
    fromAmino(object: UserValidatorPreferencesRequestAmino): UserValidatorPreferencesRequest;
    toAmino(message: UserValidatorPreferencesRequest): UserValidatorPreferencesRequestAmino;
    fromAminoMsg(object: UserValidatorPreferencesRequestAminoMsg): UserValidatorPreferencesRequest;
    toAminoMsg(message: UserValidatorPreferencesRequest): UserValidatorPreferencesRequestAminoMsg;
    fromProtoMsg(message: UserValidatorPreferencesRequestProtoMsg): UserValidatorPreferencesRequest;
    toProto(message: UserValidatorPreferencesRequest): Uint8Array;
    toProtoMsg(message: UserValidatorPreferencesRequest): UserValidatorPreferencesRequestProtoMsg;
};
export declare const UserValidatorPreferencesResponse: {
    typeUrl: string;
    encode(message: UserValidatorPreferencesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserValidatorPreferencesResponse;
    fromJSON(object: any): UserValidatorPreferencesResponse;
    toJSON(message: UserValidatorPreferencesResponse): unknown;
    fromPartial(object: Partial<UserValidatorPreferencesResponse>): UserValidatorPreferencesResponse;
    fromSDK(object: UserValidatorPreferencesResponseSDKType): UserValidatorPreferencesResponse;
    toSDK(message: UserValidatorPreferencesResponse): UserValidatorPreferencesResponseSDKType;
    fromAmino(object: UserValidatorPreferencesResponseAmino): UserValidatorPreferencesResponse;
    toAmino(message: UserValidatorPreferencesResponse): UserValidatorPreferencesResponseAmino;
    fromAminoMsg(object: UserValidatorPreferencesResponseAminoMsg): UserValidatorPreferencesResponse;
    toAminoMsg(message: UserValidatorPreferencesResponse): UserValidatorPreferencesResponseAminoMsg;
    fromProtoMsg(message: UserValidatorPreferencesResponseProtoMsg): UserValidatorPreferencesResponse;
    toProto(message: UserValidatorPreferencesResponse): Uint8Array;
    toProtoMsg(message: UserValidatorPreferencesResponse): UserValidatorPreferencesResponseProtoMsg;
};
