let weather = {
    'apiKey': 'a04acca25bac64a98a4fb914aa295e07',
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + "°C";
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.wind').innerText = "Wind speed: " + speed + " km/h";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".text-input").value);
    },
};

document.querySelector('.search-city').addEventListener('click', function () {
    weather.search();
});

weather.fetchWeather("Hanoi");