import React, { useEffect, useState } from 'react';
import { getJoke } from '../../utils/jokeService';

const KnockJokesPage = (props) => {

    const [knockJoke, setKnockJoke] = useState('');

    async function fetchData() {
        const res = await getJoke('type/knock-knock');
        const jokeData = JSON.parse(res)
        setKnockJoke(`${jokeData[0].setup} ${jokeData[0].punchline}`)
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='ui card'>
            <div className='content'>
                <div className="header">Knock-Knock</div>
                <div className="description">
                    {knockJoke}
                </div>
            </div>
        </div>
    )
}

export default KnockJokesPage;