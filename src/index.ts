// 
// Type Guards
//

// Type alias for union
type Id = string | number

function getId(id: Id) {
    if(typeof id === 'string') {
        return parseInt(id);
    } else {
        return id.toString();
    }

}

let idOne = getId('2');
let idTwo = getId(3);

console.log(idOne, idTwo);

// 
// tagged interfaces
//

interface User {
    type: 'user'
    username: string
    email: string
}

interface Person {
    type: 'person'
    firstName: string
    age: number
}

let user : User = {type: 'user', username: 'Mg Mg', email: 'mgmg@gmail.com'}
let person : Person = {type: 'person', firstName: 'Mg', age: 22}

function showInformation(data: User | Person) {
    if(data.type === 'user') {
        console.log(data.username, data.email);
    }
    if(data.type === 'person') {
        console.log(data.firstName, data.age);
    }
}

showInformation(user);
showInformation(person);
