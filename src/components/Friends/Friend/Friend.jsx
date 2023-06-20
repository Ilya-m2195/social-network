import Style from './Friend.module.css'

const Friend = props => {
  return (
    <div className={Style.friend__box}>
      <img className={Style.avatar} src={props.avatarLink} alt="avatar" />
      <span className={Style.name}>{props.name}</span>
    </div>
  )
}

export default Friend;