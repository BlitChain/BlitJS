//@ts-nocheck
import { Params } from "./params";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
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
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-params-request",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-params-response",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomAuthorityMetadataRequest() {
    return {
        denom: ""
    };
}
export const QueryDenomAuthorityMetadataRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        return {
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomAuthorityMetadataRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-denom-authority-metadata-request",
            value: QueryDenomAuthorityMetadataRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomAuthorityMetadataRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomAuthorityMetadataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
            value: QueryDenomAuthorityMetadataRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomAuthorityMetadataResponse() {
    return {
        authority_metadata: DenomAuthorityMetadata.fromPartial({})
    };
}
export const QueryDenomAuthorityMetadataResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority_metadata !== undefined) {
            DenomAuthorityMetadata.encode(message.authority_metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority_metadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
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
            authority_metadata: isSet(object.authority_metadata) ? DenomAuthorityMetadata.fromJSON(object.authority_metadata) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority_metadata !== undefined && (obj.authority_metadata = message.authority_metadata ? DenomAuthorityMetadata.toJSON(message.authority_metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        message.authority_metadata = object.authority_metadata !== undefined && object.authority_metadata !== null ? DenomAuthorityMetadata.fromPartial(object.authority_metadata) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            authority_metadata: object.authority_metadata ? DenomAuthorityMetadata.fromSDK(object.authority_metadata) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.authority_metadata !== undefined && (obj.authority_metadata = message.authority_metadata ? DenomAuthorityMetadata.toSDK(message.authority_metadata) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            authority_metadata: object?.authority_metadata ? DenomAuthorityMetadata.fromAmino(object.authority_metadata) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authority_metadata = message.authority_metadata ? DenomAuthorityMetadata.toAmino(message.authority_metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomAuthorityMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-denom-authority-metadata-response",
            value: QueryDenomAuthorityMetadataResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomAuthorityMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomAuthorityMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
            value: QueryDenomAuthorityMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomsFromCreatorRequest() {
    return {
        creator: ""
    };
}
export const QueryDenomsFromCreatorRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsFromCreatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsFromCreatorRequest();
        message.creator = object.creator ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            creator: object?.creator
        };
    },
    toSDK(message) {
        const obj = {};
        obj.creator = message.creator;
        return obj;
    },
    fromAmino(object) {
        return {
            creator: object.creator
        };
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomsFromCreatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-denoms-from-creator-request",
            value: QueryDenomsFromCreatorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomsFromCreatorRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsFromCreatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
            value: QueryDenomsFromCreatorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomsFromCreatorResponse() {
    return {
        denoms: []
    };
}
export const QueryDenomsFromCreatorResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsFromCreatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(reader.string());
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
            denoms: Array.isArray(object?.denoms) ? object.denoms.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map(e => e);
        }
        else {
            obj.denoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsFromCreatorResponse();
        message.denoms = object.denoms?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            denoms: Array.isArray(object?.denoms) ? object.denoms.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map(e => e);
        }
        else {
            obj.denoms = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            denoms: Array.isArray(object?.denoms) ? object.denoms.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map(e => e);
        }
        else {
            obj.denoms = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomsFromCreatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-denoms-from-creator-response",
            value: QueryDenomsFromCreatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomsFromCreatorResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsFromCreatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
            value: QueryDenomsFromCreatorResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map