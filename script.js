//complete this code
// Rectangle Class
class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive integers.");
    }
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

// Square Class
class Square extends Rectangle {
  constructor(side) {
    if (side <= 0) {
      throw new Error("Side must be a positive integer.");
    }
    super(side, side); // Call parent constructor with equal width and height
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this._width; // or 4 * this.width
  }
}

// Example usage
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width);       // Output: 5
console.log(rectangle.height);      // Output: 10
console.log(rectangle.getArea());   // Output: 50

const square = new Square(7);
console.log(square.width);          // Output: 7
console.log(square.height);         // Output: 7
console.log(square.getArea());      // Output: 49
console.log(square.getPerimeter()); // Output: 28


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
