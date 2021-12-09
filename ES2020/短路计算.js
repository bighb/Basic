// 当取深度对象属性值时，不比用if判断是否是null undefined 等

let list = [
  {
    user: {
      name: "zhangsan",
    },
    goodid: 1,
  },
  {
    goodid: 1,
  },
];

// 取name字段值
// 传统写法
list.forEach((e) => {
  //console.log(e.user.name);       //当遍历到第二个数组对象时，因为没有user字段，导致程序报错
});

// 可选链操作符
list.forEach((e) => {
  console.log(e.user?.name); //当遍历到第二个数组对象时，因为没有user字段,短路直接返回undefined,程序不会报错死掉
});
// 相当于 先判断
list.forEach((e) => {
  if (e.user) {
    console.log(e.user.name);
  }
});
