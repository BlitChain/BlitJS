//@ts-nocheck
import { PageRequest, PageResponse } from "../../query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { BlockID } from "../../../../tendermint/types/types";
import { Block } from "../../../../tendermint/types/block";
import { NodeInfo } from "../../../../tendermint/p2p/types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
function createBaseGetValidatorSetByHeightRequest() {
    return {
        height: BigInt(0),
        pagination: undefined
    };
}
export const GetValidatorSetByHeightRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
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
    fromSDK(object) {
        return {
            height: object?.height,
            pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            height: BigInt(object.height),
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
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
function createBaseGetValidatorSetByHeightResponse() {
    return {
        block_height: BigInt(0),
        validators: [],
        pagination: undefined
    };
}
export const GetValidatorSetByHeightResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
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
    fromSDK(object) {
        return {
            block_height: object?.block_height,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromSDK(e)) : [],
            pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.block_height = message.block_height;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toSDK(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            block_height: BigInt(object.block_height),
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
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
function createBaseGetLatestValidatorSetRequest() {
    return {
        pagination: undefined
    };
}
export const GetLatestValidatorSetRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
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
    fromSDK(object) {
        return {
            pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
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
function createBaseGetLatestValidatorSetResponse() {
    return {
        block_height: BigInt(0),
        validators: [],
        pagination: undefined
    };
}
export const GetLatestValidatorSetResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
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
    fromSDK(object) {
        return {
            block_height: object?.block_height,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromSDK(e)) : [],
            pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.block_height = message.block_height;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toSDK(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            block_height: BigInt(object.block_height),
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
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
    fromSDK(object) {
        return {
            address: object?.address,
            pub_key: object.pub_key ? Any.fromSDK(object.pub_key) : undefined,
            voting_power: object?.voting_power,
            proposer_priority: object?.proposer_priority
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? Any.toSDK(message.pub_key) : undefined);
        obj.voting_power = message.voting_power;
        obj.proposer_priority = message.proposer_priority;
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pub_key: object?.pub_key ? Any.fromAmino(object.pub_key) : undefined,
            voting_power: BigInt(object.voting_power),
            proposer_priority: BigInt(object.proposer_priority)
        };
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
function createBaseGetBlockByHeightRequest() {
    return {
        height: BigInt(0)
    };
}
export const GetBlockByHeightRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
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
    fromSDK(object) {
        return {
            height: object?.height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        return obj;
    },
    fromAmino(object) {
        return {
            height: BigInt(object.height)
        };
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
function createBaseGetBlockByHeightResponse() {
    return {
        block_id: undefined,
        block: undefined
    };
}
export const GetBlockByHeightResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.block_id !== undefined) {
            BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            Block.encode(message.block, writer.uint32(18).fork()).ldelim();
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
                    message.block = Block.decode(reader, reader.uint32());
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
            block: isSet(object.block) ? Block.fromJSON(object.block) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_id !== undefined && (obj.block_id = message.block_id ? BlockID.toJSON(message.block_id) : undefined);
        message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetBlockByHeightResponse();
        message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
        message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            block_id: object.block_id ? BlockID.fromSDK(object.block_id) : undefined,
            block: object.block ? Block.fromSDK(object.block) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.block_id !== undefined && (obj.block_id = message.block_id ? BlockID.toSDK(message.block_id) : undefined);
        message.block !== undefined && (obj.block = message.block ? Block.toSDK(message.block) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            block_id: object?.block_id ? BlockID.fromAmino(object.block_id) : undefined,
            block: object?.block ? Block.fromAmino(object.block) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.block_id ? BlockID.toAmino(message.block_id) : undefined;
        obj.block = message.block ? Block.toAmino(message.block) : undefined;
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
function createBaseGetLatestBlockRequest() {
    return {};
}
export const GetLatestBlockRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
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
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
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
function createBaseGetLatestBlockResponse() {
    return {
        block_id: undefined,
        block: undefined
    };
}
export const GetLatestBlockResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.block_id !== undefined) {
            BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            Block.encode(message.block, writer.uint32(18).fork()).ldelim();
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
                    message.block = Block.decode(reader, reader.uint32());
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
            block: isSet(object.block) ? Block.fromJSON(object.block) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_id !== undefined && (obj.block_id = message.block_id ? BlockID.toJSON(message.block_id) : undefined);
        message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetLatestBlockResponse();
        message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
        message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            block_id: object.block_id ? BlockID.fromSDK(object.block_id) : undefined,
            block: object.block ? Block.fromSDK(object.block) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.block_id !== undefined && (obj.block_id = message.block_id ? BlockID.toSDK(message.block_id) : undefined);
        message.block !== undefined && (obj.block = message.block ? Block.toSDK(message.block) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            block_id: object?.block_id ? BlockID.fromAmino(object.block_id) : undefined,
            block: object?.block ? Block.fromAmino(object.block) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.block_id ? BlockID.toAmino(message.block_id) : undefined;
        obj.block = message.block ? Block.toAmino(message.block) : undefined;
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
function createBaseGetSyncingRequest() {
    return {};
}
export const GetSyncingRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
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
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
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
function createBaseGetSyncingResponse() {
    return {
        syncing: false
    };
}
export const GetSyncingResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
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
    fromSDK(object) {
        return {
            syncing: object?.syncing
        };
    },
    toSDK(message) {
        const obj = {};
        obj.syncing = message.syncing;
        return obj;
    },
    fromAmino(object) {
        return {
            syncing: object.syncing
        };
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
function createBaseGetNodeInfoRequest() {
    return {};
}
export const GetNodeInfoRequest = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
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
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
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
function createBaseGetNodeInfoResponse() {
    return {
        node_info: undefined,
        application_version: undefined
    };
}
export const GetNodeInfoResponse = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.node_info !== undefined) {
            NodeInfo.encode(message.node_info, writer.uint32(10).fork()).ldelim();
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
                    message.node_info = NodeInfo.decode(reader, reader.uint32());
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
            node_info: isSet(object.node_info) ? NodeInfo.fromJSON(object.node_info) : undefined,
            application_version: isSet(object.application_version) ? VersionInfo.fromJSON(object.application_version) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.node_info !== undefined && (obj.node_info = message.node_info ? NodeInfo.toJSON(message.node_info) : undefined);
        message.application_version !== undefined && (obj.application_version = message.application_version ? VersionInfo.toJSON(message.application_version) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetNodeInfoResponse();
        message.node_info = object.node_info !== undefined && object.node_info !== null ? NodeInfo.fromPartial(object.node_info) : undefined;
        message.application_version = object.application_version !== undefined && object.application_version !== null ? VersionInfo.fromPartial(object.application_version) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            node_info: object.node_info ? NodeInfo.fromSDK(object.node_info) : undefined,
            application_version: object.application_version ? VersionInfo.fromSDK(object.application_version) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.node_info !== undefined && (obj.node_info = message.node_info ? NodeInfo.toSDK(message.node_info) : undefined);
        message.application_version !== undefined && (obj.application_version = message.application_version ? VersionInfo.toSDK(message.application_version) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            node_info: object?.node_info ? NodeInfo.fromAmino(object.node_info) : undefined,
            application_version: object?.application_version ? VersionInfo.fromAmino(object.application_version) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.node_info = message.node_info ? NodeInfo.toAmino(message.node_info) : undefined;
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
    fromSDK(object) {
        return {
            name: object?.name,
            app_name: object?.app_name,
            version: object?.version,
            git_commit: object?.git_commit,
            build_tags: object?.build_tags,
            go_version: object?.go_version,
            build_deps: Array.isArray(object?.build_deps) ? object.build_deps.map((e) => Module.fromSDK(e)) : [],
            cosmos_sdk_version: object?.cosmos_sdk_version
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        obj.app_name = message.app_name;
        obj.version = message.version;
        obj.git_commit = message.git_commit;
        obj.build_tags = message.build_tags;
        obj.go_version = message.go_version;
        if (message.build_deps) {
            obj.build_deps = message.build_deps.map(e => e ? Module.toSDK(e) : undefined);
        }
        else {
            obj.build_deps = [];
        }
        obj.cosmos_sdk_version = message.cosmos_sdk_version;
        return obj;
    },
    fromAmino(object) {
        return {
            name: object.name,
            app_name: object.app_name,
            version: object.version,
            git_commit: object.git_commit,
            build_tags: object.build_tags,
            go_version: object.go_version,
            build_deps: Array.isArray(object?.build_deps) ? object.build_deps.map((e) => Module.fromAmino(e)) : [],
            cosmos_sdk_version: object.cosmos_sdk_version
        };
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
function createBaseModule() {
    return {
        path: "",
        version: "",
        sum: ""
    };
}
export const Module = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
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
    fromSDK(object) {
        return {
            path: object?.path,
            version: object?.version,
            sum: object?.sum
        };
    },
    toSDK(message) {
        const obj = {};
        obj.path = message.path;
        obj.version = message.version;
        obj.sum = message.sum;
        return obj;
    },
    fromAmino(object) {
        return {
            path: object.path,
            version: object.version,
            sum: object.sum
        };
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
//# sourceMappingURL=query.js.map