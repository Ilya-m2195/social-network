import './App.css';
import React from 'react'; // работает и без этого ипорта
import Header from './components/Header';
import Navigation from './components/Navigation';
import Profile from './components/Profile';



const App = () => {
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <Header />
        <Navigation />
        <Profile />
      </div>
    </div>
  );
}

export default App;
