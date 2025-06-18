const apiKey = "50d2a333d9636b77ad1b15ba606e08ff";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      // Example: Display temperature
      const temp = data.main.temp;
      const description = data.weather[0].description;
      document.getElementById("weatherInfo").innerHTML = 
        `🌡️ Temperature in ${city}: ${temp}°C<br>🌥️ Weather: ${description}`;
      document.getElementById("weatherInfo").classList.remove("hidden");
    })
    .catch(error => {
      alert(error.message);
      document.getElementById("weatherInfo").classList.add("hidden");
    });
}
