let numbers: number[] = [3,4,1,7,1];
numbers.push(20);
console.log(numbers)
// numbers.push("53"); Error no same type
// Result 
// [ 3, 4, 1, 7, 1, 20 ];

numbers.pop();
console.log(numbers);
// Before [ 3, 4, 1, 7, 1, 20 ]
// After [ 3, 4, 1, 7, 1 ]

numbers.sort();
console.log(numbers);
// Before [ 3, 4, 1, 7, 1 ]
// After [ 1, 1, 3, 4, 7 ]