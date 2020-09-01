
			function * show(num1,num2){  //中间加* 或者贴着两边
				alert(`${num1},${num2}`);  //模板字符串中嵌入变量，需要将变量名写在${}之中。
		 let a=  yield;          //放弃的意思 
		 console.log(a)  //5
				alert('b')
			}
		let genObj=	show(100,33);
		console.log(genObj);
		genObj.next(12);
		genObj.next(5);
