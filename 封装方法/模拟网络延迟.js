// 延迟函数
function delay(ms = 5000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//demo
function getHomeList() {
  return delay().then(() => {
    return {
      tabList: [
        {
          text: "精选推荐",
          key: 0,
        },
        {
          text: "夏日防晒",
          key: 1,
        },
        {
          text: "二胎大作战",
          key: 2,
        },
        {
          text: "人气榜",
          key: 3,
        },
        {
          text: "好评榜",
          key: 4,
        },
        {
          text: "RTX 30",
          key: 5,
        },
        {
          text: "手机也疯狂",
          key: 6,
        },
      ],
    };
  });
}
let i = 0;
console.log(i);
setInterval(() => {
  i++;
  console.log(i);
}, 1000);
getHomeList().then((res) => {
  console.log(res);
});
