 let cadreTypeOptons=[
    { value: 1, name: '书记' },
    { value: 2, name: '团支书' }
  ] // 后期用数据字典
  
let a=cadreTypeOptons.find(e=>{
    
    return e.value ===2
}).name
console.log(a);
 