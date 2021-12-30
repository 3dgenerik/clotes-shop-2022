import React, { useEffect } from "react";
import { connect } from "react-redux";
import { signinEmail, signinPassword } from "../../containers/redux/Signin/Signin.action";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { useNavigate } from "react-router-dom";

const mapStateToProps = state => {
    return{
        email:state.setSigninEmailPassword.email,
        password:state.setSigninEmailPassword.password,
        user:state.setAuthUser.user
        
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onEmailChange: (event) => dispatch(signinEmail(event.target.value)),
        onPasswordChange: (event) => dispatch(signinPassword(event.target.value)),
    }
}

const Signin = (props) => {
    const {email, password, onEmailChange, onPasswordChange, user} = props;

    const navigate = useNavigate();

    const onSigninSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        
    }

    const onGoogleSubmit = () => {
        
        signInWithGoogle()
            .then(response => {
                if(user){
                    // navigate('/')
                    console.log('FROM SIGNIN:', user);
                }
            }).then(data => navigate('/'));
    } 

    return(
        <form className = 'form-wrapper' onSubmit={onSigninSubmit} >
            <div>
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>
            </div>
            <div className = 'inputs'>
                <label className = 'form-label'>Email</label>
                <input className = 'form-input' onChange = {onEmailChange} type = 'text' placeholder="" name = 'email' required/>
            </div>
            <div className = 'inputs'>
                <label className = 'form-label'>Password</label>
                <input className = 'form-input' onChange = {onPasswordChange} type = 'password' placeholder="" name = 'password' required/>
            </div>
            <div className = 'btn-wrapper'>
                <input className = 'btn signin' type = 'submit' value = 'Sign in'/>
                <input onClick = {onGoogleSubmit} className = 'btn signinGoogle' type = 'button' value = 'Sign in with google'/>
            </div>
        </form>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);