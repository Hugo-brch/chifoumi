import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='Name'>
            <h1>Le Chifoumi <br/> 1v1</h1>
            <Link to="/connexion"><button className='bn1'>Commencer !</button></Link>
        </div>
    );
};

export default Home;