
        class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
let strPoint=new Point('huangben',22).toString()
  // let str= strPoint.toString()
   console.log(strPoint);
