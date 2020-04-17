import React, { useEffect, useState } from 'react';
import { getJoke } from '../../utils/jokeService';

const RandomJokesPage = (props) => {

    const [randomJoke, setRandomJoke] = useState({});
    const [newJoke, setNewJoke] = useState(false);


    async function fetchData() {
        const res = await getJoke('jokes/');
        const jokeData = JSON.parse(res)
        setRandomJoke({
            setup: jokeData.setup,
            punchline: jokeData.punchline,
            type: jokeData.type
        });
    }
    useEffect(() => {
        fetchData();
    }, [newJoke]);

    return (
        <div className='card'>
            <div className='ui centered yellow fluid card'>
                <div className='content'>
                    <div className="header">Random</div>
                    <div className="description">
                        <p className='meta'>{randomJoke.type}</p>
                        <p> {randomJoke.setup} </p>
                        <p>{randomJoke.punchline}</p>
                    </div>
                </div>
            </div>
            <button className='ui yellow button' onClick={() => setNewJoke(!newJoke)}>New Joke</button>
        </div>
    )
}

export default RandomJokesPage;