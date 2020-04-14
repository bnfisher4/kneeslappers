import React, { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { getJoke } from '../../utils/jokesService-api';


const GenJokesPage = (props) => {

    const [genJoke, setGenJoke] = useState('');

    async function fetchData() {
        const res = await getJoke('type/general');
        const jokeData = JSON.parse(res)
        setGenJoke(`${jokeData[0].setup} ${jokeData[0].punchline}`)
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='ui card'>
            <div className='content'>
                <div className="header">General</div>
                <div className="description">
                    {genJoke}
                </div>
            </div>
        </div>
    )
}

export default GenJokesPage;