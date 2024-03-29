//@ts-nocheck
import { BlockParams, EvidenceParams, ValidatorParams, ABCIParams } from "../../../tendermint/types/params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.consensus.v1";
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        block: undefined,
        evidence: undefined,
        validator: undefined,
        abci: undefined
    };
}
export const MsgUpdateParams = {
    typeUrl: "/cosmos.consensus.v1.MsgUpdateParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.block !== undefined) {
            BlockParams.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            EvidenceParams.encode(message.evidence, writer.uint32(26).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            ValidatorParams.encode(message.validator, writer.uint32(34).fork()).ldelim();
        }
        if (message.abci !== undefined) {
            ABCIParams.encode(message.abci, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.block = BlockParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.evidence = EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.validator = ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.abci = ABCIParams.decode(reader, reader.uint32());
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            block: isSet(object.block) ? BlockParams.fromJSON(object.block) : undefined,
            evidence: isSet(object.evidence) ? EvidenceParams.fromJSON(object.evidence) : undefined,
            validator: isSet(object.validator) ? ValidatorParams.fromJSON(object.validator) : undefined,
            abci: isSet(object.abci) ? ABCIParams.fromJSON(object.abci) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.block !== undefined && (obj.block = message.block ? BlockParams.toJSON(message.block) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? EvidenceParams.toJSON(message.evidence) : undefined);
        message.validator !== undefined && (obj.validator = message.validator ? ValidatorParams.toJSON(message.validator) : undefined);
        message.abci !== undefined && (obj.abci = message.abci ? ABCIParams.toJSON(message.abci) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : undefined;
        message.validator = object.validator !== undefined && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : undefined;
        message.abci = object.abci !== undefined && object.abci !== null ? ABCIParams.fromPartial(object.abci) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = BlockParams.fromAmino(object.block);
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = EvidenceParams.fromAmino(object.evidence);
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = ValidatorParams.fromAmino(object.validator);
        }
        if (object.abci !== undefined && object.abci !== null) {
            message.abci = ABCIParams.fromAmino(object.abci);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.block = message.block ? BlockParams.toAmino(message.block) : undefined;
        obj.evidence = message.evidence ? EvidenceParams.toAmino(message.evidence) : undefined;
        obj.validator = message.validator ? ValidatorParams.toAmino(message.validator) : undefined;
        obj.abci = message.abci ? ABCIParams.toAmino(message.abci) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/x/consensus/MsgUpdateParams",
            value: MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.consensus.v1.MsgUpdateParams",
            value: MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: "/cosmos.consensus.v1.MsgUpdateParamsResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    fromAmino(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.consensus.v1.MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map