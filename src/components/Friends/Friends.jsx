import Friend from './Friend/Friend';
import Style from './Friends.module.css'

const Friends = props => {

  let friendsElements = props.state.map(friend => <Friend name={friend.name} avatarLink={friend.avatarLink} />)
  return (
    <div>
      <h3>My friends</h3>
      <div className={Style.friends__wrapper}>
        {friendsElements}
      </div>
    </div>
  )
}

export default Friends;