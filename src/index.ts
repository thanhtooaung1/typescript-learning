// Type Alias

type RGB = [number, number, number];

function createColor(): RGB {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return [r, g, b];
}

const color1 = createColor();
const color2 = createColor();

console.log(color1, color2);

type User = {
    name: string,
    age: number
}

function formatUser(user: User) {
    console.log(`${user.name} is ${user.age} years old`);
}

formatUser({name: 'Mg Mg', age: 30});


