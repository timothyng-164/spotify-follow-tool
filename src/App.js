import React, {useState}  from "react";
import logo from './logo.svg';
import './App.css';

import LoginButton from './components/loginButton'
import ArtistContainer from './components/artistContainer'
import MenuContainer from './components/menuContainer'


const App = () => {
  const [artistMap, setArtistMap] = useState(new Map())

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MenuContainer artistMap={artistMap} setArtistMap={setArtistMap}></MenuContainer>
        <LoginButton artistMap={artistMap}></LoginButton>
        <ArtistContainer artistMap={artistMap} setArtistMap={setArtistMap}></ArtistContainer>
      </header>
    </div>
    
  );
}

export default App;
