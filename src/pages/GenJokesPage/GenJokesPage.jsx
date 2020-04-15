import React, { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { getJoke } from '../../utils/jokeService';
import JokeCard from '../../components/JokeCard/JokeCard';


const GenJokesPage = (props) => {

    const [genJoke, setGenJoke] = useState('');
    const [newJoke, setNewJoke] = useState(false);

    async function fetchData() {
        const res = await getJoke('type/general');
        const jokeData = JSON.parse(res)
        setGenJoke(`${jokeData[0].setup} ${jokeData[0].punchline}`)
    }
    useEffect(() => {
        fetchData();
    }, [newJoke]);

    return (
        <div>
            <div className='ui card'>
                <div className='content'>
                    <div className="header">General</div>
                    <div className="description">
                        {genJoke}
                    </div>
                </div>
            </div>
            <button onClick={() => setNewJoke(!newJoke)}>New Joke</button>
        </div>
    )
}

export default GenJokesPage;