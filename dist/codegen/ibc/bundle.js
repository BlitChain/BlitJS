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
const _93 = __importStar(require("./applications/interchain_accounts/controller/v1/controller"));
const _94 = __importStar(require("./applications/interchain_accounts/controller/v1/query"));
const _95 = __importStar(require("./applications/interchain_accounts/controller/v1/tx"));
const _96 = __importStar(require("./applications/interchain_accounts/genesis/v1/genesis"));
const _97 = __importStar(require("./applications/interchain_accounts/host/v1/host"));
const _98 = __importStar(require("./applications/interchain_accounts/host/v1/query"));
const _99 = __importStar(require("./applications/interchain_accounts/host/v1/tx"));
const _100 = __importStar(require("./applications/interchain_accounts/v1/account"));
const _101 = __importStar(require("./applications/interchain_accounts/v1/metadata"));
const _102 = __importStar(require("./applications/interchain_accounts/v1/packet"));
const _103 = __importStar(require("./applications/transfer/v1/authz"));
const _104 = __importStar(require("./applications/transfer/v1/genesis"));
const _105 = __importStar(require("./applications/transfer/v1/query"));
const _106 = __importStar(require("./applications/transfer/v1/transfer"));
const _107 = __importStar(require("./applications/transfer/v1/tx"));
const _108 = __importStar(require("./applications/transfer/v2/packet"));
const _109 = __importStar(require("./core/channel/v1/channel"));
const _110 = __importStar(require("./core/channel/v1/genesis"));
const _111 = __importStar(require("./core/channel/v1/query"));
const _112 = __importStar(require("./core/channel/v1/tx"));
const _113 = __importStar(require("./core/client/v1/client"));
const _114 = __importStar(require("./core/client/v1/genesis"));
const _115 = __importStar(require("./core/client/v1/query"));
const _116 = __importStar(require("./core/client/v1/tx"));
const _117 = __importStar(require("./core/commitment/v1/commitment"));
const _118 = __importStar(require("./core/connection/v1/connection"));
const _119 = __importStar(require("./core/connection/v1/genesis"));
const _120 = __importStar(require("./core/connection/v1/query"));
const _121 = __importStar(require("./core/connection/v1/tx"));
const _122 = __importStar(require("./lightclients/localhost/v2/localhost"));
const _123 = __importStar(require("./lightclients/solomachine/v2/solomachine"));
const _124 = __importStar(require("./lightclients/solomachine/v3/solomachine"));
const _125 = __importStar(require("./lightclients/tendermint/v1/tendermint"));
const _215 = __importStar(require("./applications/interchain_accounts/controller/v1/tx.amino"));
const _216 = __importStar(require("./applications/interchain_accounts/host/v1/tx.amino"));
const _217 = __importStar(require("./applications/transfer/v1/tx.amino"));
const _218 = __importStar(require("./core/channel/v1/tx.amino"));
const _219 = __importStar(require("./core/client/v1/tx.amino"));
const _220 = __importStar(require("./core/connection/v1/tx.amino"));
const _221 = __importStar(require("./applications/interchain_accounts/controller/v1/tx.registry"));
const _222 = __importStar(require("./applications/interchain_accounts/host/v1/tx.registry"));
const _223 = __importStar(require("./applications/transfer/v1/tx.registry"));
const _224 = __importStar(require("./core/channel/v1/tx.registry"));
const _225 = __importStar(require("./core/client/v1/tx.registry"));
const _226 = __importStar(require("./core/connection/v1/tx.registry"));
const _227 = __importStar(require("./applications/interchain_accounts/controller/v1/query.lcd"));
const _228 = __importStar(require("./applications/interchain_accounts/host/v1/query.lcd"));
const _229 = __importStar(require("./applications/transfer/v1/query.lcd"));
const _230 = __importStar(require("./core/channel/v1/query.lcd"));
const _231 = __importStar(require("./core/client/v1/query.lcd"));
const _232 = __importStar(require("./core/connection/v1/query.lcd"));
const _233 = __importStar(require("./applications/interchain_accounts/controller/v1/query.rpc.Query"));
const _234 = __importStar(require("./applications/interchain_accounts/host/v1/query.rpc.Query"));
const _235 = __importStar(require("./applications/transfer/v1/query.rpc.Query"));
const _236 = __importStar(require("./core/channel/v1/query.rpc.Query"));
const _237 = __importStar(require("./core/client/v1/query.rpc.Query"));
const _238 = __importStar(require("./core/connection/v1/query.rpc.Query"));
const _239 = __importStar(require("./applications/interchain_accounts/controller/v1/tx.rpc.msg"));
const _240 = __importStar(require("./applications/interchain_accounts/host/v1/tx.rpc.msg"));
const _241 = __importStar(require("./applications/transfer/v1/tx.rpc.msg"));
const _242 = __importStar(require("./core/channel/v1/tx.rpc.msg"));
const _243 = __importStar(require("./core/client/v1/tx.rpc.msg"));
const _244 = __importStar(require("./core/connection/v1/tx.rpc.msg"));
const _251 = __importStar(require("./lcd"));
const _252 = __importStar(require("./rpc.query"));
const _253 = __importStar(require("./rpc.tx"));
var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let interchain_accounts;
        (function (interchain_accounts) {
            let controller;
            (function (controller) {
                controller.v1 = {
                    ..._93,
                    ..._94,
                    ..._95,
                    ..._215,
                    ..._221,
                    ..._227,
                    ..._233,
                    ..._239
                };
            })(controller = interchain_accounts.controller || (interchain_accounts.controller = {}));
            let genesis;
            (function (genesis) {
                genesis.v1 = {
                    ..._96
                };
            })(genesis = interchain_accounts.genesis || (interchain_accounts.genesis = {}));
            let host;
            (function (host) {
                host.v1 = {
                    ..._97,
                    ..._98,
                    ..._99,
                    ..._216,
                    ..._222,
                    ..._228,
                    ..._234,
                    ..._240
                };
            })(host = interchain_accounts.host || (interchain_accounts.host = {}));
            interchain_accounts.v1 = {
                ..._100,
                ..._101,
                ..._102
            };
        })(interchain_accounts = applications.interchain_accounts || (applications.interchain_accounts = {}));
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._103,
                ..._104,
                ..._105,
                ..._106,
                ..._107,
                ..._217,
                ..._223,
                ..._229,
                ..._235,
                ..._241
            };
            transfer.v2 = {
                ..._108
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._109,
                ..._110,
                ..._111,
                ..._112,
                ..._218,
                ..._224,
                ..._230,
                ..._236,
                ..._242
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._113,
                ..._114,
                ..._115,
                ..._116,
                ..._219,
                ..._225,
                ..._231,
                ..._237,
                ..._243
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._117
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._118,
                ..._119,
                ..._120,
                ..._121,
                ..._220,
                ..._226,
                ..._232,
                ..._238,
                ..._244
            };
        })(connection = core.connection || (core.connection = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v2 = {
                ..._122
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v2 = {
                ..._123
            };
            solomachine.v3 = {
                ..._124
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._125
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._251,
        ..._252,
        ..._253
    };
})(ibc || (exports.ibc = ibc = {}));
//# sourceMappingURL=bundle.js.map