console.log('Math.PI',Math.PI);
console.log('Math.max',Math.max(1,2,3,4,8,11));

class MyMath{
  static readonly PI = 3.14;

  static max(...numbers: number[]){
    return numbers.reduce((max, item) => max >= item ? max : item);
  }
}


// const math = new MyMath();
// console.log(math.PI);

console.log('MyMath.PI',MyMath.PI);
console.log('max',MyMath.max(1,2,3,5,6,344));
const numbers = [12,34,567];
console.log('max',MyMath.max(...numbers));
console.log('max',MyMath.max(-1,-6,-8));
