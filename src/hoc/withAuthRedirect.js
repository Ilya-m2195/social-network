import { connect } from "react-redux";
import { Navigate } from "react-router-dom"

const mapStateToPropsRedirect = state => ({
  isAuth: state.auth.isAuth
});

export const withAuthRedirect = Component => {
  const RedirectComponent = props => {
    if (!props.isAuth) {
      return <Navigate to={"/login"} />
    }
  return <Component {...props}/>
  }

 let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}

