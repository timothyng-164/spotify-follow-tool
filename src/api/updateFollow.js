let axios = require('axios');

let bearerToken = 'BQALaJxg8shrwiOa6nr7-u3c2Go1zPFVq_0X488DW-8WuQHJ1YWcg2br0VQDuuJgNNqswzWn-GkJI4vEmC5hf6nJt0CiUS3aiDVwr41Gq3p_Vnlprww67rTimTnbqp7BF89atPcREnRCrkBi4lxl0C_UiUDWlt0'

function config(method, reqUrl, token) {
    return {
        method: 'delete',
        url: reqUrl,
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`,
        }
    }
}

async function followRequest(method, artistIdList) {
    try {
        let artistIdStr = artistIdList.join(',')
        await axios(config(
            `https://api.spotify.com/v1/me/following?type=artist&ids=${artistIdStr}`, 
            bearerToken))
    } catch (error) {
        console.log(`Unknown error for api Follow ${method}`, error)
        // console.log(error.response.status)
        // todo: handle 400/500
    }
}

async function deleteFollows(artistIdList) {
    followRequest('delete', artistIdList)
}

async function putFollows(artistIdList) {
    followRequest('put', artistIdList)
}

// putFollows([])

export {
    deleteFollows, putFollows
}
