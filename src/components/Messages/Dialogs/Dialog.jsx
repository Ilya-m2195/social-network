import Style from './Dialog.module.css';

const Dialog = props => {
  return (
    <div className={Style.dialog}>{props.message}</div>
  );
}

export default Dialog;