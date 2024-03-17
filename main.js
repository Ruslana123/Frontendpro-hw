"use strict"
// За допомогою ajax-запиту вивести погоду
// http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19
//
// q=XXX - місто, для якого показати погоду
// temp – температура
// pressure - тиск
// description – опис
// humidity – вологість
// speed – швидкість вітру
// deg - напрям у градусах
// icon - значок, де 10d код іконки
// http://openweathermap.org/img/w/10d.png



let myImg = document.querySelector("#myIcon");
const infoWeather = document.querySelector("#wrapper");


fetch("http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
    .then(res => res.json()).then(data => {

    myImg.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`


    const tempTown = document.createElement("div");
    tempTown.innerText = `Town: ${data.name}`;
    infoWeather.appendChild(tempTown);

    const tempPressure = document.createElement("div");
    tempPressure.innerText = `Pressure: ${data.main.pressure}`;
    infoWeather.appendChild(tempPressure);

    const tempTemp = document.createElement("div");
    tempTemp.innerText = `Temperature: ${data.main.temp}`;
    infoWeather.appendChild(tempTemp);

    const tempDescription = document.createElement("div");
    tempDescription.innerText = `Description: ${data.weather[0].description}`;
    infoWeather.appendChild(tempDescription);

    const tempHumidity = document.createElement("div");
    tempHumidity.innerText = `Humidity: ${data.main.humidity}`;
    infoWeather.appendChild(tempHumidity);

    const tempSpeed = document.createElement("div");
    tempSpeed.innerText = `Speed: ${data.wind.speed}`;
    infoWeather.appendChild(tempSpeed);

    const tempDeg = document.createElement("div");
    tempDeg.innerText = `Direction in degrees: ${data.wind.deg}`;
    infoWeather.appendChild(tempDeg);


});


