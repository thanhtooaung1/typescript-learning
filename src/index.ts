// Union type

let email : string | null

email = null;
email = 'thanhtoo@gmail.com'

console.log(email);

// Type alias for union
type Id = string | number

let orderId : Id = 'R340430';
orderId = 434;

console.log(orderId);
