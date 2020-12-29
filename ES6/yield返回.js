
			function * show(num1,num2){ //generator不能写成箭头函数
				alert('a');
				
				yield 12;
				alert('b');
				return 44;
			}
    let gen=show();//生成器对象
    let res1=gen.next();
    console.log(res1)  //一个josn字符串{value:12,done:false}
    let res2=gen.next();
    console.log(res2)//{value: undefined, done: true} 
                   //{value: 44, done: true} 最后一步 根据return决定
