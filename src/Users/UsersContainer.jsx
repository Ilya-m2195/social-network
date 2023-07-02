import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unFollow } from '../redux/users-reducer';
import axios from 'axios';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(
        response.data.items
      );
      this.props.setTotalUsersCount(
        response.data.totalCount
      );
    });
  }

  onPageChanged = page => {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(
        response.data.items
      );

    });
    this.props.setCurrentPage(page);
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
          follow={this.props.follow}
          unFollow={this.props.unFollow} />
      </div>
    </>
  )
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

// let dispatchToProps = dispatch => {
//   return {
//     follow: userId => {
//       dispatch(follow(userId));
//     },
//     unFollow: userId => {
//       dispatch(unFollow(userId));
//     },
//     setUsers: users => {
//       dispatch(setUsers(users));
//     },
//     setCurrentPage: currentPage => {
//       dispatch(setCurrentPage(currentPage));
//     },
//     setTotalUsersCount: totalUsersCount => {
//       dispatch(setTotalUsersCount(totalUsersCount));
//     },
//     toggleIsFetching: isFetching => {
//       dispatch(toggleIsFetching(isFetching));
//     }

//   }
// }

export default connect(mapStateToProps, 
  {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
  }
  
  )(UsersContainer);