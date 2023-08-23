import Style from './Users.module.css';
import defaultAvatar from '../../assets/img/defaultAvatar.png';
import { NavLink } from 'react-router-dom';

export const User = ({user, followingInProgress, unfollowUser, followUser,  key}) => {
  return (
   <div key={key} className='container'>
    <div>
      <NavLink to={'/profile/' + user.id}>
        <img className={Style.avatar} src={user.photos.small != null ? user.photos.small : defaultAvatar} alt='avatar' />
      </NavLink>
    </div>
    <div>
      {
        user.followed ? <button disabled={followingInProgress.some(id => id === user.id)} className={Style.btn}
          onClick={() => {
            unfollowUser(user.id);

          }}
        >Unfollow</button> :
          <button disabled={followingInProgress.some(id => id === user.id)} className={Style.btn} onClick={() => {
            followUser(user.id);
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