//@ts-nocheck
import * as _135 from "./applications/interchain_accounts/controller/v1/controller";
import * as _136 from "./applications/interchain_accounts/controller/v1/query";
import * as _137 from "./applications/interchain_accounts/controller/v1/tx";
import * as _138 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _139 from "./applications/interchain_accounts/host/v1/host";
import * as _140 from "./applications/interchain_accounts/host/v1/query";
import * as _141 from "./applications/interchain_accounts/host/v1/tx";
import * as _142 from "./applications/interchain_accounts/v1/account";
import * as _143 from "./applications/interchain_accounts/v1/metadata";
import * as _144 from "./applications/interchain_accounts/v1/packet";
import * as _145 from "./applications/transfer/v1/authz";
import * as _146 from "./applications/transfer/v1/genesis";
import * as _147 from "./applications/transfer/v1/query";
import * as _148 from "./applications/transfer/v1/transfer";
import * as _149 from "./applications/transfer/v1/tx";
import * as _150 from "./applications/transfer/v2/packet";
import * as _151 from "./core/channel/v1/channel";
import * as _152 from "./core/channel/v1/genesis";
import * as _153 from "./core/channel/v1/query";
import * as _154 from "./core/channel/v1/tx";
import * as _155 from "./core/client/v1/client";
import * as _156 from "./core/client/v1/genesis";
import * as _157 from "./core/client/v1/query";
import * as _158 from "./core/client/v1/tx";
import * as _159 from "./core/commitment/v1/commitment";
import * as _160 from "./core/connection/v1/connection";
import * as _161 from "./core/connection/v1/genesis";
import * as _162 from "./core/connection/v1/query";
import * as _163 from "./core/connection/v1/tx";
import * as _164 from "./lightclients/localhost/v2/localhost";
import * as _165 from "./lightclients/solomachine/v2/solomachine";
import * as _166 from "./lightclients/solomachine/v3/solomachine";
import * as _167 from "./lightclients/tendermint/v1/tendermint";
import * as _276 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _277 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _278 from "./applications/transfer/v1/tx.amino";
import * as _279 from "./core/channel/v1/tx.amino";
import * as _280 from "./core/client/v1/tx.amino";
import * as _281 from "./core/connection/v1/tx.amino";
import * as _282 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _283 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _284 from "./applications/transfer/v1/tx.registry";
import * as _285 from "./core/channel/v1/tx.registry";
import * as _286 from "./core/client/v1/tx.registry";
import * as _287 from "./core/connection/v1/tx.registry";
import * as _288 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _289 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _290 from "./applications/transfer/v1/query.lcd";
import * as _291 from "./core/channel/v1/query.lcd";
import * as _292 from "./core/client/v1/query.lcd";
import * as _293 from "./core/connection/v1/query.lcd";
import * as _294 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _295 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _296 from "./applications/transfer/v1/query.rpc.Query";
import * as _297 from "./core/channel/v1/query.rpc.Query";
import * as _298 from "./core/client/v1/query.rpc.Query";
import * as _299 from "./core/connection/v1/query.rpc.Query";
import * as _300 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _301 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _302 from "./applications/transfer/v1/tx.rpc.msg";
import * as _303 from "./core/channel/v1/tx.rpc.msg";
import * as _304 from "./core/client/v1/tx.rpc.msg";
import * as _305 from "./core/connection/v1/tx.rpc.msg";
import * as _312 from "./lcd";
import * as _313 from "./rpc.query";
import * as _314 from "./rpc.tx";
export var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let interchain_accounts;
        (function (interchain_accounts) {
            let controller;
            (function (controller) {
                controller.v1 = {
                    ..._135,
                    ..._136,
                    ..._137,
                    ..._276,
                    ..._282,
                    ..._288,
                    ..._294,
                    ..._300
                };
            })(controller = interchain_accounts.controller || (interchain_accounts.controller = {}));
            let genesis;
            (function (genesis) {
                genesis.v1 = {
                    ..._138
                };
            })(genesis = interchain_accounts.genesis || (interchain_accounts.genesis = {}));
            let host;
            (function (host) {
                host.v1 = {
                    ..._139,
                    ..._140,
                    ..._141,
                    ..._277,
                    ..._283,
                    ..._289,
                    ..._295,
                    ..._301
                };
            })(host = interchain_accounts.host || (interchain_accounts.host = {}));
            interchain_accounts.v1 = {
                ..._142,
                ..._143,
                ..._144
            };
        })(interchain_accounts = applications.interchain_accounts || (applications.interchain_accounts = {}));
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._145,
                ..._146,
                ..._147,
                ..._148,
                ..._149,
                ..._278,
                ..._284,
                ..._290,
                ..._296,
                ..._302
            };
            transfer.v2 = {
                ..._150
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._151,
                ..._152,
                ..._153,
                ..._154,
                ..._279,
                ..._285,
                ..._291,
                ..._297,
                ..._303
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._155,
                ..._156,
                ..._157,
                ..._158,
                ..._280,
                ..._286,
                ..._292,
                ..._298,
                ..._304
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._159
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._160,
                ..._161,
                ..._162,
                ..._163,
                ..._281,
                ..._287,
                ..._293,
                ..._299,
                ..._305
            };
        })(connection = core.connection || (core.connection = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v2 = {
                ..._164
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v2 = {
                ..._165
            };
            solomachine.v3 = {
                ..._166
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._167
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._312,
        ..._313,
        ..._314
    };
})(ibc || (ibc = {}));
//# sourceMappingURL=bundle.js.map