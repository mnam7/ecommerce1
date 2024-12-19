import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const CartContext =createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] =useState([]);

    const addToCart = (ticket) => {
      
       setCart((prevCart) => {
        const existingTicketIndex = prevCart.findIndex(item => item.id === ticket.id);
    
        if (existingTicketIndex !== -1) {
          const updatedCart = prevCart.map((item, index) => {
            if (index === existingTicketIndex) {
              return { ...item, quantity: item.quantity + ticket.quantity };
            }
            return item;
          });
          return updatedCart;
        } else {
          return [...prevCart, { ...ticket }];
        }
      });
    };

    const resetCart=()=>{
        setCart([]);
    };
    
    const removeTicket =(id) =>{
        let filteredArray = cart.filter((elemento) => elemento.id !== id)
        setCart(filteredArray);
    };

    const getTotal =() =>{
        let total= cart.reduce((total,elemento)=>{
            return total + elemento.price * elemento.quantity;
         },0)
        return total;
    }
    
    const getCartQuantity =() =>{
        let totalQuantity= cart.reduce((totalQuantity,elemento)=>{
            return totalQuantity + elemento.quantity;
         },0)
        return totalQuantity;
    }
    let data ={cart, addToCart,resetCart, removeTicket, getTotal, getCartQuantity}

  return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider