import React from "react";
import { connect } from "react-redux";
import { chart } from "../containers/redux/Chart/Chart.action";
import CheckoutItem from "./CheckoutItem";
import StripeCheckoutButton from "../components/Stripe/Stripe-button";

const mapStateToProps = state => {
    return{
        items: state.setChart.items,
        count: state.setChart.count,
        sum: state.setChart.sum,
        user:state.setAuthUser.user

    }
}


const mapDispatchToProps = dispatch => {
    return{
        onChartValue: (item) => dispatch(chart(item))
    }
}

const Checkout = (props) => {
    const {currentUser, items, count, sum, onChartValue, dropdown, size, width, column, user} = props;

    const collectItems = items.map(({id, name, price, imageUrl}, idx) => {
        return (
            <CheckoutItem key = {idx} id = {idx} name = {name} price = {price} imageUrl = {imageUrl} dropdown = {dropdown} size = {size} column = {column}/>
        )
    })
    const mainSum = items.map((item) => item.price).reduce((res, acc) => {return res + acc}, 0);

    return (
        <div className = 'flex justify-center' style = {{width:'100%'}} >
            <div style = {{width:`${width}%`}} className = 'flex flex-column'>  
                {count !== 0 ?
                <>
                    {collectItems} 
                    <div className = 'flex flex-column' >
                        <div className='tr pr2 f3'>TOTAL: <span className = 'blue fw7'>&#36;{mainSum}</span></div>
                        <div style = {{display:'flex', justifyContent:'flex-end', width:'100%', padding: '10px'}}>
                            {
                                user ?
                                <StripeCheckoutButton price = {mainSum}/>
                                :
                                <div>Please, login for payment.</div>
                            }
                        </div>
                    </div>
                </>
                :
                    <div style = {{
                        position: 'fixed',
                        left:'calc(50% - 50px)',
                        top:'50%'
                    }}>
                        <div>
                            Cart is empty. Please go to shop.
                        </div>
                    </div>
                } 

            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);