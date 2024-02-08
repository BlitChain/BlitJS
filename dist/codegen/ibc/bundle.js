"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ibc = void 0;
//@ts-nocheck
const _137 = __importStar(require("./applications/interchain_accounts/controller/v1/controller"));
const _138 = __importStar(require("./applications/interchain_accounts/controller/v1/query"));
const _139 = __importStar(require("./applications/interchain_accounts/controller/v1/tx"));
const _140 = __importStar(require("./applications/interchain_accounts/genesis/v1/genesis"));
const _141 = __importStar(require("./applications/interchain_accounts/host/v1/host"));
const _142 = __importStar(require("./applications/interchain_accounts/host/v1/query"));
const _143 = __importStar(require("./applications/interchain_accounts/host/v1/tx"));
const _144 = __importStar(require("./applications/interchain_accounts/v1/account"));
const _145 = __importStar(require("./applications/interchain_accounts/v1/metadata"));
const _146 = __importStar(require("./applications/interchain_accounts/v1/packet"));
const _147 = __importStar(require("./applications/transfer/v1/authz"));
const _148 = __importStar(require("./applications/transfer/v1/genesis"));
const _149 = __importStar(require("./applications/transfer/v1/query"));
const _150 = __importStar(require("./applications/transfer/v1/transfer"));
const _151 = __importStar(require("./applications/transfer/v1/tx"));
const _152 = __importStar(require("./applications/transfer/v2/packet"));
const _153 = __importStar(require("./core/channel/v1/channel"));
const _154 = __importStar(require("./core/channel/v1/genesis"));
const _155 = __importStar(require("./core/channel/v1/query"));
const _156 = __importStar(require("./core/channel/v1/tx"));
const _157 = __importStar(require("./core/client/v1/client"));
const _158 = __importStar(require("./core/client/v1/genesis"));
const _159 = __importStar(require("./core/client/v1/query"));
const _160 = __importStar(require("./core/client/v1/tx"));
const _161 = __importStar(require("./core/commitment/v1/commitment"));
const _162 = __importStar(require("./core/connection/v1/connection"));
const _163 = __importStar(require("./core/connection/v1/genesis"));
const _164 = __importStar(require("./core/connection/v1/query"));
const _165 = __importStar(require("./core/connection/v1/tx"));
const _166 = __importStar(require("./lightclients/localhost/v2/localhost"));
const _167 = __importStar(require("./lightclients/solomachine/v2/solomachine"));
const _168 = __importStar(require("./lightclients/solomachine/v3/solomachine"));
const _169 = __importStar(require("./lightclients/tendermint/v1/tendermint"));
const _278 = __importStar(require("./applications/interchain_accounts/controller/v1/tx.amino"));
const _279 = __importStar(require("./applications/interchain_accounts/host/v1/tx.amino"));
const _280 = __importStar(require("./applications/transfer/v1/tx.amino"));
const _281 = __importStar(require("./core/channel/v1/tx.amino"));
const _282 = __importStar(require("./core/client/v1/tx.amino"));
const _283 = __importStar(require("./core/connection/v1/tx.amino"));
const _284 = __importStar(require("./applications/interchain_accounts/controller/v1/tx.registry"));
const _285 = __importStar(require("./applications/interchain_accounts/host/v1/tx.registry"));
const _286 = __importStar(require("./applications/transfer/v1/tx.registry"));
const _287 = __importStar(require("./core/channel/v1/tx.registry"));
const _288 = __importStar(require("./core/client/v1/tx.registry"));
const _289 = __importStar(require("./core/connection/v1/tx.registry"));
const _290 = __importStar(require("./applications/interchain_accounts/controller/v1/query.lcd"));
const _291 = __importStar(require("./applications/interchain_accounts/host/v1/query.lcd"));
const _292 = __importStar(require("./applications/transfer/v1/query.lcd"));
const _293 = __importStar(require("./core/channel/v1/query.lcd"));
const _294 = __importStar(require("./core/client/v1/query.lcd"));
const _295 = __importStar(require("./core/connection/v1/query.lcd"));
const _296 = __importStar(require("./applications/interchain_accounts/controller/v1/query.rpc.Query"));
const _297 = __importStar(require("./applications/interchain_accounts/host/v1/query.rpc.Query"));
const _298 = __importStar(require("./applications/transfer/v1/query.rpc.Query"));
const _299 = __importStar(require("./core/channel/v1/query.rpc.Query"));
const _300 = __importStar(require("./core/client/v1/query.rpc.Query"));
const _301 = __importStar(require("./core/connection/v1/query.rpc.Query"));
const _302 = __importStar(require("./applications/interchain_accounts/controller/v1/tx.rpc.msg"));
const _303 = __importStar(require("./applications/interchain_accounts/host/v1/tx.rpc.msg"));
const _304 = __importStar(require("./applications/transfer/v1/tx.rpc.msg"));
const _305 = __importStar(require("./core/channel/v1/tx.rpc.msg"));
const _306 = __importStar(require("./core/client/v1/tx.rpc.msg"));
const _307 = __importStar(require("./core/connection/v1/tx.rpc.msg"));
const _314 = __importStar(require("./lcd"));
const _315 = __importStar(require("./rpc.query"));
const _316 = __importStar(require("./rpc.tx"));
var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let interchain_accounts;
        (function (interchain_accounts) {
            let controller;
            (function (controller) {
                controller.v1 = {
                    ..._137,
                    ..._138,
                    ..._139,
                    ..._278,
                    ..._284,
                    ..._290,
                    ..._296,
                    ..._302
                };
            })(controller = interchain_accounts.controller || (interchain_accounts.controller = {}));
            let genesis;
            (function (genesis) {
                genesis.v1 = {
                    ..._140
                };
            })(genesis = interchain_accounts.genesis || (interchain_accounts.genesis = {}));
            let host;
            (function (host) {
                host.v1 = {
                    ..._141,
                    ..._142,
                    ..._143,
                    ..._279,
                    ..._285,
                    ..._291,
                    ..._297,
                    ..._303
                };
            })(host = interchain_accounts.host || (interchain_accounts.host = {}));
            interchain_accounts.v1 = {
                ..._144,
                ..._145,
                ..._146
            };
        })(interchain_accounts = applications.interchain_accounts || (applications.interchain_accounts = {}));
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._147,
                ..._148,
                ..._149,
                ..._150,
                ..._151,
                ..._280,
                ..._286,
                ..._292,
                ..._298,
                ..._304
            };
            transfer.v2 = {
                ..._152
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._153,
                ..._154,
                ..._155,
                ..._156,
                ..._281,
                ..._287,
                ..._293,
                ..._299,
                ..._305
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._157,
                ..._158,
                ..._159,
                ..._160,
                ..._282,
                ..._288,
                ..._294,
                ..._300,
                ..._306
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._161
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._162,
                ..._163,
                ..._164,
                ..._165,
                ..._283,
                ..._289,
                ..._295,
                ..._301,
                ..._307
            };
        })(connection = core.connection || (core.connection = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v2 = {
                ..._166
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v2 = {
                ..._167
            };
            solomachine.v3 = {
                ..._168
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._169
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._314,
        ..._315,
        ..._316
    };
})(ibc || (exports.ibc = ibc = {}));
//# sourceMappingURL=bundle.js.map