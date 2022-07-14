const getInf = (str, key) => str.replace(new RegExp(`${key}`, "gi"), (txt) => {
    console.log('txt: ', txt);
    return `%%${txt}%%`
}).split("%%");

let namestr='武汉科学技AA';
let key='a'
console.log(getInf(namestr,key));


// function heightLight(string, keyword) {
//     var reg = new RegExp(keyword, "gi");
//     console.log('reg: ', reg);
//     string = string.replace(reg, function(txt){
//         console.log('txt: ', txt);
//         return "<i>"+txt+"</i>";
//     })
//     return string;
// }
// console.log(heightLight(namestr,key));