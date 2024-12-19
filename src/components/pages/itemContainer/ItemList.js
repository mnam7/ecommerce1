import React from 'react'
import ProductCard from '../../common/ProductCard'

const itemList = ({ myTickets }) => {

  return (
    <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    }}
    >
    {myTickets.map((ticket) => (
      <ProductCard key={ticket.id} ticket={ticket} />
    ))}
  </div>
  )
}

export default itemList