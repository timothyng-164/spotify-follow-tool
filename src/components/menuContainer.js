import React from "react";
import FollowButtons from './followButtons'
import { getArtists } from '../api/getArtists';
import { setAllArtistChecked } from './util/setAllArtistChecked'

const MenuContainer = ({artistMap, setArtistMap}) => {
    async function getArtistClick(event) {
        const fromTracks = document.querySelector('#checkbox-tracks').checked
        const fromAlbums = document.querySelector('#checkbox-albums').checked
        const fromFollowed = document.querySelector('#checkbox-followed').checked
        document.querySelector('#button-update-artists').textContent = "Refresh Saved Artists"
        let artistMapResp = await getArtists(fromTracks, fromAlbums, fromFollowed)
        // todo: add loading symbol on refresh
        setAllArtistChecked(false, artistMapResp, setArtistMap)
        // setArtistMap(artistMapResp)
    }

    return (
        <div>
            <div className="row col-12">
                <div className="mx-auto">
                    <button id="button-update-artists" onClick={getArtistClick}>Get Artists</button>
                </div>
            </div>
            <div className="row col-12">
                <div className="mx-auto d-flex">
                    <div className="artist-option">
                        <input type="checkbox" id="checkbox-tracks" defaultChecked={true} className="mx-1"></input>
                        <label htmlFor="checkbox-tracks" className="mr-3">Saved Tracks</label>
                    </div>
                    <div className="artist-option">
                        <input type="checkbox" id="checkbox-albums" defaultChecked={true} className="mx-1"></input>
                        <label htmlFor="checkbox-albums" className="mr-3">Saved Albums</label>
                    </div>
                    <div className="artist-option">
                        <input type="checkbox" id="checkbox-followed" defaultChecked={true} className="mx-1"></input>
                        <label htmlFor="checkbox-followed" className="mr-3">Followed Artists</label>
                    </div>
                </div>
            </div>
            <FollowButtons artistMap={artistMap} setArtistMap={setArtistMap}></FollowButtons>
        </div>
    )
};

export default MenuContainer;