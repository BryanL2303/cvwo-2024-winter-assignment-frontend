import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';

const PostPage = lazy(() => import("./pages/PostPage"))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//axios.defaults.baseURL = "http://127.0.0.1:3000";
axios.defaults.baseURL = "https://cvwo-web-forum-backend-9797f939441a.herokuapp.com";

root.render(
  <React.StrictMode>
    <Provider store={store}>      
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router>
          <Routes>
            <Route path='/' Component={App}/>
            <Route path='/post/:id' Component={PostPage}/>
          </Routes>
        </Router>
      </Suspense>
    </Provider>
  </React.StrictMode>
);