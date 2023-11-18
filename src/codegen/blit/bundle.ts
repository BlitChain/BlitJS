//@ts-nocheck
import * as _1 from "./blit/genesis";
import * as _2 from "./blit/params";
import * as _3 from "./blit/query";
import * as _4 from "./blit/tx";
import * as _5 from "./script/genesis";
import * as _6 from "./script/msgrun";
import * as _7 from "./script/params";
import * as _8 from "./script/query";
import * as _9 from "./script/script";
import * as _10 from "./script/tx";
import * as _11 from "./storage/genesis";
import * as _12 from "./storage/params";
import * as _13 from "./storage/query";
import * as _14 from "./storage/storage";
import * as _15 from "./storage/tx";
import * as _143 from "./blit/tx.amino";
import * as _144 from "./script/tx.amino";
import * as _145 from "./storage/tx.amino";
import * as _146 from "./blit/tx.registry";
import * as _147 from "./script/tx.registry";
import * as _148 from "./storage/tx.registry";
import * as _149 from "./blit/query.lcd";
import * as _150 from "./script/query.lcd";
import * as _151 from "./storage/query.lcd";
import * as _152 from "./blit/query.rpc.Query";
import * as _153 from "./script/query.rpc.Query";
import * as _154 from "./storage/query.rpc.Query";
import * as _155 from "./blit/tx.rpc.msg";
import * as _156 from "./script/tx.rpc.msg";
import * as _157 from "./storage/tx.rpc.msg";
import * as _240 from "./lcd";
import * as _241 from "./rpc.query";
import * as _242 from "./rpc.tx";
export namespace blit {
  export const blit = {
    ..._1,
    ..._2,
    ..._3,
    ..._4,
    ..._143,
    ..._146,
    ..._149,
    ..._152,
    ..._155
  };
  export const script = {
    ..._5,
    ..._6,
    ..._7,
    ..._8,
    ..._9,
    ..._10,
    ..._144,
    ..._147,
    ..._150,
    ..._153,
    ..._156
  };
  export const storage = {
    ..._11,
    ..._12,
    ..._13,
    ..._14,
    ..._15,
    ..._145,
    ..._148,
    ..._151,
    ..._154,
    ..._157
  };
  export const ClientFactory = {
    ..._240,
    ..._241,
    ..._242
  };
}