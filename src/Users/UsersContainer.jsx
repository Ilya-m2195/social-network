import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unFollowActionCreator } from "../redux/users-reducer";
import Users from "./Users";
let mapStateToProps = state => {
  return {
    users: state.usersPage.users
  }
}

let dispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followActionCreator(userId));
    },
    unfollow: userId => {
      dispatch(unFollowActionCreator(userId));
    },
    setUsers: users => {
      dispatch(setUsersActionCreator(users));
    }

  }
}

export default connect(mapStateToProps, dispatchToProps)(Users);