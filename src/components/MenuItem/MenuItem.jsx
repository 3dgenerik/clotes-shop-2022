import React from "react";
import './MenuItem.style.scss';

const MenuItem = ({title, imageUrl, linkUrl, styleName})=>{
    return(
        
        <div className = {styleName}>

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