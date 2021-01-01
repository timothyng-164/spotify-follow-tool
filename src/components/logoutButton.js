import React from "react";
import { clearAuth } from '../api/auth'
import { style } from './util/commonStyle'

const LogoutButton = ({setAuthenticated}) => {
    function handleClick(event) {
        event.preventDefault();
        clearAuth(setAuthenticated)
    }

    return (
        <button onClick={handleClick} className={`btn-secondary ${style.button}`}>Logout</button>
    )
};

export default LogoutButton;