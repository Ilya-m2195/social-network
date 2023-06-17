import './App.css';
import React from 'react'; // работает и без этого ипорта
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




const App = (props) => {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className='app-wrapper'>
          <Header />
          <Navigation />

          <div className='content'>
            <Routes>
              <Route path='/profile' element={<Profile posts={props.posts}/>} />
              <Route path='/messages/*' element={<Messages users={props.users} dialogs={props.dialogs}/>} />
              <Route path='/news' Component={News} />
              <Route path='/music' Component={Music} />
              <Route path='/setting' Component={Setting} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
