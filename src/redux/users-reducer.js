import { usersApi } from '../api/api'
import { updateObjectInArray } from '../utils/objectMappigHelper';

const FOLLOW = 'USERS/FOLLOW';
const UNFOLLOW = 'USERS/UNFOLLOW';
const SET_USERS = 'USERS/SET_USERS';
const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'USERS/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'USERS/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'USERS/TOGGLE_FOLLOWING_PROGRESS';

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
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
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
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await usersApi.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(
      data.items
    ));
    dispatch(setTotalUsersCount(
      data.totalCount
    ));
    dispatch(setCurrentPage(currentPage));
  }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  const response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
    dispatch(toggleIsFetching(false));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
}

export const followUser = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersApi.follow.bind(usersApi), follow);
  }
}

export const unfollowUser = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersApi.unfollow.bind(usersApi), unFollow);
  }
}

export default usersReducer;