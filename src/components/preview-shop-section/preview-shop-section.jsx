import React from "react";
import './preview-shop-section.style.scss';
import PreviewShopItem from "./preview-shop-item";
import { useNavigate, useLocation } from "react-router-dom";

// id: 1,
// name: 'Brown Brim',
// imageUrl: "/images/shop-img/hats/brown-brim.png",
// price: 25

const PreviewShopSection = ({data}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const PREVIEW_NUM = 4;

    const goToCollection = (routeName) => {
        navigate(`${location.pathname}/${routeName}`);
    } 


    const populateCollection = data.map(({id, title, routeName, items}, idx) => {
        const populateItems = items.filter((item, idx) => idx < PREVIEW_NUM).map(({id, name, imageUrl, price}, idx) => {
            return(
                <PreviewShopItem key = {id} name = {name} imageUrl = {imageUrl} price = {price}/>
            )
        })

        return (
            <div key = {id}>
                <div className = 'go-to'>
                    <div className = 'btn center pa3' onClick = {() => goToCollection(routeName)}>
                        Go to <span className = 'fw5'>{title}</span> collection
                    </div>
                </div>
                <div className = 'collection-wrapper'>
                    {populateItems}
                </div>
            </div>
        )
    })

 
    return (
        <div>
            <h2 className = 'tc f2'>Collection</h2>
            <div className = 'main-wrapper'>
                {populateCollection}
            </div>
        </div>
    )
}

export default PreviewShopSection;