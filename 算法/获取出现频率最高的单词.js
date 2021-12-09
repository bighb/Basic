function findMostWord(article) {
  // 合法性判断
  if (!article) return;

  // 参数处理
  article = article.trim().toLowerCase();
  console.log("article: ", article);

  let wordList = article.match(/[a-z]+/g),
    visited = [],
    maxNum = 0,
    maxWord = "";

  console.log("wordList: ", wordList);
  article = " " + wordList.join("  ") + " ";
  console.log("article: ", article);

  // 遍历判断单词出现次数
  wordList.forEach(function (item) {
    if (visited.indexOf(item) < 0) {
      console.log("item: ", item);
      // 加入 visited
      visited.push(item);

      let word = new RegExp(" " + item + " ", "g");
      let num = article.match(word).length;
      console.log("num: ", num);

      if (num > maxNum) {
        maxNum = num;
        maxWord = item;
      }
    }
  });

  return maxWord + "  " + maxNum;
}
let msg = "huangben  ben  张三  赵四  黄  ben  a dfsd ";

let res = findMostWord(msg);
console.log("res: ", res);
