let a = null;
let b = a ?? "默认值";
console.log(b);

let obj1 = {
  productinfo: {
    priceInfo: {
      order: 2,
    },
  },
};
let obj2 = {
  productinfo: {},
};
let price1 = obj1?.productinfo?.priceInfo?.order ?? "000";
let price2 = obj2?.productinfo?.priceInfo?.order ?? "000";
console.log(price1, price2);
