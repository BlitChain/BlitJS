"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
const params_1 = require("./params");
const task_1 = require("./task");
const future_task_1 = require("./future_task");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
exports.protobufPackage = "blit.blit";
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        task_list: [],
        future_task_list: [],
        starting_task_id: BigInt(0)
    };
}
exports.GenesisState = {
    typeUrl: "/blit.blit.GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || params_1.Params.is(o.params) && Array.isArray(o.task_list) && (!o.task_list.length || task_1.Task.is(o.task_list[0])) && Array.isArray(o.future_task_list) && (!o.future_task_list.length || future_task_1.FutureTask.is(o.future_task_list[0])) && typeof o.starting_task_id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || params_1.Params.isSDK(o.params) && Array.isArray(o.task_list) && (!o.task_list.length || task_1.Task.isSDK(o.task_list[0])) && Array.isArray(o.future_task_list) && (!o.future_task_list.length || future_task_1.FutureTask.isSDK(o.future_task_list[0])) && typeof o.starting_task_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || params_1.Params.isAmino(o.params) && Array.isArray(o.task_list) && (!o.task_list.length || task_1.Task.isAmino(o.task_list[0])) && Array.isArray(o.future_task_list) && (!o.future_task_list.length || future_task_1.FutureTask.isAmino(o.future_task_list[0])) && typeof o.starting_task_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.task_list) {
            task_1.Task.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.future_task_list) {
            future_task_1.FutureTask.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.starting_task_id !== BigInt(0)) {
            writer.uint32(40).uint64(message.starting_task_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.task_list.push(task_1.Task.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.future_task_list.push(future_task_1.FutureTask.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.starting_task_id = reader.uint64();
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
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            task_list: Array.isArray(object?.task_list) ? object.task_list.map((e) => task_1.Task.fromJSON(e)) : [],
            future_task_list: Array.isArray(object?.future_task_list) ? object.future_task_list.map((e) => future_task_1.FutureTask.fromJSON(e)) : [],
            starting_task_id: (0, helpers_1.isSet)(object.starting_task_id) ? BigInt(object.starting_task_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.task_list) {
            obj.task_list = message.task_list.map(e => e ? task_1.Task.toJSON(e) : undefined);
        }
        else {
            obj.task_list = [];
        }
        if (message.future_task_list) {
            obj.future_task_list = message.future_task_list.map(e => e ? future_task_1.FutureTask.toJSON(e) : undefined);
        }
        else {
            obj.future_task_list = [];
        }
        message.starting_task_id !== undefined && (obj.starting_task_id = (message.starting_task_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.task_list = object.task_list?.map(e => task_1.Task.fromPartial(e)) || [];
        message.future_task_list = object.future_task_list?.map(e => future_task_1.FutureTask.fromPartial(e)) || [];
        message.starting_task_id = object.starting_task_id !== undefined && object.starting_task_id !== null ? BigInt(object.starting_task_id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        message.task_list = object.task_list?.map(e => task_1.Task.fromAmino(e)) || [];
        message.future_task_list = object.future_task_list?.map(e => future_task_1.FutureTask.fromAmino(e)) || [];
        if (object.starting_task_id !== undefined && object.starting_task_id !== null) {
            message.starting_task_id = BigInt(object.starting_task_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : params_1.Params.fromPartial({});
        if (message.task_list) {
            obj.task_list = message.task_list.map(e => e ? task_1.Task.toAmino(e) : undefined);
        }
        else {
            obj.task_list = [];
        }
        if (message.future_task_list) {
            obj.future_task_list = message.future_task_list.map(e => e ? future_task_1.FutureTask.toAmino(e) : undefined);
        }
        else {
            obj.future_task_list = [];
        }
        obj.starting_task_id = message.starting_task_id ? message.starting_task_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
//# sourceMappingURL=genesis.js.map