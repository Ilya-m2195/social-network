
import { NavLink } from 'react-router-dom';
import defaultAvatar from '../../assets/img/defaultAvatar.png';
import Style from './Users.module.css'

const Users = props => {

  let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize) / 100);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div >
      <div >
        {pages.map(page => {
          return (
            <span className={props.currentPage === page ? Style.selectPage : Style.page}
              onClick={event => props.onPageChanged(page)}>
              {page}
            </span>
          )
        })
        }
      </div>
      {
        props.users.map(user => <div key={user.id} className='container'>
          <div>
            <NavLink to={'/profile/' + user.id}>
              <img className={Style.avatar} src={user.photos.small != null ? user.photos.small : defaultAvatar} alt='avatar' />
            </NavLink>
          </div>
          <div>
            {
              user.followed ? <button disabled={props.followingInProgress.some(id => id === user.id)} className={Style.btn}
                onClick={() => {
                  props.unfollowUser(user.id);

                }}
              >Unfollow</button> :
                <button disabled={props.followingInProgress.some(id => id === user.id)} className={Style.btn} onClick={() => {
                  props.followUser(user.id);
                }
                }>Follow</button>
            }

          </div>
          <div>
            <p>{user.name}</p>
            <p>{user.status}</p>
            {/* <p>{user.location.city}</p> */}
            {/* <p>{user.location.country}</p> */}
          </div>
        </div>)
      }
    </div>
  )
}

export default Users;