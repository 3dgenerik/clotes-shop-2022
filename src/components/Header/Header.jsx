import React from "react";
import './Header.style.scss';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return{
        value: state.setChart.value,
        items: state.setChart.items
    }
}

const Header = (props) => {
    const {value, items} = props;

    const navigate = useNavigate();
    return(
        <div className = 'header-wrapper'>

            <div className = 'crown-logo' onClick = {() => navigate('/')}></div>

            <div className = 'menu'>
                <div className = 'navi shop' onClick = {() => navigate('/shop')}>shop</div>
                <div className = 'navi contact'>contact</div>
                <div className = 'navi signin' onClick = {() => navigate('/signin')}>sign in</div>
                <div className = 'cart'>
                    <div className = 'sum'>
                        <div>{items}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default connect(mapStateToProps)(Header);