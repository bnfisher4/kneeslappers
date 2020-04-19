import React from 'react';
import CategoriesPage from '../CategoriesPage/CategoriesPage';
import './JokesPage.css'

function JokesPage(props) {
    let jokes = props.user ?
        <div>
            <CategoriesPage />
        </div>
        :
        <div>
            <h1>Welcome to Kneeslappers</h1>
            <h3>Sign up or Log in to see some Dad Jokes!</h3>
        </div>

    return (
        <div>
            {jokes}
        </div>
    )
}

export default JokesPage;