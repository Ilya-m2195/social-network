import ProfileInfo from './profileInfo/profileInfo';
import NewPostContainer from './NewPostContainer';

const Profile = props => { 
    return (
      <div>
        <ProfileInfo 
        isOwner={ props.isOwner }
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto} />
        <NewPostContainer />
      </div>
    )
}

export default Profile;