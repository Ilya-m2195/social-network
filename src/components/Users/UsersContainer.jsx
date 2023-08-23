import { connect } from 'react-redux';
import { followUser, setCurrentPage, unfollowUser, toggleIsFollowingProgress, getUsers } from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import { compose } from 'redux';
import { getCurrentPageSelect, getFollowingInProgressSelect, getIsFetchingSelect, getPageSizeSelect, getTotalUsersCountSelect, getUsersSelect } from '../../redux/usersSelectors';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = page => {
    this.props.getUsers(page, this.props.pageSize);
  }

  render = () => (
    <>
      {this.props.isFetching ? <Preloader /> : null}
      <div >
        <Users onPageChanged={this.onPageChanged}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
          followingInProgress={this.props.followingInProgress}
        />
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    users: getUsersSelect(state),
    pageSize: getPageSizeSelect(state),
    totalUsersCount: getTotalUsersCountSelect(state),
    currentPage: getCurrentPageSelect(state),
    isFetching: getIsFetchingSelect(state),
    followingInProgress: getFollowingInProgressSelect(state)
  }
}

export default compose(
  connect(mapStateToProps,
    {
      followUser,
      unfollowUser,
      setCurrentPage,
      toggleIsFollowingProgress,
      getUsers
    }
  ),
)(UsersContainer);