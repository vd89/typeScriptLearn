// functions type
function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

printResult(add(5, 15));

let combineValue: (a: number, b: number) => number;

combineValue = add;
// combineValue = 2
console.log(combineValue(5, 18));

// call back function

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
