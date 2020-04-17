import React, { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { getJoke } from '../../utils/jokeService';


const GenJokesPage = (props) => {

    const [genJoke, setGenJoke] = useState({});
    const [newJoke, setNewJoke] = useState(false);

    async function fetchData() {
        const res = await getJoke('type/general');
        const [jokeData] = JSON.parse(res)
        console.log(jokeData)
        setGenJoke({
            setup: jokeData.setup,
            punchline: jokeData.punchline,
        })
    }
    useEffect(() => {
        fetchData();
    }, [newJoke]);


    return (
        <div>
            <div className='ui centered red card'>
                <div className='content'>
                    <div className="header">General</div>
                    <div className="description">
                        <p> {genJoke.setup} </p>
                        <p> {genJoke.punchline} </p>
                    </div>
                </div>
            </div>
            <button onClick={() => setNewJoke(!newJoke)}>New Joke</button>
        </div>
    )
}

export default GenJokesPage;