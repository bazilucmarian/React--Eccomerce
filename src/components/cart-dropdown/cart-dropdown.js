import React from 'react'
import {connect} from 'react-redux'
import CustomButton from '../buttons/button'
import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.action'

const CartDropdown = ({ cartItems, history,dispatch}) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
            cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
            ):
        <span className="empty-message">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={()=>{
        history.push('/checkout');
        dispatch(toggleCartHidden())
      }
    
    }>GO TO CHECKOUT</CustomButton>
    </div>
  );
  
  const mapStateToProps = (state) => ({
    cartItems:selectCartItems(state)
  });
  // const mapDispatchToProps=displatch=>({
    
  // })
  
  export default withRouter(connect(mapStateToProps)(CartDropdown));