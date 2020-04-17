import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriesPage.css'
import 'semantic-ui-css/semantic.min.css'


const CategoriesPage = () => {
    return (
        <div className="Categories">
            <h1>KneeSlappin' Categories</h1>
            <div className='links'>
                <Link
                    id='btn'
                    className='ui icon left labeled red button'
                    to='/general'><i aria-hidden="true" className="book icon"></i>
                        General
                </Link>
                <Link
                    id='btn'
                    className='ui icon left labeled blue button'
                    to='/programming'><i aria-hidden="true" className="code icon"></i>
                        Programming
                </Link>
                <Link
                    id='btn'
                    className='ui icon left labeled green button'
                    to='/knock'><i aria-hidden="true" className="key icon"></i>
                        Knock-Knock
                </Link>
                <Link
                    id='btn'
                    className='ui icon left labeled yellow button'
                    to='/random'><i aria-hidden="true" className="help icon"></i>
                        Random
                </Link>
            </div>
        </div>
    )
}

export default CategoriesPage;