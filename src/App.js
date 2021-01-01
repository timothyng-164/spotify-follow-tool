import React, {useState, useEffect}  from "react";
import MainPage from './components/mainPage'
import './App.css';
import { TOKEN_KEY } from './api/apiUtils/authUtils'
import { BrowserRouter, Route } from "react-router-dom";
import CallbackRedirect from './components/callbackRedirect'


const App = () => {
  const [artistMap, setArtistMap] = useState(new Map())
  const [authenticated, setAuthenticated] = useState(localStorage.getItem(TOKEN_KEY) != null)

  useEffect(() => {
    setAuthenticated(localStorage.getItem(TOKEN_KEY) != null)
  })

  return (
    <div className="App">
      <MainPage 
        artistMap={artistMap}
        setArtistMap={setArtistMap}
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      ></MainPage>
      <BrowserRouter>
        <Route path='/callback'>
          <CallbackRedirect setAuthenticated={setAuthenticated}></CallbackRedirect>
        </Route>
      </BrowserRouter> 
      {/* todo: put footer at bottom */}
      <footer className='m-4'>
        <a href="https://github.com/timothyng-164/spotify-follow-tool" >
          <img src='/images/GitHub-Mark-Light-64px.png' length='30' width='30'></img>
        </a>
      </footer>
    </div>
    
  );
}

export default App;
