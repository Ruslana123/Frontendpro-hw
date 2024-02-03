const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {

    let result = '';
    for(let i = 0; i < length; i++) {

        result += characters[Math.floor(Math.random() * (characters.length + 1))];

    }
    return result;

}


console.log(generateKey(5, characters));