let number1 = +prompt("Введить перше число");
let number2 = +prompt("Введить друге число");
let sign = prompt("Введить операцію + - * /");
switch (sign) {
    case '+' :
        alert(`Result :  ${number1} ${sign} ${number2} = ${number1 + number2}`);
        break;
    case '-' :
        alert(`Result :  ${number1} ${sign} ${number2} = ${number1 - number2}`);
        break;
    case '*' :
        alert(`Result :  ${number1} ${sign} ${number2} = ${number1 * number2}`);
        break;
    case '/' :
        if(number2 !== 0) {
            alert(`Result :  ${number1} ${sign} ${number2} = ${number1 / number2}`);
        } else {
            alert('Не можна ділити на 0')
        }
        break;
    default : alert("Ви ввели не знак");
}