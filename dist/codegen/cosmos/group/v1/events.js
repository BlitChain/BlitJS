"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventProposalPruned = exports.EventLeaveGroup = exports.EventExec = exports.EventVote = exports.EventWithdrawProposal = exports.EventSubmitProposal = exports.EventUpdateGroupPolicy = exports.EventCreateGroupPolicy = exports.EventUpdateGroup = exports.EventCreateGroup = exports.protobufPackage = void 0;
//@ts-nocheck
const types_1 = require("./types");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
exports.protobufPackage = "cosmos.group.v1";
function createBaseEventCreateGroup() {
    return {
        group_id: BigInt(0)
    };
}
exports.EventCreateGroup = {
    typeUrl: "/cosmos.group.v1.EventCreateGroup",
    aminoType: "cosmos-sdk/EventCreateGroup",
    is(o) {
        return o && (o.$typeUrl === exports.EventCreateGroup.typeUrl || typeof o.group_id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventCreateGroup.typeUrl || typeof o.group_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventCreateGroup.typeUrl || typeof o.group_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.group_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.group_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = reader.uint64();
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
            group_id: (0, helpers_1.isSet)(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventCreateGroup();
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreateGroup();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.group_id = BigInt(object.group_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventCreateGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventCreateGroup",
            value: exports.EventCreateGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventCreateGroup.decode(message.value);
    },
    toProto(message) {
        return exports.EventCreateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventCreateGroup",
            value: exports.EventCreateGroup.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventCreateGroup.typeUrl, exports.EventCreateGroup);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventCreateGroup.aminoType, exports.EventCreateGroup.typeUrl);
function createBaseEventUpdateGroup() {
    return {
        group_id: BigInt(0)
    };
}
exports.EventUpdateGroup = {
    typeUrl: "/cosmos.group.v1.EventUpdateGroup",
    aminoType: "cosmos-sdk/EventUpdateGroup",
    is(o) {
        return o && (o.$typeUrl === exports.EventUpdateGroup.typeUrl || typeof o.group_id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventUpdateGroup.typeUrl || typeof o.group_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventUpdateGroup.typeUrl || typeof o.group_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.group_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.group_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = reader.uint64();
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
            group_id: (0, helpers_1.isSet)(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateGroup();
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateGroup();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.group_id = BigInt(object.group_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventUpdateGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventUpdateGroup",
            value: exports.EventUpdateGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventUpdateGroup.decode(message.value);
    },
    toProto(message) {
        return exports.EventUpdateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventUpdateGroup",
            value: exports.EventUpdateGroup.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventUpdateGroup.typeUrl, exports.EventUpdateGroup);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventUpdateGroup.aminoType, exports.EventUpdateGroup.typeUrl);
function createBaseEventCreateGroupPolicy() {
    return {
        address: ""
    };
}
exports.EventCreateGroupPolicy = {
    typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
    aminoType: "cosmos-sdk/EventCreateGroupPolicy",
    is(o) {
        return o && (o.$typeUrl === exports.EventCreateGroupPolicy.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventCreateGroupPolicy.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventCreateGroupPolicy.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateGroupPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventCreateGroupPolicy();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreateGroupPolicy();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventCreateGroupPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventCreateGroupPolicy",
            value: exports.EventCreateGroupPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventCreateGroupPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.EventCreateGroupPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
            value: exports.EventCreateGroupPolicy.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventCreateGroupPolicy.typeUrl, exports.EventCreateGroupPolicy);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventCreateGroupPolicy.aminoType, exports.EventCreateGroupPolicy.typeUrl);
function createBaseEventUpdateGroupPolicy() {
    return {
        address: ""
    };
}
exports.EventUpdateGroupPolicy = {
    typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
    aminoType: "cosmos-sdk/EventUpdateGroupPolicy",
    is(o) {
        return o && (o.$typeUrl === exports.EventUpdateGroupPolicy.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventUpdateGroupPolicy.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventUpdateGroupPolicy.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateGroupPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateGroupPolicy();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateGroupPolicy();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventUpdateGroupPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventUpdateGroupPolicy",
            value: exports.EventUpdateGroupPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventUpdateGroupPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.EventUpdateGroupPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
            value: exports.EventUpdateGroupPolicy.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventUpdateGroupPolicy.typeUrl, exports.EventUpdateGroupPolicy);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventUpdateGroupPolicy.aminoType, exports.EventUpdateGroupPolicy.typeUrl);
function createBaseEventSubmitProposal() {
    return {
        proposal_id: BigInt(0)
    };
}
exports.EventSubmitProposal = {
    typeUrl: "/cosmos.group.v1.EventSubmitProposal",
    aminoType: "cosmos-sdk/EventSubmitProposal",
    is(o) {
        return o && (o.$typeUrl === exports.EventSubmitProposal.typeUrl || typeof o.proposal_id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventSubmitProposal.typeUrl || typeof o.proposal_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventSubmitProposal.typeUrl || typeof o.proposal_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
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
            proposal_id: (0, helpers_1.isSet)(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventSubmitProposal();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSubmitProposal();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventSubmitProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventSubmitProposal",
            value: exports.EventSubmitProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventSubmitProposal.decode(message.value);
    },
    toProto(message) {
        return exports.EventSubmitProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventSubmitProposal",
            value: exports.EventSubmitProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventSubmitProposal.typeUrl, exports.EventSubmitProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventSubmitProposal.aminoType, exports.EventSubmitProposal.typeUrl);
function createBaseEventWithdrawProposal() {
    return {
        proposal_id: BigInt(0)
    };
}
exports.EventWithdrawProposal = {
    typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
    aminoType: "cosmos-sdk/EventWithdrawProposal",
    is(o) {
        return o && (o.$typeUrl === exports.EventWithdrawProposal.typeUrl || typeof o.proposal_id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventWithdrawProposal.typeUrl || typeof o.proposal_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventWithdrawProposal.typeUrl || typeof o.proposal_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventWithdrawProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
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
            proposal_id: (0, helpers_1.isSet)(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventWithdrawProposal();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventWithdrawProposal();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventWithdrawProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventWithdrawProposal",
            value: exports.EventWithdrawProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventWithdrawProposal.decode(message.value);
    },
    toProto(message) {
        return exports.EventWithdrawProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
            value: exports.EventWithdrawProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventWithdrawProposal.typeUrl, exports.EventWithdrawProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventWithdrawProposal.aminoType, exports.EventWithdrawProposal.typeUrl);
function createBaseEventVote() {
    return {
        proposal_id: BigInt(0)
    };
}
exports.EventVote = {
    typeUrl: "/cosmos.group.v1.EventVote",
    aminoType: "cosmos-sdk/EventVote",
    is(o) {
        return o && (o.$typeUrl === exports.EventVote.typeUrl || typeof o.proposal_id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventVote.typeUrl || typeof o.proposal_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventVote.typeUrl || typeof o.proposal_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
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
            proposal_id: (0, helpers_1.isSet)(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventVote();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventVote();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventVote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventVote",
            value: exports.EventVote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventVote.decode(message.value);
    },
    toProto(message) {
        return exports.EventVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventVote",
            value: exports.EventVote.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventVote.typeUrl, exports.EventVote);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventVote.aminoType, exports.EventVote.typeUrl);
function createBaseEventExec() {
    return {
        proposal_id: BigInt(0),
        result: 0,
        logs: ""
    };
}
exports.EventExec = {
    typeUrl: "/cosmos.group.v1.EventExec",
    aminoType: "cosmos-sdk/EventExec",
    is(o) {
        return o && (o.$typeUrl === exports.EventExec.typeUrl || typeof o.proposal_id === "bigint" && (0, helpers_1.isSet)(o.result) && typeof o.logs === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventExec.typeUrl || typeof o.proposal_id === "bigint" && (0, helpers_1.isSet)(o.result) && typeof o.logs === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventExec.typeUrl || typeof o.proposal_id === "bigint" && (0, helpers_1.isSet)(o.result) && typeof o.logs === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.result !== 0) {
            writer.uint32(16).int32(message.result);
        }
        if (message.logs !== "") {
            writer.uint32(26).string(message.logs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    message.logs = reader.string();
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
            proposal_id: (0, helpers_1.isSet)(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
            result: (0, helpers_1.isSet)(object.result) ? (0, types_1.proposalExecutorResultFromJSON)(object.result) : -1,
            logs: (0, helpers_1.isSet)(object.logs) ? String(object.logs) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.result !== undefined && (obj.result = (0, types_1.proposalExecutorResultToJSON)(message.result));
        message.logs !== undefined && (obj.logs = message.logs);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventExec();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.result = object.result ?? 0;
        message.logs = object.logs ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventExec();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = BigInt(object.proposal_id);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = (0, types_1.proposalExecutorResultFromJSON)(object.result);
        }
        if (object.logs !== undefined && object.logs !== null) {
            message.logs = object.logs;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.result = message.result;
        obj.logs = message.logs;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventExec.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventExec",
            value: exports.EventExec.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventExec.decode(message.value);
    },
    toProto(message) {
        return exports.EventExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventExec",
            value: exports.EventExec.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventExec.typeUrl, exports.EventExec);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventExec.aminoType, exports.EventExec.typeUrl);
function createBaseEventLeaveGroup() {
    return {
        group_id: BigInt(0),
        address: ""
    };
}
exports.EventLeaveGroup = {
    typeUrl: "/cosmos.group.v1.EventLeaveGroup",
    aminoType: "cosmos-sdk/EventLeaveGroup",
    is(o) {
        return o && (o.$typeUrl === exports.EventLeaveGroup.typeUrl || typeof o.group_id === "bigint" && typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventLeaveGroup.typeUrl || typeof o.group_id === "bigint" && typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventLeaveGroup.typeUrl || typeof o.group_id === "bigint" && typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.group_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.group_id);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventLeaveGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = reader.uint64();
                    break;
                case 2:
                    message.address = reader.string();
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
            group_id: (0, helpers_1.isSet)(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventLeaveGroup();
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventLeaveGroup();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.group_id = BigInt(object.group_id);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventLeaveGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventLeaveGroup",
            value: exports.EventLeaveGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventLeaveGroup.decode(message.value);
    },
    toProto(message) {
        return exports.EventLeaveGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventLeaveGroup",
            value: exports.EventLeaveGroup.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventLeaveGroup.typeUrl, exports.EventLeaveGroup);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventLeaveGroup.aminoType, exports.EventLeaveGroup.typeUrl);
function createBaseEventProposalPruned() {
    return {
        proposal_id: BigInt(0),
        status: 0,
        tally_result: undefined
    };
}
exports.EventProposalPruned = {
    typeUrl: "/cosmos.group.v1.EventProposalPruned",
    aminoType: "cosmos-sdk/EventProposalPruned",
    is(o) {
        return o && (o.$typeUrl === exports.EventProposalPruned.typeUrl || typeof o.proposal_id === "bigint" && (0, helpers_1.isSet)(o.status));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EventProposalPruned.typeUrl || typeof o.proposal_id === "bigint" && (0, helpers_1.isSet)(o.status));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventProposalPruned.typeUrl || typeof o.proposal_id === "bigint" && (0, helpers_1.isSet)(o.status));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.tally_result !== undefined) {
            types_1.TallyResult.encode(message.tally_result, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventProposalPruned();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.tally_result = types_1.TallyResult.decode(reader, reader.uint32());
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
            proposal_id: (0, helpers_1.isSet)(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
            status: (0, helpers_1.isSet)(object.status) ? (0, types_1.proposalStatusFromJSON)(object.status) : -1,
            tally_result: (0, helpers_1.isSet)(object.tally_result) ? types_1.TallyResult.fromJSON(object.tally_result) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.status !== undefined && (obj.status = (0, types_1.proposalStatusToJSON)(message.status));
        message.tally_result !== undefined && (obj.tally_result = message.tally_result ? types_1.TallyResult.toJSON(message.tally_result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventProposalPruned();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.status = object.status ?? 0;
        message.tally_result = object.tally_result !== undefined && object.tally_result !== null ? types_1.TallyResult.fromPartial(object.tally_result) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventProposalPruned();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = BigInt(object.proposal_id);
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = (0, types_1.proposalStatusFromJSON)(object.status);
        }
        if (object.tally_result !== undefined && object.tally_result !== null) {
            message.tally_result = types_1.TallyResult.fromAmino(object.tally_result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.status = message.status;
        obj.tally_result = message.tally_result ? types_1.TallyResult.toAmino(message.tally_result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventProposalPruned.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventProposalPruned",
            value: exports.EventProposalPruned.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventProposalPruned.decode(message.value);
    },
    toProto(message) {
        return exports.EventProposalPruned.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventProposalPruned",
            value: exports.EventProposalPruned.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventProposalPruned.typeUrl, exports.EventProposalPruned);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.EventProposalPruned.aminoType, exports.EventProposalPruned.typeUrl);
//# sourceMappingURL=events.js.map