const calculate = (a, b) => {

    const add = () => a + b;
    const subtract = () => a - b;
    const multiply = () => a * b;
    const divide = () => a / b;

    return [add, subtract, multiply, divide];

}

const [add, subtract, multiply, divide] = calculate(6, 8);

console.log(`6 * 8 = ${multiply()}`);
