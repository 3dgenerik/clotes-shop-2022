import './App.css';
import Menu from '../components/Menu/Menu';
import {items} from '../items'
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { menuItems } from './redux/GetMenuItems/getMenuItems.action';

const mapStateToProps = state => {
  return {
    items: state.setMenuItems.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetMenuItems: () => dispatch(menuItems(items))
  }
}

const App = props => {

  const {items, onGetMenuItems} = props;

  useEffect(()=>{
    onGetMenuItems();
  },[])

  return (
    <>
      <Menu items = {items}/>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
