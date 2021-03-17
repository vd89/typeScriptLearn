function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  const result = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  }
  return result;
}

const numA = 58;
const numB = 4.3;
const printResult = true;
const resultPhrase = 'Result is: ';

add(numA, numB, printResult, resultPhrase);
