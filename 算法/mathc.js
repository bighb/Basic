let article = "huangben a a  ben  张三  赵四  黄  ben  a dfsd ";
let wordList = article.trim().toLowerCase();
wordList = article.match(/[a-z]+/g);
article = " " + wordList.join("  ") + " ";
let nowMaxNum = 0;
let maxWord = "";
wordList.forEach(function (item) {
  let word = new RegExp(" " + item + " ", "g");
  let num = article.match(word).length;
  console.log("num: ", num);
  if (num > nowMaxNum) {
    nowMaxNum = num;
    maxWord = item;
  }
});
console.log("maxWord: ", maxWord);
console.log("nowMaxNum: ", nowMaxNum);
