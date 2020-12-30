import React from 'react'
import { deleteFollows, putFollows } from '../api/updateFollow'

const FollowButtons = ({artistMap, setArtistMap}) => {
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
        const checkedArtists = getCheckedArtistIds();
        setArtistFollow(checkedArtists, false)
        // await deleteFollows(checkedArtists)
    }

    async function putCheckedFromFollowed() {
        const checkedArtists = getCheckedArtistIds();
        setArtistFollow(checkedArtists, true)
        // await putFollows(checkedArtists)
    }

    return (
        <div className="row follow-container col-12">
            <div className="mx-auto">
                <button onClick={putCheckedFromFollowed}>Follow</button>
                <button onClick={deleteCheckedFromFollowed}>Unfollow</button>
            </div>
        </div>
    )
}

export default FollowButtons;