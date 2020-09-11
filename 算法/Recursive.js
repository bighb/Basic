
         //递归思想：自己调用自己
         function sum(n) {
             if(n >0){
                 //遇到函数会在内存里面开辟栈，如果不加判断，会导致程序崩溃，内存溢出
                 return n+sum(n-1);
               
             }else{
                  return n=0; //在合适的时候要终止递归
             }
         }
         console.log(sum(100));
