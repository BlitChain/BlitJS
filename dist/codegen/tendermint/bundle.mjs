//@ts-nocheck
import * as _150 from "./abci/types";
import * as _151 from "./crypto/keys";
import * as _152 from "./crypto/proof";
import * as _153 from "./libs/bits/types";
import * as _154 from "./p2p/types";
import * as _155 from "./types/block";
import * as _156 from "./types/evidence";
import * as _157 from "./types/params";
import * as _158 from "./types/types";
import * as _159 from "./types/validator";
import * as _160 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._150
    };
    tendermint.crypto = {
        ..._151,
        ..._152
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._153
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._154
    };
    tendermint.types = {
        ..._155,
        ..._156,
        ..._157,
        ..._158,
        ..._159
    };
    tendermint.version = {
        ..._160
    };
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map