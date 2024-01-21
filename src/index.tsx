import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { SelectedCategoryProvider } from './context/SelectedCategoryContext'
import { CategoriesProvider } from './context/CategoriesContext'
import { PostsProvider } from './context/PostsContext'
import { SearchProvider } from './context/SearchContext'

import './index.css';
import App from './App';
//import PostPage from './pages/PostPage';

const PostPage = lazy(() => import("./pages/PostPage"))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//axios.defaults.baseURL = "http://0.0.0.0:3000";
//axios.defaults.baseURL = "http://127.0.0.1:3000";
axios.defaults.baseURL = "https://cvwo-web-forum-backend-9797f939441a.herokuapp.com";

root.render(
  <React.StrictMode>
    <SelectedCategoryProvider>
    <CategoriesProvider>
    <PostsProvider>
    <SearchProvider>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <Routes>
          <Route path='/' Component={App}/>
          <Route path='/post/:id' Component={PostPage}/>
        </Routes>
      </Router>
      </Suspense>
    </SearchProvider>
    </PostsProvider>
    </CategoriesProvider>
    </SelectedCategoryProvider>
  </React.StrictMode>
);