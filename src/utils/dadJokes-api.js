const BASE_URL = 'https://us-central1-dadsofunny.cloudfunctions.net/DadJokes'
const API_KEY = '30ff1b0919msh0fdee39a9b0e567p12aa23jsn5300cbd8efaa'

export function getRandomJoke() {
    return fetch(BASE_URL + "/random/jokes/5", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
            "x-rapidapi-key": `${API_KEY}`
        }
    })
}

export function getGeneralJoke() {
    return fetch(BASE_URL + "/random/type/general", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
            "x-rapidapi-key": `${API_KEY}`
        }
    })
}

export function getProgramJoke() {
    return fetch(BASE_URL + "/random/type/programming", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
            "x-rapidapi-key": `${API_KEY}`
        }
    })
}

export function getKnockJoke() {
    return fetch(BASE_URL + "/random/type/knock-knock", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
            "x-rapidapi-key": `${API_KEY}`
        }
    })
}