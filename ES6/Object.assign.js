let ele = {
  name: 1,
};
let ele2 = {
  ...ele,
  name: 2,
};

console.log(ele, ele2);
// 分割线
let obj1 = {
  a: 1,
  user: {
    b: 1,
  },
};
let obj2 = Object.assign({
  ...obj1,
  a: 3,

  user: {
    b: 3,
  },
});
// obj2.user.b = 2;
console.log(obj1, obj2);
