// 生成一个try catch 请求

async function tryCatchRequest(url, options) {
  try {
    const response = await fetch(url, options);
    return response;
  } catch (error) {
    console.log(error);
  }
}
tryCatchRequest("https://www.baidu.com", { method: "GET" }).then((res) => {
  console.log(res);
});
