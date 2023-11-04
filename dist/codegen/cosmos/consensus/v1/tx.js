"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.protobufPackage = void 0;
//@ts-nocheck
const params_1 = require("../../../tendermint/types/params");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.consensus.v1";
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        block: undefined,
        evidence: undefined,
        validator: undefined
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/cosmos.consensus.v1.MsgUpdateParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.block !== undefined) {
            params_1.BlockParams.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            params_1.EvidenceParams.encode(message.evidence, writer.uint32(26).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            params_1.ValidatorParams.encode(message.validator, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.block = params_1.BlockParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.evidence = params_1.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.validator = params_1.ValidatorParams.decode(reader, reader.uint32());
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
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : "",
            block: (0, helpers_1.isSet)(object.block) ? params_1.BlockParams.fromJSON(object.block) : undefined,
            evidence: (0, helpers_1.isSet)(object.evidence) ? params_1.EvidenceParams.fromJSON(object.evidence) : undefined,
            validator: (0, helpers_1.isSet)(object.validator) ? params_1.ValidatorParams.fromJSON(object.validator) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.block !== undefined && (obj.block = message.block ? params_1.BlockParams.toJSON(message.block) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? params_1.EvidenceParams.toJSON(message.evidence) : undefined);
        message.validator !== undefined && (obj.validator = message.validator ? params_1.ValidatorParams.toJSON(message.validator) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.block = object.block !== undefined && object.block !== null ? params_1.BlockParams.fromPartial(object.block) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? params_1.EvidenceParams.fromPartial(object.evidence) : undefined;
        message.validator = object.validator !== undefined && object.validator !== null ? params_1.ValidatorParams.fromPartial(object.validator) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            authority: object?.authority,
            block: object.block ? params_1.BlockParams.fromSDK(object.block) : undefined,
            evidence: object.evidence ? params_1.EvidenceParams.fromSDK(object.evidence) : undefined,
            validator: object.validator ? params_1.ValidatorParams.fromSDK(object.validator) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.authority = message.authority;
        message.block !== undefined && (obj.block = message.block ? params_1.BlockParams.toSDK(message.block) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? params_1.EvidenceParams.toSDK(message.evidence) : undefined);
        message.validator !== undefined && (obj.validator = message.validator ? params_1.ValidatorParams.toSDK(message.validator) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            authority: object.authority,
            block: object?.block ? params_1.BlockParams.fromAmino(object.block) : undefined,
            evidence: object?.evidence ? params_1.EvidenceParams.fromAmino(object.evidence) : undefined,
            validator: object?.validator ? params_1.ValidatorParams.fromAmino(object.validator) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.block = message.block ? params_1.BlockParams.toAmino(message.block) : undefined;
        obj.evidence = message.evidence ? params_1.EvidenceParams.toAmino(message.evidence) : undefined;
        obj.validator = message.validator ? params_1.ValidatorParams.toAmino(message.validator) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateParams",
            value: exports.MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.consensus.v1.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/cosmos.consensus.v1.MsgUpdateParamsResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
        const message = createBaseMsgUpdateParamsResponse();
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
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.consensus.v1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map