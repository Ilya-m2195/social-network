import { NavLink } from 'react-router-dom';
import Style from './Header.module.css'
const Header = props => {
  return (
    <header className={Style.header}>
      <img className={Style.logo} src='https://the-flow.ru/uploads/images/catalog/element/629f20558d8c4.jpg' alt="Logo"></img>
      <div className={Style.loginBlock}>

        {props.isAuth ?
          <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}

      </div>
    </header>
  )
}

export default Header;