import tokenService from './tokenService';
const BASE_URL = '/api/jokes'


export function getJoke(type) {
    return fetch(BASE_URL + '/?type=' + type).then(res => res.json());
}

export function favJoke(jokeData) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            // Add this header - don't forget the space after Bearer
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(jokeData)
    };
    return fetch(BASE_URL + '/favorites', options).then(res => res.json());
}