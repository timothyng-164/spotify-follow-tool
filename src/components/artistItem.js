import React from "react";
import '../styles/artistItem.css'

const ArtistItem = ({id, artistMap, setArtistMap}) => {
    function handleCheckChange() {
        let artistMapTemp = new Map(artistMap)
        let artist = artistMap.get(id)
        artist = Object.assign(artist, {'checked': !artistMap.get(id).checked})
        artistMapTemp.set(id, artist)
        setArtistMap(artistMapTemp)
    }
    
    function rowColor() {
        if (artistMap.get(id).checked) return "row-checked"
        return artistMap.get(id).following ? "row-following" : "row-not-following"
    }

    return (
        <tr className={rowColor()} onClick={handleCheckChange}>
            <td>
                <input 
                    type="checkbox"
                    className="checkbox checkbox-artist" 
                    // onChange={handleCheckChange}
                    checked={artistMap.get(id).checked}
                ></input>
            </td>
            <td>{artistMap.get(id).name}</td>
            <td>{artistMap.get(id).following ? "Following" : "Not Following"}</td>
            <td><a href={artistMap.get(id).uri}>Link</a></td>
        </tr>
    )
};

export default ArtistItem;