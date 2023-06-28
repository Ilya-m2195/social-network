import { connect } from "react-redux"
import { AddMessageActionCreator, changeTextMessageActionCreator } from "../../redux/messages-reducer"
import Messages from "./Messages"

let mapStateProps = state => {
  return {
    messagePage: state.messagePage,
    newTextMessage: state.messagePage.newTextMessage,
  }
}

let dispatchToProps = dispatch => {
  return {
    changeCurrentTextMessage: textMessage => {
      dispatch(changeTextMessageActionCreator(textMessage));
    },
    addMessage: () => {
      dispatch(AddMessageActionCreator());
    }
  }
}

const MessagesContainer = connect(mapStateProps, dispatchToProps)(Messages);

export default MessagesContainer;