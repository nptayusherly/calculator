const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
    calculatorScreen.value = number;
}


let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = ((number) => {
    if(currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
});

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value);
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

const inverseNumber = (() => {
    if (currentNumber === '0') {
        return;
    }
    currentNumber = currentNumber * -1;
});

const inverse = document.querySelector(".inverse");
inverse.addEventListener("click", (event) => {
    inverseNumber(event.target.value);
    updateScreen(currentNumber);
});



const inputOperator = ((operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
});


const operators = document.querySelectorAll(".operator");
operators.forEach(operator => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value);
        inputOperator(event.target.value);
        updateScreen(calculationOperator);
    });
});

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
    calculate();
    console.log(currentNumber);
    updateScreen(currentNumber);
});

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", (event) => {
    console.log(event.target.value);
    clearAll();
    updateScreen(currentNumber);
});

const inputDecimal = (dot) => {
    if(currentNumber.includes(".")) {
        return
    } 
    currentNumber += dot;
}

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});








// const calculatorScreen = document.querySelector('.calculator-screen');
// const updateScreen = (number) => {
//     calculatorScreen.value = number;
// }


// let prevNumber = '';
// let calculationOperator = '';
// let currentNumber = '0';

// const inputNumber = ((number) => {
//     if(currentNumber === '0') {
//         currentNumber = number;
//     } else {
//         currentNumber += number;
//     }
// });

// const numbers = document.querySelectorAll(".number");
// numbers.forEach(number => {
//     number.addEventListener("click", (event) => {
//         console.log(event.target.value);
//         inputNumber(event.target.value);
//         updateScreen(currentNumber);
//     });
// });

// const inputOperator = ((operator) => {
//     if(calculationOperator === '') {
//         prevNumber = currentNumber;
//     }
//     calculationOperator = operator;
//     currentNumber = '0';
// });

// const operators = document.querySelectorAll(".operator");
// operators.forEach(operator => {
//     operator.addEventListener("click", (event) => {
//         console.log(event.target.value);
//         inputOperator(event.target.value);
//         updateScreen(calculationOperator);
//     });
// });

// const calculate = () => {
//     let result = '';
//     switch(calculationOperator) {
//         case "+":
//             result = parseFloat(prevNumber) + parseFloat(currentNumber);
//             // result = result.toPrecision(12);
//             break;
//         case "-":
//             result = parseFloat(prevNumber) - parseFloat(currentNumber);
//             break;
//         case "*":
//             result = parseFloat(prevNumber) * parseFloat(currentNumber);
//             break;
//         case "/":
//             result = parseFloat(prevNumber) / parseFloat(currentNumber);
//             break;
//         default:
//             break;
//     }
//     currentNumber = result;
//     calculationOperator = '';
// }

// const equalSign = document.querySelector(".equal-sign");
// equalSign.addEventListener("click", () => {
//     calculate();
//     updateScreen(currentNumber);
// });

// const cleasAll = () => {
//     prevNumber = '';
//     calculationOperator = '';
//     currentNumber = '0';
// }

// const clearBtn = document.querySelector(".all-clear");
// clearBtn.addEventListener("click", (event) => {
//     console.log(event.target.value);
//     cleasAll();
//     updateScreen(currentNumber);
// });

// const inputDecimal = (dot) => {
//     if(currentNumber.includes(".")) {
//         return
//     } 
//     currentNumber += dot;
// }

// const decimal = document.querySelector(".decimal");
// decimal.addEventListener("click", (event) => {
//     inputDecimal(event.target.value);
//     updateScreen(currentNumber);
// });