function test() {
  return new Promise(function (resolve, reject) {
    // ... some code

    if (true) {
      resolve(111);
      return console.log("333");
    } else {
      reject(2222);
    }
  });
}

test()
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((err) => {
    console.log("err: ", err);
  });
