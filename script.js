let num1 = 0;
let num2 = 0;
let isValid = false;

alert("Hi, this app needs two numbers between 1 and 50");

function getNumbers(message, isValid) {
  let num = 0;
  while (!isValid) {
    num = Number(prompt(message));
    isValid = isNumberValid(num);
  }
  return num;
}

num1 = getNumbers("Write a first number", false);
num2 = getNumbers("Write a second number", false);

function isNumberValid(number) {
  if (number != undefined && number != null) {
    let aux = parseInt(number);
    if (aux > 0 && aux <= 50) {
      return true;
    } else {
      alert(num1 + " ==>  is not correct!");
    }
  }
}

function getResult() {
  let result = sumTwoNumbers(num1, num2);
  return result;
}

function sumTwoNumbers(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function isPrime(num) {
  let primer = true;
  let i = 2;

  do {
    if (num % i === 0) {
      primer = false;
    }
    i++;
  } while (i < num);

  if (primer === true) {
    return num + " Prime number";
  } else {
    return num + " NOT a prime number";
  }
}

function isEven(num) {
  if (num % 2 === 0) {
    return num + " Is even";
  } else {
    return num + " Is odd";
  }
}

function printRange(num1, num2) {
  let result = [];
  if (num1 === num2) {
    result.push(num1)
  } else if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      if (i % 2 === 0) {
        result.push(i);
      }
    }
  } else {
    for (let i = num1; i >= num2; i--) {
      if (i % 2 !== 0) {
        result.push(i);
      }
    }
  }
  return result;
}

function showResult() {
  alert(
    `Result: 
    SUMA -> ${getResult()}
    PRIMERS -> ${isPrime(num1)}  /  ${isPrime(num2)}
    EVEN or ODD -> ${isEven(num1)}  /  ${isEven(num2)}
    RANGE -> ${printRange(num1, num2)}
    `
  );
}

