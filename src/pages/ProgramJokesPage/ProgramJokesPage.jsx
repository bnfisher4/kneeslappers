import React, { useEffect, useState } from 'react';
import { getJoke } from '../../utils/jokeService';

const ProgramJokesPage = (props) => {

    const [proJoke, setProJoke] = useState('');
    const [newJoke, setNewJoke] = useState(false);

    async function fetchData() {
        const res = await getJoke('type/programming');
        console.log(res);
        const jokeData = JSON.parse(res)
        console.log(jokeData)
        setProJoke(`${jokeData[0].setup} ${jokeData[0].punchline}`)
    }
    useEffect(() => {
        fetchData();
    }, [newJoke]);

    return (
        <div>
            <div className='ui card'>
                <div className='content'>
                    <div className="header">Programming</div>
                    <div className="description">
                        {proJoke}
                    </div>
                </div>
            </div>
            <button onClick={() => setNewJoke(!newJoke)}>New Joke</button>
        </div>
    )
}

export default ProgramJokesPage;