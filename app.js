function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'eeb953eca35156a8e8a6248fef966721';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '';

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const weatherHTML = `
        <h2>${cityName}</h2>
        <p>온도: ${temperature} °C</p>
        <p>날씨: ${description}</p>
    `;

    weatherInfo.innerHTML = weatherHTML;
}