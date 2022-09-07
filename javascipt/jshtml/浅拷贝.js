let start = {
  name: "古力娜扎",
  age: "22",
  friend: {
    name: "邓超",
  },
};
let returnedTarget = Object.assign({}, start);
returnedTarget.name = "张三";
console.log(start);
console.log(returnedTarget);
