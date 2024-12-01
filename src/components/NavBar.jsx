import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import s from './component.module.scss';
import LogOut from '../pages/LogOut';
import { useSelector } from 'react-redux';
const NavBar = () => {
  const [Open, isOpen] = useState(false);
  const em = localStorage.getItem('prodEmail');
  const ps = localStorage.getItem('prodPassword');
  const cartData = useSelector((state) => state.cart);
  console.log(cartData.items.length);
  const numItemsInCart = cartData.items.length;
  return (
    <div className={s.navBar}>
        <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/category ">category</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        {(em && ps) ? '' : (<li><NavLink to="/register">register</NavLink></li>)}
        <li>{(em && ps) ? <LogOut/>:<NavLink to="/login">login</NavLink>}</li>
        <li><NavLink to="/cart">Cart ({numItemsInCart})</NavLink></li>
        </ul>
        
    </div>
  )
}

export default NavBar