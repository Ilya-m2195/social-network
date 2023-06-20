import { NavLink } from 'react-router-dom';
import Style from './Navigation.module.css'
import Friends from '../Friends/Friends';
const Navigation = props => {

  return (
    <nav className={Style.nav}>
      <ul>
        <li className={Style.item}> <NavLink className={navData => navData.isActive ? Style.active : Style.item} to='/profile'>Profile</NavLink> </li>
        <li className={Style.item}> <NavLink className={navData => navData.isActive ? Style.active : Style.item} to='/messages'>Messages</NavLink> </li>
        <li className={Style.item}> <NavLink className={navData => navData.isActive ? Style.active : Style.item} to='/news'>News</NavLink> </li>
        <li className={Style.item}> <NavLink className={navData => navData.isActive ? Style.active : Style.item} to='/music'>Music</NavLink> </li>
        <li className={Style.item}> <NavLink className={navData => navData.isActive ? Style.active : Style.item} to='/setting'>setting</NavLink> </li>
      </ul>
      <Friends state={props.state}/>
    </nav>
  )
}

export default Navigation;

