import React, { useEffect, useState } from 'react';
import { getJoke } from '../../utils/jokeService';

const ProgramJokesPage = () => {

    const [proJoke, setProJoke] = useState({});
    const [newJoke, setNewJoke] = useState(false);

    async function fetchData() {
        const res = await getJoke('type/programming');
        const [jokeData] = JSON.parse(res)
        setProJoke({
            setup: jokeData.setup,
            punchline: jokeData.punchline,
        })
    }
    useEffect(() => {
        fetchData();
    }, [newJoke]);

    return (
        <div className='card'>
            <div className='ui centered blue fluid card'>
                <div className='content'>
                    <div className="header">Programming</div>
                    <div className="description">
                        <p>{proJoke.setup}</p>
                        <p>{proJoke.punchline}</p>
                    </div>
                </div>
            </div>
            <button className='ui blue button' onClick={() => setNewJoke(!newJoke)}>New Joke</button>
        </div>
    )
}

export default ProgramJokesPage;