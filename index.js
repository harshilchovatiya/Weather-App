document.addEventListener("DOMContentLoaded", function () {
    // JavaScript code here

    const apikey = '93e5802bc123ef9216fd8736daa23246'
    const city_name = 'surat'
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apikey}&units=metric`;

    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-button");
    const weathericon = document.querySelector(".weather-icon");
    const todayDate = document.querySelector(".date");

    // Date object
    const date = new Date();

    let currentDay = String(date.getDate()).padStart(2, '0');

    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

    let currentYear = date.getFullYear();

    let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

    console.log("The current date is " + currentDate);
    todayDate.innerHTML = currentDate;


    async function checkeather(city) {
        const responce = await fetch(url + city + `&appid=${apikey}`)
        var data = await responce.json();

        console.log(data);

        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main = 'Clouds') {
            weathericon.src = 'images/clouds.png'
        }
        else if (data.weather[0].main = 'Rain') {
            weathericon.src = 'images/rain.png'
        }
        else if (data.weather[0].main = 'Drizzle') {
            weathericon.src = 'images/drizzle.png'
        }
        else if (data.weather[0].main = 'Clear') {
            weathericon.src = 'images/clear.png'
        }
        else if (data.weather[0].main = 'Mist') {
            weathericon.src = 'images/mist.png'
        }
    }

    searchBtn.addEventListener("click", function () {
        checkeather(searchInput.value);
    });
    searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            checkeather(searchInput.value);
        }
    });

});

