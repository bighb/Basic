class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static say() {
    // return "(" + this.x + ", " + this.y + ")";
    return "我是静态方法";
  }
  say() {
    // return "(" + this.x + ", " + this.y + ")";
    return "我是实例方法";
  }
  static info = "我是静态属性";
}
let strPoint = new Point("huangben", 22);
console.log(Point.say());
console.log(strPoint.say());
console.log(Point.info);
