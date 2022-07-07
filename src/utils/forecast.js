const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const forecastUrl = 'http://api.weatherstack.com/current?access_key=9400c9f0062dff51453af693e633ca96&query=' + latitude + ',' + longitude + '&units=m'

    request({url: forecastUrl, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to forecast service', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            const {weather_descriptions, temperature, feelslike, humidity, wind_speed} = response.body.current

            callback(undefined,
                weather_descriptions + '. It\'s currently ' + temperature + ' degrees out. It feels like ' + feelslike + ' degrees. Humidity level is ' + humidity + '% and wind speed is ' + wind_speed + ' kilometres per hour.'
            )
        }
    })
}

module.exports = forecast
