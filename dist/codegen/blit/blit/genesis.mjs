//@ts-nocheck
import { Params } from "./params";
import { Task } from "./task";
import { FutureTask } from "./future_task";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "blit.blit";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        task_list: [],
        future_task_list: [],
        starting_task_id: BigInt(0)
    };
}
export const GenesisState = {
    typeUrl: "/blit.blit.GenesisState",
    is(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.task_list) && (!o.task_list.length || Task.is(o.task_list[0])) && Array.isArray(o.future_task_list) && (!o.future_task_list.length || FutureTask.is(o.future_task_list[0])) && typeof o.starting_task_id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.task_list) && (!o.task_list.length || Task.isSDK(o.task_list[0])) && Array.isArray(o.future_task_list) && (!o.future_task_list.length || FutureTask.isSDK(o.future_task_list[0])) && typeof o.starting_task_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.task_list) && (!o.task_list.length || Task.isAmino(o.task_list[0])) && Array.isArray(o.future_task_list) && (!o.future_task_list.length || FutureTask.isAmino(o.future_task_list[0])) && typeof o.starting_task_id === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.task_list) {
            Task.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.future_task_list) {
            FutureTask.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.starting_task_id !== BigInt(0)) {
            writer.uint32(40).uint64(message.starting_task_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.task_list.push(Task.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.future_task_list.push(FutureTask.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            task_list: Array.isArray(object?.task_list) ? object.task_list.map((e) => Task.fromJSON(e)) : [],
            future_task_list: Array.isArray(object?.future_task_list) ? object.future_task_list.map((e) => FutureTask.fromJSON(e)) : [],
            starting_task_id: isSet(object.starting_task_id) ? BigInt(object.starting_task_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.task_list) {
            obj.task_list = message.task_list.map(e => e ? Task.toJSON(e) : undefined);
        }
        else {
            obj.task_list = [];
        }
        if (message.future_task_list) {
            obj.future_task_list = message.future_task_list.map(e => e ? FutureTask.toJSON(e) : undefined);
        }
        else {
            obj.future_task_list = [];
        }
        message.starting_task_id !== undefined && (obj.starting_task_id = (message.starting_task_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.task_list = object.task_list?.map(e => Task.fromPartial(e)) || [];
        message.future_task_list = object.future_task_list?.map(e => FutureTask.fromPartial(e)) || [];
        message.starting_task_id = object.starting_task_id !== undefined && object.starting_task_id !== null ? BigInt(object.starting_task_id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.task_list = object.task_list?.map(e => Task.fromAmino(e)) || [];
        message.future_task_list = object.future_task_list?.map(e => FutureTask.fromAmino(e)) || [];
        if (object.starting_task_id !== undefined && object.starting_task_id !== null) {
            message.starting_task_id = BigInt(object.starting_task_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
        if (message.task_list) {
            obj.task_list = message.task_list.map(e => e ? Task.toAmino(e) : undefined);
        }
        else {
            obj.task_list = [];
        }
        if (message.future_task_list) {
            obj.future_task_list = message.future_task_list.map(e => e ? FutureTask.toAmino(e) : undefined);
        }
        else {
            obj.future_task_list = [];
        }
        obj.starting_task_id = message.starting_task_id ? message.starting_task_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
//# sourceMappingURL=genesis.js.map