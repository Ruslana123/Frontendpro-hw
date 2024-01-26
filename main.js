// 1.Вивести на сторінку в один рядок через кому числа від 10 до 20.

let arrNumbers = [];
for(let x = 10; x <= 20; x++) {
    arrNumbers.push(x);
}
let text = arrNumbers.join(', ');

console.log(text);

// 2.Вивести квадрати чисел від 10 до 20.

for(let x = 10; x <=20; x++) {
    console.log(`Квадрат числа ${x} = ${x * x}`);
}

//3.Вивести таблицю множення на 7

for(let x = 1; x <= 10; x++ ) {
    console.log(`7 * ${x} = ${7 * x}`);
}

//4.Знайти суму всіх цілих чисел від 1 до 15
let arr = [];
let sum = 0;
for(let x = 1; x <=15; x++) {
    arr.push(x);
}
for(let i = 0; i < arr.length; i++) {
    console.log(sum += arr[i]);
}

// 5.Знайти добуток усіх цілих чисел від 15 до 35.

let arrMulti = [];
let multi = 1;
for(let x = 15; x <= 35; x++) {
    arrMulti.push(x);
}
console.log(arrMulti)

for(let i = 0; i < arrMulti.length; i++) {
    console.log(multi *= arrMulti[i]);
}


//7/Вивести суму лише парних чисел в діапазоні від 30 до 80.

let arrHonest = [];
let sumHonest = 0;
for(let x = 30; x <= 80; x++) {

    if(x % 2 !== 0) {
        continue;
    }

    arrHonest.push(x);
}
for(let i = 0; i < arrHonest.length; i++) {
    console.log(sumHonest += arrHonest[i]);
}


//8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.


for(let x = 100; x <= 200; x++) {

    if(x % 3 !== 0) {
        continue;
    }

    console.log(x)
}

// 9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let x = 30;
for(let i = 1; i <= x; i++) {
    if(x % i === 0) {
        console.log(i)
    }
}

// 10.Визначити кількість його парних дільників.

let y = 30;
let counter = 0;
for(let i = 1; i <= y; i++) {
    if(y % i === 0 && i % 2 === 0) {
        counter++;
    }
}

console.log(counter);

//11.Знайти суму його парних дільників.

let z = 30;
let arrEvenDivisors = [];
let sumEven = 0;
for(let i = 1; i <= z; i++) {
    if(z % i === 0 && i % 2 === 0) {
        arrEvenDivisors.push(i);
    }
}

for(let i = 0; i < arrEvenDivisors.length; i++) {
    console.log(sumEven += arrEvenDivisors[i]);
}
//12.Надрукувати повну таблицю множення від 1 до 10.

for(let i = 1; i <= 9; i++) {
    for(let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i*j}`)
    }
    console.log(`End of iteration ${i}`);
}

// 6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500

let sumAverage = 0;
let arrAverage = [];
for(let y = 1; y <= 500; y++) {
    arrAverage.push(y);
}
for(let i = 0; i < arrAverage.length; i++) {

    console.log((sumAverage += arrAverage[i])/arrAverage.length);
}

// 2.Вивести квадрати чисел від 10 до 20.


let n = 10;
while (n <= 20) {
    console.log(`Квадрат числа ${x} = ${x * x}`);
    n++;
}

//3.Вивести таблицю множення на 7


let num = 1;
while (num <= 10) {
    console.log(`7 * ${num} = ${7 * num}`);
    num++;
}

// 9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.


let f = 30;
let i = 1;
do {
    if(f % i === 0) {
        console.log(i)
    }
    i++
}
while (i <= f);

