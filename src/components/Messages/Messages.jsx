import React from 'react';
import Dialog from './Dialogs/Dialog'
import Style from './Messages.module.css'
import User from './Users/User'

const Messages = props => {

  let addMessage = () => {
    props.addMessage();
  }

  let changeCurrentTextMessage = (event) => {
    let messageText = event.target.value;
    props.changeCurrentTextMessage(messageText);
  }

  let dialogElements = props.messagePage.dialogArrayData.map(dialog => <Dialog message={dialog.message} />);
  let dialogUsers = props.messagePage.userArrayData.map(user => <User name={user.name} id={user.id} />);

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
      <textarea onChange={changeCurrentTextMessage} value={props.newTextMessage}></textarea>
      <button className={Style.btn} onClick={addMessage}>send message</button>
    </div >
  )
}

export default Messages;