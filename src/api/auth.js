import { 
    TOKEN_KEY, STATE_KEY, CLIENT_ID, REDIRECT_URL, SCOPE,
    getHashParams, generateRandomString } 
    from './apiUtils/authUtils'

function checkAuth(setAuthenticated) {
    const params = getHashParams();
    const access_token = params.access_token
    const state = params.state
    const storedState = localStorage.getItem(STATE_KEY)
    if (access_token) {
        localStorage.setItem(TOKEN_KEY, access_token)
        setAuthenticated(true)
        // console.log('Set access token')
    }
    
    if (access_token && (state == null || state !== storedState)) {
        // console.log('Attempting to access without state')
        setAuthenticated(false)
    } 
    else {
        // console.log('Removing state key')
        localStorage.removeItem(STATE_KEY);
    }
}

function clearAuth(setAuthenticated) {
    // logout url: https://accounts.spotify.com/en/logout
    localStorage.removeItem(TOKEN_KEY)
    setAuthenticated(false)
}

function authRedirect(event) {
    event.preventDefault();
    var state = generateRandomString(16);

    localStorage.setItem(STATE_KEY, state);

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(CLIENT_ID);
    url += '&scope=' + encodeURIComponent(SCOPE);
    url += '&redirect_uri=' + encodeURIComponent(REDIRECT_URL);
    url += '&state=' + encodeURIComponent(state);

    console.log('redirect url', url)
    window.location = url;
}


export {
    checkAuth,
    clearAuth,
    authRedirect
}