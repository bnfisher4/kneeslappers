import React, { useEffect, useState } from 'react';
import { getJoke } from '../../utils/jokeService';

const KnockJokesPage = (props) => {

    const [knockJoke, setKnockJoke] = useState({});
    const [newJoke, setNewJoke] = useState(false);

    async function fetchData() {
        const res = await getJoke('type/knock-knock');
        const [jokeData] = JSON.parse(res)
        setKnockJoke({
            setup: jokeData.setup,
            punchline: jokeData.punchline,
        });
    }
    useEffect(() => {
        fetchData();
    }, [newJoke]);

    return (
        <div>
            <div className='ui centered green card'>
                <div className='content'>
                    <div className="header">Knock-Knock</div>
                    <div className="description">
                        <p>{knockJoke.setup}</p>
                        <p>{knockJoke.punchline}</p>
                    </div>
                </div>
            </div>
            <button onClick={() => setNewJoke(!newJoke)}>New Joke</button>
        </div>
    )
}

export default KnockJokesPage;