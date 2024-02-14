const imgArr = ["imades/img1.jpg", "imades/img2.jpg", "imades/img3.jpg", "imades/img4.jpg", "imades/img5.jpg", "imades/img6.jpg", "imades/img7.jpg", "imades/img8.jpg", "imades/img9.jpg"];

let img = document.querySelector("#image");
let noBtn = document.querySelector("#noBtn");
let yesBtn = document.querySelector("#yesBtn");
let text = document.querySelector("#text");

img.src = imgArr[0];
noBtn.addEventListener("click", () => {
    img.src = imgArr[1];
    text.textContent = "В следующий раз"

    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * window.innerHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

});

yesBtn.addEventListener("click", () => {
    img.src = imgArr[Math.floor(Math.random() * 8)];
    text.textContent = "Хочу туда";

    noBtn.style.position = "";

})