import Preloader from '../../../common/Preloader/Preloader';
import Style from './ProfileInfo.module.css';
import { ProfileStatus } from './ProfileStatus';
import defaultAvatar from '../../../assets/img/defaultAvatar.png';

const ProfileInfo = props => {

  if (!props.profile) {
    return <Preloader />
  }

  const selectMainPhoto = e => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }
  return (
    <div>
      <div> <p>{props.profile.fullName}</p>
        <img className={Style.avatar} src={props.profile.photos.small || defaultAvatar} alt='avatar'></img>
        {props.isOwner &&
          <div>
            <input type="file" onChange={selectMainPhoto} />
          </div>
        }
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus} />
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
  );
}

export default ProfileInfo;