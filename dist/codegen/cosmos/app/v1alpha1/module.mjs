//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.app.v1alpha1";
function createBaseModuleDescriptor() {
    return {
        go_import: "",
        use_package: [],
        can_migrate_from: []
    };
}
export const ModuleDescriptor = {
    typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor",
    encode(message, writer = BinaryWriter.create()) {
        if (message.go_import !== "") {
            writer.uint32(10).string(message.go_import);
        }
        for (const v of message.use_package) {
            PackageReference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.can_migrate_from) {
            MigrateFromInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.go_import = reader.string();
                    break;
                case 2:
                    message.use_package.push(PackageReference.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.can_migrate_from.push(MigrateFromInfo.decode(reader, reader.uint32()));
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
            go_import: isSet(object.go_import) ? String(object.go_import) : "",
            use_package: Array.isArray(object?.use_package) ? object.use_package.map((e) => PackageReference.fromJSON(e)) : [],
            can_migrate_from: Array.isArray(object?.can_migrate_from) ? object.can_migrate_from.map((e) => MigrateFromInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.go_import !== undefined && (obj.go_import = message.go_import);
        if (message.use_package) {
            obj.use_package = message.use_package.map(e => e ? PackageReference.toJSON(e) : undefined);
        }
        else {
            obj.use_package = [];
        }
        if (message.can_migrate_from) {
            obj.can_migrate_from = message.can_migrate_from.map(e => e ? MigrateFromInfo.toJSON(e) : undefined);
        }
        else {
            obj.can_migrate_from = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleDescriptor();
        message.go_import = object.go_import ?? "";
        message.use_package = object.use_package?.map(e => PackageReference.fromPartial(e)) || [];
        message.can_migrate_from = object.can_migrate_from?.map(e => MigrateFromInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleDescriptor();
        if (object.go_import !== undefined && object.go_import !== null) {
            message.go_import = object.go_import;
        }
        message.use_package = object.use_package?.map(e => PackageReference.fromAmino(e)) || [];
        message.can_migrate_from = object.can_migrate_from?.map(e => MigrateFromInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.go_import = message.go_import;
        if (message.use_package) {
            obj.use_package = message.use_package.map(e => e ? PackageReference.toAmino(e) : undefined);
        }
        else {
            obj.use_package = [];
        }
        if (message.can_migrate_from) {
            obj.can_migrate_from = message.can_migrate_from.map(e => e ? MigrateFromInfo.toAmino(e) : undefined);
        }
        else {
            obj.can_migrate_from = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleDescriptor",
            value: ModuleDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModuleDescriptor.decode(message.value);
    },
    toProto(message) {
        return ModuleDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor",
            value: ModuleDescriptor.encode(message).finish()
        };
    }
};
function createBasePackageReference() {
    return {
        name: "",
        revision: 0
    };
}
export const PackageReference = {
    typeUrl: "/cosmos.app.v1alpha1.PackageReference",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.revision !== 0) {
            writer.uint32(16).uint32(message.revision);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePackageReference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.revision = reader.uint32();
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
            name: isSet(object.name) ? String(object.name) : "",
            revision: isSet(object.revision) ? Number(object.revision) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.revision !== undefined && (obj.revision = Math.round(message.revision));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePackageReference();
        message.name = object.name ?? "";
        message.revision = object.revision ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBasePackageReference();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.revision !== undefined && object.revision !== null) {
            message.revision = object.revision;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.revision = message.revision;
        return obj;
    },
    fromAminoMsg(object) {
        return PackageReference.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PackageReference",
            value: PackageReference.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PackageReference.decode(message.value);
    },
    toProto(message) {
        return PackageReference.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.PackageReference",
            value: PackageReference.encode(message).finish()
        };
    }
};
function createBaseMigrateFromInfo() {
    return {
        module: ""
    };
}
export const MigrateFromInfo = {
    typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMigrateFromInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
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
            module: isSet(object.module) ? String(object.module) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMigrateFromInfo();
        message.module = object.module ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMigrateFromInfo();
        if (object.module !== undefined && object.module !== null) {
            message.module = object.module;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        return obj;
    },
    fromAminoMsg(object) {
        return MigrateFromInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MigrateFromInfo",
            value: MigrateFromInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MigrateFromInfo.decode(message.value);
    },
    toProto(message) {
        return MigrateFromInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo",
            value: MigrateFromInfo.encode(message).finish()
        };
    }
};
//# sourceMappingURL=module.js.map