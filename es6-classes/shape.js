/* exported Shape */
class Shape {
  area;
  circumference;
  constructor(area, circumference) {
    this.area = area;
    this.circumference = circumference;
  }

  print() {
    return `area: ${this.area}, circumference: ${this.circumference}`;
  }
}

const shape = new Shape();
console.log(shape.print());
