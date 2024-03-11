//Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.


const url = 'https://jsonplaceholder.typicode.com';
const searchPost = document.querySelector("#search-post");
const searchBtn = document.querySelector("#search-btn");
const postContainer = document.querySelector("#post");
const showComments = document.querySelector("#comments");


function getPostComments(postId) {
    fetch(url + `/posts/${postId}/comments`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            commentData = data;
            showAllComments(commentData);

        });
}


//Показать все комментарии
function showAllComments(commentsArr) {
    showComments.innerHTML = "";
    commentsArr.forEach(comment => {
        const tempComment = document.createElement("div");
        tempComment.innerHTML = `
            <h3>${comment.name}</h3>
            <p>${comment.body}</p>
        `;
        tempComment.classList.add("comment");

        showComments.appendChild(tempComment);
    })
}
function fetchPost(id) {
    return new Promise((resolve, reject) => {
        fetch(url + `/posts/${id}`)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    reject('Network response was not ok');
                    alert("Такого номера не існує");
                }
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

searchBtn.addEventListener('click', () => {
    const postId = searchPost.value;
    fetchPost(postId)
        .then(data => {
            const postElement = document.createElement("div");
            postElement.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.body}</p>
                <button onclick="getPostComments(${data.id})">Comments</button>
            `;
            postContainer.innerHTML = ""; // Очищаем контейнер перед добавлением нового поста
            postContainer.appendChild(postElement);
        })
        .catch(error => {
            console.error(error);
        });
        searchPost.value = "";
});