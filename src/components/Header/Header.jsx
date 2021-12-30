import React, { useState } from "react";
import './Header.style.scss';
import { useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { resetChart, resetFound } from "../../containers/redux/Chart/Chart.action";
import CheckoutDropdown from "../../Checkout/CheckoutDropdown";

const mapStateToProps = state => {
    return{
        items: state.setChart.items,
        count: state.setChart.count,
        inList: state.setChart.inList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCartReset: () => dispatch(resetChart()),
        onFoundReset: () => dispatch(resetFound())
    }
}

const Header = (props) => {
    const {items, count, inList, currentUser, onFoundReset} = props;
    const [dropMenu, setDropMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const onSignOut = () => {
        auth.signOut();
        //stay on the same route
        // navigate(`${location.pathname}`)
        navigate('/signin')
        props.onCartReset();
    }


    return(
        <div className = 'flex flex-column justify-center'>

            <div className = 'header-wrapper'>
                {
                    inList ?
                    <div className = 'popup pointer' style = {{position:'absolute'}} onClick = {onFoundReset}>

                        <div style = {{
                            width:'100%',
                            height:'100%',
                            position:'fixed',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            background:'rgba(0,0,0,0)',
                            backdropFilter: 'blur(6px)',
                            transform:'scale(1.1)'
                            // filter: 'blur(4px)'
                        }}>

                            <div style = {{
                                marginTop:'-400px',
                                background: 'rgba(255,255,255, 1)',
                                padding:'20px',
                                border:'1px solid rgba(0,0,0,.4)',
                                borderRadius:'10px',
                                boxShadow: '2px 2px 10px 3px rgba(0,0,0,.2)'
                            }}>
                                <div>Item is already in list</div>
                            </div>
                        </div>
                    </div>
                    :
                    null
                }

                <div className = 'crown-logo' onClick = {() => navigate('/')}></div>

                <div className = 'menu'>
                    <div className = 'navi shop' onClick = {() => navigate('/shop')}>Shop</div>
                    <div className = 'navi contact'>Contact</div>
                    <div className = 'navi signin'>
                        {currentUser ? 
                            <div className = 'signout flex justify-between'
                                onClick = {onSignOut}>
                                <img src = {currentUser.photoURL} width = '20'/>
                                <div>
                                    {currentUser.displayName}, sign out
                                </div>
                            </div>
                            :
                            <div onClick = {() => navigate('/signin')}>Sign in</div>}
                        
                    </div>

                    <div className = 'cart'
                        onClick = {() => setDropMenu(!dropMenu)}
                        >
                        {
                            count !== 0
                            ? 
                            <div className = 'sum'>
                                <div>{count}</div>
                            </div>
                            :
                            null
                        }
                    </div>

                </div>

            </div>
            {
                dropMenu && count !== 0?
                <CheckoutDropdown/>
                :
                null
            }

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
