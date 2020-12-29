let a={
    name:'黄奔',
    age:'223'
}
let b={
    name:'张三',
    color: 'red',
    height:'190'
}
let c ={
    ...a,
    ...b
}
console.log(c);