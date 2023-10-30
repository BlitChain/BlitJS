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
exports.tendermint = void 0;
//@ts-nocheck
const _154 = __importStar(require("./abci/types"));
const _155 = __importStar(require("./crypto/keys"));
const _156 = __importStar(require("./crypto/proof"));
const _157 = __importStar(require("./libs/bits/types"));
const _158 = __importStar(require("./p2p/types"));
const _159 = __importStar(require("./types/block"));
const _160 = __importStar(require("./types/evidence"));
const _161 = __importStar(require("./types/params"));
const _162 = __importStar(require("./types/types"));
const _163 = __importStar(require("./types/validator"));
const _164 = __importStar(require("./version/types"));
var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._154
    };
    tendermint.crypto = {
        ..._155,
        ..._156
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._157
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._158
    };
    tendermint.types = {
        ..._159,
        ..._160,
        ..._161,
        ..._162,
        ..._163
    };
    tendermint.version = {
        ..._164
    };
})(tendermint || (exports.tendermint = tendermint = {}));
//# sourceMappingURL=bundle.js.map