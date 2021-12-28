import React from "react";

const Signup = () => {
    return(
        <form className = 'form-wrapper'>
            <div>
                <h2>I don't have an account</h2>
                <p>Sign up with following fields</p>
            </div>
            <div className = 'inputs'>
                <label>Display name</label>
                <input type = 'text' placeholder="" name = 'displayName'/>
            </div>
            <div className = 'inputs'>
                <label>Email</label>
                <input type = 'text' placeholder="" name = 'email'/>
            </div>
            <div className = 'inputs'>
                <label>Password</label>
                <input type = 'password' placeholder="" name = 'password'/>
            </div>
            <div className = 'inputs'>
                <label>Confirm password</label>
                <input type = 'password' placeholder="" name = 'confirmPassword'/>
            </div>
            <div className = 'btn-wrapper'>
                <input className = 'btn signup' type = 'button' value = 'Sign up'/>
            </div>
        </form>
    )
}

export default Signup;