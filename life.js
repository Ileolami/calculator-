alert('CALCULATE WITH JOY')
let operator =prompt("Enter your operator(+,-,/,*)");

let firstvalue =parseInt(prompt("Enter your first number"));

let secondvalue =parseInt(prompt("Enter your second number"));

const result = (a, b) =>{

  if(operator =="+") {

    return a + b;

  } else if (operator == "_") {

    return a - b;

  } else if (operator == "/") {

    return a / b;

  } else if (operator == "*") {

    return a * b;

  } else {

    return "invalid operator, Try again!!!";

  }

};

alert( result(firstvalue, secondvalue));
