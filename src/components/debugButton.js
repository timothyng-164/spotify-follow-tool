import React from "react";
import { style } from './util/commonStyle'

const DebugButton = ({artistMap}) => {
    function handleClick() {
        console.log(artistMap)
        const allSelected = Array.from(artistMap.values()).every(x => x.checked)
        console.log('allSelected', allSelected)
    }

    return (
        <button onClick={handleClick} className={`btn-info ${style.button}`}>Print artistMap</button>
    )
};

export default DebugButton;