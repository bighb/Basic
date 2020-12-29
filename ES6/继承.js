
			//老版继承的方法
		 	function User(name,pass){
		 		this.name=name;
		 		this.pass=pass;
		 	}
		 	User.prototype.showName=function(){
		 		alert(this.name);
		 	};
		 	User.prototype.showPass=function(){
		 		alert(this.pass);
		 	}
		 	//给对象加一个方法
		 	function VipUser(name,pass,level){
		 		User.call(this,name,pass); //继承父级对象的属性
		 		this.level=level;
		 	}
		 	//继承方法
		 	VipUser.prototype=new User();
		 	VipUser.prototype.constructor=VipUser;
		 	//新增方法
		 	VipUser.prototype.showlevel=function(){
		 		alert(this.level);
		 	}
		 	
		 	//实例化一个对象
		 	//var u1=new User('huangben','123');
		 	//u1.showName();
		 	//u1.showPass();
		 	var v1=new VipUser('huangben','123','2')
			 console.log(v1);
			 
		 	// v1.showName();
		 	// v1.showPass();
		 	// v1.showlevel();
		    
		 	
		 	
		 	//新的 增加extends=====================================
	 /* 	class User{  //类
		 		constructor(name,pass){ //构造器
		 			this.name=name;
		 			this.pass=pass;
		 		}
		 		showName(){
		 			alert(this.name);
		 		}
		 		showPass(){
		 			alert(this.pass);
		 		}
		 	}
	 	class VipUser extends User{
	 		constructor(name,pass,level){
	 			super(name,pass); //super 超类 和call()方法作用一样，继承属性
	 			this.level=level;
	 		}
	 		showlevel(){
	 			alert(this.level);
	 		}
	 	}
		 //	var u2=new User('huangben','123');
		 //	u2.showName();
		 //	u2.showPass();
		 //	alert(u2.name)
		
			var v1=new VipUser('huangben','123','2')
		 	v1.showName();
		 	v1.showPass();
		 	v1.showlevel();
			 */
