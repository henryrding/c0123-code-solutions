/* exported Shape */
class Shape {
  constructor(area, circumference) {
    this.area = area;
    this.circumference = circumference;
  }

  print() {
    return `area: ${this.area}, circumference: ${this.circumference}`;
  }
}

const shape = new Shape(1, 4);
console.log(shape.print());
