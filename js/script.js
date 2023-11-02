document.getElementById("searchButton").addEventListener("click", function () {
 let location = document.getElementById("locationInput").value;
  fetchWeatherData(location);
});


function fetchWeatherData(location) {
  // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
  const apiKey = "2c50d7aa09b79ea7e2c91f33d36e1daf";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      updateWeatherUI(data);
    })
    .catch((error) => {
      console.error(error);
      document.getElementById("weatherInfo").innerHTML =
        "Error fetching weather data.";
    });
}

function updateWeatherUI(data) {
  const weatherInfoElement = document.getElementById("weatherInfo");
  const temperature = data.main.temp;
  const conditions = data.weather[0].description;
  const location = data.name;

  weatherInfoElement.innerHTML = `
        <h3>${location}</h3>
        <p>Temperature: ${temperature}°C</p>
        <p>Conditions: ${conditions}</p>
    `;
}
