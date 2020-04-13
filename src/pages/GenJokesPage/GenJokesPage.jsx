import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { getGeneralJoke } from '../../utils/dadJokes-api';

const GenJokesPage = (props) => {

    useEffect(() => {
        const fetchData = async () => {
            const data = await getGeneralJoke();
            const results = await data.json();
            console.log(results);
        }
        fetchData();
    })

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
            {gen}
        </div>
    )
}

export default GenJokesPage;