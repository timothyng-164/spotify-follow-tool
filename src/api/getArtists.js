import { bearerToken } from './apiUtils/bearerToken'
import { requestConfig } from './apiUtils/requestConfig'
let axios = require('axios');

// parseArtistsFromTracks
function parseArtistsFromTracks(response) {
    let artistMap = new Map()
    for (let items of response.data.items) {
        let track = items.track
        for (let artist of track.artists) {
            artistMap.set(artist.id, { 
                'id': artist.id,
                'name': artist.name,
                'uri': artist.uri
            })
        }
    }
    return artistMap
}

function getNext(response) {
    return response.data.next 
}

// parseArtistsFromAlbums
function parseArtistsFromAlbums(response) {
    let artistMap = new Map()
    for (let items of response.data.items) {
        let album = items.album
        for (let artist of album.artists) {
            artistMap.set(artist.id, { 
                'id': artist.id,
                'name': artist.name,
                'uri': artist.uri
            })
        }
    }
    return artistMap
}

// parseArtistsFromFollowed
function parseArtistsFromFollowed(response) {
    let artistMap = new Map()
    for (let artist of response.data.artists.items) {
        artistMap.set(artist.id, { 
            'id': artist.id,
            'name': artist.name,
            'uri': artist.uri
        })
    }
    return artistMap
}

function getNextFromFollowed(response) {
    return response.data.artists.next
}


// -----------------------------------------------
async function getArtistMap(startUrl, parseResponseFunction, getNextFunction) {
    let artistMap = new Map()
    try {
        let requestUrl = startUrl
        while(requestUrl) {
            console.log(requestUrl)
            var response = await axios(requestConfig('get', requestUrl, bearerToken))
            artistMap = new Map([...artistMap, ...parseResponseFunction(response)])
            requestUrl = getNextFunction(response)
        }
    } catch (error) {
        console.log('Unknown error for artists Get', error)
        // console.log(error.response.status)
        // todo: handle 429 for large libraries
        // handle 401 by redirecting to auth/login (this won't happen if auth works correctly)
    }
    return artistMap;
}

// https://stackoverflow.com/a/49938356
async function getArtists(track, album, followed) {
    let artistMap = new Map()
    if (track) {
        // todo: update offset and limit
        // let trackArtists = await getArtistMap('https://api.spotify.com/v1/me/tracks?offset=0&limit=50', parseArtistsFromTracks, getNext)
        let trackArtists = await getArtistMap('https://api.spotify.com/v1/me/tracks?offset=4868&limit=50', parseArtistsFromTracks, getNext)
        artistMap = new Map([...artistMap, ...trackArtists])
    }
    if (album) {
        // todo: update offset and limit
        // let albumArtists = await getArtistMap('https://api.spotify.com/v1/me/albums?offset=0&limit=50', parseArtistsFromAlbums, getNext)
        let albumArtists = await getArtistMap('https://api.spotify.com/v1/me/albums?offset=773&limit=50', parseArtistsFromAlbums, getNext)
        artistMap = new Map([...artistMap, ...albumArtists])
    }
    if (followed) {
        // todo: remove after
        // let followedArtists = await getArtistMap('https://api.spotify.com/v1/me/following?type=artist&limit=50', parseArtistsFromFollowed, getNextFromFollowed)
        let followedArtists = await getArtistMap('https://api.spotify.com/v1/me/following?type=artist&limit=50&after=7w07HHCXBP3D7XJtK3BHi3', parseArtistsFromFollowed, getNextFromFollowed)
        artistMap = new Map([...artistMap, ...followedArtists])
    }
    
    for (const [key, value] of artistMap.entries()) {
        artistMap.set(key, Object.assign(value, {'following': true, 'checked': false}))
    }
    return artistMap
}

export {
    getArtists
}
