import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";


const Navbar = () => {
  const { count, setSearchByCategory } = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className="flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold">
          <NavLink
            to='/'
            onClick={() => setSearchByCategory(null)}
          >
            Shop-e
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => setSearchByCategory('clothes')}
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => setSearchByCategory('electronics')}
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            onClick={() => setSearchByCategory('furniture')}
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/shoes'
            onClick={() => setSearchByCategory('shoes')}
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => setSearchByCategory(null)}
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          email
        </li>
        <li>
          <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/sing-in' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to='/cart' className={({ isActive }) => isActive ? activeStyle : undefined}>
            <div className="flex justify-center items-center">
              <ShoppingCartIcon className="h-6 w-6 text-black" />
              <div>
                {count}
              </div>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar;