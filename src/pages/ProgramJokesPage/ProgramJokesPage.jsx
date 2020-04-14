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
        <div className='ui card'>
            <div className='content'>
                <div className="header">Programming</div>
                <div className="description">
                    {proJoke}
                </div>
            </div>
        </div>
    )
}

export default ProgramJokesPage;