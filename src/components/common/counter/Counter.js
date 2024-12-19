import React, { useContext } from 'react'
import { useState } from 'react';
import '../counter/counter.css';
import { CartContext } from '../../../context/CartContext';
import Swal from 'sweetalert2'



const Counter = ({ticket}) => {

    const {addToCart} = useContext(CartContext);
    const [count, setCount] =useState(1);


    const decrementar = () =>{
        if(count >1){
        setCount(count - 1);
        }
    }

    const incrementar = () =>{
        if(count< ticket.stock)
        setCount(count + 1);
    }

    const addCart = () =>{
      if(ticket.stock === 0){
        Swal.fire("Sin Stock! :(");
      }
      else {
        let ticketToCart = { ...ticket, quantity: count};
        addToCart(ticketToCart);
      }
      }
    

  return (
   
    <div className="container">
        <div className= "container-count">
        <button className="button-counter" onClick={decrementar}> - </button>
        <h3>{count}</h3>
        <button className="button-counter" onClick={incrementar}> + </button>
        </div>
        <button className="button-add" onClick={addCart}>Agregar al carrito</button>
    </div>

    
  )
}

export default Counter