

 let a='42080319740403602X'
if(/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(a)){
     console.log('11');
}else{
    console.log(222);
}