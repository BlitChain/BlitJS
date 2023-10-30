"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrateFromInfo = exports.PackageReference = exports.ModuleDescriptor = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseModuleDescriptor() {
    return {
        go_import: "",
        use_package: [],
        can_migrate_from: []
    };
}
exports.ModuleDescriptor = {
    typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.go_import !== "") {
            writer.uint32(10).string(message.go_import);
        }
        for (const v of message.use_package) {
            exports.PackageReference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.can_migrate_from) {
            exports.MigrateFromInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.go_import = reader.string();
                    break;
                case 2:
                    message.use_package.push(exports.PackageReference.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.can_migrate_from.push(exports.MigrateFromInfo.decode(reader, reader.uint32()));
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
            go_import: (0, helpers_1.isSet)(object.go_import) ? String(object.go_import) : "",
            use_package: Array.isArray(object?.use_package) ? object.use_package.map((e) => exports.PackageReference.fromJSON(e)) : [],
            can_migrate_from: Array.isArray(object?.can_migrate_from) ? object.can_migrate_from.map((e) => exports.MigrateFromInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.go_import !== undefined && (obj.go_import = message.go_import);
        if (message.use_package) {
            obj.use_package = message.use_package.map(e => e ? exports.PackageReference.toJSON(e) : undefined);
        }
        else {
            obj.use_package = [];
        }
        if (message.can_migrate_from) {
            obj.can_migrate_from = message.can_migrate_from.map(e => e ? exports.MigrateFromInfo.toJSON(e) : undefined);
        }
        else {
            obj.can_migrate_from = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleDescriptor();
        message.go_import = object.go_import ?? "";
        message.use_package = object.use_package?.map(e => exports.PackageReference.fromPartial(e)) || [];
        message.can_migrate_from = object.can_migrate_from?.map(e => exports.MigrateFromInfo.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            go_import: object?.go_import,
            use_package: Array.isArray(object?.use_package) ? object.use_package.map((e) => exports.PackageReference.fromSDK(e)) : [],
            can_migrate_from: Array.isArray(object?.can_migrate_from) ? object.can_migrate_from.map((e) => exports.MigrateFromInfo.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.go_import = message.go_import;
        if (message.use_package) {
            obj.use_package = message.use_package.map(e => e ? exports.PackageReference.toSDK(e) : undefined);
        }
        else {
            obj.use_package = [];
        }
        if (message.can_migrate_from) {
            obj.can_migrate_from = message.can_migrate_from.map(e => e ? exports.MigrateFromInfo.toSDK(e) : undefined);
        }
        else {
            obj.can_migrate_from = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            go_import: object.go_import,
            use_package: Array.isArray(object?.use_package) ? object.use_package.map((e) => exports.PackageReference.fromAmino(e)) : [],
            can_migrate_from: Array.isArray(object?.can_migrate_from) ? object.can_migrate_from.map((e) => exports.MigrateFromInfo.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.go_import = message.go_import;
        if (message.use_package) {
            obj.use_package = message.use_package.map(e => e ? exports.PackageReference.toAmino(e) : undefined);
        }
        else {
            obj.use_package = [];
        }
        if (message.can_migrate_from) {
            obj.can_migrate_from = message.can_migrate_from.map(e => e ? exports.MigrateFromInfo.toAmino(e) : undefined);
        }
        else {
            obj.can_migrate_from = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleDescriptor",
            value: exports.ModuleDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor",
            value: exports.ModuleDescriptor.encode(message).finish()
        };
    }
};
function createBasePackageReference() {
    return {
        name: "",
        revision: 0
    };
}
exports.PackageReference = {
    typeUrl: "/cosmos.app.v1alpha1.PackageReference",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.revision !== 0) {
            writer.uint32(16).uint32(message.revision);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            revision: (0, helpers_1.isSet)(object.revision) ? Number(object.revision) : 0
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
    fromSDK(object) {
        return {
            name: object?.name,
            revision: object?.revision
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        obj.revision = message.revision;
        return obj;
    },
    fromAmino(object) {
        return {
            name: object.name,
            revision: object.revision
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.revision = message.revision;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PackageReference.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PackageReference",
            value: exports.PackageReference.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PackageReference.decode(message.value);
    },
    toProto(message) {
        return exports.PackageReference.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.PackageReference",
            value: exports.PackageReference.encode(message).finish()
        };
    }
};
function createBaseMigrateFromInfo() {
    return {
        module: ""
    };
}
exports.MigrateFromInfo = {
    typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            module: (0, helpers_1.isSet)(object.module) ? String(object.module) : ""
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
    fromSDK(object) {
        return {
            module: object?.module
        };
    },
    toSDK(message) {
        const obj = {};
        obj.module = message.module;
        return obj;
    },
    fromAmino(object) {
        return {
            module: object.module
        };
    },
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MigrateFromInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MigrateFromInfo",
            value: exports.MigrateFromInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MigrateFromInfo.decode(message.value);
    },
    toProto(message) {
        return exports.MigrateFromInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo",
            value: exports.MigrateFromInfo.encode(message).finish()
        };
    }
};
//# sourceMappingURL=module.js.map