/**
 * Obtains parameters from the hash of the URL
 * @return Object
 */

const TOKEN_KEY = 'access_token'
const STATE_KEY = 'spotify_auth_state';
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID; 
const REDIRECT_URL = process.env.REACT_APP_SPOTIFY_REDIRECT_URL; 
const SCOPE = 'user-follow-modify user-library-read user-follow-read';


const getHashParams = () => {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
}

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = (length) => {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};


export { 
    TOKEN_KEY, STATE_KEY, CLIENT_ID, REDIRECT_URL, SCOPE,
    getHashParams, generateRandomString 
}
