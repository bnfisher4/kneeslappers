const BASE_URL = '/api/jokes'


export function getJoke(type) {
    return fetch(BASE_URL + '/?type=' + type).then(res => res.json());
}
