//@ts-nocheck
import * as _138 from "./applications/interchain_accounts/controller/v1/controller";
import * as _139 from "./applications/interchain_accounts/controller/v1/query";
import * as _140 from "./applications/interchain_accounts/controller/v1/tx";
import * as _141 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _142 from "./applications/interchain_accounts/host/v1/host";
import * as _143 from "./applications/interchain_accounts/host/v1/query";
import * as _144 from "./applications/interchain_accounts/host/v1/tx";
import * as _145 from "./applications/interchain_accounts/v1/account";
import * as _146 from "./applications/interchain_accounts/v1/metadata";
import * as _147 from "./applications/interchain_accounts/v1/packet";
import * as _148 from "./applications/transfer/v1/authz";
import * as _149 from "./applications/transfer/v1/genesis";
import * as _150 from "./applications/transfer/v1/query";
import * as _151 from "./applications/transfer/v1/transfer";
import * as _152 from "./applications/transfer/v1/tx";
import * as _153 from "./applications/transfer/v2/packet";
import * as _154 from "./core/channel/v1/channel";
import * as _155 from "./core/channel/v1/genesis";
import * as _156 from "./core/channel/v1/query";
import * as _157 from "./core/channel/v1/tx";
import * as _158 from "./core/client/v1/client";
import * as _159 from "./core/client/v1/genesis";
import * as _160 from "./core/client/v1/query";
import * as _161 from "./core/client/v1/tx";
import * as _162 from "./core/commitment/v1/commitment";
import * as _163 from "./core/connection/v1/connection";
import * as _164 from "./core/connection/v1/genesis";
import * as _165 from "./core/connection/v1/query";
import * as _166 from "./core/connection/v1/tx";
import * as _167 from "./lightclients/localhost/v2/localhost";
import * as _168 from "./lightclients/solomachine/v2/solomachine";
import * as _169 from "./lightclients/solomachine/v3/solomachine";
import * as _170 from "./lightclients/tendermint/v1/tendermint";
import * as _240 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _241 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _242 from "./applications/transfer/v1/tx.amino";
import * as _243 from "./core/channel/v1/tx.amino";
import * as _244 from "./core/client/v1/tx.amino";
import * as _245 from "./core/connection/v1/tx.amino";
import * as _246 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _247 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _248 from "./applications/transfer/v1/tx.registry";
import * as _249 from "./core/channel/v1/tx.registry";
import * as _250 from "./core/client/v1/tx.registry";
import * as _251 from "./core/connection/v1/tx.registry";
import * as _252 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _253 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _254 from "./applications/transfer/v1/query.lcd";
import * as _255 from "./core/channel/v1/query.lcd";
import * as _256 from "./core/client/v1/query.lcd";
import * as _257 from "./core/connection/v1/query.lcd";
import * as _260 from "./lcd";
export var ibc;
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
})(ibc || (ibc = {}));
//# sourceMappingURL=bundle.js.map