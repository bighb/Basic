const getUrlParams = (url) => {
  // 定义一个 parse url.search 的方法
  function parse(url) {
    const obj = {};
    url.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (obj[k] = v));
    return obj;
  }
  url = url.split("#").shift();
  return parse(url);
};

let url = "id=33&type=3";
let obj = getUrlParams(url);
console.log("obj: ", obj);
