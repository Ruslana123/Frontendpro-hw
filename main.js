


let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1.Знайти суму та кількість позитивних елементів.

let arr1 = arr.filter(function (item) {
    return item > 0;
});
console.log(arr1.length);

let sum = arr1.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);


//4.Визначити кількість негативних елементів.

let arr2 = arr.filter(function (item) {
    return item < 0;
});
console.log(arr2.length);

//5.Знайти кількість непарних позитивних елементів.

let arr5 = arr.filter(function (item) {
    return item % 2 !== 0 && item > 0;
});
console.log(arr5.length);

//6.Знайти кількість парних позитивних елементів

let arr6 = arr.filter(function (item) {
    return item % 2 === 0 && item > 0;
});

console.log(arr6.length);

//7.Знайти суму парних позитивних елементів.

let arr7 = arr.filter(function (item) {
    return item % 2 === 0 && item > 0;
});

let sum1 = arr7.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum1);

//8.Знайти суму непарних позитивних елементів.

let arr8 = arr.filter(function (item){
    return item % 2 !== 0 && item > 0;
});

let sum3 = arr8.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
})
console.log(sum3);

//9.Знайти добуток позитивних елементів.

let arr9 = arr.filter(function (item) {
    return item > 0;
});

let sum4 = arr9.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
}, 1);

console.log(sum4);

// 2.Знайти мінімальний елемент масиву та його порядковий номер.

let min = Math.min(...arr);

console.log(min);
console.log(arr.indexOf(min));

// 3.Знайти максимальний елемент масиву та його порядковий номер.

let max = Math.max(...arr);
console.log(max);
console.log(arr.indexOf(max));

// 10.Знайти найбільший серед елементів масиву, ост альні обнулити.

let max1 = Math.max(...arr);
console.log(max1);
let y = arr.indexOf(max1);
for(let i =  0; i < arr.length; i++) {
    if (i !== y) {
        arr[i] = 0;
    }
}

console.log(y);
console.log(arr);