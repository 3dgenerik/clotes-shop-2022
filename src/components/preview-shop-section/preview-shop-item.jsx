import React from "react";
import './preview-shop-item.style.scss';
import { connect } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { chart } from '../../containers/redux/Chart/Chart.action';
import { itemDetails } from "../../containers/redux/ShopItem/ShopItem.action";

const mapStateToProps = state => {
    return{
        value: state.setChart.value,
        items: state.setChart.items
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onChartValue: (price) => dispatch(chart(price)),
        onGetDetails: (details) => dispatch(itemDetails(details))
    }
}

const PreviewShopItem = ({id, name, imageUrl, price, ...rest}) => {

    const {value, items, onChartValue, onGetDetails} = rest;
    console.log('Price: ', value, '$',  ' Items: ', items)

    const navigate = useNavigate();
    const location = useLocation();

    const getDetails = (details) => {
        onGetDetails(details);
        navigate(`${location.pathname}/${id}`)
    }

    return (
        <div>
            <div className = 'shop-wrapper'>

                <div
                    className = 'image pointer'
                    style = {{backgroundImage:`url(${imageUrl})`}}
                    onClick = {() => getDetails({name:name, price:price, imageUrl:imageUrl})}
                    ></div>

                <div className = 'chart pointer' onClick = {() => onChartValue(price)}>
                    <div>add to chart <span style = {{fontSize:'12px', color: 'rgb(0,100,200)'}}>({price}&#36;)</span></div>
                </div>

            </div>

            <div className = 'flex justify-center'>
                <div >{`${name}: `}<span style = {{color: 'rgb(0, 100,200)', fontWeight:'600'}}>{price}&#36;</span></div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewShopItem);