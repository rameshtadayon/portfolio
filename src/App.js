import bannerIMG from './artwork/Untitled_Artwork.png';
import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  function NavigationButtons() {
    const LinkStyle = {
      textDecoration: "none"
    }

    return (
    <div className='Navigation'>
      <nav>
          <Link to='/Projects' style={LinkStyle}>
            <div className='Link'>
              Programming Projects
            </div>
          </Link>
          <Link to='/Artwork' style={LinkStyle}>
          <div className='Link'>
              Artwork
            </div>
          </Link>
          <Link to="/Bakes" style={LinkStyle}>
          <div className='Link'>
              Cakes and Bakes
            </div>
          </Link>
          <Link to='/More' style={LinkStyle}>
          <div className='Link'>
              More
            </div>
          </Link>
      </nav>
    </div>
    )
  }

  function Projects() {
    function Proj(props){
      return (
        <div className='Proj'>
          <div className='Title'>
            {props.name}
          </div>
          <div className='Description'>
            {props.about}
          </div>
        </div>
      )
    }

    return (
      <div className='App'>
        <h1>Projects Page</h1>
        <div className='Projects'>
        <Proj name="Booked" about="About Booked App" />
        <Proj name="StardewIt" about="About StardewIt" />
        </div>
      </div>
    )
  }



  function Artwork() {

    return (
      <div className='App'>
        <h1>Artwork Page</h1>
        <div className='Artwork'>
          <div className='ArtPiece'>
            <img src={bannerIMG}/>
          </div>
        </div>
      </div>
    )
  }


  function Bakes() {
    return (
      <div className='App'>
        <h1>Cakes and Bakes Page</h1>
      </div>
      )
  }


  function More() {
    return (
      <div className='App'>
        <h1>More Page</h1>
      </div>
    )
  }

  function Home() {
    return (
    <header className="App-header">
      <div className= "Banner">
        <div className='BannerIMG' >
          <img src={bannerIMG} alt="A custom art piece" />
        </div>
        <div className='BannerTXT' >
          Welcome To Ramesh Tadayon's Thinkspace
        </div>
      </div>
      <NavigationButtons />
    </header>
    )
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="artwork" element={<Artwork />} />
        <Route path="bakes" element={<Bakes />} />
        <Route path="more" element={<More />} />
      </Routes>
  </div>
  );
}

export default App;
