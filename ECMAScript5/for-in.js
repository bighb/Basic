// let object={
//     name:'huangben',
//     age:1
// }
// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];
//         console.log('element: ', element);
        
//     }
// }
let arr=[2,3]
Array.prototype.getList=4
console.log('arr: ', arr);
for (const key in arr) {
    if (arr.hasOwnProperty(key)) {
        const element = arr[key]; //
        console.log('element: ', element); // 
        
    }
}