export const getUsersSelect = state => state.usersPage.users;
export const getPageSizeSelect = state => state.usersPage.pageSize;
export const getTotalUsersCountSelect = state => state.usersPage.totalUsersCount;
export const getCurrentPageSelect = state => state.usersPage.currentPage;
export const getIsFetchingSelect = state => state.usersPage.isFetching;
export const getFollowingInProgressSelect = state => state.usersPage.followingInProgress;