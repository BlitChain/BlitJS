//@ts-nocheck
import * as _1 from "./blit/genesis";
import * as _2 from "./blit/params";
import * as _3 from "./blit/query";
import * as _4 from "./blit/tx";
import * as _5 from "./genesis";
import * as _6 from "./params";
import * as _7 from "./query";
import * as _8 from "./tx";
import * as _9 from "./script/genesis";
import * as _10 from "./script/msgrun";
import * as _11 from "./script/params";
import * as _12 from "./script/query";
import * as _13 from "./script/script";
import * as _14 from "./script/tx";
import * as _15 from "./storage/genesis";
import * as _16 from "./storage/params";
import * as _17 from "./storage/query";
import * as _18 from "./storage/storage";
import * as _19 from "./storage/tx";
import * as _165 from "./blit/tx.amino";
import * as _166 from "./script/tx.amino";
import * as _167 from "./storage/tx.amino";
import * as _168 from "./tx.amino";
import * as _169 from "./blit/tx.registry";
import * as _170 from "./script/tx.registry";
import * as _171 from "./storage/tx.registry";
import * as _172 from "./tx.registry";
import * as _173 from "./blit/query.lcd";
import * as _174 from "./query.lcd";
import * as _175 from "./script/query.lcd";
import * as _176 from "./storage/query.lcd";
import * as _177 from "./blit/query.rpc.Query";
import * as _178 from "./query.rpc.Query";
import * as _179 from "./script/query.rpc.Query";
import * as _180 from "./storage/query.rpc.Query";
import * as _181 from "./blit/tx.rpc.msg";
import * as _182 from "./script/tx.rpc.msg";
import * as _183 from "./storage/tx.rpc.msg";
import * as _184 from "./tx.rpc.msg";
import * as _305 from "./lcd";
import * as _306 from "./rpc.query";
import * as _307 from "./rpc.tx";
export namespace blit {
  export const blit = {
    ..._1,
    ..._2,
    ..._3,
    ..._4,
    ..._5,
    ..._6,
    ..._7,
    ..._8,
    ..._165,
    ..._168,
    ..._169,
    ..._172,
    ..._173,
    ..._174,
    ..._177,
    ..._178,
    ..._181,
    ..._184
  };
  export const script = {
    ..._9,
    ..._10,
    ..._11,
    ..._12,
    ..._13,
    ..._14,
    ..._166,
    ..._170,
    ..._175,
    ..._179,
    ..._182
  };
  export const storage = {
    ..._15,
    ..._16,
    ..._17,
    ..._18,
    ..._19,
    ..._167,
    ..._171,
    ..._176,
    ..._180,
    ..._183
  };
  export const ClientFactory = {
    ..._305,
    ..._306,
    ..._307
  };
}