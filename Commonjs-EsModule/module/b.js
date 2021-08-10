const sayName = require("./a.js");
require("./main");
console.log("我是B");
module.exports = function say() {
  return {
    name: sayName(),
    author: "我不是外星人",
  };
};
