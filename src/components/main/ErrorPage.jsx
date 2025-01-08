import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className="content">
            <div className="error-page">
                <p>Ups...</p>
                <p>Coś poszło nie tak :(</p>
                <button>
                    <NavLink to="/">Wróć do strony głównej</NavLink>
                </button>
            </div>
        </section>
    );
}

export default ErrorPage;