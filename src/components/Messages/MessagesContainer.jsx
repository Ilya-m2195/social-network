import { connect } from "react-redux"
import { AddMessageActionCreator } from "../../redux/messages-reducer"
import Messages from "./Messages"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { compose } from "redux"

let mapStateProps = state => {
  return {
    messagePage: state.messagePage,
    newTextMessage: state.messagePage.newTextMessage,
  }
}

let dispatchToProps = dispatch => {
  return {
    addMessage: (newMessageBody) => {
      dispatch(AddMessageActionCreator(newMessageBody));
    }
  }
}

export default compose(
  connect(mapStateProps, dispatchToProps),
  withAuthRedirect
)(Messages);