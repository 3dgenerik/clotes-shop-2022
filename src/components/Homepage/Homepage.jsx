import React from "react";
import Menu from "../Menu/Menu";
import { useEffect } from 'react';
import { connect } from 'react-redux';





const mapStateToProps = state => {
  return {
    items: state.setMenuItems.items
  }
};
  
const Homepage = (props) => {
    const {items} = props;

    return(
        <>
            <Menu items = {items}/>
        </>
    )
}

export default connect(mapStateToProps)(Homepage);