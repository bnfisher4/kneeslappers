import React, { useEffect, useState } from 'react';
import { getProgramJoke } from '../../utils/dadJokes-api';

const ProgramJokesPage = (props) => {

    const [proJoke, setProJoke] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProgramJoke();
            const results = await data.json();
            setProJoke(`${results[0].setup} ${results[0].punchline}`)
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1>Programming Jokes</h1>
            {proJoke}
        </div>
    )
}

export default ProgramJokesPage;