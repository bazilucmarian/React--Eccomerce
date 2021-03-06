import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/Homepage'
import ShopPage from './pages//shop-page/shop'
import CheckoutPage from './pages/checkout/checkout'
import Header from './components/header/header'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
class App extends React.Component{
 

  unsubscribeFromAuth=null;

  componentDidMount(){
      this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
       if(userAuth){
         const userRef= await createUserProfileDocument(userAuth);
         
         userRef.onSnapshot(snapShot=>{
           this.props.setCurrentUser({
            
               id:snapShot.id,
               ...snapShot.data()
             
           })
           console.log(this.state)
         })
       }
       this.props.setCurrentUser(userAuth)
        
      })
    
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();

  }
  
  render(){
    return (
    <div>
      <Header/>
      <Switch>
   <Route exact path="/" component={HomePage}/>
   <Route path="/shop" component={ShopPage}/>
   <Route exact path="/checkout" component={CheckoutPage}/>
   <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/'/>):(<SignInSignUpPage/>)}/>
   </Switch>
    </div>
  );
  }
  
}
const mapStateToProps=({user})=>({
  currentUser:user.currentUser
    
})
const mapDispatchToProps=dispatch=>({
setCurrentUser: user=>dispatch(setCurrentUser(user))
}) 

export default connect(mapStateToProps,mapDispatchToProps)(App);
