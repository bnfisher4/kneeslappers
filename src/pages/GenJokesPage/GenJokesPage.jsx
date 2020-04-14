import React, { useEffect, useState } from 'react';
// import { getGeneralJoke } from '../../utils/jokesService-api';

const GenJokesPage = (props) => {

    const [genJoke, setGenJoke] = useState('');

    async function fetchData() {
        const res = await fetch('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general');
        res.json().then(res => setGenJoke(`${res[0].setup} ${res[0].punchline}`))
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>General Jokes</h1>
            {genJoke}
        </div>
    )
}

export default GenJokesPage;