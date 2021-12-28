import React from "react";
import './Details.scss';
import { connect } from "react-redux";
import { chart } from "../../containers/redux/Chart/Chart.action";

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
    return{
        onChartValue: (price) => dispatch(chart(price)),
    }
}

const Details = ({name, price, imageUrl, onChartValue}) => {

    return(
        <div className = 'all-wrapper'>
            <div className = 'detail-wrapper'>

                <div>
                    <img src = {imageUrl} alt = {name}/>
                </div>

                <div className = 'detail-info'>
                    <div className = 'detail-name'>{name}</div>
                    <div className = 'detail-info blue f2 fw5'>{price}&#36;</div>
                </div>
                <div className = 'detail-cart' onClick = {() => onChartValue(price)}>
                    add to cart
                </div>

            </div>

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);