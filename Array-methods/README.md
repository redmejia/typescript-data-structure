# Array map and filter Method

## Shallow Copy and Deep Copy
Shallow and deep copy allows you to create copies of data.\
Shallow Copy create new object of the same structure as the original source.\
Deep Copy creates an independent copy of the original object.

## Array map Method
The map is a method that creates new array. The map method iterates over an array a performs a given callback function on every item in the array.

### map method
```typescript
Array.map((callbackFunction), arguments);
Array.map(num => num * 2);
```
```typescript
const dataArray: number[] = [1, 2, 3, 4];

const newDataArray: number[] = dataArray.map(num => num * 2);

console.log(dataArray); // [ 1, 2, 3, 4 ]
console.log(newDataArray); // [ 2, 4, 6, 8 ]

```
#### This example uses the map method on an array of objects.
```typescript
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
```

## Array filter Method
The filter method create new array. The filter method takes a callback function that specifies a filtering condition, iterates through an array and return a new filtered array.

### filter method
```typescript
Array.filter((callbackFunction), arguments);
Array.filter(name => name === "Karla");
```
```typescript
const dataNamesArray: string[] = ["Reynaldo", "Robert", "Karla", "Sofia", "Cristina", "Lina", "Maria", "Jose"];
const newDataFilterArray: string[] = dataNamesArray.filter(name => name === "Cristina");

console.log(dataNamesArray); // [ 'Reynaldo', 'Robert', 'Karla', 'Sofia', 'Cristina' ]
console.log(newDataFilterArray); // [ 'Cristina' ]
```
#### This example uses the filter method on an array of objects.
```typescript
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
//     { name: 'Reynaldo', age: 34, isStudent: false },
//     { name: 'Karla', age: 42, isStudent: true },
//     { name: 'Lina', age: 23, isStudent: true },
//     { name: 'Sofia', age: 12, isStudent: false },
//     { name: 'Alejandra', age: 34, isStudent: false }
// ]
console.log(newUserList); // [ { name: 'Reynaldo', age: 34, isStudent: false } ]

```