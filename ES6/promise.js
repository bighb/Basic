 function test(){
    return new Promise(function(resolve, reject) {
        // ... some code
        
        if (false){
            resolve(111);
        } else {
            reject(2222);
        }
    });
}

test().then(res=>{

    console.log('res: ', res);
}).catch(err=>{
    console.log('err: ', err);

})