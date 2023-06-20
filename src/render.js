import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost } from './redux/state';

export let rerenderTree = (state) => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        
      />
    </React.StrictMode>
  );
}