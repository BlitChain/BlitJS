//@ts-nocheck
import * as _122 from "./abci/types";
import * as _123 from "./crypto/keys";
import * as _124 from "./crypto/proof";
import * as _125 from "./libs/bits/types";
import * as _126 from "./p2p/types";
import * as _127 from "./types/block";
import * as _128 from "./types/evidence";
import * as _129 from "./types/params";
import * as _130 from "./types/types";
import * as _131 from "./types/validator";
import * as _132 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._122
    };
    tendermint.crypto = {
        ..._123,
        ..._124
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._125
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._126
    };
    tendermint.types = {
        ..._127,
        ..._128,
        ..._129,
        ..._130,
        ..._131
    };
    tendermint.version = {
        ..._132
    };
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map