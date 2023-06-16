import Style from './ProfileInfo.module.css'

const ProfileInfo = props => {
return(
  <div>
     <img className={Style.background} src='https://kartinki.pibig.info/uploads/posts/2023-04/thumbs/1680522312_kartinki-pibig-info-p-ochen-krasivaya-kartinka-spokoinoi-nochi-l-1.jpg' alt='background'></img>
      <img className={Style.avatar} src='https://img2.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' alt='avatar'></img>
      <div>description</div>
  </div>
)
}

export default ProfileInfo;