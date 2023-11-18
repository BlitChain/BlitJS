//@ts-nocheck
import * as _132 from "./abci/types";
import * as _133 from "./crypto/keys";
import * as _134 from "./crypto/proof";
import * as _135 from "./libs/bits/types";
import * as _136 from "./p2p/types";
import * as _137 from "./types/block";
import * as _138 from "./types/evidence";
import * as _139 from "./types/params";
import * as _140 from "./types/types";
import * as _141 from "./types/validator";
import * as _142 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._132
    };
    tendermint.crypto = {
        ..._133,
        ..._134
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._135
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._136
    };
    tendermint.types = {
        ..._137,
        ..._138,
        ..._139,
        ..._140,
        ..._141
    };
    tendermint.version = {
        ..._142
    };
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map