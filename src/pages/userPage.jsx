import React from "react";
import { Link, useParams } from "react-router-dom";
import UserEditPage from "./userEditPage";
import UsersListPage from "./usersListPage";

const UserPage = () => {
    const params = useParams();
    const { userId, edit } = params;
    return (
        <>
            <h1>{`User ${userId} page`}</h1>
            <ul>
                <li>
                    <Link to="edit">
                        <h3>Edit this User info</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/users/">
                        <h3>Back to users list page</h3>
                    </Link>
                </li>
            </ul>
            {edit ? <UserEditPage/> : <UsersListPage/>}
        </>
    );
}
 
export default UserPage;