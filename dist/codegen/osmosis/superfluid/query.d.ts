import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAsset, SuperfluidAssetAmino, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordAmino, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordAmino, SuperfluidDelegationRecordSDKType } from "./superfluid";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "../lockup/lock";
import { DelegationResponse, DelegationResponseAmino, DelegationResponseSDKType } from "../../cosmos/staking/v1beta1/staking";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    type_url: "/osmosis.superfluid.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestProtoMsg {
    type_url: "/osmosis.superfluid.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "osmosis/query-params-request";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    type_url: "/osmosis.superfluid.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseProtoMsg {
    type_url: "/osmosis.superfluid.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "osmosis/query-params-response";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface AssetTypeRequest {
    denom: string;
}
export interface AssetTypeRequestProtoMsg {
    type_url: "/osmosis.superfluid.AssetTypeRequest";
    value: Uint8Array;
}
export interface AssetTypeRequestProtoMsg {
    type_url: "/osmosis.superfluid.AssetTypeRequest";
    value: Uint8Array;
}
export interface AssetTypeRequestAmino {
    denom: string;
}
export interface AssetTypeRequestAminoMsg {
    type: "osmosis/asset-type-request";
    value: AssetTypeRequestAmino;
}
export interface AssetTypeRequestSDKType {
    denom: string;
}
export interface AssetTypeResponse {
    asset_type: SuperfluidAssetType;
}
export interface AssetTypeResponseProtoMsg {
    type_url: "/osmosis.superfluid.AssetTypeResponse";
    value: Uint8Array;
}
export interface AssetTypeResponseProtoMsg {
    type_url: "/osmosis.superfluid.AssetTypeResponse";
    value: Uint8Array;
}
export interface AssetTypeResponseAmino {
    asset_type: SuperfluidAssetType;
}
export interface AssetTypeResponseAminoMsg {
    type: "osmosis/asset-type-response";
    value: AssetTypeResponseAmino;
}
export interface AssetTypeResponseSDKType {
    asset_type: SuperfluidAssetType;
}
export interface AllAssetsRequest {
}
export interface AllAssetsRequestProtoMsg {
    type_url: "/osmosis.superfluid.AllAssetsRequest";
    value: Uint8Array;
}
export interface AllAssetsRequestProtoMsg {
    type_url: "/osmosis.superfluid.AllAssetsRequest";
    value: Uint8Array;
}
export interface AllAssetsRequestAmino {
}
export interface AllAssetsRequestAminoMsg {
    type: "osmosis/all-assets-request";
    value: AllAssetsRequestAmino;
}
export interface AllAssetsRequestSDKType {
}
export interface AllAssetsResponse {
    assets: SuperfluidAsset[];
}
export interface AllAssetsResponseProtoMsg {
    type_url: "/osmosis.superfluid.AllAssetsResponse";
    value: Uint8Array;
}
export interface AllAssetsResponseProtoMsg {
    type_url: "/osmosis.superfluid.AllAssetsResponse";
    value: Uint8Array;
}
export interface AllAssetsResponseAmino {
    assets: SuperfluidAssetAmino[];
}
export interface AllAssetsResponseAminoMsg {
    type: "osmosis/all-assets-response";
    value: AllAssetsResponseAmino;
}
export interface AllAssetsResponseSDKType {
    assets: SuperfluidAssetSDKType[];
}
export interface AssetMultiplierRequest {
    denom: string;
}
export interface AssetMultiplierRequestProtoMsg {
    type_url: "/osmosis.superfluid.AssetMultiplierRequest";
    value: Uint8Array;
}
export interface AssetMultiplierRequestProtoMsg {
    type_url: "/osmosis.superfluid.AssetMultiplierRequest";
    value: Uint8Array;
}
export interface AssetMultiplierRequestAmino {
    denom: string;
}
export interface AssetMultiplierRequestAminoMsg {
    type: "osmosis/asset-multiplier-request";
    value: AssetMultiplierRequestAmino;
}
export interface AssetMultiplierRequestSDKType {
    denom: string;
}
export interface AssetMultiplierResponse {
    osmo_equivalent_multiplier?: OsmoEquivalentMultiplierRecord;
}
export interface AssetMultiplierResponseProtoMsg {
    type_url: "/osmosis.superfluid.AssetMultiplierResponse";
    value: Uint8Array;
}
export interface AssetMultiplierResponseProtoMsg {
    type_url: "/osmosis.superfluid.AssetMultiplierResponse";
    value: Uint8Array;
}
export interface AssetMultiplierResponseAmino {
    osmo_equivalent_multiplier?: OsmoEquivalentMultiplierRecordAmino;
}
export interface AssetMultiplierResponseAminoMsg {
    type: "osmosis/asset-multiplier-response";
    value: AssetMultiplierResponseAmino;
}
export interface AssetMultiplierResponseSDKType {
    osmo_equivalent_multiplier?: OsmoEquivalentMultiplierRecordSDKType;
}
export interface SuperfluidIntermediaryAccountInfo {
    denom: string;
    val_addr: string;
    gauge_id: bigint;
    address: string;
}
export interface SuperfluidIntermediaryAccountInfoProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidIntermediaryAccountInfo";
    value: Uint8Array;
}
export interface SuperfluidIntermediaryAccountInfoProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidIntermediaryAccountInfo";
    value: Uint8Array;
}
export interface SuperfluidIntermediaryAccountInfoAmino {
    denom: string;
    val_addr: string;
    gauge_id: string;
    address: string;
}
export interface SuperfluidIntermediaryAccountInfoAminoMsg {
    type: "osmosis/superfluid-intermediary-account-info";
    value: SuperfluidIntermediaryAccountInfoAmino;
}
export interface SuperfluidIntermediaryAccountInfoSDKType {
    denom: string;
    val_addr: string;
    gauge_id: bigint;
    address: string;
}
export interface AllIntermediaryAccountsRequest {
    pagination?: PageRequest;
}
export interface AllIntermediaryAccountsRequestProtoMsg {
    type_url: "/osmosis.superfluid.AllIntermediaryAccountsRequest";
    value: Uint8Array;
}
export interface AllIntermediaryAccountsRequestProtoMsg {
    type_url: "/osmosis.superfluid.AllIntermediaryAccountsRequest";
    value: Uint8Array;
}
export interface AllIntermediaryAccountsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface AllIntermediaryAccountsRequestAminoMsg {
    type: "osmosis/all-intermediary-accounts-request";
    value: AllIntermediaryAccountsRequestAmino;
}
export interface AllIntermediaryAccountsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface AllIntermediaryAccountsResponse {
    accounts: SuperfluidIntermediaryAccountInfo[];
    pagination?: PageResponse;
}
export interface AllIntermediaryAccountsResponseProtoMsg {
    type_url: "/osmosis.superfluid.AllIntermediaryAccountsResponse";
    value: Uint8Array;
}
export interface AllIntermediaryAccountsResponseProtoMsg {
    type_url: "/osmosis.superfluid.AllIntermediaryAccountsResponse";
    value: Uint8Array;
}
export interface AllIntermediaryAccountsResponseAmino {
    accounts: SuperfluidIntermediaryAccountInfoAmino[];
    pagination?: PageResponseAmino;
}
export interface AllIntermediaryAccountsResponseAminoMsg {
    type: "osmosis/all-intermediary-accounts-response";
    value: AllIntermediaryAccountsResponseAmino;
}
export interface AllIntermediaryAccountsResponseSDKType {
    accounts: SuperfluidIntermediaryAccountInfoSDKType[];
    pagination?: PageResponseSDKType;
}
export interface ConnectedIntermediaryAccountRequest {
    lock_id: bigint;
}
export interface ConnectedIntermediaryAccountRequestProtoMsg {
    type_url: "/osmosis.superfluid.ConnectedIntermediaryAccountRequest";
    value: Uint8Array;
}
export interface ConnectedIntermediaryAccountRequestProtoMsg {
    type_url: "/osmosis.superfluid.ConnectedIntermediaryAccountRequest";
    value: Uint8Array;
}
export interface ConnectedIntermediaryAccountRequestAmino {
    lock_id: string;
}
export interface ConnectedIntermediaryAccountRequestAminoMsg {
    type: "osmosis/connected-intermediary-account-request";
    value: ConnectedIntermediaryAccountRequestAmino;
}
export interface ConnectedIntermediaryAccountRequestSDKType {
    lock_id: bigint;
}
export interface ConnectedIntermediaryAccountResponse {
    account?: SuperfluidIntermediaryAccountInfo;
}
export interface ConnectedIntermediaryAccountResponseProtoMsg {
    type_url: "/osmosis.superfluid.ConnectedIntermediaryAccountResponse";
    value: Uint8Array;
}
export interface ConnectedIntermediaryAccountResponseProtoMsg {
    type_url: "/osmosis.superfluid.ConnectedIntermediaryAccountResponse";
    value: Uint8Array;
}
export interface ConnectedIntermediaryAccountResponseAmino {
    account?: SuperfluidIntermediaryAccountInfoAmino;
}
export interface ConnectedIntermediaryAccountResponseAminoMsg {
    type: "osmosis/connected-intermediary-account-response";
    value: ConnectedIntermediaryAccountResponseAmino;
}
export interface ConnectedIntermediaryAccountResponseSDKType {
    account?: SuperfluidIntermediaryAccountInfoSDKType;
}
export interface QueryTotalDelegationByValidatorForDenomRequest {
    denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomRequestProtoMsg {
    type_url: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest";
    value: Uint8Array;
}
export interface QueryTotalDelegationByValidatorForDenomRequestProtoMsg {
    type_url: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest";
    value: Uint8Array;
}
export interface QueryTotalDelegationByValidatorForDenomRequestAmino {
    denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomRequestAminoMsg {
    type: "osmosis/query-total-delegation-by-validator-for-denom-request";
    value: QueryTotalDelegationByValidatorForDenomRequestAmino;
}
export interface QueryTotalDelegationByValidatorForDenomRequestSDKType {
    denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomResponse {
    assets: Delegations[];
}
export interface QueryTotalDelegationByValidatorForDenomResponseProtoMsg {
    type_url: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse";
    value: Uint8Array;
}
export interface QueryTotalDelegationByValidatorForDenomResponseProtoMsg {
    type_url: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse";
    value: Uint8Array;
}
export interface QueryTotalDelegationByValidatorForDenomResponseAmino {
    assets: DelegationsAmino[];
}
export interface QueryTotalDelegationByValidatorForDenomResponseAminoMsg {
    type: "osmosis/query-total-delegation-by-validator-for-denom-response";
    value: QueryTotalDelegationByValidatorForDenomResponseAmino;
}
export interface QueryTotalDelegationByValidatorForDenomResponseSDKType {
    assets: DelegationsSDKType[];
}
export interface Delegations {
    val_addr: string;
    amount_sfsd: string;
    osmo_equivalent: string;
}
export interface DelegationsProtoMsg {
    type_url: "/osmosis.superfluid.Delegations";
    value: Uint8Array;
}
export interface DelegationsProtoMsg {
    type_url: "/osmosis.superfluid.Delegations";
    value: Uint8Array;
}
export interface DelegationsAmino {
    val_addr: string;
    amount_sfsd: string;
    osmo_equivalent: string;
}
export interface DelegationsAminoMsg {
    type: "osmosis/delegations";
    value: DelegationsAmino;
}
export interface DelegationsSDKType {
    val_addr: string;
    amount_sfsd: string;
    osmo_equivalent: string;
}
export interface TotalSuperfluidDelegationsRequest {
}
export interface TotalSuperfluidDelegationsRequestProtoMsg {
    type_url: "/osmosis.superfluid.TotalSuperfluidDelegationsRequest";
    value: Uint8Array;
}
export interface TotalSuperfluidDelegationsRequestProtoMsg {
    type_url: "/osmosis.superfluid.TotalSuperfluidDelegationsRequest";
    value: Uint8Array;
}
export interface TotalSuperfluidDelegationsRequestAmino {
}
export interface TotalSuperfluidDelegationsRequestAminoMsg {
    type: "osmosis/total-superfluid-delegations-request";
    value: TotalSuperfluidDelegationsRequestAmino;
}
export interface TotalSuperfluidDelegationsRequestSDKType {
}
export interface TotalSuperfluidDelegationsResponse {
    total_delegations: string;
}
export interface TotalSuperfluidDelegationsResponseProtoMsg {
    type_url: "/osmosis.superfluid.TotalSuperfluidDelegationsResponse";
    value: Uint8Array;
}
export interface TotalSuperfluidDelegationsResponseProtoMsg {
    type_url: "/osmosis.superfluid.TotalSuperfluidDelegationsResponse";
    value: Uint8Array;
}
export interface TotalSuperfluidDelegationsResponseAmino {
    total_delegations: string;
}
export interface TotalSuperfluidDelegationsResponseAminoMsg {
    type: "osmosis/total-superfluid-delegations-response";
    value: TotalSuperfluidDelegationsResponseAmino;
}
export interface TotalSuperfluidDelegationsResponseSDKType {
    total_delegations: string;
}
export interface SuperfluidDelegationAmountRequest {
    delegator_address: string;
    validator_address: string;
    denom: string;
}
export interface SuperfluidDelegationAmountRequestProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidDelegationAmountRequest";
    value: Uint8Array;
}
export interface SuperfluidDelegationAmountRequestProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidDelegationAmountRequest";
    value: Uint8Array;
}
export interface SuperfluidDelegationAmountRequestAmino {
    delegator_address: string;
    validator_address: string;
    denom: string;
}
export interface SuperfluidDelegationAmountRequestAminoMsg {
    type: "osmosis/superfluid-delegation-amount-request";
    value: SuperfluidDelegationAmountRequestAmino;
}
export interface SuperfluidDelegationAmountRequestSDKType {
    delegator_address: string;
    validator_address: string;
    denom: string;
}
export interface SuperfluidDelegationAmountResponse {
    amount: Coin[];
}
export interface SuperfluidDelegationAmountResponseProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidDelegationAmountResponse";
    value: Uint8Array;
}
export interface SuperfluidDelegationAmountResponseProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidDelegationAmountResponse";
    value: Uint8Array;
}
export interface SuperfluidDelegationAmountResponseAmino {
    amount: CoinAmino[];
}
export interface SuperfluidDelegationAmountResponseAminoMsg {
    type: "osmosis/superfluid-delegation-amount-response";
    value: SuperfluidDelegationAmountResponseAmino;
}
export interface SuperfluidDelegationAmountResponseSDKType {
    amount: CoinSDKType[];
}
export interface SuperfluidDelegationsByDelegatorRequest {
    delegator_address: string;
}
export interface SuperfluidDelegationsByDelegatorRequestProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest";
    value: Uint8Array;
}
export interface SuperfluidDelegationsByDelegatorRequestProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest";
    value: Uint8Array;
}
export interface SuperfluidDelegationsByDelegatorRequestAmino {
    delegator_address: string;
}
export interface SuperfluidDelegationsByDelegatorRequestAminoMsg {
    type: "osmosis/superfluid-delegations-by-delegator-request";
    value: SuperfluidDelegationsByDelegatorRequestAmino;
}
export interface SuperfluidDelegationsByDelegatorRequestSDKType {
    delegator_address: string;
}
export interface SuperfluidDelegationsByDelegatorResponse {
    superfluid_delegation_records: SuperfluidDelegationRecord[];
    total_delegated_coins: Coin[];
    total_equivalent_staked_amount: Coin;
}
export interface SuperfluidDelegationsByDelegatorResponseProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse";
    value: Uint8Array;
}
export interface SuperfluidDelegationsByDelegatorResponseProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse";
    value: Uint8Array;
}
export interface SuperfluidDelegationsByDelegatorResponseAmino {
    superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
    total_delegated_coins: CoinAmino[];
    total_equivalent_staked_amount?: CoinAmino;
}
export interface SuperfluidDelegationsByDelegatorResponseAminoMsg {
    type: "osmosis/superfluid-delegations-by-delegator-response";
    value: SuperfluidDelegationsByDelegatorResponseAmino;
}
export interface SuperfluidDelegationsByDelegatorResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
    total_delegated_coins: CoinSDKType[];
    total_equivalent_staked_amount: CoinSDKType;
}
export interface SuperfluidUndelegationsByDelegatorRequest {
    delegator_address: string;
    denom: string;
}
export interface SuperfluidUndelegationsByDelegatorRequestProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest";
    value: Uint8Array;
}
export interface SuperfluidUndelegationsByDelegatorRequestProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest";
    value: Uint8Array;
}
export interface SuperfluidUndelegationsByDelegatorRequestAmino {
    delegator_address: string;
    denom: string;
}
export interface SuperfluidUndelegationsByDelegatorRequestAminoMsg {
    type: "osmosis/superfluid-undelegations-by-delegator-request";
    value: SuperfluidUndelegationsByDelegatorRequestAmino;
}
export interface SuperfluidUndelegationsByDelegatorRequestSDKType {
    delegator_address: string;
    denom: string;
}
export interface SuperfluidUndelegationsByDelegatorResponse {
    superfluid_delegation_records: SuperfluidDelegationRecord[];
    total_undelegated_coins: Coin[];
    synthetic_locks: SyntheticLock[];
}
export interface SuperfluidUndelegationsByDelegatorResponseProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse";
    value: Uint8Array;
}
export interface SuperfluidUndelegationsByDelegatorResponseProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse";
    value: Uint8Array;
}
export interface SuperfluidUndelegationsByDelegatorResponseAmino {
    superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
    total_undelegated_coins: CoinAmino[];
    synthetic_locks: SyntheticLockAmino[];
}
export interface SuperfluidUndelegationsByDelegatorResponseAminoMsg {
    type: "osmosis/superfluid-undelegations-by-delegator-response";
    value: SuperfluidUndelegationsByDelegatorResponseAmino;
}
export interface SuperfluidUndelegationsByDelegatorResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
    total_undelegated_coins: CoinSDKType[];
    synthetic_locks: SyntheticLockSDKType[];
}
export interface SuperfluidDelegationsByValidatorDenomRequest {
    validator_address: string;
    denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomRequestProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest";
    value: Uint8Array;
}
export interface SuperfluidDelegationsByValidatorDenomRequestProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest";
    value: Uint8Array;
}
export interface SuperfluidDelegationsByValidatorDenomRequestAmino {
    validator_address: string;
    denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomRequestAminoMsg {
    type: "osmosis/superfluid-delegations-by-validator-denom-request";
    value: SuperfluidDelegationsByValidatorDenomRequestAmino;
}
export interface SuperfluidDelegationsByValidatorDenomRequestSDKType {
    validator_address: string;
    denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomResponse {
    superfluid_delegation_records: SuperfluidDelegationRecord[];
}
export interface SuperfluidDelegationsByValidatorDenomResponseProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse";
    value: Uint8Array;
}
export interface SuperfluidDelegationsByValidatorDenomResponseProtoMsg {
    type_url: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse";
    value: Uint8Array;
}
export interface SuperfluidDelegationsByValidatorDenomResponseAmino {
    superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
}
export interface SuperfluidDelegationsByValidatorDenomResponseAminoMsg {
    type: "osmosis/superfluid-delegations-by-validator-denom-response";
    value: SuperfluidDelegationsByValidatorDenomResponseAmino;
}
export interface SuperfluidDelegationsByValidatorDenomResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    validator_address: string;
    denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg {
    type_url: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest";
    value: Uint8Array;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg {
    type_url: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest";
    value: Uint8Array;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino {
    validator_address: string;
    denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg {
    type: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-request";
    value: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType {
    validator_address: string;
    denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    total_delegated_coins: Coin[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg {
    type_url: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse";
    value: Uint8Array;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg {
    type_url: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse";
    value: Uint8Array;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino {
    total_delegated_coins: CoinAmino[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg {
    type: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-response";
    value: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType {
    total_delegated_coins: CoinSDKType[];
}
export interface QueryTotalDelegationByDelegatorRequest {
    delegator_address: string;
}
export interface QueryTotalDelegationByDelegatorRequestProtoMsg {
    type_url: "/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest";
    value: Uint8Array;
}
export interface QueryTotalDelegationByDelegatorRequestProtoMsg {
    type_url: "/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest";
    value: Uint8Array;
}
export interface QueryTotalDelegationByDelegatorRequestAmino {
    delegator_address: string;
}
export interface QueryTotalDelegationByDelegatorRequestAminoMsg {
    type: "osmosis/query-total-delegation-by-delegator-request";
    value: QueryTotalDelegationByDelegatorRequestAmino;
}
export interface QueryTotalDelegationByDelegatorRequestSDKType {
    delegator_address: string;
}
export interface QueryTotalDelegationByDelegatorResponse {
    superfluid_delegation_records: SuperfluidDelegationRecord[];
    delegation_response: DelegationResponse[];
    total_delegated_coins: Coin[];
    total_equivalent_staked_amount: Coin;
}
export interface QueryTotalDelegationByDelegatorResponseProtoMsg {
    type_url: "/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse";
    value: Uint8Array;
}
export interface QueryTotalDelegationByDelegatorResponseProtoMsg {
    type_url: "/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse";
    value: Uint8Array;
}
export interface QueryTotalDelegationByDelegatorResponseAmino {
    superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
    delegation_response: DelegationResponseAmino[];
    total_delegated_coins: CoinAmino[];
    total_equivalent_staked_amount?: CoinAmino;
}
export interface QueryTotalDelegationByDelegatorResponseAminoMsg {
    type: "osmosis/query-total-delegation-by-delegator-response";
    value: QueryTotalDelegationByDelegatorResponseAmino;
}
export interface QueryTotalDelegationByDelegatorResponseSDKType {
    superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
    delegation_response: DelegationResponseSDKType[];
    total_delegated_coins: CoinSDKType[];
    total_equivalent_staked_amount: CoinSDKType;
}
export interface QueryUnpoolWhitelistRequest {
}
export interface QueryUnpoolWhitelistRequestProtoMsg {
    type_url: "/osmosis.superfluid.QueryUnpoolWhitelistRequest";
    value: Uint8Array;
}
export interface QueryUnpoolWhitelistRequestProtoMsg {
    type_url: "/osmosis.superfluid.QueryUnpoolWhitelistRequest";
    value: Uint8Array;
}
export interface QueryUnpoolWhitelistRequestAmino {
}
export interface QueryUnpoolWhitelistRequestAminoMsg {
    type: "osmosis/query-unpool-whitelist-request";
    value: QueryUnpoolWhitelistRequestAmino;
}
export interface QueryUnpoolWhitelistRequestSDKType {
}
export interface QueryUnpoolWhitelistResponse {
    pool_ids: bigint[];
}
export interface QueryUnpoolWhitelistResponseProtoMsg {
    type_url: "/osmosis.superfluid.QueryUnpoolWhitelistResponse";
    value: Uint8Array;
}
export interface QueryUnpoolWhitelistResponseProtoMsg {
    type_url: "/osmosis.superfluid.QueryUnpoolWhitelistResponse";
    value: Uint8Array;
}
export interface QueryUnpoolWhitelistResponseAmino {
    pool_ids: string[];
}
export interface QueryUnpoolWhitelistResponseAminoMsg {
    type: "osmosis/query-unpool-whitelist-response";
    value: QueryUnpoolWhitelistResponseAmino;
}
export interface QueryUnpoolWhitelistResponseSDKType {
    pool_ids: bigint[];
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest;
    toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse;
    toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const AssetTypeRequest: {
    typeUrl: string;
    encode(message: AssetTypeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AssetTypeRequest;
    fromJSON(object: any): AssetTypeRequest;
    toJSON(message: AssetTypeRequest): unknown;
    fromPartial(object: Partial<AssetTypeRequest>): AssetTypeRequest;
    fromSDK(object: AssetTypeRequestSDKType): AssetTypeRequest;
    toSDK(message: AssetTypeRequest): AssetTypeRequestSDKType;
    fromAmino(object: AssetTypeRequestAmino): AssetTypeRequest;
    toAmino(message: AssetTypeRequest): AssetTypeRequestAmino;
    fromAminoMsg(object: AssetTypeRequestAminoMsg): AssetTypeRequest;
    toAminoMsg(message: AssetTypeRequest): AssetTypeRequestAminoMsg;
    fromProtoMsg(message: AssetTypeRequestProtoMsg): AssetTypeRequest;
    toProto(message: AssetTypeRequest): Uint8Array;
    toProtoMsg(message: AssetTypeRequest): AssetTypeRequestProtoMsg;
};
export declare const AssetTypeResponse: {
    typeUrl: string;
    encode(message: AssetTypeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AssetTypeResponse;
    fromJSON(object: any): AssetTypeResponse;
    toJSON(message: AssetTypeResponse): unknown;
    fromPartial(object: Partial<AssetTypeResponse>): AssetTypeResponse;
    fromSDK(object: AssetTypeResponseSDKType): AssetTypeResponse;
    toSDK(message: AssetTypeResponse): AssetTypeResponseSDKType;
    fromAmino(object: AssetTypeResponseAmino): AssetTypeResponse;
    toAmino(message: AssetTypeResponse): AssetTypeResponseAmino;
    fromAminoMsg(object: AssetTypeResponseAminoMsg): AssetTypeResponse;
    toAminoMsg(message: AssetTypeResponse): AssetTypeResponseAminoMsg;
    fromProtoMsg(message: AssetTypeResponseProtoMsg): AssetTypeResponse;
    toProto(message: AssetTypeResponse): Uint8Array;
    toProtoMsg(message: AssetTypeResponse): AssetTypeResponseProtoMsg;
};
export declare const AllAssetsRequest: {
    typeUrl: string;
    encode(_: AllAssetsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllAssetsRequest;
    fromJSON(_: any): AllAssetsRequest;
    toJSON(_: AllAssetsRequest): unknown;
    fromPartial(_: Partial<AllAssetsRequest>): AllAssetsRequest;
    fromSDK(_: AllAssetsRequestSDKType): AllAssetsRequest;
    toSDK(_: AllAssetsRequest): AllAssetsRequestSDKType;
    fromAmino(_: AllAssetsRequestAmino): AllAssetsRequest;
    toAmino(_: AllAssetsRequest): AllAssetsRequestAmino;
    fromAminoMsg(object: AllAssetsRequestAminoMsg): AllAssetsRequest;
    toAminoMsg(message: AllAssetsRequest): AllAssetsRequestAminoMsg;
    fromProtoMsg(message: AllAssetsRequestProtoMsg): AllAssetsRequest;
    toProto(message: AllAssetsRequest): Uint8Array;
    toProtoMsg(message: AllAssetsRequest): AllAssetsRequestProtoMsg;
};
export declare const AllAssetsResponse: {
    typeUrl: string;
    encode(message: AllAssetsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllAssetsResponse;
    fromJSON(object: any): AllAssetsResponse;
    toJSON(message: AllAssetsResponse): unknown;
    fromPartial(object: Partial<AllAssetsResponse>): AllAssetsResponse;
    fromSDK(object: AllAssetsResponseSDKType): AllAssetsResponse;
    toSDK(message: AllAssetsResponse): AllAssetsResponseSDKType;
    fromAmino(object: AllAssetsResponseAmino): AllAssetsResponse;
    toAmino(message: AllAssetsResponse): AllAssetsResponseAmino;
    fromAminoMsg(object: AllAssetsResponseAminoMsg): AllAssetsResponse;
    toAminoMsg(message: AllAssetsResponse): AllAssetsResponseAminoMsg;
    fromProtoMsg(message: AllAssetsResponseProtoMsg): AllAssetsResponse;
    toProto(message: AllAssetsResponse): Uint8Array;
    toProtoMsg(message: AllAssetsResponse): AllAssetsResponseProtoMsg;
};
export declare const AssetMultiplierRequest: {
    typeUrl: string;
    encode(message: AssetMultiplierRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AssetMultiplierRequest;
    fromJSON(object: any): AssetMultiplierRequest;
    toJSON(message: AssetMultiplierRequest): unknown;
    fromPartial(object: Partial<AssetMultiplierRequest>): AssetMultiplierRequest;
    fromSDK(object: AssetMultiplierRequestSDKType): AssetMultiplierRequest;
    toSDK(message: AssetMultiplierRequest): AssetMultiplierRequestSDKType;
    fromAmino(object: AssetMultiplierRequestAmino): AssetMultiplierRequest;
    toAmino(message: AssetMultiplierRequest): AssetMultiplierRequestAmino;
    fromAminoMsg(object: AssetMultiplierRequestAminoMsg): AssetMultiplierRequest;
    toAminoMsg(message: AssetMultiplierRequest): AssetMultiplierRequestAminoMsg;
    fromProtoMsg(message: AssetMultiplierRequestProtoMsg): AssetMultiplierRequest;
    toProto(message: AssetMultiplierRequest): Uint8Array;
    toProtoMsg(message: AssetMultiplierRequest): AssetMultiplierRequestProtoMsg;
};
export declare const AssetMultiplierResponse: {
    typeUrl: string;
    encode(message: AssetMultiplierResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AssetMultiplierResponse;
    fromJSON(object: any): AssetMultiplierResponse;
    toJSON(message: AssetMultiplierResponse): unknown;
    fromPartial(object: Partial<AssetMultiplierResponse>): AssetMultiplierResponse;
    fromSDK(object: AssetMultiplierResponseSDKType): AssetMultiplierResponse;
    toSDK(message: AssetMultiplierResponse): AssetMultiplierResponseSDKType;
    fromAmino(object: AssetMultiplierResponseAmino): AssetMultiplierResponse;
    toAmino(message: AssetMultiplierResponse): AssetMultiplierResponseAmino;
    fromAminoMsg(object: AssetMultiplierResponseAminoMsg): AssetMultiplierResponse;
    toAminoMsg(message: AssetMultiplierResponse): AssetMultiplierResponseAminoMsg;
    fromProtoMsg(message: AssetMultiplierResponseProtoMsg): AssetMultiplierResponse;
    toProto(message: AssetMultiplierResponse): Uint8Array;
    toProtoMsg(message: AssetMultiplierResponse): AssetMultiplierResponseProtoMsg;
};
export declare const SuperfluidIntermediaryAccountInfo: {
    typeUrl: string;
    encode(message: SuperfluidIntermediaryAccountInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidIntermediaryAccountInfo;
    fromJSON(object: any): SuperfluidIntermediaryAccountInfo;
    toJSON(message: SuperfluidIntermediaryAccountInfo): unknown;
    fromPartial(object: Partial<SuperfluidIntermediaryAccountInfo>): SuperfluidIntermediaryAccountInfo;
    fromSDK(object: SuperfluidIntermediaryAccountInfoSDKType): SuperfluidIntermediaryAccountInfo;
    toSDK(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoSDKType;
    fromAmino(object: SuperfluidIntermediaryAccountInfoAmino): SuperfluidIntermediaryAccountInfo;
    toAmino(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoAmino;
    fromAminoMsg(object: SuperfluidIntermediaryAccountInfoAminoMsg): SuperfluidIntermediaryAccountInfo;
    toAminoMsg(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoAminoMsg;
    fromProtoMsg(message: SuperfluidIntermediaryAccountInfoProtoMsg): SuperfluidIntermediaryAccountInfo;
    toProto(message: SuperfluidIntermediaryAccountInfo): Uint8Array;
    toProtoMsg(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoProtoMsg;
};
export declare const AllIntermediaryAccountsRequest: {
    typeUrl: string;
    encode(message: AllIntermediaryAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllIntermediaryAccountsRequest;
    fromJSON(object: any): AllIntermediaryAccountsRequest;
    toJSON(message: AllIntermediaryAccountsRequest): unknown;
    fromPartial(object: Partial<AllIntermediaryAccountsRequest>): AllIntermediaryAccountsRequest;
    fromSDK(object: AllIntermediaryAccountsRequestSDKType): AllIntermediaryAccountsRequest;
    toSDK(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestSDKType;
    fromAmino(object: AllIntermediaryAccountsRequestAmino): AllIntermediaryAccountsRequest;
    toAmino(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestAmino;
    fromAminoMsg(object: AllIntermediaryAccountsRequestAminoMsg): AllIntermediaryAccountsRequest;
    toAminoMsg(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestAminoMsg;
    fromProtoMsg(message: AllIntermediaryAccountsRequestProtoMsg): AllIntermediaryAccountsRequest;
    toProto(message: AllIntermediaryAccountsRequest): Uint8Array;
    toProtoMsg(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestProtoMsg;
};
export declare const AllIntermediaryAccountsResponse: {
    typeUrl: string;
    encode(message: AllIntermediaryAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllIntermediaryAccountsResponse;
    fromJSON(object: any): AllIntermediaryAccountsResponse;
    toJSON(message: AllIntermediaryAccountsResponse): unknown;
    fromPartial(object: Partial<AllIntermediaryAccountsResponse>): AllIntermediaryAccountsResponse;
    fromSDK(object: AllIntermediaryAccountsResponseSDKType): AllIntermediaryAccountsResponse;
    toSDK(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseSDKType;
    fromAmino(object: AllIntermediaryAccountsResponseAmino): AllIntermediaryAccountsResponse;
    toAmino(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseAmino;
    fromAminoMsg(object: AllIntermediaryAccountsResponseAminoMsg): AllIntermediaryAccountsResponse;
    toAminoMsg(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseAminoMsg;
    fromProtoMsg(message: AllIntermediaryAccountsResponseProtoMsg): AllIntermediaryAccountsResponse;
    toProto(message: AllIntermediaryAccountsResponse): Uint8Array;
    toProtoMsg(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseProtoMsg;
};
export declare const ConnectedIntermediaryAccountRequest: {
    typeUrl: string;
    encode(message: ConnectedIntermediaryAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConnectedIntermediaryAccountRequest;
    fromJSON(object: any): ConnectedIntermediaryAccountRequest;
    toJSON(message: ConnectedIntermediaryAccountRequest): unknown;
    fromPartial(object: Partial<ConnectedIntermediaryAccountRequest>): ConnectedIntermediaryAccountRequest;
    fromSDK(object: ConnectedIntermediaryAccountRequestSDKType): ConnectedIntermediaryAccountRequest;
    toSDK(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestSDKType;
    fromAmino(object: ConnectedIntermediaryAccountRequestAmino): ConnectedIntermediaryAccountRequest;
    toAmino(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestAmino;
    fromAminoMsg(object: ConnectedIntermediaryAccountRequestAminoMsg): ConnectedIntermediaryAccountRequest;
    toAminoMsg(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestAminoMsg;
    fromProtoMsg(message: ConnectedIntermediaryAccountRequestProtoMsg): ConnectedIntermediaryAccountRequest;
    toProto(message: ConnectedIntermediaryAccountRequest): Uint8Array;
    toProtoMsg(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestProtoMsg;
};
export declare const ConnectedIntermediaryAccountResponse: {
    typeUrl: string;
    encode(message: ConnectedIntermediaryAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConnectedIntermediaryAccountResponse;
    fromJSON(object: any): ConnectedIntermediaryAccountResponse;
    toJSON(message: ConnectedIntermediaryAccountResponse): unknown;
    fromPartial(object: Partial<ConnectedIntermediaryAccountResponse>): ConnectedIntermediaryAccountResponse;
    fromSDK(object: ConnectedIntermediaryAccountResponseSDKType): ConnectedIntermediaryAccountResponse;
    toSDK(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseSDKType;
    fromAmino(object: ConnectedIntermediaryAccountResponseAmino): ConnectedIntermediaryAccountResponse;
    toAmino(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseAmino;
    fromAminoMsg(object: ConnectedIntermediaryAccountResponseAminoMsg): ConnectedIntermediaryAccountResponse;
    toAminoMsg(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseAminoMsg;
    fromProtoMsg(message: ConnectedIntermediaryAccountResponseProtoMsg): ConnectedIntermediaryAccountResponse;
    toProto(message: ConnectedIntermediaryAccountResponse): Uint8Array;
    toProtoMsg(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseProtoMsg;
};
export declare const QueryTotalDelegationByValidatorForDenomRequest: {
    typeUrl: string;
    encode(message: QueryTotalDelegationByValidatorForDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomRequest;
    fromJSON(object: any): QueryTotalDelegationByValidatorForDenomRequest;
    toJSON(message: QueryTotalDelegationByValidatorForDenomRequest): unknown;
    fromPartial(object: Partial<QueryTotalDelegationByValidatorForDenomRequest>): QueryTotalDelegationByValidatorForDenomRequest;
    fromSDK(object: QueryTotalDelegationByValidatorForDenomRequestSDKType): QueryTotalDelegationByValidatorForDenomRequest;
    toSDK(message: QueryTotalDelegationByValidatorForDenomRequest): QueryTotalDelegationByValidatorForDenomRequestSDKType;
    fromAmino(object: QueryTotalDelegationByValidatorForDenomRequestAmino): QueryTotalDelegationByValidatorForDenomRequest;
    toAmino(message: QueryTotalDelegationByValidatorForDenomRequest): QueryTotalDelegationByValidatorForDenomRequestAmino;
    fromAminoMsg(object: QueryTotalDelegationByValidatorForDenomRequestAminoMsg): QueryTotalDelegationByValidatorForDenomRequest;
    toAminoMsg(message: QueryTotalDelegationByValidatorForDenomRequest): QueryTotalDelegationByValidatorForDenomRequestAminoMsg;
    fromProtoMsg(message: QueryTotalDelegationByValidatorForDenomRequestProtoMsg): QueryTotalDelegationByValidatorForDenomRequest;
    toProto(message: QueryTotalDelegationByValidatorForDenomRequest): Uint8Array;
    toProtoMsg(message: QueryTotalDelegationByValidatorForDenomRequest): QueryTotalDelegationByValidatorForDenomRequestProtoMsg;
};
export declare const QueryTotalDelegationByValidatorForDenomResponse: {
    typeUrl: string;
    encode(message: QueryTotalDelegationByValidatorForDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomResponse;
    fromJSON(object: any): QueryTotalDelegationByValidatorForDenomResponse;
    toJSON(message: QueryTotalDelegationByValidatorForDenomResponse): unknown;
    fromPartial(object: Partial<QueryTotalDelegationByValidatorForDenomResponse>): QueryTotalDelegationByValidatorForDenomResponse;
    fromSDK(object: QueryTotalDelegationByValidatorForDenomResponseSDKType): QueryTotalDelegationByValidatorForDenomResponse;
    toSDK(message: QueryTotalDelegationByValidatorForDenomResponse): QueryTotalDelegationByValidatorForDenomResponseSDKType;
    fromAmino(object: QueryTotalDelegationByValidatorForDenomResponseAmino): QueryTotalDelegationByValidatorForDenomResponse;
    toAmino(message: QueryTotalDelegationByValidatorForDenomResponse): QueryTotalDelegationByValidatorForDenomResponseAmino;
    fromAminoMsg(object: QueryTotalDelegationByValidatorForDenomResponseAminoMsg): QueryTotalDelegationByValidatorForDenomResponse;
    toAminoMsg(message: QueryTotalDelegationByValidatorForDenomResponse): QueryTotalDelegationByValidatorForDenomResponseAminoMsg;
    fromProtoMsg(message: QueryTotalDelegationByValidatorForDenomResponseProtoMsg): QueryTotalDelegationByValidatorForDenomResponse;
    toProto(message: QueryTotalDelegationByValidatorForDenomResponse): Uint8Array;
    toProtoMsg(message: QueryTotalDelegationByValidatorForDenomResponse): QueryTotalDelegationByValidatorForDenomResponseProtoMsg;
};
export declare const Delegations: {
    typeUrl: string;
    encode(message: Delegations, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Delegations;
    fromJSON(object: any): Delegations;
    toJSON(message: Delegations): unknown;
    fromPartial(object: Partial<Delegations>): Delegations;
    fromSDK(object: DelegationsSDKType): Delegations;
    toSDK(message: Delegations): DelegationsSDKType;
    fromAmino(object: DelegationsAmino): Delegations;
    toAmino(message: Delegations): DelegationsAmino;
    fromAminoMsg(object: DelegationsAminoMsg): Delegations;
    toAminoMsg(message: Delegations): DelegationsAminoMsg;
    fromProtoMsg(message: DelegationsProtoMsg): Delegations;
    toProto(message: Delegations): Uint8Array;
    toProtoMsg(message: Delegations): DelegationsProtoMsg;
};
export declare const TotalSuperfluidDelegationsRequest: {
    typeUrl: string;
    encode(_: TotalSuperfluidDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TotalSuperfluidDelegationsRequest;
    fromJSON(_: any): TotalSuperfluidDelegationsRequest;
    toJSON(_: TotalSuperfluidDelegationsRequest): unknown;
    fromPartial(_: Partial<TotalSuperfluidDelegationsRequest>): TotalSuperfluidDelegationsRequest;
    fromSDK(_: TotalSuperfluidDelegationsRequestSDKType): TotalSuperfluidDelegationsRequest;
    toSDK(_: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestSDKType;
    fromAmino(_: TotalSuperfluidDelegationsRequestAmino): TotalSuperfluidDelegationsRequest;
    toAmino(_: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestAmino;
    fromAminoMsg(object: TotalSuperfluidDelegationsRequestAminoMsg): TotalSuperfluidDelegationsRequest;
    toAminoMsg(message: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestAminoMsg;
    fromProtoMsg(message: TotalSuperfluidDelegationsRequestProtoMsg): TotalSuperfluidDelegationsRequest;
    toProto(message: TotalSuperfluidDelegationsRequest): Uint8Array;
    toProtoMsg(message: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestProtoMsg;
};
export declare const TotalSuperfluidDelegationsResponse: {
    typeUrl: string;
    encode(message: TotalSuperfluidDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TotalSuperfluidDelegationsResponse;
    fromJSON(object: any): TotalSuperfluidDelegationsResponse;
    toJSON(message: TotalSuperfluidDelegationsResponse): unknown;
    fromPartial(object: Partial<TotalSuperfluidDelegationsResponse>): TotalSuperfluidDelegationsResponse;
    fromSDK(object: TotalSuperfluidDelegationsResponseSDKType): TotalSuperfluidDelegationsResponse;
    toSDK(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseSDKType;
    fromAmino(object: TotalSuperfluidDelegationsResponseAmino): TotalSuperfluidDelegationsResponse;
    toAmino(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseAmino;
    fromAminoMsg(object: TotalSuperfluidDelegationsResponseAminoMsg): TotalSuperfluidDelegationsResponse;
    toAminoMsg(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseAminoMsg;
    fromProtoMsg(message: TotalSuperfluidDelegationsResponseProtoMsg): TotalSuperfluidDelegationsResponse;
    toProto(message: TotalSuperfluidDelegationsResponse): Uint8Array;
    toProtoMsg(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseProtoMsg;
};
export declare const SuperfluidDelegationAmountRequest: {
    typeUrl: string;
    encode(message: SuperfluidDelegationAmountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationAmountRequest;
    fromJSON(object: any): SuperfluidDelegationAmountRequest;
    toJSON(message: SuperfluidDelegationAmountRequest): unknown;
    fromPartial(object: Partial<SuperfluidDelegationAmountRequest>): SuperfluidDelegationAmountRequest;
    fromSDK(object: SuperfluidDelegationAmountRequestSDKType): SuperfluidDelegationAmountRequest;
    toSDK(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestSDKType;
    fromAmino(object: SuperfluidDelegationAmountRequestAmino): SuperfluidDelegationAmountRequest;
    toAmino(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestAmino;
    fromAminoMsg(object: SuperfluidDelegationAmountRequestAminoMsg): SuperfluidDelegationAmountRequest;
    toAminoMsg(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationAmountRequestProtoMsg): SuperfluidDelegationAmountRequest;
    toProto(message: SuperfluidDelegationAmountRequest): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestProtoMsg;
};
export declare const SuperfluidDelegationAmountResponse: {
    typeUrl: string;
    encode(message: SuperfluidDelegationAmountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationAmountResponse;
    fromJSON(object: any): SuperfluidDelegationAmountResponse;
    toJSON(message: SuperfluidDelegationAmountResponse): unknown;
    fromPartial(object: Partial<SuperfluidDelegationAmountResponse>): SuperfluidDelegationAmountResponse;
    fromSDK(object: SuperfluidDelegationAmountResponseSDKType): SuperfluidDelegationAmountResponse;
    toSDK(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseSDKType;
    fromAmino(object: SuperfluidDelegationAmountResponseAmino): SuperfluidDelegationAmountResponse;
    toAmino(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseAmino;
    fromAminoMsg(object: SuperfluidDelegationAmountResponseAminoMsg): SuperfluidDelegationAmountResponse;
    toAminoMsg(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationAmountResponseProtoMsg): SuperfluidDelegationAmountResponse;
    toProto(message: SuperfluidDelegationAmountResponse): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseProtoMsg;
};
export declare const SuperfluidDelegationsByDelegatorRequest: {
    typeUrl: string;
    encode(message: SuperfluidDelegationsByDelegatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorRequest;
    fromJSON(object: any): SuperfluidDelegationsByDelegatorRequest;
    toJSON(message: SuperfluidDelegationsByDelegatorRequest): unknown;
    fromPartial(object: Partial<SuperfluidDelegationsByDelegatorRequest>): SuperfluidDelegationsByDelegatorRequest;
    fromSDK(object: SuperfluidDelegationsByDelegatorRequestSDKType): SuperfluidDelegationsByDelegatorRequest;
    toSDK(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestSDKType;
    fromAmino(object: SuperfluidDelegationsByDelegatorRequestAmino): SuperfluidDelegationsByDelegatorRequest;
    toAmino(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestAmino;
    fromAminoMsg(object: SuperfluidDelegationsByDelegatorRequestAminoMsg): SuperfluidDelegationsByDelegatorRequest;
    toAminoMsg(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationsByDelegatorRequestProtoMsg): SuperfluidDelegationsByDelegatorRequest;
    toProto(message: SuperfluidDelegationsByDelegatorRequest): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestProtoMsg;
};
export declare const SuperfluidDelegationsByDelegatorResponse: {
    typeUrl: string;
    encode(message: SuperfluidDelegationsByDelegatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorResponse;
    fromJSON(object: any): SuperfluidDelegationsByDelegatorResponse;
    toJSON(message: SuperfluidDelegationsByDelegatorResponse): unknown;
    fromPartial(object: Partial<SuperfluidDelegationsByDelegatorResponse>): SuperfluidDelegationsByDelegatorResponse;
    fromSDK(object: SuperfluidDelegationsByDelegatorResponseSDKType): SuperfluidDelegationsByDelegatorResponse;
    toSDK(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseSDKType;
    fromAmino(object: SuperfluidDelegationsByDelegatorResponseAmino): SuperfluidDelegationsByDelegatorResponse;
    toAmino(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseAmino;
    fromAminoMsg(object: SuperfluidDelegationsByDelegatorResponseAminoMsg): SuperfluidDelegationsByDelegatorResponse;
    toAminoMsg(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationsByDelegatorResponseProtoMsg): SuperfluidDelegationsByDelegatorResponse;
    toProto(message: SuperfluidDelegationsByDelegatorResponse): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseProtoMsg;
};
export declare const SuperfluidUndelegationsByDelegatorRequest: {
    typeUrl: string;
    encode(message: SuperfluidUndelegationsByDelegatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorRequest;
    fromJSON(object: any): SuperfluidUndelegationsByDelegatorRequest;
    toJSON(message: SuperfluidUndelegationsByDelegatorRequest): unknown;
    fromPartial(object: Partial<SuperfluidUndelegationsByDelegatorRequest>): SuperfluidUndelegationsByDelegatorRequest;
    fromSDK(object: SuperfluidUndelegationsByDelegatorRequestSDKType): SuperfluidUndelegationsByDelegatorRequest;
    toSDK(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestSDKType;
    fromAmino(object: SuperfluidUndelegationsByDelegatorRequestAmino): SuperfluidUndelegationsByDelegatorRequest;
    toAmino(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestAmino;
    fromAminoMsg(object: SuperfluidUndelegationsByDelegatorRequestAminoMsg): SuperfluidUndelegationsByDelegatorRequest;
    toAminoMsg(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestAminoMsg;
    fromProtoMsg(message: SuperfluidUndelegationsByDelegatorRequestProtoMsg): SuperfluidUndelegationsByDelegatorRequest;
    toProto(message: SuperfluidUndelegationsByDelegatorRequest): Uint8Array;
    toProtoMsg(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestProtoMsg;
};
export declare const SuperfluidUndelegationsByDelegatorResponse: {
    typeUrl: string;
    encode(message: SuperfluidUndelegationsByDelegatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorResponse;
    fromJSON(object: any): SuperfluidUndelegationsByDelegatorResponse;
    toJSON(message: SuperfluidUndelegationsByDelegatorResponse): unknown;
    fromPartial(object: Partial<SuperfluidUndelegationsByDelegatorResponse>): SuperfluidUndelegationsByDelegatorResponse;
    fromSDK(object: SuperfluidUndelegationsByDelegatorResponseSDKType): SuperfluidUndelegationsByDelegatorResponse;
    toSDK(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseSDKType;
    fromAmino(object: SuperfluidUndelegationsByDelegatorResponseAmino): SuperfluidUndelegationsByDelegatorResponse;
    toAmino(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseAmino;
    fromAminoMsg(object: SuperfluidUndelegationsByDelegatorResponseAminoMsg): SuperfluidUndelegationsByDelegatorResponse;
    toAminoMsg(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseAminoMsg;
    fromProtoMsg(message: SuperfluidUndelegationsByDelegatorResponseProtoMsg): SuperfluidUndelegationsByDelegatorResponse;
    toProto(message: SuperfluidUndelegationsByDelegatorResponse): Uint8Array;
    toProtoMsg(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseProtoMsg;
};
export declare const SuperfluidDelegationsByValidatorDenomRequest: {
    typeUrl: string;
    encode(message: SuperfluidDelegationsByValidatorDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomRequest;
    fromJSON(object: any): SuperfluidDelegationsByValidatorDenomRequest;
    toJSON(message: SuperfluidDelegationsByValidatorDenomRequest): unknown;
    fromPartial(object: Partial<SuperfluidDelegationsByValidatorDenomRequest>): SuperfluidDelegationsByValidatorDenomRequest;
    fromSDK(object: SuperfluidDelegationsByValidatorDenomRequestSDKType): SuperfluidDelegationsByValidatorDenomRequest;
    toSDK(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestSDKType;
    fromAmino(object: SuperfluidDelegationsByValidatorDenomRequestAmino): SuperfluidDelegationsByValidatorDenomRequest;
    toAmino(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestAmino;
    fromAminoMsg(object: SuperfluidDelegationsByValidatorDenomRequestAminoMsg): SuperfluidDelegationsByValidatorDenomRequest;
    toAminoMsg(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationsByValidatorDenomRequestProtoMsg): SuperfluidDelegationsByValidatorDenomRequest;
    toProto(message: SuperfluidDelegationsByValidatorDenomRequest): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestProtoMsg;
};
export declare const SuperfluidDelegationsByValidatorDenomResponse: {
    typeUrl: string;
    encode(message: SuperfluidDelegationsByValidatorDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomResponse;
    fromJSON(object: any): SuperfluidDelegationsByValidatorDenomResponse;
    toJSON(message: SuperfluidDelegationsByValidatorDenomResponse): unknown;
    fromPartial(object: Partial<SuperfluidDelegationsByValidatorDenomResponse>): SuperfluidDelegationsByValidatorDenomResponse;
    fromSDK(object: SuperfluidDelegationsByValidatorDenomResponseSDKType): SuperfluidDelegationsByValidatorDenomResponse;
    toSDK(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseSDKType;
    fromAmino(object: SuperfluidDelegationsByValidatorDenomResponseAmino): SuperfluidDelegationsByValidatorDenomResponse;
    toAmino(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseAmino;
    fromAminoMsg(object: SuperfluidDelegationsByValidatorDenomResponseAminoMsg): SuperfluidDelegationsByValidatorDenomResponse;
    toAminoMsg(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseAminoMsg;
    fromProtoMsg(message: SuperfluidDelegationsByValidatorDenomResponseProtoMsg): SuperfluidDelegationsByValidatorDenomResponse;
    toProto(message: SuperfluidDelegationsByValidatorDenomResponse): Uint8Array;
    toProtoMsg(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseProtoMsg;
};
export declare const EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
    typeUrl: string;
    encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
    fromPartial(object: Partial<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    fromSDK(object: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toSDK(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType;
    fromAmino(object: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toAmino(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
    fromAminoMsg(object: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toAminoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg;
    fromProtoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    toProto(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Uint8Array;
    toProtoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg;
};
export declare const EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
    typeUrl: string;
    encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
    fromPartial(object: Partial<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    fromSDK(object: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toSDK(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType;
    fromAmino(object: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toAmino(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
    fromAminoMsg(object: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toAminoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg;
    fromProtoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    toProto(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): Uint8Array;
    toProtoMsg(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg;
};
export declare const QueryTotalDelegationByDelegatorRequest: {
    typeUrl: string;
    encode(message: QueryTotalDelegationByDelegatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorRequest;
    fromJSON(object: any): QueryTotalDelegationByDelegatorRequest;
    toJSON(message: QueryTotalDelegationByDelegatorRequest): unknown;
    fromPartial(object: Partial<QueryTotalDelegationByDelegatorRequest>): QueryTotalDelegationByDelegatorRequest;
    fromSDK(object: QueryTotalDelegationByDelegatorRequestSDKType): QueryTotalDelegationByDelegatorRequest;
    toSDK(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestSDKType;
    fromAmino(object: QueryTotalDelegationByDelegatorRequestAmino): QueryTotalDelegationByDelegatorRequest;
    toAmino(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestAmino;
    fromAminoMsg(object: QueryTotalDelegationByDelegatorRequestAminoMsg): QueryTotalDelegationByDelegatorRequest;
    toAminoMsg(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestAminoMsg;
    fromProtoMsg(message: QueryTotalDelegationByDelegatorRequestProtoMsg): QueryTotalDelegationByDelegatorRequest;
    toProto(message: QueryTotalDelegationByDelegatorRequest): Uint8Array;
    toProtoMsg(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestProtoMsg;
};
export declare const QueryTotalDelegationByDelegatorResponse: {
    typeUrl: string;
    encode(message: QueryTotalDelegationByDelegatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorResponse;
    fromJSON(object: any): QueryTotalDelegationByDelegatorResponse;
    toJSON(message: QueryTotalDelegationByDelegatorResponse): unknown;
    fromPartial(object: Partial<QueryTotalDelegationByDelegatorResponse>): QueryTotalDelegationByDelegatorResponse;
    fromSDK(object: QueryTotalDelegationByDelegatorResponseSDKType): QueryTotalDelegationByDelegatorResponse;
    toSDK(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseSDKType;
    fromAmino(object: QueryTotalDelegationByDelegatorResponseAmino): QueryTotalDelegationByDelegatorResponse;
    toAmino(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseAmino;
    fromAminoMsg(object: QueryTotalDelegationByDelegatorResponseAminoMsg): QueryTotalDelegationByDelegatorResponse;
    toAminoMsg(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseAminoMsg;
    fromProtoMsg(message: QueryTotalDelegationByDelegatorResponseProtoMsg): QueryTotalDelegationByDelegatorResponse;
    toProto(message: QueryTotalDelegationByDelegatorResponse): Uint8Array;
    toProtoMsg(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseProtoMsg;
};
export declare const QueryUnpoolWhitelistRequest: {
    typeUrl: string;
    encode(_: QueryUnpoolWhitelistRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnpoolWhitelistRequest;
    fromJSON(_: any): QueryUnpoolWhitelistRequest;
    toJSON(_: QueryUnpoolWhitelistRequest): unknown;
    fromPartial(_: Partial<QueryUnpoolWhitelistRequest>): QueryUnpoolWhitelistRequest;
    fromSDK(_: QueryUnpoolWhitelistRequestSDKType): QueryUnpoolWhitelistRequest;
    toSDK(_: QueryUnpoolWhitelistRequest): QueryUnpoolWhitelistRequestSDKType;
    fromAmino(_: QueryUnpoolWhitelistRequestAmino): QueryUnpoolWhitelistRequest;
    toAmino(_: QueryUnpoolWhitelistRequest): QueryUnpoolWhitelistRequestAmino;
    fromAminoMsg(object: QueryUnpoolWhitelistRequestAminoMsg): QueryUnpoolWhitelistRequest;
    toAminoMsg(message: QueryUnpoolWhitelistRequest): QueryUnpoolWhitelistRequestAminoMsg;
    fromProtoMsg(message: QueryUnpoolWhitelistRequestProtoMsg): QueryUnpoolWhitelistRequest;
    toProto(message: QueryUnpoolWhitelistRequest): Uint8Array;
    toProtoMsg(message: QueryUnpoolWhitelistRequest): QueryUnpoolWhitelistRequestProtoMsg;
};
export declare const QueryUnpoolWhitelistResponse: {
    typeUrl: string;
    encode(message: QueryUnpoolWhitelistResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnpoolWhitelistResponse;
    fromJSON(object: any): QueryUnpoolWhitelistResponse;
    toJSON(message: QueryUnpoolWhitelistResponse): unknown;
    fromPartial(object: Partial<QueryUnpoolWhitelistResponse>): QueryUnpoolWhitelistResponse;
    fromSDK(object: QueryUnpoolWhitelistResponseSDKType): QueryUnpoolWhitelistResponse;
    toSDK(message: QueryUnpoolWhitelistResponse): QueryUnpoolWhitelistResponseSDKType;
    fromAmino(object: QueryUnpoolWhitelistResponseAmino): QueryUnpoolWhitelistResponse;
    toAmino(message: QueryUnpoolWhitelistResponse): QueryUnpoolWhitelistResponseAmino;
    fromAminoMsg(object: QueryUnpoolWhitelistResponseAminoMsg): QueryUnpoolWhitelistResponse;
    toAminoMsg(message: QueryUnpoolWhitelistResponse): QueryUnpoolWhitelistResponseAminoMsg;
    fromProtoMsg(message: QueryUnpoolWhitelistResponseProtoMsg): QueryUnpoolWhitelistResponse;
    toProto(message: QueryUnpoolWhitelistResponse): Uint8Array;
    toProtoMsg(message: QueryUnpoolWhitelistResponse): QueryUnpoolWhitelistResponseProtoMsg;
};
