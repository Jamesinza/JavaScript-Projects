// Async function to fetch weather data for a given city
async function getWeather(city) {
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

// Async function to display weather
async function showWeather(city) {
  if (!city) return; // do nothing if city is empty

  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later.");
    return;
  }

  // Helper function to safely access nested values
  const safeGet = (value, defaultVal = "N/A") => value !== undefined ? value : defaultVal;

  document.getElementById("weather-icon").src = safeGet(data.weather?.[0]?.icon, "");
  document.getElementById("main-temperature").innerText = safeGet(data.main?.temp);
  document.getElementById("feels-like").innerText = safeGet(data.main?.feels_like);
  document.getElementById("humidity").innerText = safeGet(data.main?.humidity);
  document.getElementById("wind").innerText = safeGet(data.wind?.speed);
  document.getElementById("wind-gust").innerText = safeGet(data.wind?.gust);
  document.getElementById("weather-main").innerText = safeGet(data.weather?.[0]?.main);
  document.getElementById("location").innerText = safeGet(data.name);
}

// Event listener for the button
document.getElementById("get-weather-btn").addEventListener("click", () => {
  const city = document.getElementById("city-select").value;
  showWeather(city);
});
