
const dataArray: number[] = [1, 2, 3, 4];

const newDataArray: number[] = dataArray.map(num => num * 2);

console.log(dataArray); // [ 1, 2, 3, 4 ]
console.log(newDataArray); // [ 2, 4, 6, 8 ]


const dataNamesArray: string[] = ["Reynaldo", "Robert", "Karla", "Sofia", "Cristina", "Lina", "Maria", "Jose"];
const newDataFilterArray: string[] = dataNamesArray.filter(name => name === "Cristina");

console.log(dataNamesArray); // [ 'Reynaldo', 'Robert', 'Karla', 'Sofia', 'Cristina' ]
console.log(newDataFilterArray); // [ 'Cristina' ]


