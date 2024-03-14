"use strict"
// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний
// стан програми ( коли відображається лише список категорій).


const product = {
    "Fruits": [
        {name: "Apples", price: "2 $"},
        {name: "Pears", price: "4 $"},
        {name: "Bananas", price: "3.5 $"},
        {name: "Oranges", price: "3 $"},
        {name: "Tangerines", price: "2.5 $"},
    ],
    "Vegetables": [
        {name: "Cabbage", price: "1.2 $"},
        {name: "Beet", price: "1.3 $"},
        {name: "Carrot", price: "1.5 $"},
        {name: "Avocado", price: "2.5 $"},
        {name: "Tomatoes", price: "2 $"},
    ],
    "Grocery": [
        {name: "Rice", price: "5 $"},
        {name: "Flour", price: "2 $"},
        {name: "Bulgur", price: "2.5 $"},
        {name: "Millet", price: "2.3 $"},
        {name: "Spaghetti", price: "1.6 $"},
    ],
}

console.log(product);

const categoryList = document.querySelector("#category");
const productList = document.querySelector("#product-list");
const infoAboutProduct = document.querySelector("#info-about-product");

console.log(Object.keys(product));

function showCategory() {
    Object.keys(product).forEach(category => {
        const categoryItem = document.createElement("div");
        categoryItem.classList.add("cat-item");
        categoryItem.textContent = category;
        categoryItem.addEventListener("click", () => {
            showProduct(category);
        });
        categoryList.appendChild(categoryItem);


    })
}

function clearHTML() {
    alert("Item added to bag");
    infoAboutProduct.innerHTML = "";
    productList.innerHTML = "";

}
function showProductInfo(item) {
    infoAboutProduct.innerHTML = "";
    const infoProduct = document.createElement("div");
    infoProduct.style.backgroundColor = "cyan";
    infoProduct.classList.add("inner-info");
    infoProduct.innerHTML = `
        <h2>${item.name}</h2>
        <p>${item.price}</p>
        <button class="buy-btn" onclick="clearHTML()">Buy</button>`;
    infoAboutProduct.appendChild(infoProduct);
}

function showProduct(category) {
    productList.innerHTML = "";
    const productInCategory = product[category];
    productInCategory.forEach(item => {
        const productItem = document.createElement("div");
        productItem.style.backgroundColor = "burlywood";
        productItem.innerText = item.name;
        productItem.classList.add("product-item");
        productItem.addEventListener("click", () => {
            showProductInfo(item);
        })

        productList.appendChild(productItem);

    })
}



showCategory();