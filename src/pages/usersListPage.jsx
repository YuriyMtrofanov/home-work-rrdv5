import React from "react";
import { Link, useParams } from "react-router-dom";
import UserPage from "./userPage";

const UsersListPage = () => {
    const users = [
        {id: 1, label: "user 1"},
        {id: 2, label: "user 2"},
        {id: 3, label: "user 3"},
        {id: 4, label: "user 4"},
        {id: 5, label: "user 5"}
    ];
    const params = useParams();
    const { userId } = params;
    // console.log(userId);
    return (
        <>
            <h1>UsersLayout</h1>
            <Link to='/'>
                <h3>Back to Main Page</h3>
            </Link>
            <h1>UsersListPage</h1>
            {userId 
                ? (<UserPage users = {users} id = {userId}/>)
                : users.map(user => (
                    <Link key = {user.id} to = {`${user.id}/`}>
                        <h3 key = {user.id}>{user.label}</h3>
                    </Link>
                ))
            }
        </>
    );
}
 
export default UsersListPage;