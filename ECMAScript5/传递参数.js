let obj={
    a:1,
    b:2
}
/**
 * [change description]
 *
 * @param   {[type]}  params  [params description]
 *
 * @return  {[type]}          [return description]
 */
 function change(params) {
     let getObj=params
     getObj.a=getObj.a+10
 }
 console.log(obj.a);
 change(obj)
 console.log(obj);