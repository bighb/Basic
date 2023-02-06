const req1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1111);
    }, 2000);
  });
};
const req2 = () => {
  setTimeout(() => {
    return 222;
  }, 2000);
};
const req401 = () => {
  setTimeout(() => {
    return 401;
  }, 3000);
};

req1()
  .then((result) => {
    console.log("result: ", result);
  })
  .catch((err) => {});

let res2 = req2();
console.log("res2: ", res2);

let res401 = req401();
console.log("res401: ", res401);
