//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBasePageRequest() {
    return {
        key: new Uint8Array(),
        offset: BigInt(0),
        limit: BigInt(0),
        count_total: false,
        reverse: false
    };
}
export const PageRequest = {
    typeUrl: "/cosmos.base.query.v1beta1.PageRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.offset !== BigInt(0)) {
            writer.uint32(16).uint64(message.offset);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(24).uint64(message.limit);
        }
        if (message.count_total === true) {
            writer.uint32(32).bool(message.count_total);
        }
        if (message.reverse === true) {
            writer.uint32(40).bool(message.reverse);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.offset = reader.uint64();
                    break;
                case 3:
                    message.limit = reader.uint64();
                    break;
                case 4:
                    message.count_total = reader.bool();
                    break;
                case 5:
                    message.reverse = reader.bool();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            offset: isSet(object.offset) ? BigInt(object.offset.toString()) : BigInt(0),
            limit: isSet(object.limit) ? BigInt(object.limit.toString()) : BigInt(0),
            count_total: isSet(object.count_total) ? Boolean(object.count_total) : false,
            reverse: isSet(object.reverse) ? Boolean(object.reverse) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.offset !== undefined && (obj.offset = (message.offset || BigInt(0)).toString());
        message.limit !== undefined && (obj.limit = (message.limit || BigInt(0)).toString());
        message.count_total !== undefined && (obj.count_total = message.count_total);
        message.reverse !== undefined && (obj.reverse = message.reverse);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePageRequest();
        message.key = object.key ?? new Uint8Array();
        message.offset = object.offset !== undefined && object.offset !== null ? BigInt(object.offset.toString()) : BigInt(0);
        message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
        message.count_total = object.count_total ?? false;
        message.reverse = object.reverse ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            key: object?.key,
            offset: object?.offset,
            limit: object?.limit,
            count_total: object?.count_total,
            reverse: object?.reverse
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key = message.key;
        obj.offset = message.offset;
        obj.limit = message.limit;
        obj.count_total = message.count_total;
        obj.reverse = message.reverse;
        return obj;
    },
    fromAmino(object) {
        return {
            key: object.key,
            offset: BigInt(object.offset),
            limit: BigInt(object.limit),
            count_total: object.count_total,
            reverse: object.reverse
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.offset = message.offset ? message.offset.toString() : undefined;
        obj.limit = message.limit ? message.limit.toString() : undefined;
        obj.count_total = message.count_total;
        obj.reverse = message.reverse;
        return obj;
    },
    fromAminoMsg(object) {
        return PageRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PageRequest",
            value: PageRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PageRequest.decode(message.value);
    },
    toProto(message) {
        return PageRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.query.v1beta1.PageRequest",
            value: PageRequest.encode(message).finish()
        };
    }
};
function createBasePageResponse() {
    return {
        next_key: new Uint8Array(),
        total: BigInt(0)
    };
}
export const PageResponse = {
    typeUrl: "/cosmos.base.query.v1beta1.PageResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.next_key.length !== 0) {
            writer.uint32(10).bytes(message.next_key);
        }
        if (message.total !== BigInt(0)) {
            writer.uint32(16).uint64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.next_key = reader.bytes();
                    break;
                case 2:
                    message.total = reader.uint64();
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
            next_key: isSet(object.next_key) ? bytesFromBase64(object.next_key) : new Uint8Array(),
            total: isSet(object.total) ? BigInt(object.total.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.next_key !== undefined && (obj.next_key = base64FromBytes(message.next_key !== undefined ? message.next_key : new Uint8Array()));
        message.total !== undefined && (obj.total = (message.total || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePageResponse();
        message.next_key = object.next_key ?? new Uint8Array();
        message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            next_key: object?.next_key,
            total: object?.total
        };
    },
    toSDK(message) {
        const obj = {};
        obj.next_key = message.next_key;
        obj.total = message.total;
        return obj;
    },
    fromAmino(object) {
        return {
            next_key: object.next_key,
            total: BigInt(object.total)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.next_key = message.next_key;
        obj.total = message.total ? message.total.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PageResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PageResponse",
            value: PageResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PageResponse.decode(message.value);
    },
    toProto(message) {
        return PageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.query.v1beta1.PageResponse",
            value: PageResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=pagination.js.map