import React from "react";

const Signin = () => {
    return(
        <form className = 'form-wrapper'>
            <div>
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>
            </div>
            <div className = 'inputs'>
                <label>Email</label>
                <input type = 'text' placeholder="" name = 'email'/>
            </div>
            <div className = 'inputs'>
                <label>Password</label>
                <input type = 'password' placeholder="" name = 'password'/>
            </div>
            <div className = 'btn-wrapper'>
                <input className = 'btn signin' type = 'button' value = 'Sign in'/>
                <input className = 'btn signinGoogle' type = 'button' value = 'Sign in with google'/>
            </div>
        </form>
    )
}

export default Signin;