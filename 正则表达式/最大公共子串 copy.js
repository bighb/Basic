const longestCommonSubstring = (str1, str2) => {
  let lcs = "";
  let lcsArr = new Array(str1.length + 1);
  for (let i = 0; i < lcsArr.length; i++) {
    lcsArr[i] = new Array(str2.length + 1).fill(0);
  }
  for (let i = 1; i < lcsArr.length; i++) {
    for (let j = 1; j < lcsArr[i].length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        lcsArr[i][j] = lcsArr[i - 1][j - 1] + 1;
        if (lcs.length < lcsArr[i][j]) {
          lcs = str1.substring(i - lcsArr[i][j], i);
        }
      } else {
        lcsArr[i][j] = 0;
      }
    }
  }
  return lcs;
};
console.log(
  longestCommonSubstring("武汉科技馆小小科学界探究实验活动中心", "科技馆")
);
