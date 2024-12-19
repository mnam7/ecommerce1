import React, { useContext } from 'react'
import '../checkout/checkout.css'
import { useState } from 'react'
import { CartContext } from '../../../context/CartContext'
import {db} from "../../../firebaseConfing"
import {addDoc, collection, updateDoc, doc} from 'firebase/firestore'

const Checkout = () => {
   
    const{cart,getTotal, resetCart} = useContext(CartContext);

    const [orderId, setOrderId] = useState(null)

    const [userData, setUserData] =useState({
        
        nombre:"",
        telefono:"",
        email:""

    });

    const capturarDatos =(e)=>{
        setUserData({...userData, [e.target.name]: e.target.value});
    }


    const setEnviarForm=(e)=>{
        e.preventDefault();
        
        let total= getTotal();
        let order= {
            buyer: userData,
            items :cart,
            total,
        };
        let ordersCollection= collection(db, "orders");
        addDoc(ordersCollection,order).then((res) => {
            setOrderId(res.id)
            resetCart();
            });

        let ticketCollection= collection(db, "ecommerce-tickets");
        
        order.items.forEach(element => {
            let refDoc= doc(ticketCollection, element.id);
            updateDoc(refDoc,{stock: element.stock-element.quantity});
        });
       
    };

   
  return (
    <div className="container">
        
        {
            orderId ? (
                <div className="txt-compraExitosa">
                    <h2>Gracias por tu compra!</h2>
                    <h2>Tu ticket de compra es : {orderId}</h2>
                </div>
            ): (
                <div className="form-container">
                <h2 className="txt-title">Formulario de compra</h2>
                <form  className="form-container-label" onSubmit={setEnviarForm}>
                    <input  className="input-style"  type="text" placeholder='Nombre' name="nombre" onChange={capturarDatos}/>
                    <input  className="input-style" type="text" placeholder='Telefono' name="telefono"onChange={capturarDatos}/>
                    <input  className="input-style" type="text" placeholder='Email' name="email" onChange={capturarDatos}/>
                    <button type="onSubmit" className="btn-submit"> Enviar </button>
                </form>
                </div>
            )

        }
       
    </div>
  )
}

export default Checkout