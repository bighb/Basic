// 统计数组中勾选的总数
let todos = [
    { id: "001", name: "吃饭", done: true },
    { id: "002", name: "睡觉", done: true },
    { id: "003", name: "打代码", done: false },
    { id: "004", name: "逛街", done: true },
  ];
  let total = todos.reduce((pre, ele) => {
      console.log('pre: ', pre);
    return pre+(ele.done ? 1:0)
  },0);
  console.log("total: ", total);
  