import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
    return (
        <div className="Categories">
            <h3>Categories</h3>
            <div>
                <Link className='btn btn-default' to='/general'>General</Link>
                <Link className='btn btn-default' to='/programming'>Programming</Link>
                <Link className='btn btn-default' to='/knock'>Knock-Knock</Link>
                <Link className='btn btn-default' to='/random'>Random</Link>
            </div>
        </div>
    )
}

export default CategoriesPage;