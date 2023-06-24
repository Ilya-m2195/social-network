import Style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './profileInfo/profileInfo';
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts newTextPost={props.state.newTextPost}
        posts={props.state.postArrayData}
        dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile;