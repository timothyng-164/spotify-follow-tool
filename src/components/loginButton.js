import React from "react";

const LoginButton = ({artistMap}) => {
    function handleClick() {
        console.log(artistMap)
        const allSelected = Array.from(artistMap.values()).every(x => x.checked)
        console.log('allSelected', allSelected)
    }
    return (
        <button onClick={handleClick}>Log Artist Map</button>
    )
};

export default LoginButton;