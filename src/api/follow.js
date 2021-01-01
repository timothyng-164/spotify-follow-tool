import { TOKEN_KEY } from './apiUtils/authUtils'
import { requestConfig } from './apiUtils/requestConfig'
import { chunkArray } from './apiUtils/chunkArray'
let axios = require('axios');

const pageLimit = 50


async function followRequest(method, requestUrl) {
    const token = localStorage.getItem(TOKEN_KEY)
    return await axios(requestConfig(method, requestUrl, token))
}

async function followRequestWithIdList(method, artistIdList) {
    let artistIdStr = artistIdList.join(',')
    return await followRequest(method, `https://api.spotify.com/v1/me/following?type=artist&ids=${artistIdStr}`)
}


// ---------------------------------------------
async function deleteFollows(artistIdList) {
    // console.log('delete follow request')
    try {
        for (let artistIds of chunkArray(artistIdList, pageLimit)) {
            // console.log('unfollowing artists', artistIdList)
            await followRequestWithIdList('delete', artistIds)
        }
    } catch (error) {
        if (error.response.status === 401) throw error
    }
}

async function putFollows(artistIdList) {
    // console.log('put follow request')
    try {
        for (let artistIds of chunkArray(artistIdList, pageLimit)) {
            // console.log('following artists', artistIdList)
            await followRequestWithIdList('put', artistIds)
        }
    } catch (error) {
        if (error.response.status === 401) throw error
    }
}

async function getFollows() {
    let followIds = []
    try {
        let reqUrl = 'https://api.spotify.com/v1/me/following?type=artist&limit=50'
        while(reqUrl) {
            let response = await followRequest('get', reqUrl)
            // console.log('Retreived followed artists', response)
            for (let item of response.data.artists.items) {
                followIds.push(item.id)
            }
            reqUrl = response.data.artists.next
        }
        // console.log('all followed ids', followIds)
    } catch (error) {
        if (error.response.status === 401) throw error
    }
    return followIds
}


export {
    deleteFollows, putFollows, getFollows
}
