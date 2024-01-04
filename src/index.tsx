import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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