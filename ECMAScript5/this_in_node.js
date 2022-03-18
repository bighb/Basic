console.log(this);
console.log(this === global);
console.log(this === module.exports);
function test(params) {
    "use strict"
    
    console.log(this === undefined);
}
test()