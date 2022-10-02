const geocode = require('./geocode.js');
const forecast = require('./forecast.js');


const weather = (string, callback) => {

    geocode(string, (error, latLon) => {
        if (error) {
            callback(error)
            return
        }
        const {latitude, longitude} = latLon

        forecast(latitude, longitude, (error, weather) => {
            weather.location = string
            weather.latitude = latitude
            weather.longitude = longitude
            callback(error,weather)
        })
    })
}


module.exports = weather
