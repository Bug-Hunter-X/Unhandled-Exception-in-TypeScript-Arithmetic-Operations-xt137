function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

let result:number;
 try {
  result = add(5, 3);
  console.log(result); 
  result = subtract(10, 4);
  console.log(result);
  result = multiply(7, 2);
  console.log(result);
  result = divide(15, 0);
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
}
