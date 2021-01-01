import React, { useState } from "react";
import FollowButtons from './followButtons'
import { getArtists } from '../api/getArtists';
import { setAllArtistChecked } from './util/setAllArtistChecked'
import { clearAuth } from '../api/auth'
import { style, loadImage } from './util/commonStyle'
import '../styles/menuContainer.css'

const MenuContainer = ({artistMap, setArtistMap, setAuthenticated}) => {
    const [updateLoading, setUpdateLoading] = useState(false)

    async function getArtistClick() {
        setUpdateLoading(true)
        const fromTracks = document.querySelector('#checkbox-tracks').checked
        const fromAlbums = document.querySelector('#checkbox-albums').checked
        const fromFollowed = document.querySelector('#checkbox-followed').checked
        let artistMapResp = new Map()
        try {
            artistMapResp = await getArtists(fromTracks, fromAlbums, fromFollowed)
        } catch (error) {
            if (error.response.status == 401) {
                clearAuth(setAuthenticated)
                setUpdateLoading(false)
                return
            }
        }
        setAllArtistChecked(false, artistMapResp, setArtistMap)
        setUpdateLoading(false)
    }
    

    // todo: show number of selected artists
    return (
        <div className="menu-container">
            <div className="row col-12 my-3">
                <div className="mx-auto">
                    <button id="button-update-artists" onClick={getArtistClick} className={`btn-success ${style.button}`} disabled={updateLoading}>
                        Get Artists
                        { updateLoading && loadImage }
                    </button>
                </div>
            </div>
            <div className="row col-12 my-3">
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
            { artistMap.size > 0 &&
            <FollowButtons artistMap={artistMap} setArtistMap={setArtistMap} setAuthenticated={setAuthenticated}></FollowButtons>}
        </div>
    )
};

export default MenuContainer;