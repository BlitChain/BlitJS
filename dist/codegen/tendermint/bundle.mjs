//@ts-nocheck
import * as _154 from "./abci/types";
import * as _155 from "./crypto/keys";
import * as _156 from "./crypto/proof";
import * as _157 from "./libs/bits/types";
import * as _158 from "./p2p/types";
import * as _159 from "./types/block";
import * as _160 from "./types/evidence";
import * as _161 from "./types/params";
import * as _162 from "./types/types";
import * as _163 from "./types/validator";
import * as _164 from "./version/types";
export var tendermint;
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
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map