"use strict";
const dataArray = [1, 2, 3, 4];
const newDataArray = dataArray.map(num => num * 2);
console.log(dataArray); // [ 1, 2, 3, 4 ]
console.log(newDataArray); // [ 2, 4, 6, 8 ]
const dataNamesArray = ["Reynaldo", "Robert", "Karla", "Sofia", "Cristina", "Lina", "Maria", "Jose"];
const newDataFilterArray = dataNamesArray.filter(name => name === "Cristina");
console.log(dataNamesArray); // [ 'Reynaldo', 'Robert', 'Karla', 'Sofia', 'Cristina' ]
console.log(newDataFilterArray); // [ 'Cristina' ]
