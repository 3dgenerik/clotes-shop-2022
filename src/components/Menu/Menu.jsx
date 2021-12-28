import React  from "react";
import './Menu.style.scss';
import MenuItem from "../MenuItem/MenuItem";




const Menu = ({items}) => {
    // ILI OVAKO: const getItems = items.map(({id, title, imageUrl, linkUrl}, idx) => {}
    const getItems = items.map(({id, ...otherProps}, idx) => {
        return (
            <MenuItem 
                key = {id}
                // ILI OVAKO: title = {title}
                // ~ imageUrl={imageUrl}
                // ~ linkUrl={linkUrl}
                {...otherProps}
                styleName = {`item zone${idx}`}
            />
        )
    })

    return(
        <div className = 'menu wrapper'>
            {getItems}
        </div>
    )
}

export default Menu;