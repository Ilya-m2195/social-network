import Style from './Profile.module.css'
import ProfileInfo from './profileInfo/profileInfo';
import NewPostContainer from './NewPostContainer';

const Profile = props => { 
    return (
      <div>
        <ProfileInfo profile={props.profile} />
        <NewPostContainer />
      </div>
    )
}

export default Profile;