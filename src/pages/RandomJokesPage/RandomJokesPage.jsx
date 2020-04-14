import React, { useEffect, useState } from 'react';
// import { getRandomJoke } from '../../utils/jokesService-api';

const RandomJokesPage = (props) => {

    const [randomJoke, setRandomJoke] = useState([]);

    async function fetchData() {
        const res = await fetch('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes/5');
        res.json().then(res => setRandomJoke(res))
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Random Jokes</h1>
            {randomJoke.map(r => {
                return (
                    <p key={r.id}>
                        {r.setup}
                        {r.punchline}
                    </p>
                )
            })}
        </div>
    )
}

export default RandomJokesPage;