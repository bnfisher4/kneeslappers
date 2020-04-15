import React, { useEffect, useState } from 'react';
import { getJoke } from '../../utils/jokeService';

const RandomJokesPage = (props) => {

    const [randomJoke, setRandomJoke] = useState('');
    const [newJoke, setNewJoke] = useState(false);


    async function fetchData() {
        const res = await getJoke('jokes/');
        const jokeData = JSON.parse(res)
        setRandomJoke(`${jokeData.setup} ${jokeData.punchline}`);
    }
    useEffect(() => {
        fetchData();
    }, [newJoke]);

    return (
        <div>
            <div className='ui centered yellow card'>
                <div className='content'>
                    <div className="header">Random</div>
                    <div className="description">
                        {randomJoke}
                    </div>
                </div>
            </div>
            <button onClick={() => setNewJoke(!newJoke)}>New Joke</button>
        </div>
    )
}

export default RandomJokesPage;