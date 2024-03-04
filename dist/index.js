"use strict";
// 
// Type Guards
//
function getId(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
let idOne = getId('2');
let idTwo = getId(3);
console.log(idOne, idTwo);
let user = { type: 'user', username: 'Mg Mg', email: 'mgmg@gmail.com' };
let person = { type: 'person', firstName: 'Mg', age: 22 };
function showInformation(data) {
    if (data.type === 'user') {
        console.log(data.username, data.email);
    }
    if (data.type === 'person') {
        console.log(data.firstName, data.age);
    }
}
showInformation(user);
showInformation(person);
