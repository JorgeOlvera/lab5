const darkSky = require ('./weather.js')
const geocode = require ('./geocode.js')

//default values (Mty)
var city = "Shanghai"
var lat = '25.68'
var long = '-100.31'

let btnSearch = document.getElementById('newItemButton')

let myh1 = document.getElementById("header")

btnSearch.addEventListener('click', function() {
    myh1.innerHTML = "AAAGHHH"

});

/*
var coord = geocode.getCoordinates(city)

console.log("test")

console.log(coord)

darkSky.getWeather(lat, long);
*/
