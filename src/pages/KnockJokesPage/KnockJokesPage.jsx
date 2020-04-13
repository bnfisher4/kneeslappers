import React from 'react';
import { Redirect } from 'react-router-dom';

const KnockJokesPage = (props) => {
    let knock = props.user ?
        <div>
            <h2>Knock-Knock</h2>
        </div>
        :
        <div>
            <Redirect to='/' />
        </div>
    return (
        <div>
            {knock}
        </div>
    )
}

export default KnockJokesPage;