import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext'


const CartWidget = () => {

 const {getCartQuantity} = useContext(CartContext);
 let totalQuantity= getCartQuantity();
  return (
    <Link to="/cart">
    🛒<span style={{color:"#fff"}}>{totalQuantity}</span>
    </Link>
  )
}

export default CartWidget