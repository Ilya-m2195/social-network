import { Paginator } from '../../common/paginator/Paginator';
import { User } from './User';

const Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, unfollowUser, followUser }) => {

  return (
    <div>
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      {users.map(user => {
        return <User user={user}
          key={user.id}
          followingInProgress={followingInProgress}
          unfollowUser={unfollowUser}
          followUser={followUser}
        />
      })}
    </div>
  )
}

export default Users;