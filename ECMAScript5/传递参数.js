let obj={
    a:1,
    b:2
}
 function change(params) {
     let getObj=params
     getObj.a=getObj.a+10
 }
 console.log(obj.a);
 change(obj)
 console.log(obj);