
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import NavbarMobile from './components/NavbarMobile';

import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'
import './App.css'

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { combinedLink } from './API/apolloConfig';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useMediaQuery } from 'react-responsive';

const PrimaryClient = new ApolloClient({
  link: combinedLink,
  cache: new InMemoryCache(),
});


function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = useMediaQuery({ maxWidth: 800 });

  return (
    <ApolloProvider client={PrimaryClient}>
      <BrowserRouter>
        <div className="App" style={{margin:"0px",padding:"0px"}}>

          {isMobile ?
            <NavbarMobile /> :
            <Navbar />
          }
          <Routes>
            <Route path="/" element={<Home windowWidth={width} isMobile={isMobile}/>} />
            <Route path="/create" element={<Create />} />
            <Route path="/search" element={<Search />} />
            <Route path="/recipes/:id" element={<Recipe windowWidth={width} isMobile={isMobile}/>} />
          </Routes>
        </div >
      </BrowserRouter>
    </ApolloProvider>

  );
}

export default App
