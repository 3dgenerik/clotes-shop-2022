import './App.css';
import {Switch, Route, Routes, useParams, useLocation, useNavigate, useMatch} from 'react-router-dom';
import Header from '../components/Header/Header';
import 'tachyons';
import { useEffect } from 'react';
import Homepage from '../components/Homepage/Homepage';
import  PreviewShop from '../components/preview-shop/preview-shop';
import Sign from '../Sign/Sign';
import Collections from '../components/Collections/Collections';
import { connect } from 'react-redux';
import { collection } from './redux/preview-shop/preview-shop.action';
import {menuItems} from './redux/GetMenuItems/getMenuItems.action';



const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {
      onGetCollection: () => dispatch(collection()),
      onGetMenuItems: () => dispatch(menuItems())
  }
}

const App = props => {

  useEffect(() => {
    props.onGetCollection();
    props.onGetMenuItems();
  },[])

  return (
    <>
      <Header/>
      <Routes>
        <Route exact path = '/' element = {<Homepage/>}/>
        <Route path = 'shop' element = {<PreviewShop/>}/>
        <Route path = 'shop/hats' element = {<Collections idx = {0}/>}/>
        <Route path = 'shop/hats/:id' element = {<div>DETAILS</div>}/>

        <Route path = 'shop/sneakers' element = {<Collections idx = {1}/>}/>
        <Route path = 'shop/jackets' element = {<Collections idx = {2}/>}/>
        <Route path = 'shop/womens' element = {<Collections idx = {3}/>}/>
        <Route path = 'shop/mens' element = {<Collections idx = {4}/>}/>
        <Route path = 'signin' element = {<Sign/>}/>
        <Route path = '*' element = {<div>Page not found</div>}/>

      </Routes>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
