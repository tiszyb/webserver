const request = require('request');

const forecast = (latitude, longitude, callback) =>{
    url = "https://api.darksky.net/forecast/461037783eb1c2b1881cb5ad9d3e80f0/"+latitude+","+longitude;
    request({ url, json : true}, (error, { body } = {} )=>{
        if(error){
            callback("Could not connect to Dark sky API", undefined)
        } else if(body.error){
            callback("couldn't find the location", undefined)
        } else {
            callback(undefined, "Temperature: "+body.currently.temperature)
        }
    })
}

module.exports = forecast;