import Profile from './Profile';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateStatus } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

function ProfileContainer(props) {

  let { userId } = useParams();
  if (!userId) {
    userId = props.authUserId;
  }

  const getUserInfo = async (userId) => {
    await props.getUserProfile(userId)
    await props.getUserStatus(userId);
  }

  useEffect(() => {
    getUserInfo(userId);
  }, [props, userId]);

  return (
    <div>
      <Profile
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus} />
    </div>
  )
};

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.id,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
  withAuthRedirect
)(ProfileContainer);