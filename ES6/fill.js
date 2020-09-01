
        let list=new Array(4).fill({name:1});
      debugger
        let obj=list[0]
        console.log(obj); //此时展开的行为就不一致
        
        console.log(list);
        obj.name=2;
        console.log(obj);
        
        console.log(list);
        console.log(list[0].name);
        
