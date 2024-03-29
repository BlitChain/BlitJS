"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cosmos_cryptoPubKey_ToAmino = exports.Cosmos_cryptoPubKey_FromAmino = exports.Cosmos_cryptoPubKey_InterfaceDecoder = exports.ValidatorUpdates = exports.Pool = exports.RedelegationResponse = exports.RedelegationEntryResponse = exports.DelegationResponse = exports.Params = exports.Redelegation = exports.RedelegationEntry = exports.UnbondingDelegationEntry = exports.UnbondingDelegation = exports.Delegation = exports.DVVTriplets = exports.DVVTriplet = exports.DVPairs = exports.DVPair = exports.ValAddresses = exports.Validator = exports.Description = exports.Commission = exports.CommissionRates = exports.HistoricalInfo = exports.infractionToJSON = exports.infractionFromJSON = exports.InfractionAmino = exports.InfractionSDKType = exports.Infraction = exports.bondStatusToJSON = exports.bondStatusFromJSON = exports.BondStatusAmino = exports.BondStatusSDKType = exports.BondStatus = exports.protobufPackage = void 0;
//@ts-nocheck
const types_1 = require("../../../tendermint/types/types");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const any_1 = require("../../../google/protobuf/any");
const duration_1 = require("../../../google/protobuf/duration");
const coin_1 = require("../../base/v1beta1/coin");
const types_2 = require("../../../tendermint/abci/types");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const math_1 = require("@cosmjs/math");
const proto_signing_1 = require("@cosmjs/proto-signing");
exports.protobufPackage = "cosmos.staking.v1beta1";
/** BondStatus is the status of a validator. */
var BondStatus;
(function (BondStatus) {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
    BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatus || (exports.BondStatus = BondStatus = {}));
exports.BondStatusSDKType = BondStatus;
exports.BondStatusAmino = BondStatus;
function bondStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "BOND_STATUS_UNSPECIFIED":
            return BondStatus.BOND_STATUS_UNSPECIFIED;
        case 1:
        case "BOND_STATUS_UNBONDED":
            return BondStatus.BOND_STATUS_UNBONDED;
        case 2:
        case "BOND_STATUS_UNBONDING":
            return BondStatus.BOND_STATUS_UNBONDING;
        case 3:
        case "BOND_STATUS_BONDED":
            return BondStatus.BOND_STATUS_BONDED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BondStatus.UNRECOGNIZED;
    }
}
exports.bondStatusFromJSON = bondStatusFromJSON;
function bondStatusToJSON(object) {
    switch (object) {
        case BondStatus.BOND_STATUS_UNSPECIFIED:
            return "BOND_STATUS_UNSPECIFIED";
        case BondStatus.BOND_STATUS_UNBONDED:
            return "BOND_STATUS_UNBONDED";
        case BondStatus.BOND_STATUS_UNBONDING:
            return "BOND_STATUS_UNBONDING";
        case BondStatus.BOND_STATUS_BONDED:
            return "BOND_STATUS_BONDED";
        case BondStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.bondStatusToJSON = bondStatusToJSON;
/** Infraction indicates the infraction a validator commited. */
var Infraction;
(function (Infraction) {
    /** INFRACTION_UNSPECIFIED - UNSPECIFIED defines an empty infraction. */
    Infraction[Infraction["INFRACTION_UNSPECIFIED"] = 0] = "INFRACTION_UNSPECIFIED";
    /** INFRACTION_DOUBLE_SIGN - DOUBLE_SIGN defines a validator that double-signs a block. */
    Infraction[Infraction["INFRACTION_DOUBLE_SIGN"] = 1] = "INFRACTION_DOUBLE_SIGN";
    /** INFRACTION_DOWNTIME - DOWNTIME defines a validator that missed signing too many blocks. */
    Infraction[Infraction["INFRACTION_DOWNTIME"] = 2] = "INFRACTION_DOWNTIME";
    Infraction[Infraction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Infraction || (exports.Infraction = Infraction = {}));
exports.InfractionSDKType = Infraction;
exports.InfractionAmino = Infraction;
function infractionFromJSON(object) {
    switch (object) {
        case 0:
        case "INFRACTION_UNSPECIFIED":
            return Infraction.INFRACTION_UNSPECIFIED;
        case 1:
        case "INFRACTION_DOUBLE_SIGN":
            return Infraction.INFRACTION_DOUBLE_SIGN;
        case 2:
        case "INFRACTION_DOWNTIME":
            return Infraction.INFRACTION_DOWNTIME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Infraction.UNRECOGNIZED;
    }
}
exports.infractionFromJSON = infractionFromJSON;
function infractionToJSON(object) {
    switch (object) {
        case Infraction.INFRACTION_UNSPECIFIED:
            return "INFRACTION_UNSPECIFIED";
        case Infraction.INFRACTION_DOUBLE_SIGN:
            return "INFRACTION_DOUBLE_SIGN";
        case Infraction.INFRACTION_DOWNTIME:
            return "INFRACTION_DOWNTIME";
        case Infraction.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.infractionToJSON = infractionToJSON;
function createBaseHistoricalInfo() {
    return {
        header: types_1.Header.fromPartial({}),
        valset: []
    };
}
exports.HistoricalInfo = {
    typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.valset) {
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHistoricalInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.valset.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            header: (0, helpers_1.isSet)(object.header) ? types_1.Header.fromJSON(object.header) : undefined,
            valset: Array.isArray(object?.valset) ? object.valset.map((e) => exports.Validator.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? types_1.Header.toJSON(message.header) : undefined);
        if (message.valset) {
            obj.valset = message.valset.map(e => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.valset = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHistoricalInfo();
        message.header = object.header !== undefined && object.header !== null ? types_1.Header.fromPartial(object.header) : undefined;
        message.valset = object.valset?.map(e => exports.Validator.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseHistoricalInfo();
        if (object.header !== undefined && object.header !== null) {
            message.header = types_1.Header.fromAmino(object.header);
        }
        message.valset = object.valset?.map(e => exports.Validator.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? types_1.Header.toAmino(message.header) : types_1.Header.fromPartial({});
        if (message.valset) {
            obj.valset = message.valset.map(e => e ? exports.Validator.toAmino(e) : undefined);
        }
        else {
            obj.valset = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.HistoricalInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/HistoricalInfo",
            value: exports.HistoricalInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.HistoricalInfo.decode(message.value);
    },
    toProto(message) {
        return exports.HistoricalInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
            value: exports.HistoricalInfo.encode(message).finish()
        };
    }
};
function createBaseCommissionRates() {
    return {
        rate: "",
        max_rate: "",
        max_change_rate: ""
    };
}
exports.CommissionRates = {
    typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.rate !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.rate, 18).atomics);
        }
        if (message.max_rate !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.max_rate, 18).atomics);
        }
        if (message.max_change_rate !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.max_change_rate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommissionRates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.max_rate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.max_change_rate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            rate: (0, helpers_1.isSet)(object.rate) ? String(object.rate) : "",
            max_rate: (0, helpers_1.isSet)(object.max_rate) ? String(object.max_rate) : "",
            max_change_rate: (0, helpers_1.isSet)(object.max_change_rate) ? String(object.max_change_rate) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.rate !== undefined && (obj.rate = message.rate);
        message.max_rate !== undefined && (obj.max_rate = message.max_rate);
        message.max_change_rate !== undefined && (obj.max_change_rate = message.max_change_rate);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommissionRates();
        message.rate = object.rate ?? "";
        message.max_rate = object.max_rate ?? "";
        message.max_change_rate = object.max_change_rate ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommissionRates();
        if (object.rate !== undefined && object.rate !== null) {
            message.rate = object.rate;
        }
        if (object.max_rate !== undefined && object.max_rate !== null) {
            message.max_rate = object.max_rate;
        }
        if (object.max_change_rate !== undefined && object.max_change_rate !== null) {
            message.max_change_rate = object.max_change_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.rate = message.rate ?? "";
        obj.max_rate = message.max_rate ?? "";
        obj.max_change_rate = message.max_change_rate ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommissionRates.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommissionRates",
            value: exports.CommissionRates.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommissionRates.decode(message.value);
    },
    toProto(message) {
        return exports.CommissionRates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
            value: exports.CommissionRates.encode(message).finish()
        };
    }
};
function createBaseCommission() {
    return {
        commission_rates: exports.CommissionRates.fromPartial({}),
        update_time: new Date()
    };
}
exports.Commission = {
    typeUrl: "/cosmos.staking.v1beta1.Commission",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.commission_rates !== undefined) {
            exports.CommissionRates.encode(message.commission_rates, writer.uint32(10).fork()).ldelim();
        }
        if (message.update_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.update_time), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission_rates = exports.CommissionRates.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.update_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            commission_rates: (0, helpers_1.isSet)(object.commission_rates) ? exports.CommissionRates.fromJSON(object.commission_rates) : undefined,
            update_time: (0, helpers_1.isSet)(object.update_time) ? (0, helpers_1.fromJsonTimestamp)(object.update_time) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.commission_rates !== undefined && (obj.commission_rates = message.commission_rates ? exports.CommissionRates.toJSON(message.commission_rates) : undefined);
        message.update_time !== undefined && (obj.update_time = message.update_time.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommission();
        message.commission_rates = object.commission_rates !== undefined && object.commission_rates !== null ? exports.CommissionRates.fromPartial(object.commission_rates) : undefined;
        message.update_time = object.update_time ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommission();
        if (object.commission_rates !== undefined && object.commission_rates !== null) {
            message.commission_rates = exports.CommissionRates.fromAmino(object.commission_rates);
        }
        if (object.update_time !== undefined && object.update_time !== null) {
            message.update_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.update_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.commission_rates = message.commission_rates ? exports.CommissionRates.toAmino(message.commission_rates) : exports.CommissionRates.fromPartial({});
        obj.update_time = message.update_time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.update_time)) : new Date();
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Commission.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Commission",
            value: exports.Commission.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Commission.decode(message.value);
    },
    toProto(message) {
        return exports.Commission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Commission",
            value: exports.Commission.encode(message).finish()
        };
    }
};
function createBaseDescription() {
    return {
        moniker: "",
        identity: "",
        website: "",
        security_contact: "",
        details: ""
    };
}
exports.Description = {
    typeUrl: "/cosmos.staking.v1beta1.Description",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.moniker !== "") {
            writer.uint32(10).string(message.moniker);
        }
        if (message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.website !== "") {
            writer.uint32(26).string(message.website);
        }
        if (message.security_contact !== "") {
            writer.uint32(34).string(message.security_contact);
        }
        if (message.details !== "") {
            writer.uint32(42).string(message.details);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moniker = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.website = reader.string();
                    break;
                case 4:
                    message.security_contact = reader.string();
                    break;
                case 5:
                    message.details = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            moniker: (0, helpers_1.isSet)(object.moniker) ? String(object.moniker) : "",
            identity: (0, helpers_1.isSet)(object.identity) ? String(object.identity) : "",
            website: (0, helpers_1.isSet)(object.website) ? String(object.website) : "",
            security_contact: (0, helpers_1.isSet)(object.security_contact) ? String(object.security_contact) : "",
            details: (0, helpers_1.isSet)(object.details) ? String(object.details) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.identity !== undefined && (obj.identity = message.identity);
        message.website !== undefined && (obj.website = message.website);
        message.security_contact !== undefined && (obj.security_contact = message.security_contact);
        message.details !== undefined && (obj.details = message.details);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDescription();
        message.moniker = object.moniker ?? "";
        message.identity = object.identity ?? "";
        message.website = object.website ?? "";
        message.security_contact = object.security_contact ?? "";
        message.details = object.details ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDescription();
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = object.identity;
        }
        if (object.website !== undefined && object.website !== null) {
            message.website = object.website;
        }
        if (object.security_contact !== undefined && object.security_contact !== null) {
            message.security_contact = object.security_contact;
        }
        if (object.details !== undefined && object.details !== null) {
            message.details = object.details;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.moniker = message.moniker;
        obj.identity = message.identity;
        obj.website = message.website;
        obj.security_contact = message.security_contact;
        obj.details = message.details;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Description.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Description",
            value: exports.Description.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Description.decode(message.value);
    },
    toProto(message) {
        return exports.Description.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Description",
            value: exports.Description.encode(message).finish()
        };
    }
};
function createBaseValidator() {
    return {
        operator_address: "",
        consensus_pubkey: undefined,
        jailed: false,
        status: 0,
        tokens: "",
        delegator_shares: "",
        description: exports.Description.fromPartial({}),
        unbonding_height: BigInt(0),
        unbonding_time: new Date(),
        commission: exports.Commission.fromPartial({}),
        min_self_delegation: "",
        unbonding_on_hold_ref_count: BigInt(0),
        unbonding_ids: []
    };
}
exports.Validator = {
    typeUrl: "/cosmos.staking.v1beta1.Validator",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.operator_address !== "") {
            writer.uint32(10).string(message.operator_address);
        }
        if (message.consensus_pubkey !== undefined) {
            any_1.Any.encode(message.consensus_pubkey, writer.uint32(18).fork()).ldelim();
        }
        if (message.jailed === true) {
            writer.uint32(24).bool(message.jailed);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.tokens !== "") {
            writer.uint32(42).string(message.tokens);
        }
        if (message.delegator_shares !== "") {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.delegator_shares, 18).atomics);
        }
        if (message.description !== undefined) {
            exports.Description.encode(message.description, writer.uint32(58).fork()).ldelim();
        }
        if (message.unbonding_height !== BigInt(0)) {
            writer.uint32(64).int64(message.unbonding_height);
        }
        if (message.unbonding_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.unbonding_time), writer.uint32(74).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            exports.Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
        }
        if (message.min_self_delegation !== "") {
            writer.uint32(90).string(message.min_self_delegation);
        }
        if (message.unbonding_on_hold_ref_count !== BigInt(0)) {
            writer.uint32(96).int64(message.unbonding_on_hold_ref_count);
        }
        writer.uint32(106).fork();
        for (const v of message.unbonding_ids) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operator_address = reader.string();
                    break;
                case 2:
                    message.consensus_pubkey = (0, exports.Cosmos_cryptoPubKey_InterfaceDecoder)(reader);
                    break;
                case 3:
                    message.jailed = reader.bool();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.tokens = reader.string();
                    break;
                case 6:
                    message.delegator_shares = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.description = exports.Description.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.unbonding_height = reader.int64();
                    break;
                case 9:
                    message.unbonding_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.commission = exports.Commission.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.min_self_delegation = reader.string();
                    break;
                case 12:
                    message.unbonding_on_hold_ref_count = reader.int64();
                    break;
                case 13:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.unbonding_ids.push(reader.uint64());
                        }
                    }
                    else {
                        message.unbonding_ids.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            operator_address: (0, helpers_1.isSet)(object.operator_address) ? String(object.operator_address) : "",
            consensus_pubkey: (0, helpers_1.isSet)(object.consensus_pubkey) ? any_1.Any.fromJSON(object.consensus_pubkey) : undefined,
            jailed: (0, helpers_1.isSet)(object.jailed) ? Boolean(object.jailed) : false,
            status: (0, helpers_1.isSet)(object.status) ? bondStatusFromJSON(object.status) : -1,
            tokens: (0, helpers_1.isSet)(object.tokens) ? String(object.tokens) : "",
            delegator_shares: (0, helpers_1.isSet)(object.delegator_shares) ? String(object.delegator_shares) : "",
            description: (0, helpers_1.isSet)(object.description) ? exports.Description.fromJSON(object.description) : undefined,
            unbonding_height: (0, helpers_1.isSet)(object.unbonding_height) ? BigInt(object.unbonding_height.toString()) : BigInt(0),
            unbonding_time: (0, helpers_1.isSet)(object.unbonding_time) ? (0, helpers_1.fromJsonTimestamp)(object.unbonding_time) : undefined,
            commission: (0, helpers_1.isSet)(object.commission) ? exports.Commission.fromJSON(object.commission) : undefined,
            min_self_delegation: (0, helpers_1.isSet)(object.min_self_delegation) ? String(object.min_self_delegation) : "",
            unbonding_on_hold_ref_count: (0, helpers_1.isSet)(object.unbonding_on_hold_ref_count) ? BigInt(object.unbonding_on_hold_ref_count.toString()) : BigInt(0),
            unbonding_ids: Array.isArray(object?.unbonding_ids) ? object.unbonding_ids.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.operator_address !== undefined && (obj.operator_address = message.operator_address);
        message.consensus_pubkey !== undefined && (obj.consensus_pubkey = message.consensus_pubkey ? any_1.Any.toJSON(message.consensus_pubkey) : undefined);
        message.jailed !== undefined && (obj.jailed = message.jailed);
        message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
        message.tokens !== undefined && (obj.tokens = message.tokens);
        message.delegator_shares !== undefined && (obj.delegator_shares = message.delegator_shares);
        message.description !== undefined && (obj.description = message.description ? exports.Description.toJSON(message.description) : undefined);
        message.unbonding_height !== undefined && (obj.unbonding_height = (message.unbonding_height || BigInt(0)).toString());
        message.unbonding_time !== undefined && (obj.unbonding_time = message.unbonding_time.toISOString());
        message.commission !== undefined && (obj.commission = message.commission ? exports.Commission.toJSON(message.commission) : undefined);
        message.min_self_delegation !== undefined && (obj.min_self_delegation = message.min_self_delegation);
        message.unbonding_on_hold_ref_count !== undefined && (obj.unbonding_on_hold_ref_count = (message.unbonding_on_hold_ref_count || BigInt(0)).toString());
        if (message.unbonding_ids) {
            obj.unbonding_ids = message.unbonding_ids.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.unbonding_ids = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.operator_address = object.operator_address ?? "";
        message.consensus_pubkey = object.consensus_pubkey !== undefined && object.consensus_pubkey !== null ? any_1.Any.fromPartial(object.consensus_pubkey) : undefined;
        message.jailed = object.jailed ?? false;
        message.status = object.status ?? 0;
        message.tokens = object.tokens ?? "";
        message.delegator_shares = object.delegator_shares ?? "";
        message.description = object.description !== undefined && object.description !== null ? exports.Description.fromPartial(object.description) : undefined;
        message.unbonding_height = object.unbonding_height !== undefined && object.unbonding_height !== null ? BigInt(object.unbonding_height.toString()) : BigInt(0);
        message.unbonding_time = object.unbonding_time ?? undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? exports.Commission.fromPartial(object.commission) : undefined;
        message.min_self_delegation = object.min_self_delegation ?? "";
        message.unbonding_on_hold_ref_count = object.unbonding_on_hold_ref_count !== undefined && object.unbonding_on_hold_ref_count !== null ? BigInt(object.unbonding_on_hold_ref_count.toString()) : BigInt(0);
        message.unbonding_ids = object.unbonding_ids?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidator();
        if (object.operator_address !== undefined && object.operator_address !== null) {
            message.operator_address = object.operator_address;
        }
        if (object.consensus_pubkey !== undefined && object.consensus_pubkey !== null) {
            message.consensus_pubkey = (0, proto_signing_1.encodePubkey)(object.consensus_pubkey);
        }
        if (object.jailed !== undefined && object.jailed !== null) {
            message.jailed = object.jailed;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = bondStatusFromJSON(object.status);
        }
        if (object.tokens !== undefined && object.tokens !== null) {
            message.tokens = object.tokens;
        }
        if (object.delegator_shares !== undefined && object.delegator_shares !== null) {
            message.delegator_shares = object.delegator_shares;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = exports.Description.fromAmino(object.description);
        }
        if (object.unbonding_height !== undefined && object.unbonding_height !== null) {
            message.unbonding_height = BigInt(object.unbonding_height);
        }
        if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
            message.unbonding_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.unbonding_time));
        }
        if (object.commission !== undefined && object.commission !== null) {
            message.commission = exports.Commission.fromAmino(object.commission);
        }
        if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
            message.min_self_delegation = object.min_self_delegation;
        }
        if (object.unbonding_on_hold_ref_count !== undefined && object.unbonding_on_hold_ref_count !== null) {
            message.unbonding_on_hold_ref_count = BigInt(object.unbonding_on_hold_ref_count);
        }
        message.unbonding_ids = object.unbonding_ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.operator_address = message.operator_address;
        obj.consensus_pubkey = message.consensus_pubkey ? (0, proto_signing_1.decodePubkey)(message.consensus_pubkey) : undefined;
        obj.jailed = message.jailed;
        obj.status = message.status;
        obj.tokens = message.tokens;
        obj.delegator_shares = message.delegator_shares;
        obj.description = message.description ? exports.Description.toAmino(message.description) : exports.Description.fromPartial({});
        obj.unbonding_height = message.unbonding_height ? message.unbonding_height.toString() : undefined;
        obj.unbonding_time = message.unbonding_time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.unbonding_time)) : new Date();
        obj.commission = message.commission ? exports.Commission.toAmino(message.commission) : exports.Commission.fromPartial({});
        obj.min_self_delegation = message.min_self_delegation;
        obj.unbonding_on_hold_ref_count = message.unbonding_on_hold_ref_count ? message.unbonding_on_hold_ref_count.toString() : undefined;
        if (message.unbonding_ids) {
            obj.unbonding_ids = message.unbonding_ids.map(e => e.toString());
        }
        else {
            obj.unbonding_ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Validator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Validator",
            value: exports.Validator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Validator.decode(message.value);
    },
    toProto(message) {
        return exports.Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Validator",
            value: exports.Validator.encode(message).finish()
        };
    }
};
function createBaseValAddresses() {
    return {
        addresses: []
    };
}
exports.ValAddresses = {
    typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.addresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValAddresses();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            addresses: Array.isArray(object?.addresses) ? object.addresses.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map(e => e);
        }
        else {
            obj.addresses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValAddresses();
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValAddresses();
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map(e => e);
        }
        else {
            obj.addresses = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValAddresses.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValAddresses",
            value: exports.ValAddresses.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValAddresses.decode(message.value);
    },
    toProto(message) {
        return exports.ValAddresses.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
            value: exports.ValAddresses.encode(message).finish()
        };
    }
};
function createBaseDVPair() {
    return {
        delegator_address: "",
        validator_address: ""
    };
}
exports.DVPair = {
    typeUrl: "/cosmos.staking.v1beta1.DVPair",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDVPair();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDVPair();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DVPair.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVPair",
            value: exports.DVPair.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DVPair.decode(message.value);
    },
    toProto(message) {
        return exports.DVPair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVPair",
            value: exports.DVPair.encode(message).finish()
        };
    }
};
function createBaseDVPairs() {
    return {
        pairs: []
    };
}
exports.DVPairs = {
    typeUrl: "/cosmos.staking.v1beta1.DVPairs",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pairs) {
            exports.DVPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVPairs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairs.push(exports.DVPair.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pairs: Array.isArray(object?.pairs) ? object.pairs.map((e) => exports.DVPair.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? exports.DVPair.toJSON(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDVPairs();
        message.pairs = object.pairs?.map(e => exports.DVPair.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDVPairs();
        message.pairs = object.pairs?.map(e => exports.DVPair.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? exports.DVPair.toAmino(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DVPairs.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVPairs",
            value: exports.DVPairs.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DVPairs.decode(message.value);
    },
    toProto(message) {
        return exports.DVPairs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVPairs",
            value: exports.DVPairs.encode(message).finish()
        };
    }
};
function createBaseDVVTriplet() {
    return {
        delegator_address: "",
        validator_src_address: "",
        validator_dst_address: ""
    };
}
exports.DVVTriplet = {
    typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_src_address !== "") {
            writer.uint32(18).string(message.validator_src_address);
        }
        if (message.validator_dst_address !== "") {
            writer.uint32(26).string(message.validator_dst_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVVTriplet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_src_address = reader.string();
                    break;
                case 3:
                    message.validator_dst_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_src_address: (0, helpers_1.isSet)(object.validator_src_address) ? String(object.validator_src_address) : "",
            validator_dst_address: (0, helpers_1.isSet)(object.validator_dst_address) ? String(object.validator_dst_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_src_address !== undefined && (obj.validator_src_address = message.validator_src_address);
        message.validator_dst_address !== undefined && (obj.validator_dst_address = message.validator_dst_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDVVTriplet();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_src_address = object.validator_src_address ?? "";
        message.validator_dst_address = object.validator_dst_address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDVVTriplet();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        if (object.validator_src_address !== undefined && object.validator_src_address !== null) {
            message.validator_src_address = object.validator_src_address;
        }
        if (object.validator_dst_address !== undefined && object.validator_dst_address !== null) {
            message.validator_dst_address = object.validator_dst_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_src_address = message.validator_src_address;
        obj.validator_dst_address = message.validator_dst_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DVVTriplet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVVTriplet",
            value: exports.DVVTriplet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DVVTriplet.decode(message.value);
    },
    toProto(message) {
        return exports.DVVTriplet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
            value: exports.DVVTriplet.encode(message).finish()
        };
    }
};
function createBaseDVVTriplets() {
    return {
        triplets: []
    };
}
exports.DVVTriplets = {
    typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.triplets) {
            exports.DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVVTriplets();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triplets.push(exports.DVVTriplet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            triplets: Array.isArray(object?.triplets) ? object.triplets.map((e) => exports.DVVTriplet.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.triplets) {
            obj.triplets = message.triplets.map(e => e ? exports.DVVTriplet.toJSON(e) : undefined);
        }
        else {
            obj.triplets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDVVTriplets();
        message.triplets = object.triplets?.map(e => exports.DVVTriplet.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDVVTriplets();
        message.triplets = object.triplets?.map(e => exports.DVVTriplet.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.triplets) {
            obj.triplets = message.triplets.map(e => e ? exports.DVVTriplet.toAmino(e) : undefined);
        }
        else {
            obj.triplets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DVVTriplets.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVVTriplets",
            value: exports.DVVTriplets.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DVVTriplets.decode(message.value);
    },
    toProto(message) {
        return exports.DVVTriplets.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
            value: exports.DVVTriplets.encode(message).finish()
        };
    }
};
function createBaseDelegation() {
    return {
        delegator_address: "",
        validator_address: "",
        shares: ""
    };
}
exports.Delegation = {
    typeUrl: "/cosmos.staking.v1beta1.Delegation",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.shares !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.shares, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.shares = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : "",
            shares: (0, helpers_1.isSet)(object.shares) ? String(object.shares) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.shares !== undefined && (obj.shares = message.shares);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegation();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        message.shares = object.shares ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDelegation();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        if (object.shares !== undefined && object.shares !== null) {
            message.shares = object.shares;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        obj.shares = message.shares;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Delegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Delegation",
            value: exports.Delegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Delegation.decode(message.value);
    },
    toProto(message) {
        return exports.Delegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Delegation",
            value: exports.Delegation.encode(message).finish()
        };
    }
};
function createBaseUnbondingDelegation() {
    return {
        delegator_address: "",
        validator_address: "",
        entries: []
    };
}
exports.UnbondingDelegation = {
    typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        for (const v of message.entries) {
            exports.UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.entries.push(exports.UnbondingDelegationEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : "",
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.UnbondingDelegationEntry.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.UnbondingDelegationEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUnbondingDelegation();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        message.entries = object.entries?.map(e => exports.UnbondingDelegationEntry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseUnbondingDelegation();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        message.entries = object.entries?.map(e => exports.UnbondingDelegationEntry.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.UnbondingDelegationEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UnbondingDelegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UnbondingDelegation",
            value: exports.UnbondingDelegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UnbondingDelegation.decode(message.value);
    },
    toProto(message) {
        return exports.UnbondingDelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
            value: exports.UnbondingDelegation.encode(message).finish()
        };
    }
};
function createBaseUnbondingDelegationEntry() {
    return {
        creation_height: BigInt(0),
        completion_time: new Date(),
        initial_balance: "",
        balance: "",
        unbonding_id: BigInt(0),
        unbonding_on_hold_ref_count: BigInt(0)
    };
}
exports.UnbondingDelegationEntry = {
    typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creation_height !== BigInt(0)) {
            writer.uint32(8).int64(message.creation_height);
        }
        if (message.completion_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completion_time), writer.uint32(18).fork()).ldelim();
        }
        if (message.initial_balance !== "") {
            writer.uint32(26).string(message.initial_balance);
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        if (message.unbonding_id !== BigInt(0)) {
            writer.uint32(40).uint64(message.unbonding_id);
        }
        if (message.unbonding_on_hold_ref_count !== BigInt(0)) {
            writer.uint32(48).int64(message.unbonding_on_hold_ref_count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingDelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creation_height = reader.int64();
                    break;
                case 2:
                    message.completion_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initial_balance = reader.string();
                    break;
                case 4:
                    message.balance = reader.string();
                    break;
                case 5:
                    message.unbonding_id = reader.uint64();
                    break;
                case 6:
                    message.unbonding_on_hold_ref_count = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            creation_height: (0, helpers_1.isSet)(object.creation_height) ? BigInt(object.creation_height.toString()) : BigInt(0),
            completion_time: (0, helpers_1.isSet)(object.completion_time) ? (0, helpers_1.fromJsonTimestamp)(object.completion_time) : undefined,
            initial_balance: (0, helpers_1.isSet)(object.initial_balance) ? String(object.initial_balance) : "",
            balance: (0, helpers_1.isSet)(object.balance) ? String(object.balance) : "",
            unbonding_id: (0, helpers_1.isSet)(object.unbonding_id) ? BigInt(object.unbonding_id.toString()) : BigInt(0),
            unbonding_on_hold_ref_count: (0, helpers_1.isSet)(object.unbonding_on_hold_ref_count) ? BigInt(object.unbonding_on_hold_ref_count.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.creation_height !== undefined && (obj.creation_height = (message.creation_height || BigInt(0)).toString());
        message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
        message.initial_balance !== undefined && (obj.initial_balance = message.initial_balance);
        message.balance !== undefined && (obj.balance = message.balance);
        message.unbonding_id !== undefined && (obj.unbonding_id = (message.unbonding_id || BigInt(0)).toString());
        message.unbonding_on_hold_ref_count !== undefined && (obj.unbonding_on_hold_ref_count = (message.unbonding_on_hold_ref_count || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUnbondingDelegationEntry();
        message.creation_height = object.creation_height !== undefined && object.creation_height !== null ? BigInt(object.creation_height.toString()) : BigInt(0);
        message.completion_time = object.completion_time ?? undefined;
        message.initial_balance = object.initial_balance ?? "";
        message.balance = object.balance ?? "";
        message.unbonding_id = object.unbonding_id !== undefined && object.unbonding_id !== null ? BigInt(object.unbonding_id.toString()) : BigInt(0);
        message.unbonding_on_hold_ref_count = object.unbonding_on_hold_ref_count !== undefined && object.unbonding_on_hold_ref_count !== null ? BigInt(object.unbonding_on_hold_ref_count.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseUnbondingDelegationEntry();
        if (object.creation_height !== undefined && object.creation_height !== null) {
            message.creation_height = BigInt(object.creation_height);
        }
        if (object.completion_time !== undefined && object.completion_time !== null) {
            message.completion_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.completion_time));
        }
        if (object.initial_balance !== undefined && object.initial_balance !== null) {
            message.initial_balance = object.initial_balance;
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        if (object.unbonding_id !== undefined && object.unbonding_id !== null) {
            message.unbonding_id = BigInt(object.unbonding_id);
        }
        if (object.unbonding_on_hold_ref_count !== undefined && object.unbonding_on_hold_ref_count !== null) {
            message.unbonding_on_hold_ref_count = BigInt(object.unbonding_on_hold_ref_count);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creation_height = message.creation_height ? message.creation_height.toString() : undefined;
        obj.completion_time = message.completion_time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.completion_time)) : new Date();
        obj.initial_balance = message.initial_balance;
        obj.balance = message.balance;
        obj.unbonding_id = message.unbonding_id ? message.unbonding_id.toString() : undefined;
        obj.unbonding_on_hold_ref_count = message.unbonding_on_hold_ref_count ? message.unbonding_on_hold_ref_count.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UnbondingDelegationEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UnbondingDelegationEntry",
            value: exports.UnbondingDelegationEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UnbondingDelegationEntry.decode(message.value);
    },
    toProto(message) {
        return exports.UnbondingDelegationEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
            value: exports.UnbondingDelegationEntry.encode(message).finish()
        };
    }
};
function createBaseRedelegationEntry() {
    return {
        creation_height: BigInt(0),
        completion_time: new Date(),
        initial_balance: "",
        shares_dst: "",
        unbonding_id: BigInt(0),
        unbonding_on_hold_ref_count: BigInt(0)
    };
}
exports.RedelegationEntry = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creation_height !== BigInt(0)) {
            writer.uint32(8).int64(message.creation_height);
        }
        if (message.completion_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completion_time), writer.uint32(18).fork()).ldelim();
        }
        if (message.initial_balance !== "") {
            writer.uint32(26).string(message.initial_balance);
        }
        if (message.shares_dst !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.shares_dst, 18).atomics);
        }
        if (message.unbonding_id !== BigInt(0)) {
            writer.uint32(40).uint64(message.unbonding_id);
        }
        if (message.unbonding_on_hold_ref_count !== BigInt(0)) {
            writer.uint32(48).int64(message.unbonding_on_hold_ref_count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creation_height = reader.int64();
                    break;
                case 2:
                    message.completion_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initial_balance = reader.string();
                    break;
                case 4:
                    message.shares_dst = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.unbonding_id = reader.uint64();
                    break;
                case 6:
                    message.unbonding_on_hold_ref_count = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            creation_height: (0, helpers_1.isSet)(object.creation_height) ? BigInt(object.creation_height.toString()) : BigInt(0),
            completion_time: (0, helpers_1.isSet)(object.completion_time) ? (0, helpers_1.fromJsonTimestamp)(object.completion_time) : undefined,
            initial_balance: (0, helpers_1.isSet)(object.initial_balance) ? String(object.initial_balance) : "",
            shares_dst: (0, helpers_1.isSet)(object.shares_dst) ? String(object.shares_dst) : "",
            unbonding_id: (0, helpers_1.isSet)(object.unbonding_id) ? BigInt(object.unbonding_id.toString()) : BigInt(0),
            unbonding_on_hold_ref_count: (0, helpers_1.isSet)(object.unbonding_on_hold_ref_count) ? BigInt(object.unbonding_on_hold_ref_count.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.creation_height !== undefined && (obj.creation_height = (message.creation_height || BigInt(0)).toString());
        message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
        message.initial_balance !== undefined && (obj.initial_balance = message.initial_balance);
        message.shares_dst !== undefined && (obj.shares_dst = message.shares_dst);
        message.unbonding_id !== undefined && (obj.unbonding_id = (message.unbonding_id || BigInt(0)).toString());
        message.unbonding_on_hold_ref_count !== undefined && (obj.unbonding_on_hold_ref_count = (message.unbonding_on_hold_ref_count || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegationEntry();
        message.creation_height = object.creation_height !== undefined && object.creation_height !== null ? BigInt(object.creation_height.toString()) : BigInt(0);
        message.completion_time = object.completion_time ?? undefined;
        message.initial_balance = object.initial_balance ?? "";
        message.shares_dst = object.shares_dst ?? "";
        message.unbonding_id = object.unbonding_id !== undefined && object.unbonding_id !== null ? BigInt(object.unbonding_id.toString()) : BigInt(0);
        message.unbonding_on_hold_ref_count = object.unbonding_on_hold_ref_count !== undefined && object.unbonding_on_hold_ref_count !== null ? BigInt(object.unbonding_on_hold_ref_count.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseRedelegationEntry();
        if (object.creation_height !== undefined && object.creation_height !== null) {
            message.creation_height = BigInt(object.creation_height);
        }
        if (object.completion_time !== undefined && object.completion_time !== null) {
            message.completion_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.completion_time));
        }
        if (object.initial_balance !== undefined && object.initial_balance !== null) {
            message.initial_balance = object.initial_balance;
        }
        if (object.shares_dst !== undefined && object.shares_dst !== null) {
            message.shares_dst = object.shares_dst;
        }
        if (object.unbonding_id !== undefined && object.unbonding_id !== null) {
            message.unbonding_id = BigInt(object.unbonding_id);
        }
        if (object.unbonding_on_hold_ref_count !== undefined && object.unbonding_on_hold_ref_count !== null) {
            message.unbonding_on_hold_ref_count = BigInt(object.unbonding_on_hold_ref_count);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creation_height = message.creation_height ? message.creation_height.toString() : undefined;
        obj.completion_time = message.completion_time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.completion_time)) : new Date();
        obj.initial_balance = message.initial_balance;
        obj.shares_dst = message.shares_dst;
        obj.unbonding_id = message.unbonding_id ? message.unbonding_id.toString() : undefined;
        obj.unbonding_on_hold_ref_count = message.unbonding_on_hold_ref_count ? message.unbonding_on_hold_ref_count.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RedelegationEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationEntry",
            value: exports.RedelegationEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RedelegationEntry.decode(message.value);
    },
    toProto(message) {
        return exports.RedelegationEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
            value: exports.RedelegationEntry.encode(message).finish()
        };
    }
};
function createBaseRedelegation() {
    return {
        delegator_address: "",
        validator_src_address: "",
        validator_dst_address: "",
        entries: []
    };
}
exports.Redelegation = {
    typeUrl: "/cosmos.staking.v1beta1.Redelegation",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_src_address !== "") {
            writer.uint32(18).string(message.validator_src_address);
        }
        if (message.validator_dst_address !== "") {
            writer.uint32(26).string(message.validator_dst_address);
        }
        for (const v of message.entries) {
            exports.RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_src_address = reader.string();
                    break;
                case 3:
                    message.validator_dst_address = reader.string();
                    break;
                case 4:
                    message.entries.push(exports.RedelegationEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_src_address: (0, helpers_1.isSet)(object.validator_src_address) ? String(object.validator_src_address) : "",
            validator_dst_address: (0, helpers_1.isSet)(object.validator_dst_address) ? String(object.validator_dst_address) : "",
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.RedelegationEntry.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_src_address !== undefined && (obj.validator_src_address = message.validator_src_address);
        message.validator_dst_address !== undefined && (obj.validator_dst_address = message.validator_dst_address);
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.RedelegationEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegation();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_src_address = object.validator_src_address ?? "";
        message.validator_dst_address = object.validator_dst_address ?? "";
        message.entries = object.entries?.map(e => exports.RedelegationEntry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRedelegation();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        if (object.validator_src_address !== undefined && object.validator_src_address !== null) {
            message.validator_src_address = object.validator_src_address;
        }
        if (object.validator_dst_address !== undefined && object.validator_dst_address !== null) {
            message.validator_dst_address = object.validator_dst_address;
        }
        message.entries = object.entries?.map(e => exports.RedelegationEntry.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_src_address = message.validator_src_address;
        obj.validator_dst_address = message.validator_dst_address;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.RedelegationEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Redelegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Redelegation",
            value: exports.Redelegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Redelegation.decode(message.value);
    },
    toProto(message) {
        return exports.Redelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Redelegation",
            value: exports.Redelegation.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        unbonding_time: duration_1.Duration.fromPartial({}),
        max_validators: 0,
        max_entries: 0,
        historical_entries: 0,
        bond_denom: "",
        min_commission_rate: ""
    };
}
exports.Params = {
    typeUrl: "/cosmos.staking.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.unbonding_time !== undefined) {
            duration_1.Duration.encode(message.unbonding_time, writer.uint32(10).fork()).ldelim();
        }
        if (message.max_validators !== 0) {
            writer.uint32(16).uint32(message.max_validators);
        }
        if (message.max_entries !== 0) {
            writer.uint32(24).uint32(message.max_entries);
        }
        if (message.historical_entries !== 0) {
            writer.uint32(32).uint32(message.historical_entries);
        }
        if (message.bond_denom !== "") {
            writer.uint32(42).string(message.bond_denom);
        }
        if (message.min_commission_rate !== "") {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.min_commission_rate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbonding_time = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.max_validators = reader.uint32();
                    break;
                case 3:
                    message.max_entries = reader.uint32();
                    break;
                case 4:
                    message.historical_entries = reader.uint32();
                    break;
                case 5:
                    message.bond_denom = reader.string();
                    break;
                case 6:
                    message.min_commission_rate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            unbonding_time: (0, helpers_1.isSet)(object.unbonding_time) ? duration_1.Duration.fromJSON(object.unbonding_time) : undefined,
            max_validators: (0, helpers_1.isSet)(object.max_validators) ? Number(object.max_validators) : 0,
            max_entries: (0, helpers_1.isSet)(object.max_entries) ? Number(object.max_entries) : 0,
            historical_entries: (0, helpers_1.isSet)(object.historical_entries) ? Number(object.historical_entries) : 0,
            bond_denom: (0, helpers_1.isSet)(object.bond_denom) ? String(object.bond_denom) : "",
            min_commission_rate: (0, helpers_1.isSet)(object.min_commission_rate) ? String(object.min_commission_rate) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.unbonding_time !== undefined && (obj.unbonding_time = message.unbonding_time ? duration_1.Duration.toJSON(message.unbonding_time) : undefined);
        message.max_validators !== undefined && (obj.max_validators = Math.round(message.max_validators));
        message.max_entries !== undefined && (obj.max_entries = Math.round(message.max_entries));
        message.historical_entries !== undefined && (obj.historical_entries = Math.round(message.historical_entries));
        message.bond_denom !== undefined && (obj.bond_denom = message.bond_denom);
        message.min_commission_rate !== undefined && (obj.min_commission_rate = message.min_commission_rate);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.unbonding_time = object.unbonding_time !== undefined && object.unbonding_time !== null ? duration_1.Duration.fromPartial(object.unbonding_time) : undefined;
        message.max_validators = object.max_validators ?? 0;
        message.max_entries = object.max_entries ?? 0;
        message.historical_entries = object.historical_entries ?? 0;
        message.bond_denom = object.bond_denom ?? "";
        message.min_commission_rate = object.min_commission_rate ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
            message.unbonding_time = duration_1.Duration.fromAmino(object.unbonding_time);
        }
        if (object.max_validators !== undefined && object.max_validators !== null) {
            message.max_validators = object.max_validators;
        }
        if (object.max_entries !== undefined && object.max_entries !== null) {
            message.max_entries = object.max_entries;
        }
        if (object.historical_entries !== undefined && object.historical_entries !== null) {
            message.historical_entries = object.historical_entries;
        }
        if (object.bond_denom !== undefined && object.bond_denom !== null) {
            message.bond_denom = object.bond_denom;
        }
        if (object.min_commission_rate !== undefined && object.min_commission_rate !== null) {
            message.min_commission_rate = object.min_commission_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.unbonding_time = message.unbonding_time ? duration_1.Duration.toAmino(message.unbonding_time) : duration_1.Duration.fromPartial({});
        obj.max_validators = message.max_validators;
        obj.max_entries = message.max_entries;
        obj.historical_entries = message.historical_entries;
        obj.bond_denom = message.bond_denom;
        obj.min_commission_rate = message.min_commission_rate ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/x/staking/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseDelegationResponse() {
    return {
        delegation: exports.Delegation.fromPartial({}),
        balance: coin_1.Coin.fromPartial({})
    };
}
exports.DelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegation !== undefined) {
            exports.Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation = exports.Delegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegation: (0, helpers_1.isSet)(object.delegation) ? exports.Delegation.fromJSON(object.delegation) : undefined,
            balance: (0, helpers_1.isSet)(object.balance) ? coin_1.Coin.fromJSON(object.balance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegation !== undefined && (obj.delegation = message.delegation ? exports.Delegation.toJSON(message.delegation) : undefined);
        message.balance !== undefined && (obj.balance = message.balance ? coin_1.Coin.toJSON(message.balance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegationResponse();
        message.delegation = object.delegation !== undefined && object.delegation !== null ? exports.Delegation.fromPartial(object.delegation) : undefined;
        message.balance = object.balance !== undefined && object.balance !== null ? coin_1.Coin.fromPartial(object.balance) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDelegationResponse();
        if (object.delegation !== undefined && object.delegation !== null) {
            message.delegation = exports.Delegation.fromAmino(object.delegation);
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = coin_1.Coin.fromAmino(object.balance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegation = message.delegation ? exports.Delegation.toAmino(message.delegation) : exports.Delegation.fromPartial({});
        obj.balance = message.balance ? coin_1.Coin.toAmino(message.balance) : coin_1.Coin.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegationResponse",
            value: exports.DelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DelegationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.DelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
            value: exports.DelegationResponse.encode(message).finish()
        };
    }
};
function createBaseRedelegationEntryResponse() {
    return {
        redelegation_entry: exports.RedelegationEntry.fromPartial({}),
        balance: ""
    };
}
exports.RedelegationEntryResponse = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.redelegation_entry !== undefined) {
            exports.RedelegationEntry.encode(message.redelegation_entry, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation_entry = exports.RedelegationEntry.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            redelegation_entry: (0, helpers_1.isSet)(object.redelegation_entry) ? exports.RedelegationEntry.fromJSON(object.redelegation_entry) : undefined,
            balance: (0, helpers_1.isSet)(object.balance) ? String(object.balance) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.redelegation_entry !== undefined && (obj.redelegation_entry = message.redelegation_entry ? exports.RedelegationEntry.toJSON(message.redelegation_entry) : undefined);
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegationEntryResponse();
        message.redelegation_entry = object.redelegation_entry !== undefined && object.redelegation_entry !== null ? exports.RedelegationEntry.fromPartial(object.redelegation_entry) : undefined;
        message.balance = object.balance ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRedelegationEntryResponse();
        if (object.redelegation_entry !== undefined && object.redelegation_entry !== null) {
            message.redelegation_entry = exports.RedelegationEntry.fromAmino(object.redelegation_entry);
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.redelegation_entry = message.redelegation_entry ? exports.RedelegationEntry.toAmino(message.redelegation_entry) : exports.RedelegationEntry.fromPartial({});
        obj.balance = message.balance;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RedelegationEntryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationEntryResponse",
            value: exports.RedelegationEntryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RedelegationEntryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.RedelegationEntryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
            value: exports.RedelegationEntryResponse.encode(message).finish()
        };
    }
};
function createBaseRedelegationResponse() {
    return {
        redelegation: exports.Redelegation.fromPartial({}),
        entries: []
    };
}
exports.RedelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.redelegation !== undefined) {
            exports.Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            exports.RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation = exports.Redelegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.entries.push(exports.RedelegationEntryResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            redelegation: (0, helpers_1.isSet)(object.redelegation) ? exports.Redelegation.fromJSON(object.redelegation) : undefined,
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.RedelegationEntryResponse.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.redelegation !== undefined && (obj.redelegation = message.redelegation ? exports.Redelegation.toJSON(message.redelegation) : undefined);
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.RedelegationEntryResponse.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegationResponse();
        message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? exports.Redelegation.fromPartial(object.redelegation) : undefined;
        message.entries = object.entries?.map(e => exports.RedelegationEntryResponse.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRedelegationResponse();
        if (object.redelegation !== undefined && object.redelegation !== null) {
            message.redelegation = exports.Redelegation.fromAmino(object.redelegation);
        }
        message.entries = object.entries?.map(e => exports.RedelegationEntryResponse.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.redelegation = message.redelegation ? exports.Redelegation.toAmino(message.redelegation) : exports.Redelegation.fromPartial({});
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.RedelegationEntryResponse.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RedelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationResponse",
            value: exports.RedelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RedelegationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.RedelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
            value: exports.RedelegationResponse.encode(message).finish()
        };
    }
};
function createBasePool() {
    return {
        not_bonded_tokens: "",
        bonded_tokens: ""
    };
}
exports.Pool = {
    typeUrl: "/cosmos.staking.v1beta1.Pool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.not_bonded_tokens !== "") {
            writer.uint32(10).string(message.not_bonded_tokens);
        }
        if (message.bonded_tokens !== "") {
            writer.uint32(18).string(message.bonded_tokens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.not_bonded_tokens = reader.string();
                    break;
                case 2:
                    message.bonded_tokens = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            not_bonded_tokens: (0, helpers_1.isSet)(object.not_bonded_tokens) ? String(object.not_bonded_tokens) : "",
            bonded_tokens: (0, helpers_1.isSet)(object.bonded_tokens) ? String(object.bonded_tokens) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.not_bonded_tokens !== undefined && (obj.not_bonded_tokens = message.not_bonded_tokens);
        message.bonded_tokens !== undefined && (obj.bonded_tokens = message.bonded_tokens);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePool();
        message.not_bonded_tokens = object.not_bonded_tokens ?? "";
        message.bonded_tokens = object.bonded_tokens ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePool();
        if (object.not_bonded_tokens !== undefined && object.not_bonded_tokens !== null) {
            message.not_bonded_tokens = object.not_bonded_tokens;
        }
        if (object.bonded_tokens !== undefined && object.bonded_tokens !== null) {
            message.bonded_tokens = object.bonded_tokens;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.not_bonded_tokens = message.not_bonded_tokens ?? "";
        obj.bonded_tokens = message.bonded_tokens ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Pool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Pool",
            value: exports.Pool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Pool.decode(message.value);
    },
    toProto(message) {
        return exports.Pool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Pool",
            value: exports.Pool.encode(message).finish()
        };
    }
};
function createBaseValidatorUpdates() {
    return {
        updates: []
    };
}
exports.ValidatorUpdates = {
    typeUrl: "/cosmos.staking.v1beta1.ValidatorUpdates",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.updates) {
            types_2.ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorUpdates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.updates.push(types_2.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            updates: Array.isArray(object?.updates) ? object.updates.map((e) => types_2.ValidatorUpdate.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.updates) {
            obj.updates = message.updates.map(e => e ? types_2.ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.updates = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorUpdates();
        message.updates = object.updates?.map(e => types_2.ValidatorUpdate.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorUpdates();
        message.updates = object.updates?.map(e => types_2.ValidatorUpdate.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.updates) {
            obj.updates = message.updates.map(e => e ? types_2.ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.updates = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorUpdates.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorUpdates",
            value: exports.ValidatorUpdates.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorUpdates.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorUpdates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.ValidatorUpdates",
            value: exports.ValidatorUpdates.encode(message).finish()
        };
    }
};
const Cosmos_cryptoPubKey_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        default:
            return data;
    }
};
exports.Cosmos_cryptoPubKey_InterfaceDecoder = Cosmos_cryptoPubKey_InterfaceDecoder;
const Cosmos_cryptoPubKey_FromAmino = (content) => {
    return (0, proto_signing_1.encodePubkey)(content);
};
exports.Cosmos_cryptoPubKey_FromAmino = Cosmos_cryptoPubKey_FromAmino;
const Cosmos_cryptoPubKey_ToAmino = (content) => {
    return (0, proto_signing_1.decodePubkey)(content);
};
exports.Cosmos_cryptoPubKey_ToAmino = Cosmos_cryptoPubKey_ToAmino;
//# sourceMappingURL=staking.js.map