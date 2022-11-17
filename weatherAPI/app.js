// api :endpoint(url), path, query
// fetch api needs to use json() method
// async function getJoke() {
//   let joke = await fetch("https://v2.jokeapi.dev/joke/Christmas");
//   let data = await joke.json();
//   console.log(data.setup);
// }
// getJoke();

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", add);
// function add() {
//   const first = document.querySelector("#first");
//   const second = document.querySelector("#second");
//   alert(Number(first.value) + Number(second.value));
// }
let myKey = "f014be697d15299e50a89ebadd2b8c39";
let city = "Paris";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;
async function getWeather() {
  let d = await fetch(url);
  let dj = await d.json();
  console.log(dj);
}
getWeather();
