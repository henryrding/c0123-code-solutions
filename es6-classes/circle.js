/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius * radius, 2 * Math.PI * radius);
    this.radius = radius;
  }

  print() {
    return `${super.print()}, width: ${this.radius}`;
  }
}

const circle = new Circle(1);
console.log(circle.print());
