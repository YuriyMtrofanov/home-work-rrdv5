import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <h1>Main Page</h1>
            <Link to="users/">
                <h2>UsersListPage</h2>
            </Link>
        </div>
    );
}
 
export default MainPage;