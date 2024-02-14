
let myTable = document.querySelector("#myTable");
for(let i = 0; i <= 10; i++) {
    let row = document.createElement("tr");

    for(let j = 0; j<= 10; j++) {
        let cell = document.createElement("td");
        cell.textContent = String(Math.floor(Math.random() * 100) + 1);

        row.appendChild(cell);
    }

    myTable.appendChild(row);
}
