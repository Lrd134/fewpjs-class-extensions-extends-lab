// Your code here
class Polygon {
  constructor (sidesArray) {
    this.sidesArray = sidesArray;
    this.count = this.sidesArray.length;
  }
  get countSides() {
    return this.sidesArray.length;
  }
  get perimeter() {
    return this.sidesArray.reduce((start, e) => {
      return start + e;;
    }, 0);
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (!Array.isArray(this.sidesArray)) return false;
    if (this.count !== 3) return false;
    let side1 = this.sidesArray[0]
    let side2 = this.sidesArray[1]
    let side3 = this.sidesArray[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}

class Square extends Polygon {

  get isValid() {
    if (!Array.isArray(this.sidesArray)) return;
    if (this.count !== 4) return;
    let side1 = this.sidesArray[0]
    let side2 = this.sidesArray[1]
    let side3 = this.sidesArray[2]
    let side4 = this.sidesArray[3]
    return ((side1 === side2) && (side1 === side3) && (side1 === side4))
  }
  get area() {
    return this.sidesArray[0] * this.sidesArray[1];
  }
}