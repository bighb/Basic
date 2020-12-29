
        //核心思想
        let list = [3, 2, 4, 1];
        function insertSort(array) {
            //1.准备一个新数组,用来存储抓到手里的牌，开始先抓一张牌进来
        let handle=[]; 
        handle.push(array[0]);

           //2.从第二项开始依次抓牌，一直把台面上的牌抓光
            for (let i = 1; i < array.length ; i++) {
                 let A=array[i];//抓取的牌
                 //3.用抓取的牌依次和手里的牌比较(从后向前比较)
                 for( let j = handle.length -1; j >=0 ; j--){
                            let B=handle[j]; //每次要比较的手里的那张牌
                        //4.如果当前新牌A比要比较的牌B大了，把A放B的后面
                        if(A > B){
                                  handle.splice(j+1, 0 ,A);
                                  break ;//插入之后，开始下一轮抽牌
                        }
                        //已经比到第一项，我们把新牌放到手中最前面即可
                        if(j === 0){
                            handle.unshift(A)
                        }
                 }

            }
            return handle
        }
        list = insertSort(list);
    console.log(list);
