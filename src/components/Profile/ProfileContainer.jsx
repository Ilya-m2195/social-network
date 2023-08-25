import Profile from './Profile';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateStatus, savePhoto } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const ProfileContainer = props => {

  let { userId } = useParams();
  if (!userId) {
    userId = props.authUserId;
    if (!userId) {
      props.history.push('/login');
    }
  }

  useEffect(() => {
    props.getUserProfile(userId);
    props.getUserStatus(userId);
  }, [userId]);

  return (
    <div>
      <Profile
        isOwner={ userId === props.authUserId }
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus} 
        savePhoto={props.savePhoto}
        />
    </div>
  );
}

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.id,
  isAuth: state.auth.isAuth,
   
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus, savePhoto}),
  withAuthRedirect
)(ProfileContainer);