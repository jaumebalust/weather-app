const axios = require('axios').default

const geocode = (address,callback) => {
    let mapBoxToken = 'pk.eyJ1IjoiamF1bWViYWx1c3QiLCJhIjoiY2w4cmpranFpMXg4YjN2cXdqNWUycnNiYyJ9.7cnavPuvhTiSGvIdmWAk5w'
    let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token='+mapBoxToken+'&limit=1'

    return axios.get(url)
        .then(function (response) {
            // handle success
            let body = {
                latitude: response.data.features[0].center[1],
                longitude:response.data.features[0].center[0]
            }
            callback(undefined,body)
        })
        .catch(function (error) {
            callback(error)
            return null
        })
        .then(function () {
            // always executed
        });

}


module.exports = geocode
