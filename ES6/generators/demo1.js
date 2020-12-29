

/**
 *es5写法
 *
 * @param {*} icons
 * @param {*} rowLength
 * @returns
 */
function splitIntoRows(icons,rowLength) {
    let rows=[]
    for (var index = 0; index < icons.length; index += rowLength) {
      rows.push(icons.slice(index,index+rowLength))
        
    }
    return rows
}
let res=splitIntoRows([1,2,3,4,5,6,7],2)
console.log('res: ', res);
/**
 *
 *
 * @param {*} icons
 * @param {*} rowLength
 */
function* splitIntoRows2(icons,rowLength) {
    for (var index = 0; index < icons.length; index += rowLength) {
      yield icons.slice(index,index+rowLength)
          
      }
}
let res1=splitIntoRows2([1,2,3,4,5,6,7],2).next()
console.log('res1: ', res1);
