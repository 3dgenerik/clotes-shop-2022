import React from "react";
import './MenuItem.style.scss';
import {useLocation, useNavigate} from 'react-router-dom';

const MenuItem = ({title, imageUrl, linkUrl, styleName})=>{

    const location = useLocation();
    const navigate = useNavigate();

    const onNavigateMenu = () => {
        navigate(`${location.pathname}${linkUrl}`, {replace:true})
    }

    return(
        <div
            className = {styleName}
            onClick = {onNavigateMenu}
            >

            <div className = 'imgWrapper'
                style = {{ backgroundImage:`url(${imageUrl})`}}>
            </div>

            <div className = 'center-text'>
                <div>{title}</div>
                <div>shop now</div>
            </div>

        </div>
    )
}

export default MenuItem;