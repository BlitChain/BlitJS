"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClassesResponse = exports.QueryClassesRequest = exports.QueryClassResponse = exports.QueryClassRequest = exports.QueryNFTResponse = exports.QueryNFTRequest = exports.QueryNFTsResponse = exports.QueryNFTsRequest = exports.QuerySupplyResponse = exports.QuerySupplyRequest = exports.QueryOwnerResponse = exports.QueryOwnerRequest = exports.QueryBalanceResponse = exports.QueryBalanceRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const pagination_1 = require("../../base/query/v1beta1/pagination");
const nft_1 = require("./nft");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.nft.v1beta1";
function createBaseQueryBalanceRequest() {
    return {
        class_id: "",
        owner: ""
    };
}
exports.QueryBalanceRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class_id = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
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
            class_id: (0, helpers_1.isSet)(object.class_id) ? String(object.class_id) : "",
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceRequest();
        message.class_id = object.class_id ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            class_id: object?.class_id,
            owner: object?.owner
        };
    },
    toSDK(message) {
        const obj = {};
        obj.class_id = message.class_id;
        obj.owner = message.owner;
        return obj;
    },
    fromAmino(object) {
        return {
            class_id: object.class_id,
            owner: object.owner
        };
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.class_id;
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBalanceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryBalanceRequest",
            value: exports.QueryBalanceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
            value: exports.QueryBalanceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceResponse() {
    return {
        amount: BigInt(0)
    };
}
exports.QueryBalanceResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== BigInt(0)) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.uint64();
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
            amount: (0, helpers_1.isSet)(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            amount: object?.amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.amount = message.amount;
        return obj;
    },
    fromAmino(object) {
        return {
            amount: BigInt(object.amount)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? message.amount.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBalanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryBalanceResponse",
            value: exports.QueryBalanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
            value: exports.QueryBalanceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOwnerRequest() {
    return {
        class_id: "",
        id: ""
    };
}
exports.QueryOwnerRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class_id = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
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
            class_id: (0, helpers_1.isSet)(object.class_id) ? String(object.class_id) : "",
            id: (0, helpers_1.isSet)(object.id) ? String(object.id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryOwnerRequest();
        message.class_id = object.class_id ?? "";
        message.id = object.id ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            class_id: object?.class_id,
            id: object?.id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.class_id = message.class_id;
        obj.id = message.id;
        return obj;
    },
    fromAmino(object) {
        return {
            class_id: object.class_id,
            id: object.id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.class_id;
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOwnerRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryOwnerRequest",
            value: exports.QueryOwnerRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryOwnerRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOwnerRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
            value: exports.QueryOwnerRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOwnerResponse() {
    return {
        owner: ""
    };
}
exports.QueryOwnerResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryOwnerResponse();
        message.owner = object.owner ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOwnerResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryOwnerResponse",
            value: exports.QueryOwnerResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryOwnerResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOwnerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
            value: exports.QueryOwnerResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyRequest() {
    return {
        class_id: ""
    };
}
exports.QuerySupplyRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class_id = reader.string();
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
            class_id: (0, helpers_1.isSet)(object.class_id) ? String(object.class_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyRequest();
        message.class_id = object.class_id ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            class_id: object?.class_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.class_id = message.class_id;
        return obj;
    },
    fromAmino(object) {
        return {
            class_id: object.class_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.class_id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySupplyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySupplyRequest",
            value: exports.QuerySupplyRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySupplyRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySupplyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
            value: exports.QuerySupplyRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyResponse() {
    return {
        amount: BigInt(0)
    };
}
exports.QuerySupplyResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== BigInt(0)) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.uint64();
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
            amount: (0, helpers_1.isSet)(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            amount: object?.amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.amount = message.amount;
        return obj;
    },
    fromAmino(object) {
        return {
            amount: BigInt(object.amount)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? message.amount.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySupplyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySupplyResponse",
            value: exports.QuerySupplyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySupplyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySupplyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
            value: exports.QuerySupplyResponse.encode(message).finish()
        };
    }
};
function createBaseQueryNFTsRequest() {
    return {
        class_id: "",
        owner: "",
        pagination: undefined
    };
}
exports.QueryNFTsRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class_id = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            class_id: (0, helpers_1.isSet)(object.class_id) ? String(object.class_id) : "",
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNFTsRequest();
        message.class_id = object.class_id ?? "";
        message.owner = object.owner ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            class_id: object?.class_id,
            owner: object?.owner,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.class_id = message.class_id;
        obj.owner = message.owner;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            class_id: object.class_id,
            owner: object.owner,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.class_id;
        obj.owner = message.owner;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryNFTsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNFTsRequest",
            value: exports.QueryNFTsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNFTsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNFTsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
            value: exports.QueryNFTsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryNFTsResponse() {
    return {
        nfts: [],
        pagination: undefined
    };
}
exports.QueryNFTsResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.nfts) {
            nft_1.NFT.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nfts.push(nft_1.NFT.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            nfts: Array.isArray(object?.nfts) ? object.nfts.map((e) => nft_1.NFT.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nfts) {
            obj.nfts = message.nfts.map(e => e ? nft_1.NFT.toJSON(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNFTsResponse();
        message.nfts = object.nfts?.map(e => nft_1.NFT.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            nfts: Array.isArray(object?.nfts) ? object.nfts.map((e) => nft_1.NFT.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.nfts) {
            obj.nfts = message.nfts.map(e => e ? nft_1.NFT.toSDK(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            nfts: Array.isArray(object?.nfts) ? object.nfts.map((e) => nft_1.NFT.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.nfts) {
            obj.nfts = message.nfts.map(e => e ? nft_1.NFT.toAmino(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryNFTsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNFTsResponse",
            value: exports.QueryNFTsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNFTsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNFTsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
            value: exports.QueryNFTsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryNFTRequest() {
    return {
        class_id: "",
        id: ""
    };
}
exports.QueryNFTRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class_id = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
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
            class_id: (0, helpers_1.isSet)(object.class_id) ? String(object.class_id) : "",
            id: (0, helpers_1.isSet)(object.id) ? String(object.id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNFTRequest();
        message.class_id = object.class_id ?? "";
        message.id = object.id ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            class_id: object?.class_id,
            id: object?.id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.class_id = message.class_id;
        obj.id = message.id;
        return obj;
    },
    fromAmino(object) {
        return {
            class_id: object.class_id,
            id: object.id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.class_id;
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryNFTRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNFTRequest",
            value: exports.QueryNFTRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNFTRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNFTRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
            value: exports.QueryNFTRequest.encode(message).finish()
        };
    }
};
function createBaseQueryNFTResponse() {
    return {
        nft: undefined
    };
}
exports.QueryNFTResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nft !== undefined) {
            nft_1.NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nft = nft_1.NFT.decode(reader, reader.uint32());
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
            nft: (0, helpers_1.isSet)(object.nft) ? nft_1.NFT.fromJSON(object.nft) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.nft !== undefined && (obj.nft = message.nft ? nft_1.NFT.toJSON(message.nft) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNFTResponse();
        message.nft = object.nft !== undefined && object.nft !== null ? nft_1.NFT.fromPartial(object.nft) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            nft: object.nft ? nft_1.NFT.fromSDK(object.nft) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.nft !== undefined && (obj.nft = message.nft ? nft_1.NFT.toSDK(message.nft) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            nft: object?.nft ? nft_1.NFT.fromAmino(object.nft) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.nft = message.nft ? nft_1.NFT.toAmino(message.nft) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryNFTResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNFTResponse",
            value: exports.QueryNFTResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNFTResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNFTResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
            value: exports.QueryNFTResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClassRequest() {
    return {
        class_id: ""
    };
}
exports.QueryClassRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class_id = reader.string();
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
            class_id: (0, helpers_1.isSet)(object.class_id) ? String(object.class_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClassRequest();
        message.class_id = object.class_id ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            class_id: object?.class_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.class_id = message.class_id;
        return obj;
    },
    fromAmino(object) {
        return {
            class_id: object.class_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.class_id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClassRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClassRequest",
            value: exports.QueryClassRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClassRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
            value: exports.QueryClassRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassResponse() {
    return {
        class: undefined
    };
}
exports.QueryClassResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.class !== undefined) {
            nft_1.Class.encode(message.class, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class = nft_1.Class.decode(reader, reader.uint32());
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
            class: (0, helpers_1.isSet)(object.class) ? nft_1.Class.fromJSON(object.class) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.class !== undefined && (obj.class = message.class ? nft_1.Class.toJSON(message.class) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClassResponse();
        message.class = object.class !== undefined && object.class !== null ? nft_1.Class.fromPartial(object.class) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            class: object.class ? nft_1.Class.fromSDK(object.class) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.class !== undefined && (obj.class = message.class ? nft_1.Class.toSDK(message.class) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            class: object?.class ? nft_1.Class.fromAmino(object.class) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.class = message.class ? nft_1.Class.toAmino(message.class) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClassResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClassResponse",
            value: exports.QueryClassResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClassResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
            value: exports.QueryClassResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClassesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryClassesRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClassesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClassesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClassesRequest",
            value: exports.QueryClassesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClassesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
            value: exports.QueryClassesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassesResponse() {
    return {
        classes: [],
        pagination: undefined
    };
}
exports.QueryClassesResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.classes) {
            nft_1.Class.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classes.push(nft_1.Class.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            classes: Array.isArray(object?.classes) ? object.classes.map((e) => nft_1.Class.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? nft_1.Class.toJSON(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClassesResponse();
        message.classes = object.classes?.map(e => nft_1.Class.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            classes: Array.isArray(object?.classes) ? object.classes.map((e) => nft_1.Class.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? nft_1.Class.toSDK(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            classes: Array.isArray(object?.classes) ? object.classes.map((e) => nft_1.Class.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? nft_1.Class.toAmino(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClassesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClassesResponse",
            value: exports.QueryClassesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClassesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClassesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
            value: exports.QueryClassesResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map