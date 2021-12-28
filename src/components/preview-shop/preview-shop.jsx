import React, {useEffect} from "react";
import { connect } from "react-redux";
import PreviewShopSection from "../preview-shop-section/preview-shop-section";

import { collection } from "../../containers/redux/preview-shop/preview-shop.action";
import { resetChart } from "../../containers/redux/Chart/Chart.action";



const mapStateToProps = state => {
    return{
        shopData: state.setCollection.shopData,
        value: state.setChart.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onGetCollection: () => dispatch(collection()),
        onResetChart: ()=>dispatch(resetChart())
    }
}

const PreviewShop = (props) => {
    const {shopData, value, onGetCollection, onResetChart} = props;

    useEffect(()=>{
        // onGetCollection();
    },[])

    return (
        <>
            {/* <div style = {{
                position:'fixed',
                background:'white',
                width:'100%',
                margin:'0px',
                padding:'0px',
                top:'0',
                borderBottom:'1px solid rgba(0,0,0,.2)'}}
                
                className = 'flex justify-end'
                >
                <button className = 'ma3' onClick = {onResetChart}>Reset</button>
                <div className = 'ma3'>Sum is: {value} &#36;</div>
            </div> */}
            <PreviewShopSection data = {shopData}/>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewShop);