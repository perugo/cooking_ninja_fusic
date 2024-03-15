
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'
import './App.css'

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { combinedLink } from './API/apolloConfig';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const PrimaryClient = new ApolloClient({
  link: combinedLink,
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={PrimaryClient}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/search" element={<Search />} />
            <Route path="/recipes/:id" element={<Recipe />} />
          </Routes>
        </div >
      </BrowserRouter>
    </ApolloProvider>

  );
}

export default App
