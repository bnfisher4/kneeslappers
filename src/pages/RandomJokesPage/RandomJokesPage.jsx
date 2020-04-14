import React, { useEffect, useState } from 'react';
import { Button, Card } from 'semantic-ui-react'

import { getRandomJoke } from '../../utils/jokesService-api';

const RandomJokesPage = (props) => {

    const [randomJoke, setRandomJoke] = useState([]);

    async function fetchData() {
        const res = await getRandomJoke('jokes/');
        console.log(res);
        const jokeData = JSON.parse(res)
        console.log(jokeData)
        setRandomJoke([jokeData]);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Card>
            {randomJoke.map(r => {
                return (
                    <Card.Content key={r.id}>
                        <Card.Header>Random</Card.Header>
                        <Card.Description>
                            <p className='meta'>{r.type}</p>
                            <p>
                                {r.setup} <br />
                                {r.punchline}
                            </p>
                        </Card.Description>
                        <br />
                        <Button basic color='green'>Add to Joke Box</Button>
                    </Card.Content>
                )
            })}
        </Card>
    )
}

export default RandomJokesPage;