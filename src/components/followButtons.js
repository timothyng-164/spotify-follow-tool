import React, { useState } from 'react'
import { style, loadImage } from './util/commonStyle'
import { deleteFollows, putFollows } from '../api/follow'
import { clearAuth } from '../api/auth'

const FollowButtons = ({artistMap, setArtistMap, setAuthenticated}) => {
    const [putLoading, setPutLoading] = useState(false)
    const [deleteLoading, setDeleteLoading] = useState(false)

    function getCheckedArtistIds() {
        return Array.from(artistMap.values()).flatMap((artist) => {
           return artist.checked ? artist.id : []
        })
    }

    function setArtistFollow(artistIdList, following) {
        let tempArtistMap = new Map(artistMap)
        for (const id of artistIdList) {
            const artist = artistMap.get(id)
            tempArtistMap.set(id, Object.assign(artist, {'following': following}))
        }
        setArtistMap(tempArtistMap)
    }
    
    async function deleteCheckedFromFollowed() {
        setDeleteLoading(true)
        const checkedArtists = getCheckedArtistIds();
        setArtistFollow(checkedArtists, false)
        try {
            await deleteFollows(checkedArtists)
        } catch (error) {
            if (error.response.status === 401) {
                clearAuth(setAuthenticated)
                setDeleteLoading(false)
            }
        }
        setDeleteLoading(false)
    }

    async function putCheckedFromFollowed() {
        setPutLoading(true)
        const checkedArtists = getCheckedArtistIds();
        setArtistFollow(checkedArtists, true)
        try {
            await putFollows(checkedArtists)
        } catch (error) {
            if (error.response.status === 401) {
                clearAuth(setAuthenticated)
                setPutLoading(false)                
            }
        }
        setPutLoading(false)
    }


    return (
        <div className="row follow-container col-12">
            <div className="mx-auto">
                <button onClick={putCheckedFromFollowed} className={`btn-success ${style.button}`} disabled={putLoading || deleteLoading}>
                    Follow
                    {putLoading && loadImage}
                </button>
                <button onClick={deleteCheckedFromFollowed} className={`btn-danger ${style.button}`} disabled={putLoading || deleteLoading}>
                    Unfollow
                    {deleteLoading && loadImage}
                </button>
            </div>
        </div>
    )
}

export default FollowButtons;