import React from "react";
import { authRedirect} from '../api/auth'
import { style } from './util/commonStyle'

const LoginButton = ({setAuthenticated}) => {
    function handleClick(event) {
        authRedirect(event)
        setAuthenticated(true)
    }
    return (
        <button onClick={handleClick} className={`btn-success ${style.button}`}>Login</button>
    )
};

export default LoginButton;