
			/*
			includes()：返回布尔值，表示是否找到了参数字符串。
			startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
			endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。*/
			let s = 'Hello world!';

			s.startsWith('Hello') // true
			s.endsWith('!') // true
			s.includes('o') // true
			alert(s.substr(0, s.length - 1) )
