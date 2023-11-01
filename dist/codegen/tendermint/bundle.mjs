//@ts-nocheck
import * as _91 from "./abci/types";
import * as _92 from "./crypto/keys";
import * as _93 from "./crypto/proof";
import * as _94 from "./libs/bits/types";
import * as _95 from "./p2p/types";
import * as _96 from "./types/block";
import * as _97 from "./types/evidence";
import * as _98 from "./types/params";
import * as _99 from "./types/types";
import * as _100 from "./types/validator";
import * as _101 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._91
    };
    tendermint.crypto = {
        ..._92,
        ..._93
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._94
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._95
    };
    tendermint.types = {
        ..._96,
        ..._97,
        ..._98,
        ..._99,
        ..._100
    };
    tendermint.version = {
        ..._101
    };
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map