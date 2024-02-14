// 3.Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.





function doarr() {
    const mainN = +prompt('Введіть довжину головного масиву');
    let mainArr = [];
    for(let i = 0; i < mainN; i++) {
        const subArr = +prompt(`Введіть довжину внутрішнього масиву ${i + 1}`);
        let immerArr = [];

        for(let j = 0; j < subArr; j++) {
            const value = +prompt(`Введіть значення ${j + 1} для масиву ${i + 1}`);
            immerArr.push(value);
        }

        mainArr.push(immerArr);

    }

    return mainArr;

}
console.log(doarr());



//1.Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let arr1 = [1, "abc", 2, 3, 4];
let arrN = [];

function creatArr(array) {
    for(let i = 0; i < array.length; i++) {
        if(typeof(array[i]) === "number") {

            arrN.push(array[i]);
        }


    }

    let sum = arrN.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;

    }, 0);

    return sum / arrN.length;

}

console.log(creatArr(arr1));

//4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])'
// поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.




const text = prompt("Введить текст");
const arr2 = prompt("Введіть літери через кому без пробілів").split(",")
console.log(arr2);
function funk(text, arr2) {
    let resalt = " ";
    for (let i = 0; i < text.length; i++) {
        if(!arr2.includes(text[i])) {
            resalt += text[i]

        }
}
return resalt;

}


console.log(funk(text, arr2));

// 2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії,
// вказаної в змінній znak.Обидва числа і знак виходять від користувача.



function doMath() {
    x = +prompt("Введите первое число");
    y = +prompt("Введите второе число");
    znak = prompt("Введите операцию +, -, *, /, %, ^ ");
    let result;

    switch (znak) {
        case '+' :
            console.log(x + y);
            break
        case '-' :
            console.log(x - y);
            break
        case '*' :
            console.log(x * y);
            break
        case '/' :
            console.log(x / y);
            break
        case '%' :
            console.log(x % y);
            break
        case '^' :
            console.log(Math.pow(x, y));
            break
    }
    return result;
}


console.log(doMath());