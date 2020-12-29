
		 	//类 老的 类和构造函数同一种写法
		 /*	function User(name,pass){
		 		this.name=name;
		 		this.pass=pass;
		 	}
		 	User.prototype.showName=function(){
		 		alert(this.name);
		 	};
		 	User.prototype.showPass=function(){
		 		alert(this.pass);
		 	}
		 	//实例化一个对象
		 	var u1=new User('huangben','123');
		 	u1.showName();
		 	u1.showPass();*/
		 	
		 	
		 	
		 	//新的 新增关键字 class 和构造器 将两者分开=====================================
		 	class User{  //类
		 		constructor(name,pass){ //构造器
		 			this.name=name;
		 			this.pass=pass;
		 		} 

				 //注意，这里每个方法不带function,并且之间不能带豆好
		 		showName(){
		 			alert(this.name);
		 		}
		 		showPass(){
		 			alert(this.pass);
		 		}
		 	}
			// User === User.prototype.constructor // true
		 	var u2=new User('huangben','123');
		 	u2.showName();
		 	u2.showPass();
		 	alert(u2.name)
			 console.log(u2);
