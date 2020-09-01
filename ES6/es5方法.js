
	 	var arr=[1,3,4,5];
	 //	alert(arr.splice(1,2)); 删除指定位置，指定数量，的数组，
	 //	alert(arr)
	 	//删除
	 ///	alert(arr.unshift()) //插入数组，并返回插入后的数组长度
	 //	alert(arr.toString())  //字符串化
	// alert(arr.reverse())  //反转数组
	/* alert(arr.reduce(function(x,y){  //缩减数组。计算值
	 	return x*y;
	 }))*/
	/*	var arr=[1,3,4,5];
	 alert(
	 	arr.map(function(x,y,newarr){
	 		alert("开始")
	 		alert('x=>'+x);
	 		alert('y=>'+y);  y为下标0，1，2...
	 		return x+y;
	 	})
	 )//1,4,6,8,10*/
	// alert(newarr)
	var variables="";
	for(var name in this){
		variables+=name+"\n";
		console.log(variables)
	}
/*	var foo=function(x){
		if(x<2) return 1;
		else return x*arguments.callee(x-1);
	}
	alert(foo(5))*/
