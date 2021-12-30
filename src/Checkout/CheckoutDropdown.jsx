import React from "react";
import Checkout from '../Checkout/Checkout';
import './CheckoutDropdown.style.scss';
import { useNavigate } from "react-router-dom";

const CheckoutDropdown = () => {
    const navigate = useNavigate();
    return(
        <div className = 'main-drop-wrapper'>
            <div className = 'drop-wrapper'>
                <div className = 'drop-items pa3'>
                    <Checkout dropdown = {true} size = {{x:40, y:40}} width = {100} column = {2}/>  
                </div>
                <div onClick={() => navigate('/shop/checkout')}className = 'drop-btn'>CHECKOUT</div>
            </div>
        </div>
    )
}

export default CheckoutDropdown;