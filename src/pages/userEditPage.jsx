import React from "react";
import { Redirect, useParams } from "react-router-dom";

const UserEditPage = ({ id }) => {
    const params = useParams();
    const { edit } = params;
    console.log(edit);
    return (
        <>
            {edit
                ? <h1>{`User ${id} Edit Page`}</h1>
                : <Redirect to={`/`}/>}
        </>
    );
}
 
export default UserEditPage;