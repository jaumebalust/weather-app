const axios = require('axios').default;
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');


geocode('San Luis Potosi',(error,latLon) => {
    if (error){
        console.log(error)
    }
    const {latitude,longitude} = latLon

    forecast(latitude,longitude,(error,weather)=>{
        console.log(weather)
    })
})

