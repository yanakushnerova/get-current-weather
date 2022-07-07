const request = require('postman-request')

const geocode = (address, callback) => {
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibGFiYWRpZGFiYWR1ZGEiLCJhIjoiY2t5dDQ4a2IwMHQwYzMwcWF6cTVzc3R4NSJ9.YQ_MvTfQdrNQj-LX0Tiz_g&limifkds=3&limit=1'

    request({url: geocodeUrl, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to location service', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find coordinates', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
