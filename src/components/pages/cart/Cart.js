import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import '../cart/cart.css'



const Cart = () => {

  const {cart, resetCart, removeTicket, getTotal} = useContext(CartContext);
  let total= getTotal();
  return (
    <div>
      {cart.map(elemento => {
        return(
        <div className="cartTicket-container">
          <div key = {elemento.id} className="cartTicket-detail">
            <h3>{elemento.title}</h3>
            <h4>Cantidad: {elemento.quantity}</h4>
            <h4>Precio: ${elemento.price}</h4>
          </div>
          <div className="imageCart-container">
            <img src={elemento.image} alt={elemento.title} className="imageCart-style"/>
          </div>
          <button className="buttonEliminar-ticket" onClick={()=>removeTicket(elemento.id)}>Eliminar</button>
        </div>

        );
      })
    }  

      {cart.length > 0 && (
        <div>
          <h3 className='text-cart'>El total de la compra es de: ${total}</h3>
          <button className="buttonBorrar" onClick={resetCart}>Limpiar carrito</button>
          <Link to="/checkout"><button className="buttonBorrar">Finalizar Compra</button></Link>
        </div>
      )}
    </div>
  )
}

export default Cart