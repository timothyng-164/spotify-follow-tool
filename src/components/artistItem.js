import React from "react";

const ArtistItem = ({id, artistMap, setArtistMap}) => {
    function handleCheckChange(event) {
        let artistMapTemp = new Map(artistMap)
        let artist = artistMap.get(id)
        artist = Object.assign(artist, {'checked': event.target.checked})
        artistMapTemp.set(id, artist)
        setArtistMap(artistMapTemp)
    }
    
    return (
        // todo: color row (follow green, not red)
        <tr>
            <td>
                <input 
                    type="checkbox"
                    className="checkbox-artist" 
                    onChange={handleCheckChange}
                    checked={artistMap.get(id).checked}
                ></input>
            </td>
            <td>{artistMap.get(id).name}</td>
            <td>{artistMap.get(id).following ? "Following" : "Not Following"}</td>
        </tr>
    )
};

export default ArtistItem;