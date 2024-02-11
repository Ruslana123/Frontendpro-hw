// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>.
// При пропажі фокусу - <div> так само пропадає

const div = document.querySelector("#myDiv");

document.querySelector("#text").addEventListener("mouseover", function () {
    console.log("mouseover");
    div.style.display = "block";
})

document.querySelector("#text").addEventListener("mouseout", function () {
    console.log("mouseout");
    div.style.display = "none";
})