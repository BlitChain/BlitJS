//@ts-nocheck
import { PageRequest, PageResponse } from "../../query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { BlockID } from "../../../../tendermint/types/types";
import { Block as Block1 } from "../../../../tendermint/types/block";
import { Block as Block2 } from "./types";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "cosmos.base.tendermint.v1beta1";
function createBaseGetValidatorSetByHeightRequest() {
    return {
        height: BigInt(0),
        pagination: undefined
    };
}
export const GetValidatorSetByHeightRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
    aminoType: "cosmos-sdk/GetValidatorSetByHeightRequest",
    is(o) {
        return o && (o.$typeUrl === GetValidatorSetByHeightRequest.typeUrl || typeof o.height === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === GetValidatorSetByHeightRequest.typeUrl || typeof o.height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === GetValidatorSetByHeightRequest.typeUrl || typeof o.height === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorSetByHeightRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetValidatorSetByHeightRequest();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetValidatorSetByHeightRequest();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetValidatorSetByHeightRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetValidatorSetByHeightRequest",
            value: GetValidatorSetByHeightRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetValidatorSetByHeightRequest.decode(message.value);
    },
    toProto(message) {
        return GetValidatorSetByHeightRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
            value: GetValidatorSetByHeightRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GetValidatorSetByHeightRequest.typeUrl, GetValidatorSetByHeightRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetValidatorSetByHeightRequest.aminoType, GetValidatorSetByHeightRequest.typeUrl);
function createBaseGetValidatorSetByHeightResponse() {
    return {
        block_height: BigInt(0),
        validators: [],
        pagination: undefined
    };
}
export const GetValidatorSetByHeightResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
    aminoType: "cosmos-sdk/GetValidatorSetByHeightResponse",
    is(o) {
        return o && (o.$typeUrl === GetValidatorSetByHeightResponse.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.validators) && (!o.validators.length || Validator.is(o.validators[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === GetValidatorSetByHeightResponse.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.validators) && (!o.validators.length || Validator.isSDK(o.validators[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === GetValidatorSetByHeightResponse.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.validators) && (!o.validators.length || Validator.isAmino(o.validators[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.block_height !== BigInt(0)) {
            writer.uint32(8).int64(message.block_height);
        }
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorSetByHeightResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_height = reader.int64();
                    break;
                case 2:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            block_height: isSet(object.block_height) ? BigInt(object.block_height.toString()) : BigInt(0),
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_height !== undefined && (obj.block_height = (message.block_height || BigInt(0)).toString());
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetValidatorSetByHeightResponse();
        message.block_height = object.block_height !== undefined && object.block_height !== null ? BigInt(object.block_height.toString()) : BigInt(0);
        message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetValidatorSetByHeightResponse();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.block_height = BigInt(object.block_height);
        }
        message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_height = message.block_height ? message.block_height.toString() : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetValidatorSetByHeightResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetValidatorSetByHeightResponse",
            value: GetValidatorSetByHeightResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetValidatorSetByHeightResponse.decode(message.value);
    },
    toProto(message) {
        return GetValidatorSetByHeightResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
            value: GetValidatorSetByHeightResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GetValidatorSetByHeightResponse.typeUrl, GetValidatorSetByHeightResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetValidatorSetByHeightResponse.aminoType, GetValidatorSetByHeightResponse.typeUrl);
function createBaseGetLatestValidatorSetRequest() {
    return {
        pagination: undefined
    };
}
export const GetLatestValidatorSetRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
    aminoType: "cosmos-sdk/GetLatestValidatorSetRequest",
    is(o) {
        return o && o.$typeUrl === GetLatestValidatorSetRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === GetLatestValidatorSetRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === GetLatestValidatorSetRequest.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestValidatorSetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetLatestValidatorSetRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetLatestValidatorSetRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetLatestValidatorSetRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestValidatorSetRequest",
            value: GetLatestValidatorSetRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetLatestValidatorSetRequest.decode(message.value);
    },
    toProto(message) {
        return GetLatestValidatorSetRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
            value: GetLatestValidatorSetRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GetLatestValidatorSetRequest.typeUrl, GetLatestValidatorSetRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetLatestValidatorSetRequest.aminoType, GetLatestValidatorSetRequest.typeUrl);
function createBaseGetLatestValidatorSetResponse() {
    return {
        block_height: BigInt(0),
        validators: [],
        pagination: undefined
    };
}
export const GetLatestValidatorSetResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
    aminoType: "cosmos-sdk/GetLatestValidatorSetResponse",
    is(o) {
        return o && (o.$typeUrl === GetLatestValidatorSetResponse.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.validators) && (!o.validators.length || Validator.is(o.validators[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === GetLatestValidatorSetResponse.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.validators) && (!o.validators.length || Validator.isSDK(o.validators[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === GetLatestValidatorSetResponse.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.validators) && (!o.validators.length || Validator.isAmino(o.validators[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.block_height !== BigInt(0)) {
            writer.uint32(8).int64(message.block_height);
        }
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestValidatorSetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_height = reader.int64();
                    break;
                case 2:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            block_height: isSet(object.block_height) ? BigInt(object.block_height.toString()) : BigInt(0),
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_height !== undefined && (obj.block_height = (message.block_height || BigInt(0)).toString());
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetLatestValidatorSetResponse();
        message.block_height = object.block_height !== undefined && object.block_height !== null ? BigInt(object.block_height.toString()) : BigInt(0);
        message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetLatestValidatorSetResponse();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.block_height = BigInt(object.block_height);
        }
        message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_height = message.block_height ? message.block_height.toString() : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetLatestValidatorSetResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestValidatorSetResponse",
            value: GetLatestValidatorSetResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetLatestValidatorSetResponse.decode(message.value);
    },
    toProto(message) {
        return GetLatestValidatorSetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
            value: GetLatestValidatorSetResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GetLatestValidatorSetResponse.typeUrl, GetLatestValidatorSetResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetLatestValidatorSetResponse.aminoType, GetLatestValidatorSetResponse.typeUrl);
function createBaseValidator() {
    return {
        address: "",
        pub_key: undefined,
        voting_power: BigInt(0),
        proposer_priority: BigInt(0)
    };
}
export const Validator = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
    aminoType: "cosmos-sdk/Validator",
    is(o) {
        return o && (o.$typeUrl === Validator.typeUrl || typeof o.address === "string" && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Validator.typeUrl || typeof o.address === "string" && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Validator.typeUrl || typeof o.address === "string" && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pub_key !== undefined) {
            Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
        }
        if (message.voting_power !== BigInt(0)) {
            writer.uint32(24).int64(message.voting_power);
        }
        if (message.proposer_priority !== BigInt(0)) {
            writer.uint32(32).int64(message.proposer_priority);
        }
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
                    message.address = reader.string();
                    break;
                case 2:
                    message.pub_key = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.voting_power = reader.int64();
                    break;
                case 4:
                    message.proposer_priority = reader.int64();
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
            address: isSet(object.address) ? String(object.address) : "",
            pub_key: isSet(object.pub_key) ? Any.fromJSON(object.pub_key) : undefined,
            voting_power: isSet(object.voting_power) ? BigInt(object.voting_power.toString()) : BigInt(0),
            proposer_priority: isSet(object.proposer_priority) ? BigInt(object.proposer_priority.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? Any.toJSON(message.pub_key) : undefined);
        message.voting_power !== undefined && (obj.voting_power = (message.voting_power || BigInt(0)).toString());
        message.proposer_priority !== undefined && (obj.proposer_priority = (message.proposer_priority || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? "";
        message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? Any.fromPartial(object.pub_key) : undefined;
        message.voting_power = object.voting_power !== undefined && object.voting_power !== null ? BigInt(object.voting_power.toString()) : BigInt(0);
        message.proposer_priority = object.proposer_priority !== undefined && object.proposer_priority !== null ? BigInt(object.proposer_priority.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidator();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pub_key = Any.fromAmino(object.pub_key);
        }
        if (object.voting_power !== undefined && object.voting_power !== null) {
            message.voting_power = BigInt(object.voting_power);
        }
        if (object.proposer_priority !== undefined && object.proposer_priority !== null) {
            message.proposer_priority = BigInt(object.proposer_priority);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pub_key = message.pub_key ? Any.toAmino(message.pub_key) : undefined;
        obj.voting_power = message.voting_power ? message.voting_power.toString() : undefined;
        obj.proposer_priority = message.proposer_priority ? message.proposer_priority.toString() : undefined;
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
            typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
            value: Validator.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Validator.typeUrl, Validator);
GlobalDecoderRegistry.registerAminoProtoMapping(Validator.aminoType, Validator.typeUrl);
function createBaseGetBlockByHeightRequest() {
    return {
        height: BigInt(0)
    };
}
export const GetBlockByHeightRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
    aminoType: "cosmos-sdk/GetBlockByHeightRequest",
    is(o) {
        return o && (o.$typeUrl === GetBlockByHeightRequest.typeUrl || typeof o.height === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === GetBlockByHeightRequest.typeUrl || typeof o.height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === GetBlockByHeightRequest.typeUrl || typeof o.height === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockByHeightRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
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
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetBlockByHeightRequest();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetBlockByHeightRequest();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetBlockByHeightRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetBlockByHeightRequest",
            value: GetBlockByHeightRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetBlockByHeightRequest.decode(message.value);
    },
    toProto(message) {
        return GetBlockByHeightRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
            value: GetBlockByHeightRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GetBlockByHeightRequest.typeUrl, GetBlockByHeightRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetBlockByHeightRequest.aminoType, GetBlockByHeightRequest.typeUrl);
function createBaseGetBlockByHeightResponse() {
    return {
        block_id: undefined,
        block: undefined,
        sdk_block: undefined
    };
}
export const GetBlockByHeightResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
    aminoType: "cosmos-sdk/GetBlockByHeightResponse",
    is(o) {
        return o && o.$typeUrl === GetBlockByHeightResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === GetBlockByHeightResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === GetBlockByHeightResponse.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.block_id !== undefined) {
            BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            Block1.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        if (message.sdk_block !== undefined) {
            Block2.encode(message.sdk_block, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockByHeightResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id = BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = Block1.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sdk_block = Block2.decode(reader, reader.uint32());
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
            block_id: isSet(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
            block: isSet(object.block) ? Block1.fromJSON(object.block) : undefined,
            sdk_block: isSet(object.sdk_block) ? Block2.fromJSON(object.sdk_block) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_id !== undefined && (obj.block_id = message.block_id ? BlockID.toJSON(message.block_id) : undefined);
        message.block !== undefined && (obj.block = message.block ? Block1.toJSON(message.block) : undefined);
        message.sdk_block !== undefined && (obj.sdk_block = message.sdk_block ? Block2.toJSON(message.sdk_block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetBlockByHeightResponse();
        message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
        message.block = object.block !== undefined && object.block !== null ? Block1.fromPartial(object.block) : undefined;
        message.sdk_block = object.sdk_block !== undefined && object.sdk_block !== null ? Block2.fromPartial(object.sdk_block) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetBlockByHeightResponse();
        if (object.block_id !== undefined && object.block_id !== null) {
            message.block_id = BlockID.fromAmino(object.block_id);
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = Block1.fromAmino(object.block);
        }
        if (object.sdk_block !== undefined && object.sdk_block !== null) {
            message.sdk_block = Block2.fromAmino(object.sdk_block);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.block_id ? BlockID.toAmino(message.block_id) : undefined;
        obj.block = message.block ? Block1.toAmino(message.block) : undefined;
        obj.sdk_block = message.sdk_block ? Block2.toAmino(message.sdk_block) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetBlockByHeightResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetBlockByHeightResponse",
            value: GetBlockByHeightResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetBlockByHeightResponse.decode(message.value);
    },
    toProto(message) {
        return GetBlockByHeightResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
            value: GetBlockByHeightResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GetBlockByHeightResponse.typeUrl, GetBlockByHeightResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetBlockByHeightResponse.aminoType, GetBlockByHeightResponse.typeUrl);
function createBaseGetLatestBlockRequest() {
    return {};
}
export const GetLatestBlockRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
    aminoType: "cosmos-sdk/GetLatestBlockRequest",
    is(o) {
        return o && o.$typeUrl === GetLatestBlockRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === GetLatestBlockRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === GetLatestBlockRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestBlockRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseGetLatestBlockRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseGetLatestBlockRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return GetLatestBlockRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestBlockRequest",
            value: GetLatestBlockRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetLatestBlockRequest.decode(message.value);
    },
    toProto(message) {
        return GetLatestBlockRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
            value: GetLatestBlockRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GetLatestBlockRequest.typeUrl, GetLatestBlockRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetLatestBlockRequest.aminoType, GetLatestBlockRequest.typeUrl);
function createBaseGetLatestBlockResponse() {
    return {
        block_id: undefined,
        block: undefined,
        sdk_block: undefined
    };
}
export const GetLatestBlockResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
    aminoType: "cosmos-sdk/GetLatestBlockResponse",
    is(o) {
        return o && o.$typeUrl === GetLatestBlockResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === GetLatestBlockResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === GetLatestBlockResponse.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.block_id !== undefined) {
            BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            Block1.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        if (message.sdk_block !== undefined) {
            Block2.encode(message.sdk_block, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id = BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = Block1.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sdk_block = Block2.decode(reader, reader.uint32());
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
            block_id: isSet(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
            block: isSet(object.block) ? Block1.fromJSON(object.block) : undefined,
            sdk_block: isSet(object.sdk_block) ? Block2.fromJSON(object.sdk_block) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_id !== undefined && (obj.block_id = message.block_id ? BlockID.toJSON(message.block_id) : undefined);
        message.block !== undefined && (obj.block = message.block ? Block1.toJSON(message.block) : undefined);
        message.sdk_block !== undefined && (obj.sdk_block = message.sdk_block ? Block2.toJSON(message.sdk_block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetLatestBlockResponse();
        message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
        message.block = object.block !== undefined && object.block !== null ? Block1.fromPartial(object.block) : undefined;
        message.sdk_block = object.sdk_block !== undefined && object.sdk_block !== null ? Block2.fromPartial(object.sdk_block) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetLatestBlockResponse();
        if (object.block_id !== undefined && object.block_id !== null) {
            message.block_id = BlockID.fromAmino(object.block_id);
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = Block1.fromAmino(object.block);
        }
        if (object.sdk_block !== undefined && object.sdk_block !== null) {
            message.sdk_block = Block2.fromAmino(object.sdk_block);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.block_id ? BlockID.toAmino(message.block_id) : undefined;
        obj.block = message.block ? Block1.toAmino(message.block) : undefined;
        obj.sdk_block = message.sdk_block ? Block2.toAmino(message.sdk_block) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetLatestBlockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetLatestBlockResponse",
            value: GetLatestBlockResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetLatestBlockResponse.decode(message.value);
    },
    toProto(message) {
        return GetLatestBlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
            value: GetLatestBlockResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GetLatestBlockResponse.typeUrl, GetLatestBlockResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetLatestBlockResponse.aminoType, GetLatestBlockResponse.typeUrl);
function createBaseGetSyncingRequest() {
    return {};
}
export const GetSyncingRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
    aminoType: "cosmos-sdk/GetSyncingRequest",
    is(o) {
        return o && o.$typeUrl === GetSyncingRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === GetSyncingRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === GetSyncingRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSyncingRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseGetSyncingRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseGetSyncingRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return GetSyncingRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetSyncingRequest",
            value: GetSyncingRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetSyncingRequest.decode(message.value);
    },
    toProto(message) {
        return GetSyncingRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
            value: GetSyncingRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GetSyncingRequest.typeUrl, GetSyncingRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetSyncingRequest.aminoType, GetSyncingRequest.typeUrl);
function createBaseGetSyncingResponse() {
    return {
        syncing: false
    };
}
export const GetSyncingResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
    aminoType: "cosmos-sdk/GetSyncingResponse",
    is(o) {
        return o && (o.$typeUrl === GetSyncingResponse.typeUrl || typeof o.syncing === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === GetSyncingResponse.typeUrl || typeof o.syncing === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === GetSyncingResponse.typeUrl || typeof o.syncing === "boolean");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.syncing === true) {
            writer.uint32(8).bool(message.syncing);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSyncingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.syncing = reader.bool();
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
            syncing: isSet(object.syncing) ? Boolean(object.syncing) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.syncing !== undefined && (obj.syncing = message.syncing);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetSyncingResponse();
        message.syncing = object.syncing ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetSyncingResponse();
        if (object.syncing !== undefined && object.syncing !== null) {
            message.syncing = object.syncing;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.syncing = message.syncing;
        return obj;
    },
    fromAminoMsg(object) {
        return GetSyncingResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetSyncingResponse",
            value: GetSyncingResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetSyncingResponse.decode(message.value);
    },
    toProto(message) {
        return GetSyncingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
            value: GetSyncingResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GetSyncingResponse.typeUrl, GetSyncingResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetSyncingResponse.aminoType, GetSyncingResponse.typeUrl);
function createBaseGetNodeInfoRequest() {
    return {};
}
export const GetNodeInfoRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
    aminoType: "cosmos-sdk/GetNodeInfoRequest",
    is(o) {
        return o && o.$typeUrl === GetNodeInfoRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === GetNodeInfoRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === GetNodeInfoRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNodeInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseGetNodeInfoRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseGetNodeInfoRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return GetNodeInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetNodeInfoRequest",
            value: GetNodeInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetNodeInfoRequest.decode(message.value);
    },
    toProto(message) {
        return GetNodeInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
            value: GetNodeInfoRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GetNodeInfoRequest.typeUrl, GetNodeInfoRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetNodeInfoRequest.aminoType, GetNodeInfoRequest.typeUrl);
function createBaseGetNodeInfoResponse() {
    return {
        default_node_info: undefined,
        application_version: undefined
    };
}
export const GetNodeInfoResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
    aminoType: "cosmos-sdk/GetNodeInfoResponse",
    is(o) {
        return o && o.$typeUrl === GetNodeInfoResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === GetNodeInfoResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === GetNodeInfoResponse.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.default_node_info !== undefined) {
            DefaultNodeInfo.encode(message.default_node_info, writer.uint32(10).fork()).ldelim();
        }
        if (message.application_version !== undefined) {
            VersionInfo.encode(message.application_version, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNodeInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.default_node_info = DefaultNodeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.application_version = VersionInfo.decode(reader, reader.uint32());
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
            default_node_info: isSet(object.default_node_info) ? DefaultNodeInfo.fromJSON(object.default_node_info) : undefined,
            application_version: isSet(object.application_version) ? VersionInfo.fromJSON(object.application_version) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.default_node_info !== undefined && (obj.default_node_info = message.default_node_info ? DefaultNodeInfo.toJSON(message.default_node_info) : undefined);
        message.application_version !== undefined && (obj.application_version = message.application_version ? VersionInfo.toJSON(message.application_version) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetNodeInfoResponse();
        message.default_node_info = object.default_node_info !== undefined && object.default_node_info !== null ? DefaultNodeInfo.fromPartial(object.default_node_info) : undefined;
        message.application_version = object.application_version !== undefined && object.application_version !== null ? VersionInfo.fromPartial(object.application_version) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetNodeInfoResponse();
        if (object.default_node_info !== undefined && object.default_node_info !== null) {
            message.default_node_info = DefaultNodeInfo.fromAmino(object.default_node_info);
        }
        if (object.application_version !== undefined && object.application_version !== null) {
            message.application_version = VersionInfo.fromAmino(object.application_version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.default_node_info = message.default_node_info ? DefaultNodeInfo.toAmino(message.default_node_info) : undefined;
        obj.application_version = message.application_version ? VersionInfo.toAmino(message.application_version) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetNodeInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetNodeInfoResponse",
            value: GetNodeInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetNodeInfoResponse.decode(message.value);
    },
    toProto(message) {
        return GetNodeInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
            value: GetNodeInfoResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GetNodeInfoResponse.typeUrl, GetNodeInfoResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetNodeInfoResponse.aminoType, GetNodeInfoResponse.typeUrl);
function createBaseVersionInfo() {
    return {
        name: "",
        app_name: "",
        version: "",
        git_commit: "",
        build_tags: "",
        go_version: "",
        build_deps: [],
        cosmos_sdk_version: ""
    };
}
export const VersionInfo = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
    aminoType: "cosmos-sdk/VersionInfo",
    is(o) {
        return o && (o.$typeUrl === VersionInfo.typeUrl || typeof o.name === "string" && typeof o.app_name === "string" && typeof o.version === "string" && typeof o.git_commit === "string" && typeof o.build_tags === "string" && typeof o.go_version === "string" && Array.isArray(o.build_deps) && (!o.build_deps.length || Module.is(o.build_deps[0])) && typeof o.cosmos_sdk_version === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === VersionInfo.typeUrl || typeof o.name === "string" && typeof o.app_name === "string" && typeof o.version === "string" && typeof o.git_commit === "string" && typeof o.build_tags === "string" && typeof o.go_version === "string" && Array.isArray(o.build_deps) && (!o.build_deps.length || Module.isSDK(o.build_deps[0])) && typeof o.cosmos_sdk_version === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === VersionInfo.typeUrl || typeof o.name === "string" && typeof o.app_name === "string" && typeof o.version === "string" && typeof o.git_commit === "string" && typeof o.build_tags === "string" && typeof o.go_version === "string" && Array.isArray(o.build_deps) && (!o.build_deps.length || Module.isAmino(o.build_deps[0])) && typeof o.cosmos_sdk_version === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.app_name !== "") {
            writer.uint32(18).string(message.app_name);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        if (message.git_commit !== "") {
            writer.uint32(34).string(message.git_commit);
        }
        if (message.build_tags !== "") {
            writer.uint32(42).string(message.build_tags);
        }
        if (message.go_version !== "") {
            writer.uint32(50).string(message.go_version);
        }
        for (const v of message.build_deps) {
            Module.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.cosmos_sdk_version !== "") {
            writer.uint32(66).string(message.cosmos_sdk_version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.app_name = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.git_commit = reader.string();
                    break;
                case 5:
                    message.build_tags = reader.string();
                    break;
                case 6:
                    message.go_version = reader.string();
                    break;
                case 7:
                    message.build_deps.push(Module.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.cosmos_sdk_version = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            app_name: isSet(object.app_name) ? String(object.app_name) : "",
            version: isSet(object.version) ? String(object.version) : "",
            git_commit: isSet(object.git_commit) ? String(object.git_commit) : "",
            build_tags: isSet(object.build_tags) ? String(object.build_tags) : "",
            go_version: isSet(object.go_version) ? String(object.go_version) : "",
            build_deps: Array.isArray(object?.build_deps) ? object.build_deps.map((e) => Module.fromJSON(e)) : [],
            cosmos_sdk_version: isSet(object.cosmos_sdk_version) ? String(object.cosmos_sdk_version) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.app_name !== undefined && (obj.app_name = message.app_name);
        message.version !== undefined && (obj.version = message.version);
        message.git_commit !== undefined && (obj.git_commit = message.git_commit);
        message.build_tags !== undefined && (obj.build_tags = message.build_tags);
        message.go_version !== undefined && (obj.go_version = message.go_version);
        if (message.build_deps) {
            obj.build_deps = message.build_deps.map(e => e ? Module.toJSON(e) : undefined);
        }
        else {
            obj.build_deps = [];
        }
        message.cosmos_sdk_version !== undefined && (obj.cosmos_sdk_version = message.cosmos_sdk_version);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVersionInfo();
        message.name = object.name ?? "";
        message.app_name = object.app_name ?? "";
        message.version = object.version ?? "";
        message.git_commit = object.git_commit ?? "";
        message.build_tags = object.build_tags ?? "";
        message.go_version = object.go_version ?? "";
        message.build_deps = object.build_deps?.map(e => Module.fromPartial(e)) || [];
        message.cosmos_sdk_version = object.cosmos_sdk_version ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseVersionInfo();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.app_name !== undefined && object.app_name !== null) {
            message.app_name = object.app_name;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.git_commit !== undefined && object.git_commit !== null) {
            message.git_commit = object.git_commit;
        }
        if (object.build_tags !== undefined && object.build_tags !== null) {
            message.build_tags = object.build_tags;
        }
        if (object.go_version !== undefined && object.go_version !== null) {
            message.go_version = object.go_version;
        }
        message.build_deps = object.build_deps?.map(e => Module.fromAmino(e)) || [];
        if (object.cosmos_sdk_version !== undefined && object.cosmos_sdk_version !== null) {
            message.cosmos_sdk_version = object.cosmos_sdk_version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.app_name = message.app_name;
        obj.version = message.version;
        obj.git_commit = message.git_commit;
        obj.build_tags = message.build_tags;
        obj.go_version = message.go_version;
        if (message.build_deps) {
            obj.build_deps = message.build_deps.map(e => e ? Module.toAmino(e) : undefined);
        }
        else {
            obj.build_deps = [];
        }
        obj.cosmos_sdk_version = message.cosmos_sdk_version;
        return obj;
    },
    fromAminoMsg(object) {
        return VersionInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/VersionInfo",
            value: VersionInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return VersionInfo.decode(message.value);
    },
    toProto(message) {
        return VersionInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
            value: VersionInfo.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(VersionInfo.typeUrl, VersionInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(VersionInfo.aminoType, VersionInfo.typeUrl);
function createBaseModule() {
    return {
        path: "",
        version: "",
        sum: ""
    };
}
export const Module = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
    aminoType: "cosmos-sdk/Module",
    is(o) {
        return o && (o.$typeUrl === Module.typeUrl || typeof o.path === "string" && typeof o.version === "string" && typeof o.sum === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Module.typeUrl || typeof o.path === "string" && typeof o.version === "string" && typeof o.sum === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Module.typeUrl || typeof o.path === "string" && typeof o.version === "string" && typeof o.sum === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.sum !== "") {
            writer.uint32(26).string(message.sum);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.sum = reader.string();
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
            path: isSet(object.path) ? String(object.path) : "",
            version: isSet(object.version) ? String(object.version) : "",
            sum: isSet(object.sum) ? String(object.sum) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path);
        message.version !== undefined && (obj.version = message.version);
        message.sum !== undefined && (obj.sum = message.sum);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModule();
        message.path = object.path ?? "";
        message.version = object.version ?? "";
        message.sum = object.sum ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseModule();
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.sum !== undefined && object.sum !== null) {
            message.sum = object.sum;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.version = message.version;
        obj.sum = message.sum;
        return obj;
    },
    fromAminoMsg(object) {
        return Module.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Module",
            value: Module.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Module.decode(message.value);
    },
    toProto(message) {
        return Module.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
            value: Module.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Module.typeUrl, Module);
GlobalDecoderRegistry.registerAminoProtoMapping(Module.aminoType, Module.typeUrl);
function createBaseABCIQueryRequest() {
    return {
        data: new Uint8Array(),
        path: "",
        height: BigInt(0),
        prove: false
    };
}
export const ABCIQueryRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryRequest",
    aminoType: "cosmos-sdk/ABCIQueryRequest",
    is(o) {
        return o && (o.$typeUrl === ABCIQueryRequest.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.path === "string" && typeof o.height === "bigint" && typeof o.prove === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === ABCIQueryRequest.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.path === "string" && typeof o.height === "bigint" && typeof o.prove === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === ABCIQueryRequest.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.path === "string" && typeof o.height === "bigint" && typeof o.prove === "boolean");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.prove === true) {
            writer.uint32(32).bool(message.prove);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseABCIQueryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.prove = reader.bool();
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
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            path: isSet(object.path) ? String(object.path) : "",
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            prove: isSet(object.prove) ? Boolean(object.prove) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.path !== undefined && (obj.path = message.path);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.prove !== undefined && (obj.prove = message.prove);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseABCIQueryRequest();
        message.data = object.data ?? new Uint8Array();
        message.path = object.path ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.prove = object.prove ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseABCIQueryRequest();
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.prove !== undefined && object.prove !== null) {
            message.prove = object.prove;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        obj.path = message.path;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.prove = message.prove;
        return obj;
    },
    fromAminoMsg(object) {
        return ABCIQueryRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ABCIQueryRequest",
            value: ABCIQueryRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ABCIQueryRequest.decode(message.value);
    },
    toProto(message) {
        return ABCIQueryRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryRequest",
            value: ABCIQueryRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ABCIQueryRequest.typeUrl, ABCIQueryRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ABCIQueryRequest.aminoType, ABCIQueryRequest.typeUrl);
function createBaseABCIQueryResponse() {
    return {
        code: 0,
        log: "",
        info: "",
        index: BigInt(0),
        key: new Uint8Array(),
        value: new Uint8Array(),
        proof_ops: undefined,
        height: BigInt(0),
        codespace: ""
    };
}
export const ABCIQueryResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryResponse",
    aminoType: "cosmos-sdk/ABCIQueryResponse",
    is(o) {
        return o && (o.$typeUrl === ABCIQueryResponse.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string" && typeof o.index === "bigint" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.height === "bigint" && typeof o.codespace === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === ABCIQueryResponse.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string" && typeof o.index === "bigint" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.height === "bigint" && typeof o.codespace === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === ABCIQueryResponse.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string" && typeof o.index === "bigint" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.height === "bigint" && typeof o.codespace === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.index !== BigInt(0)) {
            writer.uint32(40).int64(message.index);
        }
        if (message.key.length !== 0) {
            writer.uint32(50).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(58).bytes(message.value);
        }
        if (message.proof_ops !== undefined) {
            ProofOps.encode(message.proof_ops, writer.uint32(66).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(72).int64(message.height);
        }
        if (message.codespace !== "") {
            writer.uint32(82).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseABCIQueryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.index = reader.int64();
                    break;
                case 6:
                    message.key = reader.bytes();
                    break;
                case 7:
                    message.value = reader.bytes();
                    break;
                case 8:
                    message.proof_ops = ProofOps.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.height = reader.int64();
                    break;
                case 10:
                    message.codespace = reader.string();
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
            code: isSet(object.code) ? Number(object.code) : 0,
            log: isSet(object.log) ? String(object.log) : "",
            info: isSet(object.info) ? String(object.info) : "",
            index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
            proof_ops: isSet(object.proof_ops) ? ProofOps.fromJSON(object.proof_ops) : undefined,
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            codespace: isSet(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.proof_ops !== undefined && (obj.proof_ops = message.proof_ops ? ProofOps.toJSON(message.proof_ops) : undefined);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseABCIQueryResponse();
        message.code = object.code ?? 0;
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.proof_ops = object.proof_ops !== undefined && object.proof_ops !== null ? ProofOps.fromPartial(object.proof_ops) : undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseABCIQueryResponse();
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        if (object.proof_ops !== undefined && object.proof_ops !== null) {
            message.proof_ops = ProofOps.fromAmino(object.proof_ops);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.log = message.log;
        obj.info = message.info;
        obj.index = message.index ? message.index.toString() : undefined;
        obj.key = message.key ? base64FromBytes(message.key) : undefined;
        obj.value = message.value ? base64FromBytes(message.value) : undefined;
        obj.proof_ops = message.proof_ops ? ProofOps.toAmino(message.proof_ops) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.codespace = message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return ABCIQueryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ABCIQueryResponse",
            value: ABCIQueryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ABCIQueryResponse.decode(message.value);
    },
    toProto(message) {
        return ABCIQueryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.ABCIQueryResponse",
            value: ABCIQueryResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ABCIQueryResponse.typeUrl, ABCIQueryResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ABCIQueryResponse.aminoType, ABCIQueryResponse.typeUrl);
function createBaseProofOp() {
    return {
        type: "",
        key: new Uint8Array(),
        data: new Uint8Array()
    };
}
export const ProofOp = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOp",
    aminoType: "cosmos-sdk/ProofOp",
    is(o) {
        return o && (o.$typeUrl === ProofOp.typeUrl || typeof o.type === "string" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ProofOp.typeUrl || typeof o.type === "string" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === ProofOp.typeUrl || typeof o.type === "string" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.key.length !== 0) {
            writer.uint32(18).bytes(message.key);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.key = reader.bytes();
                    break;
                case 3:
                    message.data = reader.bytes();
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
            type: isSet(object.type) ? String(object.type) : "",
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProofOp();
        message.type = object.type ?? "";
        message.key = object.key ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseProofOp();
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.key = message.key ? base64FromBytes(message.key) : undefined;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ProofOp.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ProofOp",
            value: ProofOp.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ProofOp.decode(message.value);
    },
    toProto(message) {
        return ProofOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOp",
            value: ProofOp.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ProofOp.typeUrl, ProofOp);
GlobalDecoderRegistry.registerAminoProtoMapping(ProofOp.aminoType, ProofOp.typeUrl);
function createBaseProofOps() {
    return {
        ops: []
    };
}
export const ProofOps = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOps",
    aminoType: "cosmos-sdk/ProofOps",
    is(o) {
        return o && (o.$typeUrl === ProofOps.typeUrl || Array.isArray(o.ops) && (!o.ops.length || ProofOp.is(o.ops[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ProofOps.typeUrl || Array.isArray(o.ops) && (!o.ops.length || ProofOp.isSDK(o.ops[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === ProofOps.typeUrl || Array.isArray(o.ops) && (!o.ops.length || ProofOp.isAmino(o.ops[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.ops) {
            ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofOps();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ops.push(ProofOp.decode(reader, reader.uint32()));
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
            ops: Array.isArray(object?.ops) ? object.ops.map((e) => ProofOp.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ops) {
            obj.ops = message.ops.map(e => e ? ProofOp.toJSON(e) : undefined);
        }
        else {
            obj.ops = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProofOps();
        message.ops = object.ops?.map(e => ProofOp.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseProofOps();
        message.ops = object.ops?.map(e => ProofOp.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.ops) {
            obj.ops = message.ops.map(e => e ? ProofOp.toAmino(e) : undefined);
        }
        else {
            obj.ops = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ProofOps.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ProofOps",
            value: ProofOps.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ProofOps.decode(message.value);
    },
    toProto(message) {
        return ProofOps.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.ProofOps",
            value: ProofOps.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ProofOps.typeUrl, ProofOps);
GlobalDecoderRegistry.registerAminoProtoMapping(ProofOps.aminoType, ProofOps.typeUrl);
//# sourceMappingURL=query.js.map