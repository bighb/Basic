

    //核心思想，取一个值，一次和下一个比较，如果比下一个大，交换位置，第一轮取出最大值，后面每一轮取出该轮的最大的值
    let list = [22, 11, 99, 4];
    
    function bubbleSort(array) {
      let temp = null;
      for (let i = 0; i < array.length - 1; i++) {

        for (let j = 0; j < array.length - 1 - i; j++) {
          if (array[j] > array[j + 1]) {
            temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }

        }
  
      }

      return array
    }
    list = bubbleSort(list);
    console.log(list);
