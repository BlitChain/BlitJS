//@ts-nocheck
import { Header } from "../../../tendermint/types/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../base/v1beta1/coin";
import { ValidatorUpdate } from "../../../tendermint/abci/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
import { encodePubkey, decodePubkey } from "@cosmjs/proto-signing";
export const protobufPackage = "cosmos.staking.v1beta1";
/** BondStatus is the status of a validator. */
export var BondStatus;
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
})(BondStatus || (BondStatus = {}));
export const BondStatusSDKType = BondStatus;
export const BondStatusAmino = BondStatus;
export function bondStatusFromJSON(object) {
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
export function bondStatusToJSON(object) {
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
/** Infraction indicates the infraction a validator commited. */
export var Infraction;
(function (Infraction) {
    /** INFRACTION_UNSPECIFIED - UNSPECIFIED defines an empty infraction. */
    Infraction[Infraction["INFRACTION_UNSPECIFIED"] = 0] = "INFRACTION_UNSPECIFIED";
    /** INFRACTION_DOUBLE_SIGN - DOUBLE_SIGN defines a validator that double-signs a block. */
    Infraction[Infraction["INFRACTION_DOUBLE_SIGN"] = 1] = "INFRACTION_DOUBLE_SIGN";
    /** INFRACTION_DOWNTIME - DOWNTIME defines a validator that missed signing too many blocks. */
    Infraction[Infraction["INFRACTION_DOWNTIME"] = 2] = "INFRACTION_DOWNTIME";
    Infraction[Infraction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Infraction || (Infraction = {}));
export const InfractionSDKType = Infraction;
export const InfractionAmino = Infraction;
export function infractionFromJSON(object) {
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
export function infractionToJSON(object) {
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
function createBaseHistoricalInfo() {
    return {
        header: Header.fromPartial({}),
        valset: []
    };
}
export const HistoricalInfo = {
    typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
    aminoType: "cosmos-sdk/HistoricalInfo",
    is(o) {
        return o && (o.$typeUrl === HistoricalInfo.typeUrl || Header.is(o.header) && Array.isArray(o.valset) && (!o.valset.length || Validator.is(o.valset[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === HistoricalInfo.typeUrl || Header.isSDK(o.header) && Array.isArray(o.valset) && (!o.valset.length || Validator.isSDK(o.valset[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === HistoricalInfo.typeUrl || Header.isAmino(o.header) && Array.isArray(o.valset) && (!o.valset.length || Validator.isAmino(o.valset[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.valset) {
            Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHistoricalInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.valset.push(Validator.decode(reader, reader.uint32()));
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
            header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
            valset: Array.isArray(object?.valset) ? object.valset.map((e) => Validator.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
        if (message.valset) {
            obj.valset = message.valset.map(e => e ? Validator.toJSON(e) : undefined);
        }
        else {
            obj.valset = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHistoricalInfo();
        message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
        message.valset = object.valset?.map(e => Validator.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseHistoricalInfo();
        if (object.header !== undefined && object.header !== null) {
            message.header = Header.fromAmino(object.header);
        }
        message.valset = object.valset?.map(e => Validator.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? Header.toAmino(message.header) : Header.fromPartial({});
        if (message.valset) {
            obj.valset = message.valset.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.valset = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return HistoricalInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/HistoricalInfo",
            value: HistoricalInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return HistoricalInfo.decode(message.value);
    },
    toProto(message) {
        return HistoricalInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
            value: HistoricalInfo.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(HistoricalInfo.typeUrl, HistoricalInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(HistoricalInfo.aminoType, HistoricalInfo.typeUrl);
function createBaseCommissionRates() {
    return {
        rate: "",
        max_rate: "",
        max_change_rate: ""
    };
}
export const CommissionRates = {
    typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
    aminoType: "cosmos-sdk/CommissionRates",
    is(o) {
        return o && (o.$typeUrl === CommissionRates.typeUrl || typeof o.rate === "string" && typeof o.max_rate === "string" && typeof o.max_change_rate === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === CommissionRates.typeUrl || typeof o.rate === "string" && typeof o.max_rate === "string" && typeof o.max_change_rate === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === CommissionRates.typeUrl || typeof o.rate === "string" && typeof o.max_rate === "string" && typeof o.max_change_rate === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.rate !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.rate, 18).atomics);
        }
        if (message.max_rate !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.max_rate, 18).atomics);
        }
        if (message.max_change_rate !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.max_change_rate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommissionRates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.max_rate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.max_change_rate = Decimal.fromAtomics(reader.string(), 18).toString();
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
            rate: isSet(object.rate) ? String(object.rate) : "",
            max_rate: isSet(object.max_rate) ? String(object.max_rate) : "",
            max_change_rate: isSet(object.max_change_rate) ? String(object.max_change_rate) : ""
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
        return CommissionRates.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommissionRates",
            value: CommissionRates.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CommissionRates.decode(message.value);
    },
    toProto(message) {
        return CommissionRates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
            value: CommissionRates.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(CommissionRates.typeUrl, CommissionRates);
GlobalDecoderRegistry.registerAminoProtoMapping(CommissionRates.aminoType, CommissionRates.typeUrl);
function createBaseCommission() {
    return {
        commission_rates: CommissionRates.fromPartial({}),
        update_time: new Date()
    };
}
export const Commission = {
    typeUrl: "/cosmos.staking.v1beta1.Commission",
    aminoType: "cosmos-sdk/Commission",
    is(o) {
        return o && (o.$typeUrl === Commission.typeUrl || CommissionRates.is(o.commission_rates) && Timestamp.is(o.update_time));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Commission.typeUrl || CommissionRates.isSDK(o.commission_rates) && Timestamp.isSDK(o.update_time));
    },
    isAmino(o) {
        return o && (o.$typeUrl === Commission.typeUrl || CommissionRates.isAmino(o.commission_rates) && Timestamp.isAmino(o.update_time));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.commission_rates !== undefined) {
            CommissionRates.encode(message.commission_rates, writer.uint32(10).fork()).ldelim();
        }
        if (message.update_time !== undefined) {
            Timestamp.encode(toTimestamp(message.update_time), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission_rates = CommissionRates.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.update_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            commission_rates: isSet(object.commission_rates) ? CommissionRates.fromJSON(object.commission_rates) : undefined,
            update_time: isSet(object.update_time) ? fromJsonTimestamp(object.update_time) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.commission_rates !== undefined && (obj.commission_rates = message.commission_rates ? CommissionRates.toJSON(message.commission_rates) : undefined);
        message.update_time !== undefined && (obj.update_time = message.update_time.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommission();
        message.commission_rates = object.commission_rates !== undefined && object.commission_rates !== null ? CommissionRates.fromPartial(object.commission_rates) : undefined;
        message.update_time = object.update_time ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommission();
        if (object.commission_rates !== undefined && object.commission_rates !== null) {
            message.commission_rates = CommissionRates.fromAmino(object.commission_rates);
        }
        if (object.update_time !== undefined && object.update_time !== null) {
            message.update_time = fromTimestamp(Timestamp.fromAmino(object.update_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.commission_rates = message.commission_rates ? CommissionRates.toAmino(message.commission_rates) : CommissionRates.fromPartial({});
        obj.update_time = message.update_time ? Timestamp.toAmino(toTimestamp(message.update_time)) : new Date();
        return obj;
    },
    fromAminoMsg(object) {
        return Commission.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Commission",
            value: Commission.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Commission.decode(message.value);
    },
    toProto(message) {
        return Commission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Commission",
            value: Commission.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Commission.typeUrl, Commission);
GlobalDecoderRegistry.registerAminoProtoMapping(Commission.aminoType, Commission.typeUrl);
function createBaseDescription() {
    return {
        moniker: "",
        identity: "",
        website: "",
        security_contact: "",
        details: ""
    };
}
export const Description = {
    typeUrl: "/cosmos.staking.v1beta1.Description",
    aminoType: "cosmos-sdk/Description",
    is(o) {
        return o && (o.$typeUrl === Description.typeUrl || typeof o.moniker === "string" && typeof o.identity === "string" && typeof o.website === "string" && typeof o.security_contact === "string" && typeof o.details === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Description.typeUrl || typeof o.moniker === "string" && typeof o.identity === "string" && typeof o.website === "string" && typeof o.security_contact === "string" && typeof o.details === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Description.typeUrl || typeof o.moniker === "string" && typeof o.identity === "string" && typeof o.website === "string" && typeof o.security_contact === "string" && typeof o.details === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            identity: isSet(object.identity) ? String(object.identity) : "",
            website: isSet(object.website) ? String(object.website) : "",
            security_contact: isSet(object.security_contact) ? String(object.security_contact) : "",
            details: isSet(object.details) ? String(object.details) : ""
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
        return Description.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Description",
            value: Description.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Description.decode(message.value);
    },
    toProto(message) {
        return Description.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Description",
            value: Description.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Description.typeUrl, Description);
GlobalDecoderRegistry.registerAminoProtoMapping(Description.aminoType, Description.typeUrl);
function createBaseValidator() {
    return {
        operator_address: "",
        consensus_pubkey: undefined,
        jailed: false,
        status: 0,
        tokens: "",
        delegator_shares: "",
        description: Description.fromPartial({}),
        unbonding_height: BigInt(0),
        unbonding_time: new Date(),
        commission: Commission.fromPartial({}),
        min_self_delegation: "",
        unbonding_on_hold_ref_count: BigInt(0),
        unbonding_ids: []
    };
}
export const Validator = {
    typeUrl: "/cosmos.staking.v1beta1.Validator",
    aminoType: "cosmos-sdk/Validator",
    is(o) {
        return o && (o.$typeUrl === Validator.typeUrl || typeof o.operator_address === "string" && typeof o.jailed === "boolean" && isSet(o.status) && typeof o.tokens === "string" && typeof o.delegator_shares === "string" && Description.is(o.description) && typeof o.unbonding_height === "bigint" && Timestamp.is(o.unbonding_time) && Commission.is(o.commission) && typeof o.min_self_delegation === "string" && typeof o.unbonding_on_hold_ref_count === "bigint" && Array.isArray(o.unbonding_ids) && (!o.unbonding_ids.length || typeof o.unbonding_ids[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Validator.typeUrl || typeof o.operator_address === "string" && typeof o.jailed === "boolean" && isSet(o.status) && typeof o.tokens === "string" && typeof o.delegator_shares === "string" && Description.isSDK(o.description) && typeof o.unbonding_height === "bigint" && Timestamp.isSDK(o.unbonding_time) && Commission.isSDK(o.commission) && typeof o.min_self_delegation === "string" && typeof o.unbonding_on_hold_ref_count === "bigint" && Array.isArray(o.unbonding_ids) && (!o.unbonding_ids.length || typeof o.unbonding_ids[0] === "bigint"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === Validator.typeUrl || typeof o.operator_address === "string" && typeof o.jailed === "boolean" && isSet(o.status) && typeof o.tokens === "string" && typeof o.delegator_shares === "string" && Description.isAmino(o.description) && typeof o.unbonding_height === "bigint" && Timestamp.isAmino(o.unbonding_time) && Commission.isAmino(o.commission) && typeof o.min_self_delegation === "string" && typeof o.unbonding_on_hold_ref_count === "bigint" && Array.isArray(o.unbonding_ids) && (!o.unbonding_ids.length || typeof o.unbonding_ids[0] === "bigint"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.operator_address !== "") {
            writer.uint32(10).string(message.operator_address);
        }
        if (message.consensus_pubkey !== undefined) {
            Any.encode(GlobalDecoderRegistry.wrapAny(message.consensus_pubkey), writer.uint32(18).fork()).ldelim();
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
            writer.uint32(50).string(Decimal.fromUserInput(message.delegator_shares, 18).atomics);
        }
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(58).fork()).ldelim();
        }
        if (message.unbonding_height !== BigInt(0)) {
            writer.uint32(64).int64(message.unbonding_height);
        }
        if (message.unbonding_time !== undefined) {
            Timestamp.encode(toTimestamp(message.unbonding_time), writer.uint32(74).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operator_address = reader.string();
                    break;
                case 2:
                    message.consensus_pubkey = GlobalDecoderRegistry.unwrapAny(reader);
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
                    message.delegator_shares = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.description = Description.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.unbonding_height = reader.int64();
                    break;
                case 9:
                    message.unbonding_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.commission = Commission.decode(reader, reader.uint32());
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
            operator_address: isSet(object.operator_address) ? String(object.operator_address) : "",
            consensus_pubkey: isSet(object.consensus_pubkey) ? GlobalDecoderRegistry.fromJSON(object.consensus_pubkey) : undefined,
            jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
            status: isSet(object.status) ? bondStatusFromJSON(object.status) : -1,
            tokens: isSet(object.tokens) ? String(object.tokens) : "",
            delegator_shares: isSet(object.delegator_shares) ? String(object.delegator_shares) : "",
            description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
            unbonding_height: isSet(object.unbonding_height) ? BigInt(object.unbonding_height.toString()) : BigInt(0),
            unbonding_time: isSet(object.unbonding_time) ? fromJsonTimestamp(object.unbonding_time) : undefined,
            commission: isSet(object.commission) ? Commission.fromJSON(object.commission) : undefined,
            min_self_delegation: isSet(object.min_self_delegation) ? String(object.min_self_delegation) : "",
            unbonding_on_hold_ref_count: isSet(object.unbonding_on_hold_ref_count) ? BigInt(object.unbonding_on_hold_ref_count.toString()) : BigInt(0),
            unbonding_ids: Array.isArray(object?.unbonding_ids) ? object.unbonding_ids.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.operator_address !== undefined && (obj.operator_address = message.operator_address);
        message.consensus_pubkey !== undefined && (obj.consensus_pubkey = message.consensus_pubkey ? GlobalDecoderRegistry.toJSON(message.consensus_pubkey) : undefined);
        message.jailed !== undefined && (obj.jailed = message.jailed);
        message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
        message.tokens !== undefined && (obj.tokens = message.tokens);
        message.delegator_shares !== undefined && (obj.delegator_shares = message.delegator_shares);
        message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
        message.unbonding_height !== undefined && (obj.unbonding_height = (message.unbonding_height || BigInt(0)).toString());
        message.unbonding_time !== undefined && (obj.unbonding_time = message.unbonding_time.toISOString());
        message.commission !== undefined && (obj.commission = message.commission ? Commission.toJSON(message.commission) : undefined);
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
        message.consensus_pubkey = object.consensus_pubkey !== undefined && object.consensus_pubkey !== null ? GlobalDecoderRegistry.fromPartial(object.consensus_pubkey) : undefined;
        message.jailed = object.jailed ?? false;
        message.status = object.status ?? 0;
        message.tokens = object.tokens ?? "";
        message.delegator_shares = object.delegator_shares ?? "";
        message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
        message.unbonding_height = object.unbonding_height !== undefined && object.unbonding_height !== null ? BigInt(object.unbonding_height.toString()) : BigInt(0);
        message.unbonding_time = object.unbonding_time ?? undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? Commission.fromPartial(object.commission) : undefined;
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
            message.consensus_pubkey = encodePubkey(object.consensus_pubkey);
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
            message.description = Description.fromAmino(object.description);
        }
        if (object.unbonding_height !== undefined && object.unbonding_height !== null) {
            message.unbonding_height = BigInt(object.unbonding_height);
        }
        if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
            message.unbonding_time = fromTimestamp(Timestamp.fromAmino(object.unbonding_time));
        }
        if (object.commission !== undefined && object.commission !== null) {
            message.commission = Commission.fromAmino(object.commission);
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
        obj.consensus_pubkey = message.consensus_pubkey ? decodePubkey(message.consensus_pubkey) : undefined;
        obj.jailed = message.jailed;
        obj.status = message.status;
        obj.tokens = message.tokens;
        obj.delegator_shares = message.delegator_shares;
        obj.description = message.description ? Description.toAmino(message.description) : Description.fromPartial({});
        obj.unbonding_height = message.unbonding_height ? message.unbonding_height.toString() : undefined;
        obj.unbonding_time = message.unbonding_time ? Timestamp.toAmino(toTimestamp(message.unbonding_time)) : new Date();
        obj.commission = message.commission ? Commission.toAmino(message.commission) : Commission.fromPartial({});
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
        return Validator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Validator",
            value: Validator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Validator.decode(message.value);
    },
    toProto(message) {
        return Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Validator",
            value: Validator.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Validator.typeUrl, Validator);
GlobalDecoderRegistry.registerAminoProtoMapping(Validator.aminoType, Validator.typeUrl);
function createBaseValAddresses() {
    return {
        addresses: []
    };
}
export const ValAddresses = {
    typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
    aminoType: "cosmos-sdk/ValAddresses",
    is(o) {
        return o && (o.$typeUrl === ValAddresses.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ValAddresses.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === ValAddresses.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.addresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return ValAddresses.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValAddresses",
            value: ValAddresses.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValAddresses.decode(message.value);
    },
    toProto(message) {
        return ValAddresses.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
            value: ValAddresses.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ValAddresses.typeUrl, ValAddresses);
GlobalDecoderRegistry.registerAminoProtoMapping(ValAddresses.aminoType, ValAddresses.typeUrl);
function createBaseDVPair() {
    return {
        delegator_address: "",
        validator_address: ""
    };
}
export const DVPair = {
    typeUrl: "/cosmos.staking.v1beta1.DVPair",
    aminoType: "cosmos-sdk/DVPair",
    is(o) {
        return o && (o.$typeUrl === DVPair.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === DVPair.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === DVPair.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
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
        return DVPair.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVPair",
            value: DVPair.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DVPair.decode(message.value);
    },
    toProto(message) {
        return DVPair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVPair",
            value: DVPair.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(DVPair.typeUrl, DVPair);
GlobalDecoderRegistry.registerAminoProtoMapping(DVPair.aminoType, DVPair.typeUrl);
function createBaseDVPairs() {
    return {
        pairs: []
    };
}
export const DVPairs = {
    typeUrl: "/cosmos.staking.v1beta1.DVPairs",
    aminoType: "cosmos-sdk/DVPairs",
    is(o) {
        return o && (o.$typeUrl === DVPairs.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || DVPair.is(o.pairs[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === DVPairs.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || DVPair.isSDK(o.pairs[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === DVPairs.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || DVPair.isAmino(o.pairs[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pairs) {
            DVPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVPairs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairs.push(DVPair.decode(reader, reader.uint32()));
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
            pairs: Array.isArray(object?.pairs) ? object.pairs.map((e) => DVPair.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? DVPair.toJSON(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDVPairs();
        message.pairs = object.pairs?.map(e => DVPair.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDVPairs();
        message.pairs = object.pairs?.map(e => DVPair.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? DVPair.toAmino(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DVPairs.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVPairs",
            value: DVPairs.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DVPairs.decode(message.value);
    },
    toProto(message) {
        return DVPairs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVPairs",
            value: DVPairs.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(DVPairs.typeUrl, DVPairs);
GlobalDecoderRegistry.registerAminoProtoMapping(DVPairs.aminoType, DVPairs.typeUrl);
function createBaseDVVTriplet() {
    return {
        delegator_address: "",
        validator_src_address: "",
        validator_dst_address: ""
    };
}
export const DVVTriplet = {
    typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
    aminoType: "cosmos-sdk/DVVTriplet",
    is(o) {
        return o && (o.$typeUrl === DVVTriplet.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === DVVTriplet.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === DVVTriplet.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            validator_src_address: isSet(object.validator_src_address) ? String(object.validator_src_address) : "",
            validator_dst_address: isSet(object.validator_dst_address) ? String(object.validator_dst_address) : ""
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
        return DVVTriplet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVVTriplet",
            value: DVVTriplet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DVVTriplet.decode(message.value);
    },
    toProto(message) {
        return DVVTriplet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
            value: DVVTriplet.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(DVVTriplet.typeUrl, DVVTriplet);
GlobalDecoderRegistry.registerAminoProtoMapping(DVVTriplet.aminoType, DVVTriplet.typeUrl);
function createBaseDVVTriplets() {
    return {
        triplets: []
    };
}
export const DVVTriplets = {
    typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
    aminoType: "cosmos-sdk/DVVTriplets",
    is(o) {
        return o && (o.$typeUrl === DVVTriplets.typeUrl || Array.isArray(o.triplets) && (!o.triplets.length || DVVTriplet.is(o.triplets[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === DVVTriplets.typeUrl || Array.isArray(o.triplets) && (!o.triplets.length || DVVTriplet.isSDK(o.triplets[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === DVVTriplets.typeUrl || Array.isArray(o.triplets) && (!o.triplets.length || DVVTriplet.isAmino(o.triplets[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.triplets) {
            DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVVTriplets();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
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
            triplets: Array.isArray(object?.triplets) ? object.triplets.map((e) => DVVTriplet.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.triplets) {
            obj.triplets = message.triplets.map(e => e ? DVVTriplet.toJSON(e) : undefined);
        }
        else {
            obj.triplets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDVVTriplets();
        message.triplets = object.triplets?.map(e => DVVTriplet.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDVVTriplets();
        message.triplets = object.triplets?.map(e => DVVTriplet.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.triplets) {
            obj.triplets = message.triplets.map(e => e ? DVVTriplet.toAmino(e) : undefined);
        }
        else {
            obj.triplets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DVVTriplets.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVVTriplets",
            value: DVVTriplets.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DVVTriplets.decode(message.value);
    },
    toProto(message) {
        return DVVTriplets.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
            value: DVVTriplets.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(DVVTriplets.typeUrl, DVVTriplets);
GlobalDecoderRegistry.registerAminoProtoMapping(DVVTriplets.aminoType, DVVTriplets.typeUrl);
function createBaseDelegation() {
    return {
        delegator_address: "",
        validator_address: "",
        shares: ""
    };
}
export const Delegation = {
    typeUrl: "/cosmos.staking.v1beta1.Delegation",
    aminoType: "cosmos-sdk/Delegation",
    is(o) {
        return o && (o.$typeUrl === Delegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.shares === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Delegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.shares === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Delegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.shares === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.shares !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.shares, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.shares = Decimal.fromAtomics(reader.string(), 18).toString();
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            shares: isSet(object.shares) ? String(object.shares) : ""
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
        return Delegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Delegation",
            value: Delegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Delegation.decode(message.value);
    },
    toProto(message) {
        return Delegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Delegation",
            value: Delegation.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Delegation.typeUrl, Delegation);
GlobalDecoderRegistry.registerAminoProtoMapping(Delegation.aminoType, Delegation.typeUrl);
function createBaseUnbondingDelegation() {
    return {
        delegator_address: "",
        validator_address: "",
        entries: []
    };
}
export const UnbondingDelegation = {
    typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
    aminoType: "cosmos-sdk/UnbondingDelegation",
    is(o) {
        return o && (o.$typeUrl === UnbondingDelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Array.isArray(o.entries) && (!o.entries.length || UnbondingDelegationEntry.is(o.entries[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === UnbondingDelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Array.isArray(o.entries) && (!o.entries.length || UnbondingDelegationEntry.isSDK(o.entries[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === UnbondingDelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Array.isArray(o.entries) && (!o.entries.length || UnbondingDelegationEntry.isAmino(o.entries[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        for (const v of message.entries) {
            UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => UnbondingDelegationEntry.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? UnbondingDelegationEntry.toJSON(e) : undefined);
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
        message.entries = object.entries?.map(e => UnbondingDelegationEntry.fromPartial(e)) || [];
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
        message.entries = object.entries?.map(e => UnbondingDelegationEntry.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? UnbondingDelegationEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UnbondingDelegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UnbondingDelegation",
            value: UnbondingDelegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UnbondingDelegation.decode(message.value);
    },
    toProto(message) {
        return UnbondingDelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
            value: UnbondingDelegation.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(UnbondingDelegation.typeUrl, UnbondingDelegation);
GlobalDecoderRegistry.registerAminoProtoMapping(UnbondingDelegation.aminoType, UnbondingDelegation.typeUrl);
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
export const UnbondingDelegationEntry = {
    typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
    aminoType: "cosmos-sdk/UnbondingDelegationEntry",
    is(o) {
        return o && (o.$typeUrl === UnbondingDelegationEntry.typeUrl || typeof o.creation_height === "bigint" && Timestamp.is(o.completion_time) && typeof o.initial_balance === "string" && typeof o.balance === "string" && typeof o.unbonding_id === "bigint" && typeof o.unbonding_on_hold_ref_count === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === UnbondingDelegationEntry.typeUrl || typeof o.creation_height === "bigint" && Timestamp.isSDK(o.completion_time) && typeof o.initial_balance === "string" && typeof o.balance === "string" && typeof o.unbonding_id === "bigint" && typeof o.unbonding_on_hold_ref_count === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === UnbondingDelegationEntry.typeUrl || typeof o.creation_height === "bigint" && Timestamp.isAmino(o.completion_time) && typeof o.initial_balance === "string" && typeof o.balance === "string" && typeof o.unbonding_id === "bigint" && typeof o.unbonding_on_hold_ref_count === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.creation_height !== BigInt(0)) {
            writer.uint32(8).int64(message.creation_height);
        }
        if (message.completion_time !== undefined) {
            Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(18).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingDelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creation_height = reader.int64();
                    break;
                case 2:
                    message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            creation_height: isSet(object.creation_height) ? BigInt(object.creation_height.toString()) : BigInt(0),
            completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined,
            initial_balance: isSet(object.initial_balance) ? String(object.initial_balance) : "",
            balance: isSet(object.balance) ? String(object.balance) : "",
            unbonding_id: isSet(object.unbonding_id) ? BigInt(object.unbonding_id.toString()) : BigInt(0),
            unbonding_on_hold_ref_count: isSet(object.unbonding_on_hold_ref_count) ? BigInt(object.unbonding_on_hold_ref_count.toString()) : BigInt(0)
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
            message.completion_time = fromTimestamp(Timestamp.fromAmino(object.completion_time));
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
        obj.completion_time = message.completion_time ? Timestamp.toAmino(toTimestamp(message.completion_time)) : new Date();
        obj.initial_balance = message.initial_balance;
        obj.balance = message.balance;
        obj.unbonding_id = message.unbonding_id ? message.unbonding_id.toString() : undefined;
        obj.unbonding_on_hold_ref_count = message.unbonding_on_hold_ref_count ? message.unbonding_on_hold_ref_count.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UnbondingDelegationEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UnbondingDelegationEntry",
            value: UnbondingDelegationEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UnbondingDelegationEntry.decode(message.value);
    },
    toProto(message) {
        return UnbondingDelegationEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
            value: UnbondingDelegationEntry.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(UnbondingDelegationEntry.typeUrl, UnbondingDelegationEntry);
GlobalDecoderRegistry.registerAminoProtoMapping(UnbondingDelegationEntry.aminoType, UnbondingDelegationEntry.typeUrl);
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
export const RedelegationEntry = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
    aminoType: "cosmos-sdk/RedelegationEntry",
    is(o) {
        return o && (o.$typeUrl === RedelegationEntry.typeUrl || typeof o.creation_height === "bigint" && Timestamp.is(o.completion_time) && typeof o.initial_balance === "string" && typeof o.shares_dst === "string" && typeof o.unbonding_id === "bigint" && typeof o.unbonding_on_hold_ref_count === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === RedelegationEntry.typeUrl || typeof o.creation_height === "bigint" && Timestamp.isSDK(o.completion_time) && typeof o.initial_balance === "string" && typeof o.shares_dst === "string" && typeof o.unbonding_id === "bigint" && typeof o.unbonding_on_hold_ref_count === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === RedelegationEntry.typeUrl || typeof o.creation_height === "bigint" && Timestamp.isAmino(o.completion_time) && typeof o.initial_balance === "string" && typeof o.shares_dst === "string" && typeof o.unbonding_id === "bigint" && typeof o.unbonding_on_hold_ref_count === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.creation_height !== BigInt(0)) {
            writer.uint32(8).int64(message.creation_height);
        }
        if (message.completion_time !== undefined) {
            Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(18).fork()).ldelim();
        }
        if (message.initial_balance !== "") {
            writer.uint32(26).string(message.initial_balance);
        }
        if (message.shares_dst !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.shares_dst, 18).atomics);
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creation_height = reader.int64();
                    break;
                case 2:
                    message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initial_balance = reader.string();
                    break;
                case 4:
                    message.shares_dst = Decimal.fromAtomics(reader.string(), 18).toString();
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
            creation_height: isSet(object.creation_height) ? BigInt(object.creation_height.toString()) : BigInt(0),
            completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined,
            initial_balance: isSet(object.initial_balance) ? String(object.initial_balance) : "",
            shares_dst: isSet(object.shares_dst) ? String(object.shares_dst) : "",
            unbonding_id: isSet(object.unbonding_id) ? BigInt(object.unbonding_id.toString()) : BigInt(0),
            unbonding_on_hold_ref_count: isSet(object.unbonding_on_hold_ref_count) ? BigInt(object.unbonding_on_hold_ref_count.toString()) : BigInt(0)
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
            message.completion_time = fromTimestamp(Timestamp.fromAmino(object.completion_time));
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
        obj.completion_time = message.completion_time ? Timestamp.toAmino(toTimestamp(message.completion_time)) : new Date();
        obj.initial_balance = message.initial_balance;
        obj.shares_dst = message.shares_dst;
        obj.unbonding_id = message.unbonding_id ? message.unbonding_id.toString() : undefined;
        obj.unbonding_on_hold_ref_count = message.unbonding_on_hold_ref_count ? message.unbonding_on_hold_ref_count.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RedelegationEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationEntry",
            value: RedelegationEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RedelegationEntry.decode(message.value);
    },
    toProto(message) {
        return RedelegationEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
            value: RedelegationEntry.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(RedelegationEntry.typeUrl, RedelegationEntry);
GlobalDecoderRegistry.registerAminoProtoMapping(RedelegationEntry.aminoType, RedelegationEntry.typeUrl);
function createBaseRedelegation() {
    return {
        delegator_address: "",
        validator_src_address: "",
        validator_dst_address: "",
        entries: []
    };
}
export const Redelegation = {
    typeUrl: "/cosmos.staking.v1beta1.Redelegation",
    aminoType: "cosmos-sdk/Redelegation",
    is(o) {
        return o && (o.$typeUrl === Redelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string" && Array.isArray(o.entries) && (!o.entries.length || RedelegationEntry.is(o.entries[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Redelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string" && Array.isArray(o.entries) && (!o.entries.length || RedelegationEntry.isSDK(o.entries[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === Redelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string" && Array.isArray(o.entries) && (!o.entries.length || RedelegationEntry.isAmino(o.entries[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
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
            RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            validator_src_address: isSet(object.validator_src_address) ? String(object.validator_src_address) : "",
            validator_dst_address: isSet(object.validator_dst_address) ? String(object.validator_dst_address) : "",
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => RedelegationEntry.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_src_address !== undefined && (obj.validator_src_address = message.validator_src_address);
        message.validator_dst_address !== undefined && (obj.validator_dst_address = message.validator_dst_address);
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? RedelegationEntry.toJSON(e) : undefined);
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
        message.entries = object.entries?.map(e => RedelegationEntry.fromPartial(e)) || [];
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
        message.entries = object.entries?.map(e => RedelegationEntry.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_src_address = message.validator_src_address;
        obj.validator_dst_address = message.validator_dst_address;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? RedelegationEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Redelegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Redelegation",
            value: Redelegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Redelegation.decode(message.value);
    },
    toProto(message) {
        return Redelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Redelegation",
            value: Redelegation.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Redelegation.typeUrl, Redelegation);
GlobalDecoderRegistry.registerAminoProtoMapping(Redelegation.aminoType, Redelegation.typeUrl);
function createBaseParams() {
    return {
        unbonding_time: Duration.fromPartial({}),
        max_validators: 0,
        max_entries: 0,
        historical_entries: 0,
        bond_denom: "",
        min_commission_rate: ""
    };
}
export const Params = {
    typeUrl: "/cosmos.staking.v1beta1.Params",
    aminoType: "cosmos-sdk/x/staking/Params",
    is(o) {
        return o && (o.$typeUrl === Params.typeUrl || Duration.is(o.unbonding_time) && typeof o.max_validators === "number" && typeof o.max_entries === "number" && typeof o.historical_entries === "number" && typeof o.bond_denom === "string" && typeof o.min_commission_rate === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Params.typeUrl || Duration.isSDK(o.unbonding_time) && typeof o.max_validators === "number" && typeof o.max_entries === "number" && typeof o.historical_entries === "number" && typeof o.bond_denom === "string" && typeof o.min_commission_rate === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Params.typeUrl || Duration.isAmino(o.unbonding_time) && typeof o.max_validators === "number" && typeof o.max_entries === "number" && typeof o.historical_entries === "number" && typeof o.bond_denom === "string" && typeof o.min_commission_rate === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.unbonding_time !== undefined) {
            Duration.encode(message.unbonding_time, writer.uint32(10).fork()).ldelim();
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
            writer.uint32(50).string(Decimal.fromUserInput(message.min_commission_rate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbonding_time = Duration.decode(reader, reader.uint32());
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
                    message.min_commission_rate = Decimal.fromAtomics(reader.string(), 18).toString();
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
            unbonding_time: isSet(object.unbonding_time) ? Duration.fromJSON(object.unbonding_time) : undefined,
            max_validators: isSet(object.max_validators) ? Number(object.max_validators) : 0,
            max_entries: isSet(object.max_entries) ? Number(object.max_entries) : 0,
            historical_entries: isSet(object.historical_entries) ? Number(object.historical_entries) : 0,
            bond_denom: isSet(object.bond_denom) ? String(object.bond_denom) : "",
            min_commission_rate: isSet(object.min_commission_rate) ? String(object.min_commission_rate) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.unbonding_time !== undefined && (obj.unbonding_time = message.unbonding_time ? Duration.toJSON(message.unbonding_time) : undefined);
        message.max_validators !== undefined && (obj.max_validators = Math.round(message.max_validators));
        message.max_entries !== undefined && (obj.max_entries = Math.round(message.max_entries));
        message.historical_entries !== undefined && (obj.historical_entries = Math.round(message.historical_entries));
        message.bond_denom !== undefined && (obj.bond_denom = message.bond_denom);
        message.min_commission_rate !== undefined && (obj.min_commission_rate = message.min_commission_rate);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.unbonding_time = object.unbonding_time !== undefined && object.unbonding_time !== null ? Duration.fromPartial(object.unbonding_time) : undefined;
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
            message.unbonding_time = Duration.fromAmino(object.unbonding_time);
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
        obj.unbonding_time = message.unbonding_time ? Duration.toAmino(message.unbonding_time) : Duration.fromPartial({});
        obj.max_validators = message.max_validators;
        obj.max_entries = message.max_entries;
        obj.historical_entries = message.historical_entries;
        obj.bond_denom = message.bond_denom;
        obj.min_commission_rate = message.min_commission_rate ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/x/staking/Params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseDelegationResponse() {
    return {
        delegation: Delegation.fromPartial({}),
        balance: Coin.fromPartial({})
    };
}
export const DelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
    aminoType: "cosmos-sdk/DelegationResponse",
    is(o) {
        return o && (o.$typeUrl === DelegationResponse.typeUrl || Delegation.is(o.delegation) && Coin.is(o.balance));
    },
    isSDK(o) {
        return o && (o.$typeUrl === DelegationResponse.typeUrl || Delegation.isSDK(o.delegation) && Coin.isSDK(o.balance));
    },
    isAmino(o) {
        return o && (o.$typeUrl === DelegationResponse.typeUrl || Delegation.isAmino(o.delegation) && Coin.isAmino(o.balance));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegation !== undefined) {
            Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation = Delegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balance = Coin.decode(reader, reader.uint32());
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
            delegation: isSet(object.delegation) ? Delegation.fromJSON(object.delegation) : undefined,
            balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegation !== undefined && (obj.delegation = message.delegation ? Delegation.toJSON(message.delegation) : undefined);
        message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegationResponse();
        message.delegation = object.delegation !== undefined && object.delegation !== null ? Delegation.fromPartial(object.delegation) : undefined;
        message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDelegationResponse();
        if (object.delegation !== undefined && object.delegation !== null) {
            message.delegation = Delegation.fromAmino(object.delegation);
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = Coin.fromAmino(object.balance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegation = message.delegation ? Delegation.toAmino(message.delegation) : Delegation.fromPartial({});
        obj.balance = message.balance ? Coin.toAmino(message.balance) : Coin.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return DelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegationResponse",
            value: DelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DelegationResponse.decode(message.value);
    },
    toProto(message) {
        return DelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
            value: DelegationResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(DelegationResponse.typeUrl, DelegationResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(DelegationResponse.aminoType, DelegationResponse.typeUrl);
function createBaseRedelegationEntryResponse() {
    return {
        redelegation_entry: RedelegationEntry.fromPartial({}),
        balance: ""
    };
}
export const RedelegationEntryResponse = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
    aminoType: "cosmos-sdk/RedelegationEntryResponse",
    is(o) {
        return o && (o.$typeUrl === RedelegationEntryResponse.typeUrl || RedelegationEntry.is(o.redelegation_entry) && typeof o.balance === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === RedelegationEntryResponse.typeUrl || RedelegationEntry.isSDK(o.redelegation_entry) && typeof o.balance === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === RedelegationEntryResponse.typeUrl || RedelegationEntry.isAmino(o.redelegation_entry) && typeof o.balance === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.redelegation_entry !== undefined) {
            RedelegationEntry.encode(message.redelegation_entry, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation_entry = RedelegationEntry.decode(reader, reader.uint32());
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
            redelegation_entry: isSet(object.redelegation_entry) ? RedelegationEntry.fromJSON(object.redelegation_entry) : undefined,
            balance: isSet(object.balance) ? String(object.balance) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.redelegation_entry !== undefined && (obj.redelegation_entry = message.redelegation_entry ? RedelegationEntry.toJSON(message.redelegation_entry) : undefined);
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegationEntryResponse();
        message.redelegation_entry = object.redelegation_entry !== undefined && object.redelegation_entry !== null ? RedelegationEntry.fromPartial(object.redelegation_entry) : undefined;
        message.balance = object.balance ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRedelegationEntryResponse();
        if (object.redelegation_entry !== undefined && object.redelegation_entry !== null) {
            message.redelegation_entry = RedelegationEntry.fromAmino(object.redelegation_entry);
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.redelegation_entry = message.redelegation_entry ? RedelegationEntry.toAmino(message.redelegation_entry) : RedelegationEntry.fromPartial({});
        obj.balance = message.balance;
        return obj;
    },
    fromAminoMsg(object) {
        return RedelegationEntryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationEntryResponse",
            value: RedelegationEntryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RedelegationEntryResponse.decode(message.value);
    },
    toProto(message) {
        return RedelegationEntryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
            value: RedelegationEntryResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(RedelegationEntryResponse.typeUrl, RedelegationEntryResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(RedelegationEntryResponse.aminoType, RedelegationEntryResponse.typeUrl);
function createBaseRedelegationResponse() {
    return {
        redelegation: Redelegation.fromPartial({}),
        entries: []
    };
}
export const RedelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
    aminoType: "cosmos-sdk/RedelegationResponse",
    is(o) {
        return o && (o.$typeUrl === RedelegationResponse.typeUrl || Redelegation.is(o.redelegation) && Array.isArray(o.entries) && (!o.entries.length || RedelegationEntryResponse.is(o.entries[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === RedelegationResponse.typeUrl || Redelegation.isSDK(o.redelegation) && Array.isArray(o.entries) && (!o.entries.length || RedelegationEntryResponse.isSDK(o.entries[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === RedelegationResponse.typeUrl || Redelegation.isAmino(o.redelegation) && Array.isArray(o.entries) && (!o.entries.length || RedelegationEntryResponse.isAmino(o.entries[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.redelegation !== undefined) {
            Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation = Redelegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
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
            redelegation: isSet(object.redelegation) ? Redelegation.fromJSON(object.redelegation) : undefined,
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => RedelegationEntryResponse.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.redelegation !== undefined && (obj.redelegation = message.redelegation ? Redelegation.toJSON(message.redelegation) : undefined);
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? RedelegationEntryResponse.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegationResponse();
        message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? Redelegation.fromPartial(object.redelegation) : undefined;
        message.entries = object.entries?.map(e => RedelegationEntryResponse.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRedelegationResponse();
        if (object.redelegation !== undefined && object.redelegation !== null) {
            message.redelegation = Redelegation.fromAmino(object.redelegation);
        }
        message.entries = object.entries?.map(e => RedelegationEntryResponse.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.redelegation = message.redelegation ? Redelegation.toAmino(message.redelegation) : Redelegation.fromPartial({});
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? RedelegationEntryResponse.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return RedelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationResponse",
            value: RedelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RedelegationResponse.decode(message.value);
    },
    toProto(message) {
        return RedelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
            value: RedelegationResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(RedelegationResponse.typeUrl, RedelegationResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(RedelegationResponse.aminoType, RedelegationResponse.typeUrl);
function createBasePool() {
    return {
        not_bonded_tokens: "",
        bonded_tokens: ""
    };
}
export const Pool = {
    typeUrl: "/cosmos.staking.v1beta1.Pool",
    aminoType: "cosmos-sdk/Pool",
    is(o) {
        return o && (o.$typeUrl === Pool.typeUrl || typeof o.not_bonded_tokens === "string" && typeof o.bonded_tokens === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Pool.typeUrl || typeof o.not_bonded_tokens === "string" && typeof o.bonded_tokens === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Pool.typeUrl || typeof o.not_bonded_tokens === "string" && typeof o.bonded_tokens === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.not_bonded_tokens !== "") {
            writer.uint32(10).string(message.not_bonded_tokens);
        }
        if (message.bonded_tokens !== "") {
            writer.uint32(18).string(message.bonded_tokens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            not_bonded_tokens: isSet(object.not_bonded_tokens) ? String(object.not_bonded_tokens) : "",
            bonded_tokens: isSet(object.bonded_tokens) ? String(object.bonded_tokens) : ""
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
        return Pool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Pool",
            value: Pool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Pool.decode(message.value);
    },
    toProto(message) {
        return Pool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Pool",
            value: Pool.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Pool.typeUrl, Pool);
GlobalDecoderRegistry.registerAminoProtoMapping(Pool.aminoType, Pool.typeUrl);
function createBaseValidatorUpdates() {
    return {
        updates: []
    };
}
export const ValidatorUpdates = {
    typeUrl: "/cosmos.staking.v1beta1.ValidatorUpdates",
    aminoType: "cosmos-sdk/ValidatorUpdates",
    is(o) {
        return o && (o.$typeUrl === ValidatorUpdates.typeUrl || Array.isArray(o.updates) && (!o.updates.length || ValidatorUpdate.is(o.updates[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ValidatorUpdates.typeUrl || Array.isArray(o.updates) && (!o.updates.length || ValidatorUpdate.isSDK(o.updates[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === ValidatorUpdates.typeUrl || Array.isArray(o.updates) && (!o.updates.length || ValidatorUpdate.isAmino(o.updates[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.updates) {
            ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorUpdates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.updates.push(ValidatorUpdate.decode(reader, reader.uint32()));
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
            updates: Array.isArray(object?.updates) ? object.updates.map((e) => ValidatorUpdate.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.updates) {
            obj.updates = message.updates.map(e => e ? ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.updates = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorUpdates();
        message.updates = object.updates?.map(e => ValidatorUpdate.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorUpdates();
        message.updates = object.updates?.map(e => ValidatorUpdate.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.updates) {
            obj.updates = message.updates.map(e => e ? ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.updates = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorUpdates.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorUpdates",
            value: ValidatorUpdates.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorUpdates.decode(message.value);
    },
    toProto(message) {
        return ValidatorUpdates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.ValidatorUpdates",
            value: ValidatorUpdates.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ValidatorUpdates.typeUrl, ValidatorUpdates);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorUpdates.aminoType, ValidatorUpdates.typeUrl);
//# sourceMappingURL=staking.js.map