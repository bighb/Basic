

  function lcs_test(a, b) {
    var ai, al = a.length,
        bi, bl = b.length - 1, maxBi,
        max = 0, val,
        row = [],
        ret = [];
 
    for (ai = 0; ai < al; ai++) {
        for (bi = bl; bi > -1; bi--) {
            val = a[ai] == b[bi] ? 1 : 0;
            if (val) {
                if (row[bi - 1]) {
                    val += row[bi - 1];
                }
                if (val > max) {
                    max = val;
                    maxBi = bi;
                }
            }
            row[bi] = val;
        }
    }
 
    for (; max > 0; max--, maxBi--) {
        ret.unshift(b[maxBi]);
    }
 
    return ret.join('');
}
console.log(lcs_test("东湖观光氦气球", "东湖氦气球"));
// console.log("2. " + lcs_test("武汉科学技术官（新馆）", "科技馆"));
// console.log("3. " + lcs_test("武汉科技馆小小科学界探究实验活动中心", "科技馆"));
// console.log("4. " + lcs_test("武汉科学技术馆·游客服务中心", "科技馆"));
// console.log("5. " + lcs_test("中国建筑科技馆", "科技馆"));
