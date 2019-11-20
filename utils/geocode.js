const request = require('request');

const geocode = (address, callback) => {
    url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?limit=1&access_token=pk.eyJ1IjoidGlzenliIiwiYSI6ImNrMnNycnU3YTBqaHozYm56a2I0enZ1amcifQ.fN7Rhpi8mjkREmJUO-VC3w";
    request({ url, json : true}, (error, { body } = {} ) => {
        if(error){
            callback("Cant connect to Map box API", undefined)
        }else if( body.features.length === 0 ){
            callback("cant find the location", undefined)
        } else {
            callback(undefined, {
                latitude : body.features[0].center[1] , 
                longitude : body.features[0].center[0],
                location : body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;