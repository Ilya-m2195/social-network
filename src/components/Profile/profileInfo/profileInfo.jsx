import Preloader from '../../../common/Preloader/Preloader';
import Style from './ProfileInfo.module.css'
import { ProfileStatus } from './ProfileStatus';

const ProfileInfo = props => {

  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div> <p>{props.profile.fullName}</p>
        {/* <img className={Style.background} src={props.profile.photos.large} alt='background'></img> */}
        <img className={Style.avatar} src={props.profile.photos.small} alt='avatar'></img>
        <ProfileStatus 
        status={props.status}
        updateStatus={props.updateStatus}/>
        {/* <p>{props.profile.aboutMe ? props.profile.aboutMe : ''}</p> */}
      </div>
      <div>
        <span>My contacts</span>
        <ul>
          <li>facebook - {props.profile.contacts.facebook ? props.profile.contacts.facebook : 'no facebook'}</li>
          <li>vk - {props.profile.contacts.vk ? props.profile.contacts.vk : 'no vk'}</li>
          <li>twitter - {props.profile.contacts.twitter ? props.profile.contacts.twitter : 'no twitter'}</li>
          <li>instagram - {props.profile.contacts.instagram ? props.profile.contacts.instagram : 'no instagram'}</li>
          <li>youtube - {props.profile.contacts.youtube ? props.profile.contacts.youtube : 'no youtube'}</li>
          <li>github - {props.profile.contacts.github ? props.profile.contacts.github : 'no github'}</li>
          <li>mainLink - {props.profile.contacts.mainLink ? props.profile.contacts.mainLink : 'no mainLink'}</li>
          <li>website - {props.profile.contacts.website ? props.profile.contacts.website : 'no site'}</li>
        </ul>
        <p>Ищу работу - {props.profile.lookingForAJob ? 'Да' : 'Нет'}</p>
      </div>
    </div>
  )

}

export default ProfileInfo;