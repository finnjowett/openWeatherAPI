const fetch = require("node-fetch");
const express = require("express");
app = express();
const ejs = require("ejs");

let myKey = "f014be697d15299e50a89ebadd2b8c39";

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/:city", async (req, res) => {
  // deconstructing an object
  let { city } = req.params;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;
  let d = await fetch(url);
  let dj = await d.json();
  let { temp } = dj.main;
  let newT = kToC(temp);
  console.log(dj);
  res.render("weather.ejs", { dj, city, newT });
});

app.listen(3000);

// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;
// async function getWeather() {
//   let d = await fetch(url);
//   let dj = await d.json();
//   console.log(dj);
// }
// getWeather();

function kToC(k) {
  return Math.round(k - 273.15);
}
