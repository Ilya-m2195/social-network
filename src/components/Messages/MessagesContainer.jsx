import { connect } from "react-redux"
import { AddMessageActionCreator, changeTextMessageActionCreator } from "../../redux/messages-reducer"
import Messages from "./Messages"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"

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

const AuthRedirectComponent = withAuthRedirect(Messages)

const MessagesContainer = connect(mapStateProps, dispatchToProps)(AuthRedirectComponent);

export default MessagesContainer;