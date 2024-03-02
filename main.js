const arrN = prompt("Ведить довжину массиву");
let myArr = [];

for(let i = 0; i < arrN; i++) {
    const value = +prompt(`Введить числове значення єлемента массиву ${i + 1}`);
    myArr.push(value);
}

console.log(myArr);

console.log(myArr.sort((a, b) => {
    return a - b;
}));

myArr.splice(1, 3);

console.log(myArr);