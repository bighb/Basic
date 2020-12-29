function* quips(name){
    yield "你好" + name +'!';
    yield '希望你喜欢'
    if(name.startsWith("X")){
        yield `你的名字${name}首字母事x`
    }
    yield "下次见"
}
let iter= quips('Xbighbx')

console.log('iter.next: ', iter.next());
console.log('iter.next: ', iter.next());

console.log('iter.next: ', iter.next());
console.log('iter.next: ', iter.next());



