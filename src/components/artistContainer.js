import React from "react";
import ArtistItem from './artistItem'
import { setAllArtistChecked } from './util/setAllArtistChecked'
import '../styles/artistContainer.css'

const ArtistContainer = ({ artistMap, setArtistMap }) => {
    let artistItems = Array.from(artistMap.values()).map((artist) =>
        <ArtistItem
            key={artist.id}
            id={artist.id}
            artistMap={artistMap}
            setArtistMap={setArtistMap}
        ></ArtistItem>
    )

    function selectAll(event) {
        setAllArtistChecked(event.target.checked, artistMap, setArtistMap)
    }

    return (
        // todo: apply table sorting
        <div className="artist-container my-5 ">     
            <table 
                className="table table-dark m-0 mx-auto" 
                style={artistMap.size < 1 ? {display: 'none'} : null}>
                <thead>
                    <tr>
                        <th scope="col">
                            <input
                                type="checkbox"
                                className="checkbox-all-artist"
                                onChange={selectAll}
                            ></input>
                        </th>
                        <th scope="col">Artist</th>
                        <th scope="col">Following</th>
                        <th scope="col">Link</th>
                    </tr>
                </thead>
                <tbody>
                    {artistItems}
                </tbody>
            </table>
        </div>
    )
};

export default ArtistContainer;