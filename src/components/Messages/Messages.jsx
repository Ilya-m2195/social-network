import Dialog from './Dialogs/Dialog'
import Style from './Messages.module.css'
import User from './Users/User'

// let userArrayData = [
//   {
//     id: 1,
//     name: 'Ivan',
//   },
//   {
//     id: 2,
//     name: 'Lina',
//   },
//   {
//     id: 3,
//     name: 'Peter',
//   },
//   {
//     id: 4,
//     name: 'Igor',
//   },
// ]

// let dialogArrayData = [
//   {
//     massage: 'Hello!',
//     id: 0,
//   },
//   {
//     massage: 'How are you?',
//     id: 1,
//   },
//   {
//     massage: 'There are you?',
//     id: 2,
//   },
//   {
//     massage: 'Go to the gym?',
//     id: 3,
//   },
// ]



const Messages = (props) => {

  let dialogElements = props.dialogs.map(dialog => <Dialog massage={dialog.massage} />);
  let dialogUsers = props.users.map(user => <User name={user.name} id={user.id} />);

  return (
    < div className={Style.container} >
      <h2>Messages</h2>
      <div className={Style.dialogs_box}>
        <ul className={Style.users}>
          {dialogUsers}
        </ul>
        <div className={Style.messages}>
          {dialogElements}
        </div>
      </div>
    </div >
  )
}

export default Messages;