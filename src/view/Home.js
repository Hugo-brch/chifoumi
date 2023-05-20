import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='Name'>
            <h1>Chifoumi 1v1</h1>
            <Link to="/connexion">Commencer !</Link>
        </div>
    );
};

export default Home;