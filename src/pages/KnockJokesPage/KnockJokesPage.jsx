import React, { useEffect, useState } from 'react';
import { getJoke } from '../../utils/jokeService';
import 'semantic-ui-css/semantic.min.css'

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
        <div className='card'>
            <div className='ui centered green fluid card'>
                <div className='content'>
                    <div className="header">Knock-Knock</div>
                    <div className="description">
                        <p>{knockJoke.setup}</p>
                        <p>{knockJoke.punchline}</p>
                    </div>
                </div>
            </div>
            <button className='ui green button' onClick={() => setNewJoke(!newJoke)}>New Joke</button>
        </div>
    )
}

export default KnockJokesPage;