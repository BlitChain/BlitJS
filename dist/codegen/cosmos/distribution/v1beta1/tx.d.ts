import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./distribution";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "cosmos.distribution.v1beta1";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
    delegator_address: string;
    withdraw_address: string;
}
export interface MsgSetWithdrawAddressProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
    value: Uint8Array;
}
export interface MsgSetWithdrawAddressProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
    value: Uint8Array;
}
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddressAmino {
    delegator_address: string;
    withdraw_address: string;
}
export interface MsgSetWithdrawAddressAminoMsg {
    type: "cosmos-sdk/MsgModifyWithdrawAddress";
    value: MsgSetWithdrawAddressAmino;
}
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddressSDKType {
    delegator_address: string;
    withdraw_address: string;
}
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 */
export interface MsgSetWithdrawAddressResponse {
}
export interface MsgSetWithdrawAddressResponseProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse";
    value: Uint8Array;
}
export interface MsgSetWithdrawAddressResponseProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse";
    value: Uint8Array;
}
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 */
export interface MsgSetWithdrawAddressResponseAmino {
}
export interface MsgSetWithdrawAddressResponseAminoMsg {
    type: "cosmos-sdk/MsgSetWithdrawAddressResponse";
    value: MsgSetWithdrawAddressResponseAmino;
}
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 */
export interface MsgSetWithdrawAddressResponseSDKType {
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
    delegator_address: string;
    validator_address: string;
}
export interface MsgWithdrawDelegatorRewardProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
    value: Uint8Array;
}
export interface MsgWithdrawDelegatorRewardProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
    value: Uint8Array;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorRewardAmino {
    delegator_address: string;
    validator_address: string;
}
export interface MsgWithdrawDelegatorRewardAminoMsg {
    type: "cosmos-sdk/MsgWithdrawDelegationReward";
    value: MsgWithdrawDelegatorRewardAmino;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorRewardSDKType {
    delegator_address: string;
    validator_address: string;
}
/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
 * response type.
 */
export interface MsgWithdrawDelegatorRewardResponse {
    /** Since: cosmos-sdk 0.46 */
    amount: Coin[];
}
export interface MsgWithdrawDelegatorRewardResponseProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse";
    value: Uint8Array;
}
export interface MsgWithdrawDelegatorRewardResponseProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse";
    value: Uint8Array;
}
/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
 * response type.
 */
export interface MsgWithdrawDelegatorRewardResponseAmino {
    /** Since: cosmos-sdk 0.46 */
    amount: CoinAmino[];
}
export interface MsgWithdrawDelegatorRewardResponseAminoMsg {
    type: "cosmos-sdk/MsgWithdrawDelegatorRewardResponse";
    value: MsgWithdrawDelegatorRewardResponseAmino;
}
/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
 * response type.
 */
export interface MsgWithdrawDelegatorRewardResponseSDKType {
    amount: CoinSDKType[];
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
    validator_address: string;
}
export interface MsgWithdrawValidatorCommissionProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
    value: Uint8Array;
}
export interface MsgWithdrawValidatorCommissionProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
    value: Uint8Array;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommissionAmino {
    validator_address: string;
}
export interface MsgWithdrawValidatorCommissionAminoMsg {
    type: "cosmos-sdk/MsgWithdrawValidatorCommission";
    value: MsgWithdrawValidatorCommissionAmino;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommissionSDKType {
    validator_address: string;
}
/**
 * MsgWithdrawValidatorCommissionResponse defines the
 * Msg/WithdrawValidatorCommission response type.
 */
export interface MsgWithdrawValidatorCommissionResponse {
    /** Since: cosmos-sdk 0.46 */
    amount: Coin[];
}
export interface MsgWithdrawValidatorCommissionResponseProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse";
    value: Uint8Array;
}
export interface MsgWithdrawValidatorCommissionResponseProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse";
    value: Uint8Array;
}
/**
 * MsgWithdrawValidatorCommissionResponse defines the
 * Msg/WithdrawValidatorCommission response type.
 */
export interface MsgWithdrawValidatorCommissionResponseAmino {
    /** Since: cosmos-sdk 0.46 */
    amount: CoinAmino[];
}
export interface MsgWithdrawValidatorCommissionResponseAminoMsg {
    type: "cosmos-sdk/MsgWithdrawValidatorCommissionResponse";
    value: MsgWithdrawValidatorCommissionResponseAmino;
}
/**
 * MsgWithdrawValidatorCommissionResponse defines the
 * Msg/WithdrawValidatorCommission response type.
 */
export interface MsgWithdrawValidatorCommissionResponseSDKType {
    amount: CoinSDKType[];
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
    amount: Coin[];
    depositor: string;
}
export interface MsgFundCommunityPoolProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgFundCommunityPool";
    value: Uint8Array;
}
export interface MsgFundCommunityPoolProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgFundCommunityPool";
    value: Uint8Array;
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPoolAmino {
    amount: CoinAmino[];
    depositor: string;
}
export interface MsgFundCommunityPoolAminoMsg {
    type: "cosmos-sdk/MsgFundCommunityPool";
    value: MsgFundCommunityPoolAmino;
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPoolSDKType {
    amount: CoinSDKType[];
    depositor: string;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {
}
export interface MsgFundCommunityPoolResponseProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse";
    value: Uint8Array;
}
export interface MsgFundCommunityPoolResponseProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse";
    value: Uint8Array;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponseAmino {
}
export interface MsgFundCommunityPoolResponseAminoMsg {
    type: "cosmos-sdk/MsgFundCommunityPoolResponse";
    value: MsgFundCommunityPoolResponseAmino;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponseSDKType {
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/distribution parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgUpdateParams";
    value: Uint8Array;
}
export interface MsgUpdateParamsProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/distribution parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "cosmos-sdk/distribution/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateParamsResponseProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {
}
/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpend {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    recipient: string;
    amount: Coin[];
}
export interface MsgCommunityPoolSpendProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend";
    value: Uint8Array;
}
export interface MsgCommunityPoolSpendProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend";
    value: Uint8Array;
}
/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpendAmino {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    recipient: string;
    amount: CoinAmino[];
}
export interface MsgCommunityPoolSpendAminoMsg {
    type: "cosmos-sdk/distr/MsgCommunityPoolSpend";
    value: MsgCommunityPoolSpendAmino;
}
/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpendSDKType {
    authority: string;
    recipient: string;
    amount: CoinSDKType[];
}
/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpendResponse {
}
export interface MsgCommunityPoolSpendResponseProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse";
    value: Uint8Array;
}
export interface MsgCommunityPoolSpendResponseProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse";
    value: Uint8Array;
}
/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpendResponseAmino {
}
export interface MsgCommunityPoolSpendResponseAminoMsg {
    type: "cosmos-sdk/MsgCommunityPoolSpendResponse";
    value: MsgCommunityPoolSpendResponseAmino;
}
/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpendResponseSDKType {
}
/**
 * DepositValidatorRewardsPool defines the request structure to provide
 * additional rewards to delegators from a specific validator.
 *
 * Since: cosmos-sdk 0.50
 */
export interface MsgDepositValidatorRewardsPool {
    depositor: string;
    validator_address: string;
    amount: Coin[];
}
export interface MsgDepositValidatorRewardsPoolProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool";
    value: Uint8Array;
}
export interface MsgDepositValidatorRewardsPoolProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool";
    value: Uint8Array;
}
/**
 * DepositValidatorRewardsPool defines the request structure to provide
 * additional rewards to delegators from a specific validator.
 *
 * Since: cosmos-sdk 0.50
 */
export interface MsgDepositValidatorRewardsPoolAmino {
    depositor: string;
    validator_address: string;
    amount: CoinAmino[];
}
export interface MsgDepositValidatorRewardsPoolAminoMsg {
    type: "cosmos-sdk/distr/MsgDepositValRewards";
    value: MsgDepositValidatorRewardsPoolAmino;
}
/**
 * DepositValidatorRewardsPool defines the request structure to provide
 * additional rewards to delegators from a specific validator.
 *
 * Since: cosmos-sdk 0.50
 */
export interface MsgDepositValidatorRewardsPoolSDKType {
    depositor: string;
    validator_address: string;
    amount: CoinSDKType[];
}
/**
 * MsgDepositValidatorRewardsPoolResponse defines the response to executing a
 * MsgDepositValidatorRewardsPool message.
 *
 * Since: cosmos-sdk 0.50
 */
export interface MsgDepositValidatorRewardsPoolResponse {
}
export interface MsgDepositValidatorRewardsPoolResponseProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse";
    value: Uint8Array;
}
export interface MsgDepositValidatorRewardsPoolResponseProtoMsg {
    type_url: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse";
    value: Uint8Array;
}
/**
 * MsgDepositValidatorRewardsPoolResponse defines the response to executing a
 * MsgDepositValidatorRewardsPool message.
 *
 * Since: cosmos-sdk 0.50
 */
export interface MsgDepositValidatorRewardsPoolResponseAmino {
}
export interface MsgDepositValidatorRewardsPoolResponseAminoMsg {
    type: "cosmos-sdk/MsgDepositValidatorRewardsPoolResponse";
    value: MsgDepositValidatorRewardsPoolResponseAmino;
}
/**
 * MsgDepositValidatorRewardsPoolResponse defines the response to executing a
 * MsgDepositValidatorRewardsPool message.
 *
 * Since: cosmos-sdk 0.50
 */
export interface MsgDepositValidatorRewardsPoolResponseSDKType {
}
export declare const MsgSetWithdrawAddress: {
    typeUrl: string;
    encode(message: MsgSetWithdrawAddress, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWithdrawAddress;
    fromJSON(object: any): MsgSetWithdrawAddress;
    toJSON(message: MsgSetWithdrawAddress): unknown;
    fromPartial(object: Partial<MsgSetWithdrawAddress>): MsgSetWithdrawAddress;
    fromSDK(object: MsgSetWithdrawAddressSDKType): MsgSetWithdrawAddress;
    toSDK(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressSDKType;
    fromAmino(object: MsgSetWithdrawAddressAmino): MsgSetWithdrawAddress;
    toAmino(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAmino;
    fromAminoMsg(object: MsgSetWithdrawAddressAminoMsg): MsgSetWithdrawAddress;
    toAminoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAminoMsg;
    fromProtoMsg(message: MsgSetWithdrawAddressProtoMsg): MsgSetWithdrawAddress;
    toProto(message: MsgSetWithdrawAddress): Uint8Array;
    toProtoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressProtoMsg;
};
export declare const MsgSetWithdrawAddressResponse: {
    typeUrl: string;
    encode(_: MsgSetWithdrawAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWithdrawAddressResponse;
    fromJSON(_: any): MsgSetWithdrawAddressResponse;
    toJSON(_: MsgSetWithdrawAddressResponse): unknown;
    fromPartial(_: Partial<MsgSetWithdrawAddressResponse>): MsgSetWithdrawAddressResponse;
    fromSDK(_: MsgSetWithdrawAddressResponseSDKType): MsgSetWithdrawAddressResponse;
    toSDK(_: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseSDKType;
    fromAmino(_: MsgSetWithdrawAddressResponseAmino): MsgSetWithdrawAddressResponse;
    toAmino(_: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseAmino;
    fromAminoMsg(object: MsgSetWithdrawAddressResponseAminoMsg): MsgSetWithdrawAddressResponse;
    toAminoMsg(message: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseAminoMsg;
    fromProtoMsg(message: MsgSetWithdrawAddressResponseProtoMsg): MsgSetWithdrawAddressResponse;
    toProto(message: MsgSetWithdrawAddressResponse): Uint8Array;
    toProtoMsg(message: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseProtoMsg;
};
export declare const MsgWithdrawDelegatorReward: {
    typeUrl: string;
    encode(message: MsgWithdrawDelegatorReward, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegatorReward;
    fromJSON(object: any): MsgWithdrawDelegatorReward;
    toJSON(message: MsgWithdrawDelegatorReward): unknown;
    fromPartial(object: Partial<MsgWithdrawDelegatorReward>): MsgWithdrawDelegatorReward;
    fromSDK(object: MsgWithdrawDelegatorRewardSDKType): MsgWithdrawDelegatorReward;
    toSDK(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardSDKType;
    fromAmino(object: MsgWithdrawDelegatorRewardAmino): MsgWithdrawDelegatorReward;
    toAmino(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAmino;
    fromAminoMsg(object: MsgWithdrawDelegatorRewardAminoMsg): MsgWithdrawDelegatorReward;
    toAminoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAminoMsg;
    fromProtoMsg(message: MsgWithdrawDelegatorRewardProtoMsg): MsgWithdrawDelegatorReward;
    toProto(message: MsgWithdrawDelegatorReward): Uint8Array;
    toProtoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardProtoMsg;
};
export declare const MsgWithdrawDelegatorRewardResponse: {
    typeUrl: string;
    encode(message: MsgWithdrawDelegatorRewardResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegatorRewardResponse;
    fromJSON(object: any): MsgWithdrawDelegatorRewardResponse;
    toJSON(message: MsgWithdrawDelegatorRewardResponse): unknown;
    fromPartial(object: Partial<MsgWithdrawDelegatorRewardResponse>): MsgWithdrawDelegatorRewardResponse;
    fromSDK(object: MsgWithdrawDelegatorRewardResponseSDKType): MsgWithdrawDelegatorRewardResponse;
    toSDK(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseSDKType;
    fromAmino(object: MsgWithdrawDelegatorRewardResponseAmino): MsgWithdrawDelegatorRewardResponse;
    toAmino(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseAmino;
    fromAminoMsg(object: MsgWithdrawDelegatorRewardResponseAminoMsg): MsgWithdrawDelegatorRewardResponse;
    toAminoMsg(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawDelegatorRewardResponseProtoMsg): MsgWithdrawDelegatorRewardResponse;
    toProto(message: MsgWithdrawDelegatorRewardResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseProtoMsg;
};
export declare const MsgWithdrawValidatorCommission: {
    typeUrl: string;
    encode(message: MsgWithdrawValidatorCommission, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawValidatorCommission;
    fromJSON(object: any): MsgWithdrawValidatorCommission;
    toJSON(message: MsgWithdrawValidatorCommission): unknown;
    fromPartial(object: Partial<MsgWithdrawValidatorCommission>): MsgWithdrawValidatorCommission;
    fromSDK(object: MsgWithdrawValidatorCommissionSDKType): MsgWithdrawValidatorCommission;
    toSDK(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionSDKType;
    fromAmino(object: MsgWithdrawValidatorCommissionAmino): MsgWithdrawValidatorCommission;
    toAmino(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAmino;
    fromAminoMsg(object: MsgWithdrawValidatorCommissionAminoMsg): MsgWithdrawValidatorCommission;
    toAminoMsg(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAminoMsg;
    fromProtoMsg(message: MsgWithdrawValidatorCommissionProtoMsg): MsgWithdrawValidatorCommission;
    toProto(message: MsgWithdrawValidatorCommission): Uint8Array;
    toProtoMsg(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionProtoMsg;
};
export declare const MsgWithdrawValidatorCommissionResponse: {
    typeUrl: string;
    encode(message: MsgWithdrawValidatorCommissionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawValidatorCommissionResponse;
    fromJSON(object: any): MsgWithdrawValidatorCommissionResponse;
    toJSON(message: MsgWithdrawValidatorCommissionResponse): unknown;
    fromPartial(object: Partial<MsgWithdrawValidatorCommissionResponse>): MsgWithdrawValidatorCommissionResponse;
    fromSDK(object: MsgWithdrawValidatorCommissionResponseSDKType): MsgWithdrawValidatorCommissionResponse;
    toSDK(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseSDKType;
    fromAmino(object: MsgWithdrawValidatorCommissionResponseAmino): MsgWithdrawValidatorCommissionResponse;
    toAmino(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseAmino;
    fromAminoMsg(object: MsgWithdrawValidatorCommissionResponseAminoMsg): MsgWithdrawValidatorCommissionResponse;
    toAminoMsg(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawValidatorCommissionResponseProtoMsg): MsgWithdrawValidatorCommissionResponse;
    toProto(message: MsgWithdrawValidatorCommissionResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseProtoMsg;
};
export declare const MsgFundCommunityPool: {
    typeUrl: string;
    encode(message: MsgFundCommunityPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFundCommunityPool;
    fromJSON(object: any): MsgFundCommunityPool;
    toJSON(message: MsgFundCommunityPool): unknown;
    fromPartial(object: Partial<MsgFundCommunityPool>): MsgFundCommunityPool;
    fromSDK(object: MsgFundCommunityPoolSDKType): MsgFundCommunityPool;
    toSDK(message: MsgFundCommunityPool): MsgFundCommunityPoolSDKType;
    fromAmino(object: MsgFundCommunityPoolAmino): MsgFundCommunityPool;
    toAmino(message: MsgFundCommunityPool): MsgFundCommunityPoolAmino;
    fromAminoMsg(object: MsgFundCommunityPoolAminoMsg): MsgFundCommunityPool;
    toAminoMsg(message: MsgFundCommunityPool): MsgFundCommunityPoolAminoMsg;
    fromProtoMsg(message: MsgFundCommunityPoolProtoMsg): MsgFundCommunityPool;
    toProto(message: MsgFundCommunityPool): Uint8Array;
    toProtoMsg(message: MsgFundCommunityPool): MsgFundCommunityPoolProtoMsg;
};
export declare const MsgFundCommunityPoolResponse: {
    typeUrl: string;
    encode(_: MsgFundCommunityPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFundCommunityPoolResponse;
    fromJSON(_: any): MsgFundCommunityPoolResponse;
    toJSON(_: MsgFundCommunityPoolResponse): unknown;
    fromPartial(_: Partial<MsgFundCommunityPoolResponse>): MsgFundCommunityPoolResponse;
    fromSDK(_: MsgFundCommunityPoolResponseSDKType): MsgFundCommunityPoolResponse;
    toSDK(_: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseSDKType;
    fromAmino(_: MsgFundCommunityPoolResponseAmino): MsgFundCommunityPoolResponse;
    toAmino(_: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAmino;
    fromAminoMsg(object: MsgFundCommunityPoolResponseAminoMsg): MsgFundCommunityPoolResponse;
    toAminoMsg(message: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAminoMsg;
    fromProtoMsg(message: MsgFundCommunityPoolResponseProtoMsg): MsgFundCommunityPoolResponse;
    toProto(message: MsgFundCommunityPoolResponse): Uint8Array;
    toProtoMsg(message: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromSDK(object: MsgUpdateParamsSDKType): MsgUpdateParams;
    toSDK(message: MsgUpdateParams): MsgUpdateParamsSDKType;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromSDK(_: MsgUpdateParamsResponseSDKType): MsgUpdateParamsResponse;
    toSDK(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseSDKType;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
export declare const MsgCommunityPoolSpend: {
    typeUrl: string;
    encode(message: MsgCommunityPoolSpend, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCommunityPoolSpend;
    fromJSON(object: any): MsgCommunityPoolSpend;
    toJSON(message: MsgCommunityPoolSpend): unknown;
    fromPartial(object: Partial<MsgCommunityPoolSpend>): MsgCommunityPoolSpend;
    fromSDK(object: MsgCommunityPoolSpendSDKType): MsgCommunityPoolSpend;
    toSDK(message: MsgCommunityPoolSpend): MsgCommunityPoolSpendSDKType;
    fromAmino(object: MsgCommunityPoolSpendAmino): MsgCommunityPoolSpend;
    toAmino(message: MsgCommunityPoolSpend): MsgCommunityPoolSpendAmino;
    fromAminoMsg(object: MsgCommunityPoolSpendAminoMsg): MsgCommunityPoolSpend;
    toAminoMsg(message: MsgCommunityPoolSpend): MsgCommunityPoolSpendAminoMsg;
    fromProtoMsg(message: MsgCommunityPoolSpendProtoMsg): MsgCommunityPoolSpend;
    toProto(message: MsgCommunityPoolSpend): Uint8Array;
    toProtoMsg(message: MsgCommunityPoolSpend): MsgCommunityPoolSpendProtoMsg;
};
export declare const MsgCommunityPoolSpendResponse: {
    typeUrl: string;
    encode(_: MsgCommunityPoolSpendResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCommunityPoolSpendResponse;
    fromJSON(_: any): MsgCommunityPoolSpendResponse;
    toJSON(_: MsgCommunityPoolSpendResponse): unknown;
    fromPartial(_: Partial<MsgCommunityPoolSpendResponse>): MsgCommunityPoolSpendResponse;
    fromSDK(_: MsgCommunityPoolSpendResponseSDKType): MsgCommunityPoolSpendResponse;
    toSDK(_: MsgCommunityPoolSpendResponse): MsgCommunityPoolSpendResponseSDKType;
    fromAmino(_: MsgCommunityPoolSpendResponseAmino): MsgCommunityPoolSpendResponse;
    toAmino(_: MsgCommunityPoolSpendResponse): MsgCommunityPoolSpendResponseAmino;
    fromAminoMsg(object: MsgCommunityPoolSpendResponseAminoMsg): MsgCommunityPoolSpendResponse;
    toAminoMsg(message: MsgCommunityPoolSpendResponse): MsgCommunityPoolSpendResponseAminoMsg;
    fromProtoMsg(message: MsgCommunityPoolSpendResponseProtoMsg): MsgCommunityPoolSpendResponse;
    toProto(message: MsgCommunityPoolSpendResponse): Uint8Array;
    toProtoMsg(message: MsgCommunityPoolSpendResponse): MsgCommunityPoolSpendResponseProtoMsg;
};
export declare const MsgDepositValidatorRewardsPool: {
    typeUrl: string;
    encode(message: MsgDepositValidatorRewardsPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositValidatorRewardsPool;
    fromJSON(object: any): MsgDepositValidatorRewardsPool;
    toJSON(message: MsgDepositValidatorRewardsPool): unknown;
    fromPartial(object: Partial<MsgDepositValidatorRewardsPool>): MsgDepositValidatorRewardsPool;
    fromSDK(object: MsgDepositValidatorRewardsPoolSDKType): MsgDepositValidatorRewardsPool;
    toSDK(message: MsgDepositValidatorRewardsPool): MsgDepositValidatorRewardsPoolSDKType;
    fromAmino(object: MsgDepositValidatorRewardsPoolAmino): MsgDepositValidatorRewardsPool;
    toAmino(message: MsgDepositValidatorRewardsPool): MsgDepositValidatorRewardsPoolAmino;
    fromAminoMsg(object: MsgDepositValidatorRewardsPoolAminoMsg): MsgDepositValidatorRewardsPool;
    toAminoMsg(message: MsgDepositValidatorRewardsPool): MsgDepositValidatorRewardsPoolAminoMsg;
    fromProtoMsg(message: MsgDepositValidatorRewardsPoolProtoMsg): MsgDepositValidatorRewardsPool;
    toProto(message: MsgDepositValidatorRewardsPool): Uint8Array;
    toProtoMsg(message: MsgDepositValidatorRewardsPool): MsgDepositValidatorRewardsPoolProtoMsg;
};
export declare const MsgDepositValidatorRewardsPoolResponse: {
    typeUrl: string;
    encode(_: MsgDepositValidatorRewardsPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositValidatorRewardsPoolResponse;
    fromJSON(_: any): MsgDepositValidatorRewardsPoolResponse;
    toJSON(_: MsgDepositValidatorRewardsPoolResponse): unknown;
    fromPartial(_: Partial<MsgDepositValidatorRewardsPoolResponse>): MsgDepositValidatorRewardsPoolResponse;
    fromSDK(_: MsgDepositValidatorRewardsPoolResponseSDKType): MsgDepositValidatorRewardsPoolResponse;
    toSDK(_: MsgDepositValidatorRewardsPoolResponse): MsgDepositValidatorRewardsPoolResponseSDKType;
    fromAmino(_: MsgDepositValidatorRewardsPoolResponseAmino): MsgDepositValidatorRewardsPoolResponse;
    toAmino(_: MsgDepositValidatorRewardsPoolResponse): MsgDepositValidatorRewardsPoolResponseAmino;
    fromAminoMsg(object: MsgDepositValidatorRewardsPoolResponseAminoMsg): MsgDepositValidatorRewardsPoolResponse;
    toAminoMsg(message: MsgDepositValidatorRewardsPoolResponse): MsgDepositValidatorRewardsPoolResponseAminoMsg;
    fromProtoMsg(message: MsgDepositValidatorRewardsPoolResponseProtoMsg): MsgDepositValidatorRewardsPoolResponse;
    toProto(message: MsgDepositValidatorRewardsPoolResponse): Uint8Array;
    toProtoMsg(message: MsgDepositValidatorRewardsPoolResponse): MsgDepositValidatorRewardsPoolResponseProtoMsg;
};
