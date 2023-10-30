//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateScript, MsgUpdateScript } from "./tx";
import { MsgRun } from "./msgrun";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/blit.script.MsgUpdateParams", MsgUpdateParams], ["/blit.script.MsgCreateScript", MsgCreateScript], ["/blit.script.MsgUpdateScript", MsgUpdateScript], ["/blit.script.MsgRun", MsgRun]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/blit.script.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createScript(value: MsgCreateScript) {
      return {
        typeUrl: "/blit.script.MsgCreateScript",
        value: MsgCreateScript.encode(value).finish()
      };
    },
    updateScript(value: MsgUpdateScript) {
      return {
        typeUrl: "/blit.script.MsgUpdateScript",
        value: MsgUpdateScript.encode(value).finish()
      };
    },
    run(value: MsgRun) {
      return {
        typeUrl: "/blit.script.MsgRun",
        value: MsgRun.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/blit.script.MsgUpdateParams",
        value
      };
    },
    createScript(value: MsgCreateScript) {
      return {
        typeUrl: "/blit.script.MsgCreateScript",
        value
      };
    },
    updateScript(value: MsgUpdateScript) {
      return {
        typeUrl: "/blit.script.MsgUpdateScript",
        value
      };
    },
    run(value: MsgRun) {
      return {
        typeUrl: "/blit.script.MsgRun",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/blit.script.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    createScript(value: MsgCreateScript) {
      return {
        typeUrl: "/blit.script.MsgCreateScript",
        value: MsgCreateScript.toJSON(value)
      };
    },
    updateScript(value: MsgUpdateScript) {
      return {
        typeUrl: "/blit.script.MsgUpdateScript",
        value: MsgUpdateScript.toJSON(value)
      };
    },
    run(value: MsgRun) {
      return {
        typeUrl: "/blit.script.MsgRun",
        value: MsgRun.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/blit.script.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    createScript(value: any) {
      return {
        typeUrl: "/blit.script.MsgCreateScript",
        value: MsgCreateScript.fromJSON(value)
      };
    },
    updateScript(value: any) {
      return {
        typeUrl: "/blit.script.MsgUpdateScript",
        value: MsgUpdateScript.fromJSON(value)
      };
    },
    run(value: any) {
      return {
        typeUrl: "/blit.script.MsgRun",
        value: MsgRun.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/blit.script.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createScript(value: MsgCreateScript) {
      return {
        typeUrl: "/blit.script.MsgCreateScript",
        value: MsgCreateScript.fromPartial(value)
      };
    },
    updateScript(value: MsgUpdateScript) {
      return {
        typeUrl: "/blit.script.MsgUpdateScript",
        value: MsgUpdateScript.fromPartial(value)
      };
    },
    run(value: MsgRun) {
      return {
        typeUrl: "/blit.script.MsgRun",
        value: MsgRun.fromPartial(value)
      };
    }
  }
};