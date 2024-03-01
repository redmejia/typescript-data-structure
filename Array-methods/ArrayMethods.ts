const dataArray: number[] = [1, 2, 3, 4];

const newDataArray: number[] = dataArray.map(num => num * 2);

console.log(dataArray); // [ 1, 2, 3, 4 ]
console.log(newDataArray); // [ 2, 4, 6, 8 ]


const dataNamesArray: string[] = ["Reynaldo", "Robert", "Karla", "Sofia", "Cristina", "Lina", "Maria", "Jose"];
const newDataFilterArray: string[] = dataNamesArray.filter(name => name === "Cristina");

console.log(dataNamesArray); // [ 'Reynaldo', 'Robert', 'Karla', 'Sofia', 'Cristina' ]
console.log(newDataFilterArray); // [ 'Cristina' ]

interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    { name: "shirt", price: 20 },
    { name: "Hat", price: 15 },
]

const discountProducts: Product[] = products.map(product => ({
    ...product,
    price: product.price * 0.9,
}))

console.log(products); // [ { name: 'shirt', price: 20 }, { name: 'Hat', price: 15 } ]
console.log(discountProducts); // [ { name: 'shirt', price: 18 }, { name: 'Hat', price: 13.5 } ]

interface User {
    name: string;
    age: number;
    isStudent?: boolean
}

const userList: User[] = [
    { name: "Reynaldo", age: 34, isStudent: false },
    { name: "Karla", age: 42, isStudent: true },
    { name: "Richard", age: 22, isStudent: true },
    { name: "Robert", age: 23, isStudent: true },
    { name: "Lina", age: 23, isStudent: true },
    { name: "Sofia", age: 12, isStudent: false },
    { name: "Alejandra", age: 34, isStudent: false },
]

const newUserList: User[] = userList.filter(user => user.name === "Reynaldo");
console.log(userList);
// [
//     { name: "Reynaldo", age: 34, isStudent: false },
//     { name: "Karla", age: 42, isStudent: true },
//     { name: "Richard", age: 22, isStudent: true },
//     { name: "Robert", age: 23, isStudent: true },
//     { name: "Lina", age: 23, isStudent: true },
//     { name: "Sofia", age: 12, isStudent: false },
//     { name: "Alejandra", age: 34, isStudent: false },
// ]
console.log(newUserList); // [ { name: 'Reynaldo', age: 34, isStudent: false } ]

