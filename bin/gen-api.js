require("module-alias/register");
var Generators = require("../dist/src/support/Generators");
new Generators["default"]().generateApi();
console.log("Done!... Check /assets/dev/gen");