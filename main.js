const arrN = prompt("Введіть довжину масиву");
let myArr = [];

for(let i = 0; i < arrN; i++) {
    const value = +prompt(`Введіть числове значення елемента масиву ${i + 1}`);
    myArr.push(value);
}

console.log(myArr);

console.log(myArr.sort((a, b) => {
    return a - b;
}));

myArr.splice(1, 3);

console.log(myArr);