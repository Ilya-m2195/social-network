import Style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './profileInfo/profileInfo';
const Profile = (props) => {
  return (
    <div>
     <ProfileInfo />
      <MyPosts posts={props.posts.postArrayData} addPost={props.addPost}/>
    </div>
  )
}

export default Profile;