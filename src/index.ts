// Tuples

let person : [string, number, boolean] = ['mg mg', 20, true];

// name tuples
let user : [name: string, age: number]
user = ['aung aung', 23];
console.log(user[0]);

// return tuples
function getTwoNumber(): [number, number] {
    return [0, 1];
}

let [num1, num2] = getTwoNumber();