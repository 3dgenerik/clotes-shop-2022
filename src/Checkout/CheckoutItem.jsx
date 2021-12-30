import React from "react";
import './Checkout.style.scss';
import { connect } from "react-redux";
import { itemDetailsQuantityIncrement, itemDetailsQuantityDecrement } from "../containers/redux/ShopItem/ShopItem.action";
import { removeItem } from "../containers/redux/Chart/Chart.action";


const mapStateToProps = state => {
    return{
        detailsQuantity: state.setItemDetails.detailsQuantity,
        items: state.setChart.items

    }
}

const mapDispatchToProps = dispatch => {
    return{
        onIncrement: () => dispatch(itemDetailsQuantityIncrement()),
        onDecrement: () => dispatch(itemDetailsQuantityDecrement()),
        onChartValue: (e) => dispatch(removeItem(e.target.name))
    }
}


const CheckoutItem = ({id, items, name, price, imageUrl, detailsQuantity, onIncrement, onChartValue, onDecrement, dropdown, size, column}) => {
    // console.log('STA JE OVOOOO???? ', items)
    return(
        <div className = 'main-chackout-wrapper'>
            <div style = {{gridTemplateColumns: `repeat(${column}, 1fr)`}} className = 'checkout-wrapper'>

                <div className = 'checkout-image-wrapper'>
                    <div
                        style = {{
                            backgroundImage:`url(${imageUrl})`,
                            width:`${size.x}px`,
                            height:`${size.y}px`
                            }}
                        className = 'checkout-image'></div>
                </div>

                <div className = 'checkout-rest'>{name}</div>
                {
                    !dropdown ?
                <>
                    <div className = 'checkout-rest-arrows'>
                            <div className= 'left arrow' onClick = {onDecrement}></div>
                            <div className = ''>{detailsQuantity}</div>
                            <div className= 'right arrow' onClick={onIncrement}></div>
                    </div>

                    <div className = 'checkout-rest blue fw6 f4'>&#36;{price * detailsQuantity}</div>

                    <div className = 'checkout-rest pl4' onClick={onChartValue}>
                        <div><img src = '/images/media/trash_02.png' width = '30' name = {name}/></div>
                    </div>
                </>

                    :

                    null
                }

            </div>
            <div className = 'checkout-border'></div>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);