//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateStorage, MsgUpdateStorage, MsgDeleteStorage } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/blit.storage.MsgUpdateParams", MsgUpdateParams], ["/blit.storage.MsgCreateStorage", MsgCreateStorage], ["/blit.storage.MsgUpdateStorage", MsgUpdateStorage], ["/blit.storage.MsgDeleteStorage", MsgDeleteStorage]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/blit.storage.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createStorage(value: MsgCreateStorage) {
      return {
        typeUrl: "/blit.storage.MsgCreateStorage",
        value: MsgCreateStorage.encode(value).finish()
      };
    },
    updateStorage(value: MsgUpdateStorage) {
      return {
        typeUrl: "/blit.storage.MsgUpdateStorage",
        value: MsgUpdateStorage.encode(value).finish()
      };
    },
    deleteStorage(value: MsgDeleteStorage) {
      return {
        typeUrl: "/blit.storage.MsgDeleteStorage",
        value: MsgDeleteStorage.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/blit.storage.MsgUpdateParams",
        value
      };
    },
    createStorage(value: MsgCreateStorage) {
      return {
        typeUrl: "/blit.storage.MsgCreateStorage",
        value
      };
    },
    updateStorage(value: MsgUpdateStorage) {
      return {
        typeUrl: "/blit.storage.MsgUpdateStorage",
        value
      };
    },
    deleteStorage(value: MsgDeleteStorage) {
      return {
        typeUrl: "/blit.storage.MsgDeleteStorage",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/blit.storage.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    createStorage(value: MsgCreateStorage) {
      return {
        typeUrl: "/blit.storage.MsgCreateStorage",
        value: MsgCreateStorage.toJSON(value)
      };
    },
    updateStorage(value: MsgUpdateStorage) {
      return {
        typeUrl: "/blit.storage.MsgUpdateStorage",
        value: MsgUpdateStorage.toJSON(value)
      };
    },
    deleteStorage(value: MsgDeleteStorage) {
      return {
        typeUrl: "/blit.storage.MsgDeleteStorage",
        value: MsgDeleteStorage.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/blit.storage.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    createStorage(value: any) {
      return {
        typeUrl: "/blit.storage.MsgCreateStorage",
        value: MsgCreateStorage.fromJSON(value)
      };
    },
    updateStorage(value: any) {
      return {
        typeUrl: "/blit.storage.MsgUpdateStorage",
        value: MsgUpdateStorage.fromJSON(value)
      };
    },
    deleteStorage(value: any) {
      return {
        typeUrl: "/blit.storage.MsgDeleteStorage",
        value: MsgDeleteStorage.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/blit.storage.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createStorage(value: MsgCreateStorage) {
      return {
        typeUrl: "/blit.storage.MsgCreateStorage",
        value: MsgCreateStorage.fromPartial(value)
      };
    },
    updateStorage(value: MsgUpdateStorage) {
      return {
        typeUrl: "/blit.storage.MsgUpdateStorage",
        value: MsgUpdateStorage.fromPartial(value)
      };
    },
    deleteStorage(value: MsgDeleteStorage) {
      return {
        typeUrl: "/blit.storage.MsgDeleteStorage",
        value: MsgDeleteStorage.fromPartial(value)
      };
    }
  }
};