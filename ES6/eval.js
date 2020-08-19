function test(params) {
    console.log(1111);
}
let foo='test'
console.log('开始请求');
setTimeout(() => {
    
     let funcName= foo+'()'
    // if(typeof(eval(funcName)) == "function" ){
        eval(funcName)
    // }
}, 2000);