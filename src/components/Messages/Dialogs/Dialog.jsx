import Style from './Dialog.module.css'

const Dialog = props => {
  return (
    <div className={Style.dialog}>{props.massage}</div>
  )
}

export default Dialog;