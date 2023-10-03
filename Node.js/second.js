const { Module } = require("module")
// (function(exports,require,module,__filename,__dirname){

harry={
    name:"harry",
    favnum:2,
    // rank:1
}
console.log(exports,require,module,__filename,__dirname)
module.exports=harry;
// })