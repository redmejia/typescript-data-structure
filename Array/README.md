# Array


An Array is a collection of elements of the same type.  Each item in this collection can be accessed using its portions index.

## Defining an Array on TypeScript
```typescript
let myArray: number [] = [1, 2, 3];
```
### You can also use generics 
```typescript
let myNameList: Array<string> = ["Sofia","Robert"];
```

## Access Elements
```typescript
let fruitList: string[] = ["apple", "banana", "cherry"];
console.log(fruitList[0]); // access to the element 1 at position index 0
console.log(fruitList[2]); // access to the element 3 at position index 2
// Result
// apple 
// cherry
```

# Methods
Push: Adds new element to the array.
    
```typescript
let numbers: number[] = [3,4,1,7,1];
numbers.push(20);
console.log(numbers)
// numbers.push("53"); Error no same type
// Result 
// [ 3, 4, 1, 7, 1, 20 ];
```
Pop: Removes last element of the array.
```typescript
numbers.pop();
console.log(numbers);
// Before [ 3, 4, 1, 7, 1, 20 ]
// After [ 3, 4, 1, 7, 1 ]
```
Sort: Sorts all element of the array.
```typescript
numbers.sort();
console.log(numbers);
// Before [ 3, 4, 1, 7, 1 ]
// After [ 1, 1, 3, 4, 7 ]
```