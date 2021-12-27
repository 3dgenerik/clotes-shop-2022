import React  from "react";
import './Menu.style.scss';
import MenuItem from "../MenuItem/MenuItem";

const Menu = ({items}) => {
    const getItems = items.map((item, idx) => {
        return (
            <MenuItem 
                key = {item.id}
                title = {item.title}
                imageUrl = {item.imageUrl}
                linkUrl = {item.linkUrl}
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