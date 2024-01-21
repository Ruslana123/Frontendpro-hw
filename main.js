let x = +prompt('Enter first number');
let y = +prompt('Enter second number');

alert(`Result : ${x} + ${y} = ${x + y}`);
alert(`Result : ${x} - ${y} = ${x - y}`);
alert(`Result : ${x} * ${y} = ${x * y}`);

if(y !== 0) {
    alert(`Result : ${x} / ${y} = ${x / y}`);
} else {
    alert('Cannot be divided by 0');
}
