"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryDenomsFromCreatorResponse = exports.QueryDenomsFromCreatorRequest = exports.QueryDenomAuthorityMetadataResponse = exports.QueryDenomAuthorityMetadataRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
//@ts-nocheck
const params_1 = require("./params");
const authorityMetadata_1 = require("./authorityMetadata");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-params-request",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? params_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-params-response",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomAuthorityMetadataRequest() {
    return {
        denom: ""
    };
}
exports.QueryDenomAuthorityMetadataRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
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
        return exports.QueryDenomAuthorityMetadataRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-denom-authority-metadata-request",
            value: exports.QueryDenomAuthorityMetadataRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomAuthorityMetadataRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomAuthorityMetadataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
            value: exports.QueryDenomAuthorityMetadataRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomAuthorityMetadataResponse() {
    return {
        authority_metadata: authorityMetadata_1.DenomAuthorityMetadata.fromPartial({})
    };
}
exports.QueryDenomAuthorityMetadataResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority_metadata !== undefined) {
            authorityMetadata_1.DenomAuthorityMetadata.encode(message.authority_metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority_metadata = authorityMetadata_1.DenomAuthorityMetadata.decode(reader, reader.uint32());
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
            authority_metadata: (0, helpers_1.isSet)(object.authority_metadata) ? authorityMetadata_1.DenomAuthorityMetadata.fromJSON(object.authority_metadata) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority_metadata !== undefined && (obj.authority_metadata = message.authority_metadata ? authorityMetadata_1.DenomAuthorityMetadata.toJSON(message.authority_metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        message.authority_metadata = object.authority_metadata !== undefined && object.authority_metadata !== null ? authorityMetadata_1.DenomAuthorityMetadata.fromPartial(object.authority_metadata) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            authority_metadata: object.authority_metadata ? authorityMetadata_1.DenomAuthorityMetadata.fromSDK(object.authority_metadata) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.authority_metadata !== undefined && (obj.authority_metadata = message.authority_metadata ? authorityMetadata_1.DenomAuthorityMetadata.toSDK(message.authority_metadata) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            authority_metadata: object?.authority_metadata ? authorityMetadata_1.DenomAuthorityMetadata.fromAmino(object.authority_metadata) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authority_metadata = message.authority_metadata ? authorityMetadata_1.DenomAuthorityMetadata.toAmino(message.authority_metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomAuthorityMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-denom-authority-metadata-response",
            value: exports.QueryDenomAuthorityMetadataResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomAuthorityMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomAuthorityMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
            value: exports.QueryDenomAuthorityMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomsFromCreatorRequest() {
    return {
        creator: ""
    };
}
exports.QueryDenomsFromCreatorRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            creator: (0, helpers_1.isSet)(object.creator) ? String(object.creator) : ""
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
        return exports.QueryDenomsFromCreatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-denoms-from-creator-request",
            value: exports.QueryDenomsFromCreatorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomsFromCreatorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomsFromCreatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
            value: exports.QueryDenomsFromCreatorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomsFromCreatorResponse() {
    return {
        denoms: []
    };
}
exports.QueryDenomsFromCreatorResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryDenomsFromCreatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/query-denoms-from-creator-response",
            value: exports.QueryDenomsFromCreatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomsFromCreatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomsFromCreatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
            value: exports.QueryDenomsFromCreatorResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map