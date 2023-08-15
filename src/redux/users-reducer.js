import { usersApi } from '../api/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 25,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []

}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            }
          }
          return user;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user;
        })
      }
    case SET_USERS:
      return { ...state, users: [...action.users] }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching ?
          [...state.followingInProgress, action.userId] :
          [...state.followingInProgress.filter(id => id !== action.userId)]
      }
    default:
      return state;
  }
}

export const follow = userId => ({ type: FOLLOW, userId });
export const unFollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId });


export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersApi.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(
        data.items
      ));
      dispatch(setTotalUsersCount(
        data.totalCount
      ));
      dispatch(setCurrentPage(currentPage));
    });
  }
}

export const followUser = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

   dispatch(toggleIsFollowingProgress(true, userId));
    usersApi.follow(userId).then(response => {
         if (response.data.resultCode === 0) {
          dispatch (follow(userId));
          dispatch(toggleIsFollowingProgress(false, userId));
          dispatch(toggleIsFetching(false));
         }
       })
  }
}

export const unfollowUser = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    dispatch(toggleIsFollowingProgress(true, userId));
    usersApi.unfollow(userId).then(response => {
         if (response.data.resultCode === 0) {
           dispatch(unFollow(userId));
           dispatch(toggleIsFollowingProgress(false, userId));
           dispatch(toggleIsFetching(false));
         }
       })
  }
}

export default usersReducer;