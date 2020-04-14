import React, { useEffect, useState } from 'react';
// import { getKnockJoke } from '../../utils/jokesService-api';

const KnockJokesPage = (props) => {

    const [knockJoke, setKnockJoke] = useState('');

    async function fetchData() {
        const res = await fetch('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/knock-knock');
        res.json().then(res => setKnockJoke(`${res[0].setup} ${res[0].punchline}`))
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