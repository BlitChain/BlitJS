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
const _138 = __importStar(require("./applications/interchain_accounts/controller/v1/controller"));
const _139 = __importStar(require("./applications/interchain_accounts/controller/v1/query"));
const _140 = __importStar(require("./applications/interchain_accounts/controller/v1/tx"));
const _141 = __importStar(require("./applications/interchain_accounts/genesis/v1/genesis"));
const _142 = __importStar(require("./applications/interchain_accounts/host/v1/host"));
const _143 = __importStar(require("./applications/interchain_accounts/host/v1/query"));
const _144 = __importStar(require("./applications/interchain_accounts/host/v1/tx"));
const _145 = __importStar(require("./applications/interchain_accounts/v1/account"));
const _146 = __importStar(require("./applications/interchain_accounts/v1/metadata"));
const _147 = __importStar(require("./applications/interchain_accounts/v1/packet"));
const _148 = __importStar(require("./applications/transfer/v1/authz"));
const _149 = __importStar(require("./applications/transfer/v1/genesis"));
const _150 = __importStar(require("./applications/transfer/v1/query"));
const _151 = __importStar(require("./applications/transfer/v1/transfer"));
const _152 = __importStar(require("./applications/transfer/v1/tx"));
const _153 = __importStar(require("./applications/transfer/v2/packet"));
const _154 = __importStar(require("./core/channel/v1/channel"));
const _155 = __importStar(require("./core/channel/v1/genesis"));
const _156 = __importStar(require("./core/channel/v1/query"));
const _157 = __importStar(require("./core/channel/v1/tx"));
const _158 = __importStar(require("./core/client/v1/client"));
const _159 = __importStar(require("./core/client/v1/genesis"));
const _160 = __importStar(require("./core/client/v1/query"));
const _161 = __importStar(require("./core/client/v1/tx"));
const _162 = __importStar(require("./core/commitment/v1/commitment"));
const _163 = __importStar(require("./core/connection/v1/connection"));
const _164 = __importStar(require("./core/connection/v1/genesis"));
const _165 = __importStar(require("./core/connection/v1/query"));
const _166 = __importStar(require("./core/connection/v1/tx"));
const _167 = __importStar(require("./lightclients/localhost/v2/localhost"));
const _168 = __importStar(require("./lightclients/solomachine/v2/solomachine"));
const _169 = __importStar(require("./lightclients/solomachine/v3/solomachine"));
const _170 = __importStar(require("./lightclients/tendermint/v1/tendermint"));
const _240 = __importStar(require("./applications/interchain_accounts/controller/v1/tx.amino"));
const _241 = __importStar(require("./applications/interchain_accounts/host/v1/tx.amino"));
const _242 = __importStar(require("./applications/transfer/v1/tx.amino"));
const _243 = __importStar(require("./core/channel/v1/tx.amino"));
const _244 = __importStar(require("./core/client/v1/tx.amino"));
const _245 = __importStar(require("./core/connection/v1/tx.amino"));
const _246 = __importStar(require("./applications/interchain_accounts/controller/v1/tx.registry"));
const _247 = __importStar(require("./applications/interchain_accounts/host/v1/tx.registry"));
const _248 = __importStar(require("./applications/transfer/v1/tx.registry"));
const _249 = __importStar(require("./core/channel/v1/tx.registry"));
const _250 = __importStar(require("./core/client/v1/tx.registry"));
const _251 = __importStar(require("./core/connection/v1/tx.registry"));
const _252 = __importStar(require("./applications/interchain_accounts/controller/v1/query.lcd"));
const _253 = __importStar(require("./applications/interchain_accounts/host/v1/query.lcd"));
const _254 = __importStar(require("./applications/transfer/v1/query.lcd"));
const _255 = __importStar(require("./core/channel/v1/query.lcd"));
const _256 = __importStar(require("./core/client/v1/query.lcd"));
const _257 = __importStar(require("./core/connection/v1/query.lcd"));
const _260 = __importStar(require("./lcd"));
var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let interchain_accounts;
        (function (interchain_accounts) {
            let controller;
            (function (controller) {
                controller.v1 = {
                    ..._138,
                    ..._139,
                    ..._140,
                    ..._240,
                    ..._246,
                    ..._252
                };
            })(controller = interchain_accounts.controller || (interchain_accounts.controller = {}));
            let genesis;
            (function (genesis) {
                genesis.v1 = {
                    ..._141
                };
            })(genesis = interchain_accounts.genesis || (interchain_accounts.genesis = {}));
            let host;
            (function (host) {
                host.v1 = {
                    ..._142,
                    ..._143,
                    ..._144,
                    ..._241,
                    ..._247,
                    ..._253
                };
            })(host = interchain_accounts.host || (interchain_accounts.host = {}));
            interchain_accounts.v1 = {
                ..._145,
                ..._146,
                ..._147
            };
        })(interchain_accounts = applications.interchain_accounts || (applications.interchain_accounts = {}));
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._148,
                ..._149,
                ..._150,
                ..._151,
                ..._152,
                ..._242,
                ..._248,
                ..._254
            };
            transfer.v2 = {
                ..._153
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._154,
                ..._155,
                ..._156,
                ..._157,
                ..._243,
                ..._249,
                ..._255
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._158,
                ..._159,
                ..._160,
                ..._161,
                ..._244,
                ..._250,
                ..._256
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._162
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._163,
                ..._164,
                ..._165,
                ..._166,
                ..._245,
                ..._251,
                ..._257
            };
        })(connection = core.connection || (core.connection = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v2 = {
                ..._167
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v2 = {
                ..._168
            };
            solomachine.v3 = {
                ..._169
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._170
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._260
    };
})(ibc || (exports.ibc = ibc = {}));
//# sourceMappingURL=bundle.js.map