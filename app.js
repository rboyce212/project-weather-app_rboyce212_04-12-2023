const form = document.querySelector(".search-location");
const formInput = document.querySelector("#search-input");

form.addEventListener("submit", handleFetchWeatherApi);

function handleFetchWeatherApi(event) {
  event.preventDefault();

  let data = fetchWeatherApi(formInput.value);
  console.log(data);
}
