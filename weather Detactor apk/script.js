async function getWeather() {
  const city = document.getElementById('city').value;
  if (city === '') {
      alert('Please enter a city name');
      return;
  }

  const apiKey = 'be150cc838e497a0281f5a5650cbe884'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('City not found');
      }
      const data = await response.json();
      displayWeather(data);
  } catch (error) {
      alert(error.message);
  }
}

function displayWeather(data) {
  const weatherInfo = document.getElementById('weather-info');
  weatherInfo.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity} %</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}
