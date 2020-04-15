import tokenService from './tokenService';
const BASE_URL = '/api/jokes'


export function getJoke(type) {
    return fetch(BASE_URL + '/?type=' + type).then(res => res.json());
}

export function create(favjoke) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(favjoke)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}