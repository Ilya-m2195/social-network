import React from 'react';
import Dialog from './Dialogs/Dialog';
import Style from './Messages.module.css';
import User from './Users/User';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/formsControl/FormsControl';
import { maxLengthCreator, requiredField } from '../../utils/validators';

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[requiredField, maxLengthCreator(100)]}
        name='newMessageBody'
        placeholder='Write your message'
      />
      <button className={Style.btn} >send message</button>
    </form>
  );
}

const AddMessageFormRedux = reduxForm({ form: 'addMessageForm' })(AddMessageForm);

const Messages = props => {

  const addNewMessage = values => {
    props.addMessage(values.newMessageBody)
  }

  let dialogElements = props.messagePage.dialogArrayData.map(dialog => <Dialog message={dialog.message} key={dialog.id} />);
  let dialogUsers = props.messagePage.userArrayData.map(user => <User name={user.name} id={user.id} key={user.id} />);

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
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div >
  );
}

export default Messages;