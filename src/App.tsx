import React, { useState, useEffect, ReactHTMLElement } from 'react';
import { useCookies } from 'react-cookie';

import NavBar from './components/NavBar';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';

function App() {
  const [cookies] = useCookies(['token']);
  const loggedIn = (cookies.token != null);

  return (
    <div className="h-screen w-128 px-20 overflow-x-hidden">
      <NavBar />
      <div className="z-30 sticky top-0 w-128 h-30 overflow-hidden mx-1 bg-white bg-opacity-100">
        <SearchBar />
        <CategoryFilter />
      </div>
      <PostContainer />
    </div>
  );
}

export default App;