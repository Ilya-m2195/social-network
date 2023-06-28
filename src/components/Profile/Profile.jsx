import Style from './Profile.module.css'
import ProfileInfo from './profileInfo/profileInfo';
import NewPostContainer from './NewPostContainer';
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <NewPostContainer />
    </div>
  )
}

export default Profile;