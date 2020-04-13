import React, { useEffect, useState } from 'react';
import { getKnockJoke } from '../../utils/dadJokes-api';

const KnockJokesPage = (props) => {

    const [knockJoke, setKnockJoke] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await getKnockJoke();
            const results = await data.json();
            setKnockJoke(`${results[0].setup} ${results[0].punchline}`)
        }
        fetchData();
    }, [])

    return (
        <div>
            {knockJoke}
        </div>
    )
}

export default KnockJokesPage;