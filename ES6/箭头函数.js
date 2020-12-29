
		/*	let show=function(a){
				return a*2;
			}
			alert(show(12)) 24*/
		let show = (a) => {  //只有一个参数时，可以直接：let show=a=>{}
			return a * 2;
		}
		//	alert(show(12))


		/* 箭头函数与普通函数this指向问题 */
		function Timer() {
			this.s1 = 0;
			this.s2 = 0;
			// 箭头函数
			setInterval(() => {
				console.log(this); //当前环境

				this.s1++;
			}, 1000);
			// 普通函数
			setInterval(function () {
				console.log(this); //window

				this.s2++;
			}, 1000);
		}

		//var timer = new Timer();

		//setTimeout(() => console.log('s1: ', timer.s1), 3100);
		//setTimeout(() => console.log('s2: ', timer.s2), 3100);
		/* 箭头函数没有自己的 this ，也无法通过 call、apply、bind 改变箭头函数中的 this。
		箭头函数的 this 取决于外层是否有普通函数，有普通函数 this 指向普通函数中的this，
		外层没有普通函数，箭头函数中的 this 就是全局对象 */
		let obj1 = {
			name: ' objl_name',
			print: function () {
				return () => console.log(this.name)
			}
		}
		let obj2 = { name: ' obj2_name' }
		obj1.print()()
		obj1.print().call(obj2)
		obj1.print.call(obj2)()
