import React from 'react';
import CategoriesPage from '../CategoriesPage/CategoriesPage';

function JokesPage(props) {
    let jokes = props.user ?
        <div>
            <CategoriesPage />
        </div>
        :
        <div>
            <h2>Welcome to Kneeslappers</h2>
            <p>Sign up or Log in to see some Dad Jokes!</p>
        </div>

    return (
        <div>
            {jokes}
        </div>
    )
}

export default JokesPage;