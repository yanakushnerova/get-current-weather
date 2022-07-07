const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const getCurrentLocationButton = document.getElementById('current-location-button')

const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    message1.textContent = ''
    message2.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message1.textContent = data.error
            } else {
                message1.textContent = data.location
                message2.textContent = data.forecast
            }
        }) 
    })
})

getCurrentLocationButton.addEventListener('click', (e) => {
    e.preventDefault()

    message1.textContent = ''
    message2.textContent = ''

    fetch('/currentlocationweather').then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message1.textContent = data.error
            } else {
                message2.textContent = data.forecast
            }
        })
    })

})
