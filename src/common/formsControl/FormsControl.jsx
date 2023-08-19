import Style from './FormsControl.module.css';

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;

  return (
    <div >
      <div>
        <textarea className={hasError ? Style.error : ''} {...input} {...props} />
      </div>
      {hasError &&
        <span className={Style.spanColor}>{meta.error}</span>}
    </div>
  )
}

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;

  return (
    <div >
      <div>
        <input  className={hasError ? Style.error : ''} {...input} {...props} />
      </div>
      {hasError &&
        <span className={Style.spanColor}>{meta.error}</span>}
    </div>
  )
}
