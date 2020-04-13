import React from 'react';
import GenJokesPage from '../GenJokesPage/GenJokesPage';
import ProgramJokesPage from '../ProgramJokesPage/ProgramJokesPage';
import KnockJokesPage from '../KnockJokesPage/KnockJokesPage';

const CategoriesPage = () => {
    return (
        <div>
            <h3>Categories</h3>
            <GenJokesPage />
            <ProgramJokesPage />
            <KnockJokesPage />
        </div>
    )
}

export default CategoriesPage;