const BASE_URL = 'https://dad-jokes.p.rapidapi.com/'
const API_KEY = '30ff1b0919msh0fdee39a9b0e567p12aa23jsn5300cbd8efaa'

export function getRandomJoke() {
    return fetch(BASE_URL + "/random/jokes", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
            "x-rapidapi-key": `${API_KEY}`
        }
    })
}