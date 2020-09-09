const promise = new Promise(function(resolve, reject) {
    // ... some code
    
    if (true){
        resolve();
    } else {
        reject();
    }
});
console.log('promise: ', typeof(promise));