function fn(){
    function fn2(){
        this.age = 18;
    }
    fn2();
    console.log(this); //global
    console.log(this.age);// 18
    console.log(global.age);// 18
}
console.log('this: ', this); // {}

fn();
console.log('this1: ', this); // {}