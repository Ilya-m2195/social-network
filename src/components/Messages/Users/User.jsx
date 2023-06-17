import { NavLink } from "react-router-dom"
import Style from './User.module.css'


const User = props => {
  return (
    <li className={Style.dialogs_user}>
      <NavLink className={UserActiveData => UserActiveData.isActive ? Style.active : Style.dialogs_user}
        to={'/messages/' + props.id}>{props.name}
      </NavLink>
    </li>
  )
}

export default User;