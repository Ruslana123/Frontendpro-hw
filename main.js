

function removeElement (array, item) {
    let y = array.indexOf(item);
    array.splice(y, 1);
}

let array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);

console.log(array);


removeElement(array, 6);

console.log(array);