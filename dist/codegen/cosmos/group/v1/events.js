"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventLeaveGroup = exports.EventExec = exports.EventVote = exports.EventWithdrawProposal = exports.EventSubmitProposal = exports.EventUpdateGroupPolicy = exports.EventCreateGroupPolicy = exports.EventUpdateGroup = exports.EventCreateGroup = void 0;
//@ts-nocheck
const types_1 = require("./types");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseEventCreateGroup() {
    return {
        group_id: BigInt(0)
    };
}
exports.EventCreateGroup = {
    typeUrl: "/cosmos.group.v1.EventCreateGroup",
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
    fromSDK(object) {
        return {
            group_id: object?.group_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.group_id = message.group_id;
        return obj;
    },
    fromAmino(object) {
        return {
            group_id: BigInt(object.group_id)
        };
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
function createBaseEventUpdateGroup() {
    return {
        group_id: BigInt(0)
    };
}
exports.EventUpdateGroup = {
    typeUrl: "/cosmos.group.v1.EventUpdateGroup",
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
    fromSDK(object) {
        return {
            group_id: object?.group_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.group_id = message.group_id;
        return obj;
    },
    fromAmino(object) {
        return {
            group_id: BigInt(object.group_id)
        };
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
function createBaseEventCreateGroupPolicy() {
    return {
        address: ""
    };
}
exports.EventCreateGroupPolicy = {
    typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
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
    fromSDK(object) {
        return {
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address
        };
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
function createBaseEventUpdateGroupPolicy() {
    return {
        address: ""
    };
}
exports.EventUpdateGroupPolicy = {
    typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
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
    fromSDK(object) {
        return {
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address
        };
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
function createBaseEventSubmitProposal() {
    return {
        proposal_id: BigInt(0)
    };
}
exports.EventSubmitProposal = {
    typeUrl: "/cosmos.group.v1.EventSubmitProposal",
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
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id)
        };
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
function createBaseEventWithdrawProposal() {
    return {
        proposal_id: BigInt(0)
    };
}
exports.EventWithdrawProposal = {
    typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
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
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id)
        };
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
function createBaseEventVote() {
    return {
        proposal_id: BigInt(0)
    };
}
exports.EventVote = {
    typeUrl: "/cosmos.group.v1.EventVote",
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
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id)
        };
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
function createBaseEventExec() {
    return {
        proposal_id: BigInt(0),
        result: 0
    };
}
exports.EventExec = {
    typeUrl: "/cosmos.group.v1.EventExec",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.result !== 0) {
            writer.uint32(16).int32(message.result);
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
            result: (0, helpers_1.isSet)(object.result) ? (0, types_1.proposalExecutorResultFromJSON)(object.result) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.result !== undefined && (obj.result = (0, types_1.proposalExecutorResultToJSON)(message.result));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventExec();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.result = object.result ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id,
            result: (0, helpers_1.isSet)(object.result) ? (0, types_1.proposalExecutorResultFromJSON)(object.result) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        message.result !== undefined && (obj.result = (0, types_1.proposalExecutorResultToJSON)(message.result));
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id),
            result: (0, helpers_1.isSet)(object.result) ? (0, types_1.proposalExecutorResultFromJSON)(object.result) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.result = message.result;
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
function createBaseEventLeaveGroup() {
    return {
        group_id: BigInt(0),
        address: ""
    };
}
exports.EventLeaveGroup = {
    typeUrl: "/cosmos.group.v1.EventLeaveGroup",
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
    fromSDK(object) {
        return {
            group_id: object?.group_id,
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.group_id = message.group_id;
        obj.address = message.address;
        return obj;
    },
    fromAmino(object) {
        return {
            group_id: BigInt(object.group_id),
            address: object.address
        };
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
//# sourceMappingURL=events.js.map