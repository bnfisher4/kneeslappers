import React from 'react';
import CategoriesPage from '../CategoriesPage/CategoriesPage';
import './JokesPage.css'

function JokesPage(props) {
    let jokes = props.user ?
        <div>
            <CategoriesPage />
        </div>
        :
        <div className='ui centered card'>
            <div className='content'>
                <h1>Welcome to Kneeslappers!</h1>
                <h3>Sign up or Log in to see some Dad Jokes!</h3>
            </div>
            <div className='image'><img src='https://i.imgur.com/GrB3X3Y.png?1' alt='Dad' /></div>
        </div>

    return (
        <div>
            {jokes}
        </div>
    )
}

export default JokesPage;