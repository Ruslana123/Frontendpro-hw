"use strict"
// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний
// стан програми ( коли відображається лише список категорій).
//обимо на підставі минулого дз.
//
// В інформації товару - кнопка "купити".
// При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
// ПІБ покупця
// Місто (вибір зі списку)
// Склад Нової пошти для надсилання
// Післяплати або оплати банківської картки
// Кількість продукції, що купується
// Коментар до замовлення
// 2. Реалізувати перевірку всіх даних користувача під час підтвердження замовлення - обов'язкові поля заповнені. Інакше - виводити помилку на сторінку
//
// 3. Виводити інформацію про замовлення на сторінку (інформація про товар та про доставку)

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
const modalForm = document.querySelector("#modal");
const submitBtn = document.querySelector("#submit-btn");
const orderInfo = document.querySelector("#order-info");
const myOrdersBtn = document.querySelector("#my-orders-btn");
const showAllOrders = document.querySelector("#show-all-orders");
const orderDetails = document.querySelector("#order-details");
const orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];

let currentPrice;
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


function showProductInfo(item) {
    infoAboutProduct.innerHTML = "";
    const infoProduct = document.createElement("div");
    infoProduct.style.backgroundColor = "cyan";
    infoProduct.classList.add("inner-info");
    currentPrice = item.price;
    infoProduct.innerHTML = `
        <h2>${item.name}</h2>
        <p>${item.price}</p>
        <button class="buy-btn" onclick="showModal(currentPrice)">Buy</button>`;
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

function showModal() {
    modalForm.style.visibility = "visible";
}
// функция удаления заказа
function deleteOrder(orderToDelete) {
    const ordersFromLocal = JSON.parse(localStorage.getItem("orders"));
    const filtered_orders = ordersFromLocal.filter(order => order.Timestamp !== orderToDelete.Timestamp);

    localStorage.setItem("orders",  JSON.stringify(filtered_orders));
    orders.splice(orders.indexOf(orderToDelete), 1);
}

// Показываем все заказы при клике на кнопку мои заказы
myOrdersBtn.addEventListener("click", () => {
    showAllOrders.innerHTML = "";
    orders.forEach((order, index) => {
        const ordersShowDiv = document.createElement("div");

//  Кнопка удаления заказа
        const orderDeleteBtn = document.createElement("button");
        orderDeleteBtn.innerText = "x";
        orderDeleteBtn.classList.add("order-delete-btn");
        ordersShowDiv.appendChild(orderDeleteBtn);
        orderDeleteBtn.addEventListener("click", () => {
            deleteOrder(order);
            // Удаляем блок с заказом из интерфейса
            ordersShowDiv.remove();
        })

//  Кнопка детали заказа
        const orderDetailsBtn = document.createElement("button");
        orderDetailsBtn.innerText = "Order details";
        ordersShowDiv.appendChild(orderDetailsBtn);
        orderDetailsBtn.addEventListener("click", () => {
            orderDetails.style.visibility = "visible";
            const orderDetailsDiv = document.createElement("div");
            for (const key in order) {
                orderDetails.innerHTML = "";
                const p = document.createElement("p");
                p.innerText = `${key} : ${order[key]}`
                orderDetailsDiv.appendChild(p);
                orderDetails.appendChild(orderDetailsDiv);

                const orderDetailsCloseBtn = document.createElement("button");
                orderDetailsCloseBtn.innerText = "x"
                orderDetailsCloseBtn.classList.add("order-details-close-btn");
                orderDetails.appendChild(orderDetailsCloseBtn);
                orderDetailsCloseBtn.addEventListener("click", () => {
                    orderDetails.style.visibility = "hidden";
                })
            }
        })
        //  Конец кнопки детали заказа
        for (const key in order) {
            const p = document.createElement("p");

            if(key === 'Timestamp' || key === 'Price') {
                p.innerText = `${key} : ${order[key]}`
                ordersShowDiv.appendChild(p);
            }
        }
        showAllOrders.appendChild(ordersShowDiv);
    })
})
function showInfoOrder() {
    const fullName = document.querySelector("#fullname").value;
    const city = document.querySelector("#city").value;
    const delivery = document.querySelector("#delivery").value;
    const payment = document.querySelector("#payment").value;
    const quantity = document.querySelector("#quantity").value;
    const comment = document.querySelector("#comment").value;


    if(!fullName || !city || !delivery || !payment || !quantity || !comment) {
        alert("Please fill in all fields");
        return;
    }



    const orderDetails = {
        Name: fullName,
        City: city,
        Delivery: delivery,
        Payment: payment,
        Quantity: quantity,
        Comment: comment,
        Price: currentPrice,
        Timestamp: new Date().toLocaleString(),
    }
    console.log(orderDetails);
    // Новый код
    // Получаем сохраненные заказы из localStorage или создаем новый массив, если нет данных

    orders.push(orderDetails); // Добавляем новый заказ в массив

    console.log(orders);

    // Сохраняем обновленные заказы в localStorage
    localStorage.setItem('orders', JSON.stringify(orders));
    // Конец

    console.log(localStorage);
    // Очищаем содержимое orderInfo
    orderInfo.innerHTML = "";

    const orderDetailsDiv = document.createElement("div")
    orderDetailsDiv.innerHTML = "";
    for (const key in orderDetails) {
        const p = document.createElement("p");
        p.innerText = `${key}: ${orderDetails[key]}`
        orderDetailsDiv.appendChild(p)

    }
    // Создаем кнопку "Close"
    const closeOrderInfoBtn = document.createElement("button");
    closeOrderInfoBtn.textContent = "Close";
    closeOrderInfoBtn.classList.add("close-order-info");

    // Добавляем обработчик события для кнопки "Close"
    closeOrderInfoBtn.addEventListener("click", () => {
        orderInfo.style.display = "none";
    });

    // Добавляем кнопку "Close" в блок order-info
    orderInfo.appendChild(closeOrderInfoBtn);

    orderInfo.appendChild(orderDetailsDiv);

    orderInfo.style.display = "block";




}

submitBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем отправку формы
    showInfoOrder(); // Вызываем функцию для отображения информации о заказе
    modalForm.style.visibility = "hidden";
    infoAboutProduct.innerHTML = "";
    productList.innerHTML = "";
});
