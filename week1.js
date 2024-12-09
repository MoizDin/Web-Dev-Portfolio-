//const num1 = 5;
//const num2 = 3;
//const sum = num1 + num2;
//console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
    rl.question('Enter numbers separated by space: ', (input) => {
        const numbers = input.split(' ').map(Number);
        let result;
        switch (operation) {
            case 'add': result = numbers.reduce((a, b) => a + b); break;
            case 'subtract': result = numbers.reduce((a, b) => a - b); break;
            case 'multiply': result = numbers.reduce((a, b) => a * b, 1); break;
            case 'divide': result = numbers.reduce((a, b) => a / b); break;
        }
        console.log(result);
        rl.close();
    });
});
