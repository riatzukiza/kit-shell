

(function(a, b, c) {
  /* node_modules/kit/inc/core/defs.sibilant:53:9 */

  return foo(this);
}).bind(this);





;
var R = require("ramda");
var { 
  Interface
 } = require("kit-interface");
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
sibilant.include("kit/header");
sibilant.include("kit-loader/index");
sibilant.include(require.resolve("./meta"));
sibilant.include("kit-interface/header");
module.filename = process.cwd();
(function() {
  if (fs.existsSync("./.sibilant/meta.sibilant")) {
    return sibilant.include("./.sibilant/meta");
  }
}).call(this);
var Path = require("path");
mixin({ 
  sibilant:require("sibilant"),
  R:require("ramda"),
  process,
  module,
  exports,
  require( modulePath ){ 
    
      return require((function() {
        if (modulePath[0] === ".") {
          return Path.join(process.cwd(), modulePath);
        }
      }).call(this), modulePath);
    
   },
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
var appendLine = R.curry(((path, d) => {
	
  return appendFile(path, (d + "\n"));

}));
var appendFile = R.curry(((path, d) => {
	
  return (new Promise(((success, fail) => {
  	
    var resolve = success,
        reject = fail;
    return fs.appendFile(path, d, ((e) => {
    	
      return (function() {
        if (e) {
          return fail(e);
        } else {
          return success();
        }
      }).call(this);
    
    }));
  
  })));

}));
var readHistory = (function readHistory$(actor) {
  /* read-history src/index.sibilant:47:0 */

  console.log("reading history");
  return appendFile("./history.sibilant", "").then(((nil) => {
  	
    return (new Promise(((success, fail) => {
    	
      var resolve = success,
          reject = fail;
      return fs.createReadStream("./history.sibilant").on("data", (function() {
        /* src/index.sibilant:52:30 */
      
        return actor.send((arguments[0] + ""));
      })).on("end", success).on("error", fail);
    
    })));
  
  }));
});
(function(repl, rl) {
  /* node_modules/kit/inc/scope.sibilant:12:9 */

  readHistory(repl).then(((nil) => {
  	
    return rl.on("line", (function() {
      /* src/index.sibilant:60:38 */
    
      return repl.send(arguments[0]);
    })).on("line", appendLine("./history.sibilant"));
  
  }));
  repl.on("result", (function(b, ...others) {
    /* node_modules/kit/inc/console.sibilant:10:8 */
  
    console.log("result:", b, ...others);
    return b;
  })).on("result", (function() {
    /* src/index.sibilant:65:21 */
  
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