console.clear();
import { Getweather } from "./api.js";

document.addEventListener("submit", function (e) {
  e.preventDefault();
  let zipCode = document.querySelector("input").value;
  console.log(zipCode);
  Getweather(callback, zipCode);
});

function callback(data) {
  let weatherData = data.data[0];
  console.log(weatherData);
  let show_weather = document.querySelector(".dataContainer");

  let weather = weatherData.weather.description;
  let temp = weatherData.app_temp;
  let datetime = weatherData.datetime;
  let cityName = weatherData.city_name;
  let timezone = weatherData.timezone;
  let windSpeed = weatherData.wind_spd;
  console.log(weather, temp);
  show_weather.innerHTML = `
  <h4>city_name : ${cityName}</h4><br>
  <h4>TimeZone:${timezone}</h4>
  <br>
  <h4>date_time: ${datetime}</h4><br>
  <h4>temp: ${temp}</h4><br>
  <h4>description: ${weather}</h4><br>
  <h4>wind_speed: ${windSpeed}</h4><br>
  
  `;
  //   console.log("callback", weatherData);
}

// const weather = Getweather(callback);
