import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import {db} from "../../../firebaseConfing";
import {collection, getDoc, doc} from "firebase/firestore";
import '../itemDetail/itemDetail.css'
import Counter from '../../common/counter/Counter'
import { MoonLoader } from 'react-spinners';


const Itemdetail = () => {

  const {id} = useParams();
  
  const [ticket, setTicket] = useState({});
  const [loading, setLoading] = useState(true);
  
 
  useEffect(()=>{
    if(id){
    let ticketsCollection= collection(db, "ecommerce-tickets");
    let refDoc= doc(ticketsCollection,id);
    const getDocById = getDoc(refDoc);
    getDocById.then((res)=> {
      setTicket({...res.data(), id: res.id});
      setLoading(false);
      });
    } 
  },[id]);

  if(loading){
    return <div className="spinner"><MoonLoader color ='#333344'/></div>
  }

  return (
    <div className="detailContainer">
      <h3>{ticket.title}</h3>
      <img className="imageDetail"src={ticket.image} alt={ticket.title}/>
      <div className="txt-desc-container">
      <h4 className="txt-description">{ticket.description}</h4>
      </div>
      <h4>${ticket.price}</h4>

      <Counter ticket={ticket}/>

    </div>
  )
}

export default Itemdetail

