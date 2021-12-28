import React from "react";
import Signin from "../components/Signin/Signin";
import Signup from "../components/Signup/Signup";
import './Sign.style.scss'

const Sign = () => {
    return(
        <div className = 'sign-wrapper'>
            <Signin/>
            <Signup/>
        </div>
    )
}

export default Sign;