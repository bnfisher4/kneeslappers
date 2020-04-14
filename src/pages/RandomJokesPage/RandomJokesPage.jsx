import React, { useEffect, useState } from 'react';
import { getRandomJoke } from '../../utils/dadJokes-api';

const RandomJokesPage = (props) => {

    const [randomJoke, setRandomJoke] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getRandomJoke();
            const results = await data.json();
            console.log(results)
            setRandomJoke(results)
        }
        fetchData();
    }, [])

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