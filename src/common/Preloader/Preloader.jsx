import loaderGif from '../../assets/img/loaderGif.gif'
import Style from './Preloader.module.css'
const Preloader = props => {
  return (
    <>
      <img src={loaderGif} alt='LOADING...' className={Style.loader} />
    </>
  )
}

export default Preloader;