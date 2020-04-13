import React from 'react';
import CategoriesPage from '../CategoriesPage/CategoriesPage';

function JokesPage(props) {
    let jokes = props.user ?
        <div>
            <CategoriesPage />
        </div>
        :
        <div>
            <h1>Jokes Page</h1>
            <h2>Welcome to Kneeslappers</h2>
        </div>

    return (
        <div>
            {jokes}
        </div>
    )
}

export default JokesPage;