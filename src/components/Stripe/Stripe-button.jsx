import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { resetChart } from "../../containers/redux/Chart/Chart.action";
import { connect } from "react-redux";


const mapDispatchToProps = dispatch => {
    return {
        onPaymantSubmit: () => dispatch(resetChart())
    }
}

const StripeCheckoutButton = ({price, onPaymantSubmit}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KCg7jHpdIr0T6ubkxAkAdh1luL4PD7KiujolJ00MxNNPu2QkBJJI9bTb4jDqd3Y0Knc0pbns1iXlifzYE6VvRY800DFn80lLi';

    const onToken = token => {
        console.log(token.card);
        // alert('Payment Successful');
        onPaymantSubmit();
    }
    return (
        <StripeCheckout
            label = 'Pay now'
            name = 'Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://1.bp.blogspot.com/-v2eH-QT4vM8/WUa0EdEkPHI/AAAAAAAABIw/LRHuJSFoVj4_-QlRDKD5vAIAFxb3wiyAACLcBGAs/s1600/Flag_of_Serbia.svg.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
