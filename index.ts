let person: string = 'Mg Mg';
let age: number = 20;
let isActive: boolean = true;

let names = ['Kyaw Kyaw', 'Mg Mg'];
// names.push(true);   // type error
names.push('Aye Aye');
console.log(names);

let ages = [22, 23];
// ages.push('30');   // type error
ages.push(20);
console.log(ages);

let student = {
    name: 'Mg Mg',
    age: 22,
    male: true
};
// student.name = 20; // type error
student.age = 23;
console.log(student);


let father:null;
let mother: undefined;

father = "U Ba"; // type error

mother = "Daw Mya"; // type error