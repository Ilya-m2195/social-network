
import { NavLink } from 'react-router-dom'
import Style from './Messages.module.css'

const User = props => {
  return (
    <li className={Style.dialogs_user}>
      <NavLink className={UserActiveData => UserActiveData.isActive ? Style.active : Style.dialogs_user}
        to={'/messages/' + props.id}>{props.name}
      </NavLink>
    </li>
  )
}

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
    name: 'Igor',
  },
]

const Dialog = props => {
  return (
    <div className={Style.message}>{props.massage}</div>
  )
}

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

const Messages = () => {
  return (

    <div className={Style.container}>
      <h2>Messages</h2>
      <div className={Style.dialogs_box}>
        <ul className={Style.users}>
          <User name = {userArrayData[0].name} id={userArrayData[0].id} />
          <User name = {userArrayData[1].name} id={userArrayData[1].id} />
          <User name = {userArrayData[2].name} id={userArrayData[2].id} />
          <User name = {userArrayData[3].name} id={userArrayData[3].id} />

        </ul>
        <div className={Style.messages}>
          <Dialog massage= {dialogArrayData[0].massage} />
          <Dialog massage= {dialogArrayData[1].massage} />
          <Dialog massage= {dialogArrayData[2].massage} />
          <Dialog massage= {dialogArrayData[3].massage} />
        </div>
      </div>
    </div >
  )
}

export default Messages;