import { connect } from "react-redux";
import { addPostActionCreator, changeTextPostActionCreator } from "../../redux/profile-reducer";
import MyPosts from "./MyPosts/MyPosts";

let mapStateProps = state => {
  return {
    profilePage: state.profilePage.postArrayData,
    newTextPost: state.profilePage.newTextPost,
 }
}

let dispatchToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    changeTextPost: textPost => {
      dispatch(changeTextPostActionCreator(textPost));
    }
  }
}

const NewPostContainer = connect(mapStateProps, dispatchToProps)(MyPosts);

export default NewPostContainer;