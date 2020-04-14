import React, { useEffect, useState } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

// import { getRandomJoke } from '../../utils/jokesService-api';

const RandomJokesPage = (props) => {

    const [randomJoke, setRandomJoke] = useState([]);

    async function fetchData() {
        const res = await fetch('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes/5');
        res.json().then(res => setRandomJoke(res))
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Card>
            {randomJoke.map(r => {
                return (
                    <Card.Content>
                        <Card.Header>Random</Card.Header>
                        <Card.Description>
                            <p key={r.id}>
                                <p className='meta'>{r.type}</p>
                                {r.setup}
                                {r.punchline}
                            </p>
                        </Card.Description>
                    </Card.Content>
                )
            })}
        </Card>
    )
}

export default RandomJokesPage;