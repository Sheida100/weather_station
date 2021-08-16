console.clear();

export function Getweather(callback, zipCode) {
  fetch(
    `https://api.weatherbit.io/v2.0/current?key=0bd322375bfe450e91936bbc888270b0&&postal_code=${zipCode}&country=US`
  )
    .then((response) => response.json())
    .then((data) => callback(data));
}
