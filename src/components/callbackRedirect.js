import React from "react";
import { checkAuth } from '../api/auth'
import { Redirect } from "react-router-dom";


const CallbackRedirect = ({setAuthenticated}) => {
    return (
        <>
            {checkAuth(setAuthenticated)}
            <Redirect push to='/' />
        </>
    );
}


export default CallbackRedirect;
