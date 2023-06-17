import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let userArrayData = [
  {
    id: 1,
    name: 'Ivan',
  },
  {
    id: 2,
    name: 'Lina',
  },
  {
    id: 3,
    name: 'Peter',
  },
  {
    id: 4,
    name: 'Boba',
  },
]

let dialogArrayData = [
  {
    massage: 'Hello!',
    id: 0,
  },
  {
    massage: 'How are you?',
    id: 1,
  },
  {
    massage: 'There are you?',
    id: 2,
  },
  {
    massage: 'Go to the gym?',
    id: 3,
  },
]

let postArrayData = [
  {
    message: 'hi',
    likes: 13,
  },
  {
    message: 'This is my second post',
    likes: 12,
  },
  {},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
      users={userArrayData}
      dialogs={dialogArrayData}
      posts={postArrayData}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
