"use strict";
// Type Alias
function createColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const color1 = createColor();
const color2 = createColor();
console.log(color1, color2);
function formatUser(user) {
    console.log(`${user.name} is ${user.age} years old`);
}
formatUser({ name: 'Mg Mg', age: 30 });
