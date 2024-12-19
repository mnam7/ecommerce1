import React from 'react'
import CartWidget from '../../common/CartWidget.js'
import {FaSearch} from 'react-icons/fa';
import '../navbar/navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="container-navbar">
        <nav className="nav">
            <div className="logo">
            <Link to="/" className="link-color"><p className="logo-text" >E-ticketing</p></Link>
            </div>
            <ul className="menu">
                <li>
                    <Link to="/category/conciertos" className="link-color">Conciertos</Link>
                </li>
                <li>
                    <Link to="/category/teatros" className="link-color">Teatros</Link>
                    </li>
                <li>
                    <Link to="/category/deportes" className="link-color">Deportes</Link>
                </li>
            </ul>
        <div className="searchbar">
            <input placeholder='Buscar' />
            <FaSearch id='search-icon'/>
            </div>
        <CartWidget/>
    </nav>
  </div>
  )

}
export default Navbar