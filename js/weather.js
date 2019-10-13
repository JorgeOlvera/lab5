
const credentials = require('./credentials.js')
const request = require('request')

//      https://api.darksky.net/forecast/[key]/[latitude],[longitude]


toCelsius = function(f){
    return Math.round((f-32) * (5/9))
}

const getWeather = function(lat, long, callback) { 
    const url = 'https://api.darksky.net/forecast/' + credentials.DarkSkyapikey +
              '/' + lat + ',' + long;
    console.log(url)
    request({ url, json: true }, function(error, response) {
        if (error) {
            callback(error, undefined)
        } else {
            const data = response.body
    
            if (data.Response == 'False') {
                callback(error, undefined)
            } else {
            const info = {
                latitude : data.latitude,
                longitude : data.longitude,
                temperature: toCelsius(data.currently.temperature),
                summary: data.currently.summary,
                precipProbability: data.currently.precipProbability
            }
            
            // testing change textdocument.getElementById("myh1").innerHTML = "test"

            console.log(info.summary + ". Actualmente está a " + info.temperature 
            + "°C. Hay " + info.precipProbability + "% de posibilidad de lluvia.")

            
            }
        }
    
        })  

    
}

module.exports = {
    getWeather: getWeather
}

