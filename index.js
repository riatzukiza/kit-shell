

(function(a, b, c) {
  /* node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);


;

;
var Descriptions = {  };
var R = require("ramda");
var fmap = R.curry(((f, a) => {
	
  return a.map(f);

}));
var is = { 
  string( v ){ 
    
      return typeof v === "string";
    
   }
 };
is.empty__QUERY = (function is$empty__QUERY$(value) {
  /* is.empty? node_modules/kit/inc/core/fp.sibilant:12:0 */

  return 0 === value.length;
});
var athrow = (function athrow$(errType, message) {
  /* athrow node_modules/kit/inc/core/fp.sibilant:14:0 */

  return (() => {
  	
    return (new errType(message));
  
  });
});
var getValueOf = (function getValueOf$(o) {
  /* get-value-of node_modules/kit/inc/core/fp.sibilant:17:0 */

  return o.getValue();
});
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
module.filename = process.cwd();
(function() {
  if (fs.existsSync("./.sibilant/meta.sibilant")) {
    return sibilant.include("./.sibilant/meta");
  }
}).call(this);
mixin({ 
  sibilant:require("sibilant"),
  R:require("ramda"),
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
var rlConfig = { 
  input:process.stdin,
  output:process.stdout,
  prompt:"#>"
 };
(function(repl, rl) {
  /* node_modules/kit/inc/macros.sibilant:162:9 */

  rl.on("line", (function() {
    /* src/index.sibilant:37:16 */
  
    return repl.send(arguments[0]);
  }));
  repl.on("result", (function(b, ...others) {
    /* node_modules/kit/inc/console.sibilant:10:8 */
  
    console.log("result:", b, ...others);
    return b;
  })).on("result", (function() {
    /* src/index.sibilant:41:21 */
  
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