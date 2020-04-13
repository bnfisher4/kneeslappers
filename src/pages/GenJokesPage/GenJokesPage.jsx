import React, { useEffect, useState } from 'react';
import { getGeneralJoke } from '../../utils/dadJokes-api';

const GenJokesPage = (props) => {

    const [genJoke, setGenJoke] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await getGeneralJoke();
            const results = await data.json();
            // console.log(results);
            setGenJoke(`${results[0].setup} ${results[0].punchline}`)
        }
        fetchData();
    }, [])

    return (
        <div>
            {genJoke}
        </div>
    )
}

export default GenJokesPage;