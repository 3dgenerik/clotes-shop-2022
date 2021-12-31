import './App.css';
import {Switch, Route, Routes, useParams, useLocation, useNavigate, useMatch } from 'react-router-dom';
import Header from '../components/Header/Header';
import 'tachyons';
import { useEffect} from 'react';
import Homepage from '../components/Homepage/Homepage';
import  PreviewShop from '../components/preview-shop/preview-shop';
import Sign from '../Sign/Sign';
import Checkout from '../Checkout/Checkout';
import Collections from '../components/Collections/Collections';
import { connect } from 'react-redux';
import { collection } from './redux/preview-shop/preview-shop.action';
import {menuItems} from './redux/GetMenuItems/getMenuItems.action';
import { authUser } from './redux/Auth/Auth.action';
import Details from '../components/Details/Details';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';


const mapStateToProps = state => ({
  detailName: state.setItemDetails.detailName,
  detailPrice: state.setItemDetails.detailPrice,
  detailImageUrl: state.setItemDetails.detailImageUrl,
  user:state.setAuthUser.user
})

const mapDispatchToProps = dispatch => {
  return {
      onGetCollection: () => dispatch(collection()),
      onGetMenuItems: () => dispatch(menuItems()),
      onGetUser: (user) => dispatch(authUser(user))
  }
}

const App = props => {
  
  const {detailName, detailPrice, detailImageUrl, user} = props;
  

  let unsubscribeAuth = null;

  useEffect(() => {
    unsubscribeAuth = auth.onAuthStateChanged(async googleUser => {
      props.onGetUser(googleUser);
      createUserProfileDocument(googleUser);
    });
    
    props.onGetCollection();
    props.onGetMenuItems();

    return () => {
      unsubscribeAuth();
    }

  },[])
  
  const details = <Details name = {detailName} price = {detailPrice} imageUrl = {detailImageUrl}/>;
  return (
    <>
      <Header currentUser = {user}/>
      <div className = 'pt5'>
        <Routes>
          <Route exact path = '/' element = {<Homepage/>}/>
          <Route path = 'shop' element = {<PreviewShop/>}/>
          <Route path = 'shop/hats' element = {<Collections idx = {0}/>}/>
          <Route path = 'shop/hats/:id' element = {details}/>

          <Route path = 'shop/sneakers' element = {<Collections idx = {1}/>}/>
          <Route path = 'shop/sneakers/:id' element = {details}/>

          <Route path = 'shop/jackets' element = {<Collections idx = {2}/>}/>
          <Route path = 'shop/jackets/:id' element = {details}/>

          <Route path = 'shop/womens' element = {<Collections idx = {3}/>}/>
          <Route path = 'shop/womens/:id' element = {details}/>

          <Route path = 'shop/mens' element = {<Collections idx = {4}/>}/>
          <Route path = 'shop/mens/:id' element = {details}/>

          <Route path = 'shop/checkout' element = {<Checkout currentUser = {user} dropdown = {false} size = {{x:200, y:200}} width = {50} column = {5}/>}/>

          <Route path = 'signin' element = {<Sign/>}/>
          <Route path = '*' element = {<div>Page not found</div>}/>

        </Routes>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
