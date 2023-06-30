import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './Users/UsersContainer';

const App = props => {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className='app-wrapper'>
          <Header />
          <Navigation/>

          <div className='content'>
            <Routes>
              <Route path='/profile' element={<Profile/>} />
              <Route path='/messages/*' element={<MessagesContainer/>} />
              <Route path='/users' element={<UsersContainer/>} />
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
