import React, { useEffect, useState } from 'react';
import { Button, Card } from 'semantic-ui-react'

import { getJoke } from '../../utils/jokeService';

const RandomJokesPage = (props) => {

    const [randomJoke, setRandomJoke] = useState([]);

    async function fetchData() {
        const res = await getJoke('jokes/');
        const jokeData = JSON.parse(res)
        setRandomJoke([jokeData]);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
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
                            <Button basic color='green'>Add to Joke Book</Button>
                        </Card.Content>
                    )
                })}
            </Card>
        </div>
    )
}

export default RandomJokesPage;