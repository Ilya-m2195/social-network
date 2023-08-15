import Profile from './Profile';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { Navigate, useParams } from 'react-router-dom';

function ProfileContainer(props) {

  let { userId } = useParams();
  if (!userId) {
    userId = 2;
  }

  useEffect(() => {
    props.getUserProfile(userId);
  }, [props, userId]);

  if (!props.isAuth) {
    return <Navigate to={"/login"} />
  } else {
    return (
      <div>
        <Profile profile={props.profile} />
      </div>
    )
  }


};

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);