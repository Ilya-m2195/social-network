import defaultAvatar from '../assets/img/defaultAvatar.png';
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
            <span className={props.currentPage === page && Style.selectPage}
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
            <img className={Style.avatar} src={user.photos.small != null ? user.photos.small : defaultAvatar} alt='avatar' />
          </div>
          <div>
            {
              user.followed ? <button className={Style.btn} onClick={() => props.unFollow(user.id)} >Follow</button> :
                <button className={Style.btn} onClick={() => props.follow(user.id)}>Unfollow</button>

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