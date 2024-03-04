let container: any

// dynamic values
container = "Mg Mg";
container = true;
container = 20;

// any types parameter and return any value
function doSomething(value1: any, value2: any):any {
    return value1 + value2;
}

const result = doSomething("hello", 20);

// any type array
const array: any[] = ["Hello", 30, true];
