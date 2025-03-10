// Exercise: Define a type alias `Rectangle` with two properties `width` and `height` (both numbers).
// Then, create a function `calculateArea` that takes a `Rectangle` and returns its area.

type Rectangle = {
    width: number,
    height: number
}

function calculateArea(rect:Rectangle) {
  return rect.height * rect.width
}

console.log(calculateArea({ width: 10, height: 5 }));
// Expected output: 50