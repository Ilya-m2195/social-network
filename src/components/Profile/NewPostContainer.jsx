import { connect } from "react-redux";
import { addPostActionCreator } from "../../redux/profile-reducer";
import MyPosts from "./MyPosts/MyPosts";

let mapStateProps = state => {
  return {
    profilePage: state.profilePage.postArrayData,
    newTextPost: state.profilePage.newTextPost,
 }
}

let dispatchToProps = dispatch => {
  return {
    addPost: (newTextPost) => {
      dispatch(addPostActionCreator(newTextPost));
    },
  }
}

const NewPostContainer = connect(mapStateProps, dispatchToProps)(MyPosts);

export default NewPostContainer;