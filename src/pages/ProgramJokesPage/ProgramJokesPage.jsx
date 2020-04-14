import React, { useEffect, useState } from 'react';
// import { getProgramJoke } from '../../utils/jokesService-api';

const ProgramJokesPage = (props) => {

    const [proJoke, setProJoke] = useState('');

    async function fetchData() {
        const res = await fetch('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/programming');
        res.json().then(res => setProJoke(`${res[0].setup} ${res[0].punchline}`))
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Programming Jokes</h1>
            {proJoke}
        </div>
    )
}

export default ProgramJokesPage;