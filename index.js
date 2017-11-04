console.log("loading kit shell");

var Descriptions = {};
var R = require("ramda");
var fmap = R.curry(((f, a) => {

    return a.map(f);

}));
console.log("loading dependencies");
var {
    create,
    extend,
    mixin,
    conditional,
    cond,
    partiallyApplyAfter
} = require("kit/js/util");
var fs = require("fs"),
    sibilant = require("sibilant"),
    readline = require("readline");
var repl = require("kit-repl/js/repl");
var REPL = repl.REPL;
sibilant.include("kit/header", require.resolve("./meta"));
sibilant.include("kit-loader/index");
module.filename = process.cwd();
(function() {
    if (fs.existsSync("./.sibilant/meta.sibilant")) {
        return sibilant.include("./.sibilant/meta");
    }
}).call(this);
mixin({
    sibilant: require("sibilant"),
    R: require("ramda"),
    process,
    module,
    exports,
    require,
    create,
    extend,
    mixin,
    conditional,
    cond,
    partiallyApplyAfter
}, global);
console.log("done loading dependencies");
var rlConfig = {
    input: process.stdin,
    output: process.stdout,
    prompt: "#>"
};
(function(repl, rl) {
    /* node_modules/kit/inc/macros.sibilant:160:9 */

    rl.on("line", (function() {
        /* src/index.sibilant:38:16 */

        return repl.send(arguments[0]);
    }));
    repl.on("result", (function(b, ...others) {
        /* node_modules/kit/inc/console.sibilant:10:8 */

        console.log("result:", b, ...others);
        return b;
    })).on("result", (function() {
        /* src/index.sibilant:42:21 */

        return rl.prompt(arguments[0]);
    })).on("error", (function(b, ...others) {
        /* node_modules/kit/inc/console.sibilant:10:8 */

        console.log("error:", b, ...others);
        return b;
    })).on("log", (function(b, ...others) {
        /* node_modules/kit/inc/console.sibilant:10:8 */

        console.log("log:", b, ...others);
        return b;
    }));
    console.log("awaiting input");
    return rl.prompt();
})(create(REPL)().start(), readline.createInterface(rlConfig));
