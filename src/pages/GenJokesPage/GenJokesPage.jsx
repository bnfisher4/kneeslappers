import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getGeneralJoke } from '../../utils/dadJokes-api';

const GenJokesPage = (props) => {

    const [joke, setJoke] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await getGeneralJoke();
            const results = await data.json();
            // console.log(results);
            setJoke(`${results[0].setup} ${results[0].punchline}`)
        }
        fetchData();
    }, [])

    let gen = props.user ?
        <div>
            <h2>General</h2>
        </div>
        :
        <div>
            <Redirect to='/' />
        </div>
    return (
        <div>
            {joke}
        </div>
    )
}

export default GenJokesPage;