function addTwoNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

function substractTwoNumbers(num1:number, num2: number):number {
    return num1 - num2;
}

function addAllNumbers(numbers: number[]):number {
    return numbers.reduce((t, c) => t+c, 0);
}

// const result = addTwoNumbers(5,8);
// const result = substractTwoNumbers(20, 5);
const result = addAllNumbers([20, 5, 6]);

console.log(result);