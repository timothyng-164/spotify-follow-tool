import React from "react";
import LoginButton from './loginButton'
import ArtistContainer from './artistContainer'
import MenuContainer from './menuContainer'
import LogoutButton from './logoutButton'
import DebugButton from './debugButton'
import '../styles/mainPage.css'


const App = ({ artistMap, setArtistMap, authenticated, setAuthenticated }) => {
    return (
        <div className="main-page mt-5">
            <div className="menu-container col-7 mx-auto p-4 border border-secondary rounded">
                {/* { authenticated &&
                <div className="row col-12 justify-content-end">
                    <DebugButton artistMap={artistMap} className="col-2"></DebugButton>
                    <LogoutButton setAuthenticated={setAuthenticated} className="col-2"></LogoutButton>
                </div> } */}
                <h1>Spotify Follow Tool</h1>
                {/* todo: fill in description */}
                <p>{}</p>
                { authenticated ? 
                <div className="page app-container">
                    <MenuContainer artistMap={artistMap} setArtistMap={setArtistMap} setAuthenticated={setAuthenticated}></MenuContainer>
                </div> : 
                <div className="page login-container">
                    <LoginButton setAuthenticated={setAuthenticated}></LoginButton>
                </div> }
            </div>

            { authenticated && 
            <ArtistContainer artistMap={artistMap} setArtistMap={setArtistMap}></ArtistContainer>}
        </div>

    );
}

export default App;
