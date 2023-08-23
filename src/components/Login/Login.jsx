import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/formsControl/FormsControl'
import { requiredField } from '../../utils/validators'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Navigate } from 'react-router-dom'
import styles from './Login.module.css'

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder='Email'
          name='email'
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          type='password'
          placeholder='Password'
          name='password'
          component={Input}
          validate={[requiredField]}
        />
        {error && <div className={styles.formSummaryError}>
          {error}
        </div>}
      </div>
      <div>
        <Field
          type='checkbox'
          name='rememberMe'
          component={Input}
          validate={[]}
        />
        Remember me
      </div>
      <div>
        <button >Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = props => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Navigate to='/profile' />
  }
  return (
    <div>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = state => ({ isAuth: state.auth.isAuth })

export default connect(mapStateToProps, { login })(Login);