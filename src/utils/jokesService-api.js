const BASE_URL = '/api/jokes'

export function getRandomJoke() {
    return fetch(BASE_URL + '/random/jokes').then(res => res.json());
}

// export function getGeneralJoke() {
//     return fetch(BASE_URL + "/random/type/general", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
//         }
//     })
// }

// export function getProgramJoke() {
//     return fetch(BASE_URL + "/random/type/programming", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
//         }
//     })
// }

// export function getKnockJoke() {
//     return fetch(BASE_URL + "/random/type/knock-knock", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
//         }
//     })
// }