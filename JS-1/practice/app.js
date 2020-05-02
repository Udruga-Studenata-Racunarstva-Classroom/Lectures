"use strict"

const weather = JSON.parse('{"description": "weather in london is great!"}')

document.getElementById("desc").innerHTML += weather.description;