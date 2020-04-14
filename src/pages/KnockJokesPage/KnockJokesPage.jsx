import React, { useEffect, useState } from 'react';
// import { getKnockJoke } from '../../utils/jokesService-api';

const KnockJokesPage = (props) => {

    const [knockJoke, setKnockJoke] = useState('');

    async function fetchData() {
        const res = await fetch('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/knock-knock');
        res.json().then(res => setKnockJoke(`${res[0].setup} ${res[0].punchline}`))
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Knock-Knock Jokes</h1>
            {knockJoke}
        </div>
    )
}

export default KnockJokesPage;