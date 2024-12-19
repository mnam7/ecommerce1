import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import ItemList from "../itemContainer/ItemList";
import {db} from "../../../firebaseConfing";
import {collection, getDocs, query, where} from "firebase/firestore";
import {MoonLoader} from 'react-spinners';
import './itemListContainer.css'


const ItemListContainer = () => {

  const [myTickets,setMyTickets] = useState([]);

  const{name} = useParams();

  useEffect(()=> {
      
      const ticketCollection= collection(db, "ecommerce-tickets");
      let refCollection= ticketCollection;

      if(name){
        const ticketCollectionFiltered= query(ticketCollection, where("category", "==", name));
        refCollection=ticketCollectionFiltered;
      }
      const getTickets = getDocs(refCollection);
      getTickets.then((res)=> {

        let tickets = res.docs.map(elemento => {
          return{ ...elemento.data(), id: elemento.id}
        });
        setMyTickets(tickets);
      });   
  },[name]);

  if(myTickets.length === 0){
    return <div className="spinner"><MoonLoader color ='#333344'/></div>
  }

  return (
    <div>
    <ItemList myTickets={myTickets} />
    </div>

  )
}

export default ItemListContainer