import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import './index.css';
import App from './App';
import PostPage from './pages/PostPage';

import { SelectedCategoryProvider } from './context/SelectedCategoryContext'
import { CategoriesProvider } from './context/CategoriesContext'
import { PostsProvider } from './context/PostsContext'
import { SearchProvider } from './context/SearchContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

axios.defaults.baseURL = "https://cvwo-web-forum-backend-9797f939441a.herokuapp.com";

root.render(
  <React.StrictMode>
    <SelectedCategoryProvider>
    <CategoriesProvider>
    <PostsProvider>
    <SearchProvider>
      <Router>
        <Routes>    
          <Route path='/' Component={App}/>
          <Route path='/post/:id' Component={PostPage}/>
        </Routes>
      </Router>
    </SearchProvider>
    </PostsProvider>
    </CategoriesProvider>
    </SelectedCategoryProvider>
  </React.StrictMode>
);