import './App.css';
import Navigation from './components/Navigation/Navigation';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import Preloader from './common/Preloader/Preloader';

const App = props => {
  useEffect(() => {
    props.initializeApp();
  }, [props]);

  if (!props.initialized) {
    return <Preloader />
  }

  return (
    <BrowserRouter>
      <div className='container'>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navigation />

          <div className='content'>
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path='/profile/:userId?' element={<ProfileContainer />} />
                <Route path='/messages/*' element={<MessagesContainer />} />
                <Route path='/users' element={<UsersContainer />} />
                <Route path='/login' element={<Login />} />
                <Route path='/news' Component={News} />
                <Route path='/music' Component={Music} />
                <Route path='/setting' Component={Setting} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => (
  { initialized: state.app.initialized }
)

export default connect(mapStateToProps, { initializeApp })(App);
