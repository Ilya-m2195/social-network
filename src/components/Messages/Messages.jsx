import Dialog from './Dialogs/Dialog'
import Style from './Messages.module.css'
import User from './Users/User'

const Messages = (props) => {

  let dialogElements = props.dialogs.dialogArrayData.map(dialog => <Dialog massage={dialog.massage} />);
  let dialogUsers = props.users.userArrayData.map(user => <User name={user.name} id={user.id} />);

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
      <textarea ></textarea>
      <button className={Style.btn}>send message</button>
    </div >
  )
}

export default Messages;