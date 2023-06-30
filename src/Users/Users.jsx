import axios from "axios";
import React from "react";
import defaultAvatar from '../assets/img/defaultAvatar.png';
import Style from './Users.module.css'

class Users extends React.Component {

  constructor(props) {
    super(props);
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(
        response.data.items
      );
    });
  }
  
  render = () => {
    return (
      <div>
        {
          this.props.users.map(user => <div key={user.id} className='container'>
            <div>
              <img className={Style.avatar} src={user.photos.small != null ? user.photos.small : defaultAvatar} alt="avatar" />
            </div>
            <div>
              {
                user.followed ? <button className={Style.btn} onClick={() => this.props.unfollow(user.id)}>Follow</button> :
                  <button className={Style.btn} onClick={() => this.props.follow(user.id)}>Unfollow</button>
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
    );
  }
}

export default Users;