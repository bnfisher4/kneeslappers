import React from 'react';
import { Redirect } from 'react-router-dom';

const ProgramJokesPage = (props) => {
    let pro = props.user ?
        <div>
            <h2>Programming</h2>
        </div>
        :
        <div>
            <Redirect to='/' />
        </div>
    return (
        <div>
            {pro}
        </div>
    )
}

export default ProgramJokesPage;