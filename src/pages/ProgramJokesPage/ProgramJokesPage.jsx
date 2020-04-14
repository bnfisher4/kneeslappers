import React, { useEffect, useState } from 'react';
import { getJoke } from '../../utils/jokesService-api';

const ProgramJokesPage = (props) => {

    const [proJoke, setProJoke] = useState('');

    async function fetchData() {
        const res = await getJoke('type/programming');
        console.log(res);
        const jokeData = JSON.parse(res)
        console.log(jokeData)
        setProJoke(`${jokeData[0].setup} ${jokeData[0].punchline}`)
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