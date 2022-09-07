let str =
  "<span style=color:red>华为</span>永远不会出售终端业务<span style=color:red>华为</span>远不会出售终端业务<span style=color:red>颤三</span>永远不会出售终端业务<span style=color:red>华为</span>";
//   alert('<head>csdn</head>'.match(/<head>([\s\S]*?)<\/head>/)[1])
let domReg = /(?:(<span[^>]*?>)).*?(?:(<\/span>))/g;
let arr = str.match(domReg);
let arr2 = arr.map((e) => {
  return e.match(/<span style=color:red>([\s\S]*?)<\/span>/)[1];
});
console.log("arr2: ", arr2);
console.log("res: ", arr);
