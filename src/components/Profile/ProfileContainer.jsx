import Profile from './Profile';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

function ProfileContainer(props) {

  let { userId } = useParams();
  if (!userId) {
    userId = 2;
  }

  useEffect(() => {
    props.getUserProfile(userId);
  }, [props, userId]);

    return (
      <div>
        <Profile profile={props.profile} />
      </div>
    )
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { getUserProfile })(AuthRedirectComponent);