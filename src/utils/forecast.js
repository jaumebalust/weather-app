const axios = require('axios').default

const forecast = (latitutde,longitude,callback) => {

    let url = 'http://api.weatherstack.com/current?access_key=8fc5bfd1c1404b280c976e7a9b084ada&query='+latitutde+","+longitude

    // Make a request for a user with a given ID
    axios.get(url)
        .then(function (response) {
            // handle success
            callback(undefined,response.data.current)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            callback('Unable to connect')
        })
        .then(function () {
            // always executed
        });
}




module.exports = forecast
