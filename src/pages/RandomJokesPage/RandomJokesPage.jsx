import React, { useEffect, useState } from 'react';
import { getRandomJoke } from '../../utils/dadJokes-api';

const RandomJokesPage = (props) => {

    const [randomJoke, setRandomJoke] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await getRandomJoke();
            const results = await data.json();
            setRandomJoke(`${results[0].setup} ${results[0].punchline}`)
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1>Random Jokes</h1>
            {randomJoke}
        </div>
    )
}

export default RandomJokesPage;