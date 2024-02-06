// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
//
// sum(3) = 3
//
// sum(5) = 8
//
// sum(20) = 28


function first() {
    let x = 0;

    function second(num) {
       x += num;
       console.log(x);
    }

    return second;
}

let mySum = first();

mySum(3);
mySum(5);
mySum(20);
mySum(30);

