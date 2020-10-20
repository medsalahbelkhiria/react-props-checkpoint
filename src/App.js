import React from 'react';
import './App.css';
import Profile from "./profile/Profile";
import me from './me.png';


function App() {


  return (
    <div className="App" style={{backgroundColor: "#9ba4b4", }}>
        <Profile> <img src={me} alt="MyPhoto" style={{borderRadius: "50%"}} /></Profile>
    </div>
  );
}

export default App;
