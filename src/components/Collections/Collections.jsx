import React from "react";
import { connect } from "react-redux";
import PreviewShopItem from "../preview-shop-section/preview-shop-item";

const mapStateToProps = state => {
    return{
        shopData: state.setCollection.shopData
    }
}

const Hats = (props) => {
    const {shopData, idx} = props;
    const items = shopData[idx].items;
    
    const collection = items.map(({id, name, imageUrl, price}, idx) => {
        return(
            <PreviewShopItem key = {id} id = {id} name = {name} imageUrl = {imageUrl} price = {price}/>
        )
    })

    return(
        <div className = 'collection-wrapper'>
           {collection}  
        </div>
    )
}

export default connect(mapStateToProps)(Hats);

