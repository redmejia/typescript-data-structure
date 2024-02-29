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