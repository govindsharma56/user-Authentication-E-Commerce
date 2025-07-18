import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from './feature/searchslice/searchslice'
const Navbar = () => {
  const dispatch = useDispatch();
  let cart=JSON.parse(localStorage.getItem('cart')) || [];
  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <Link to="/dashboard"className="btn btn-ghost text-xl">Shoppers</Link>
  </div>
  <div className="flex gap-4">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" onChange={(e)=>dispatch(setSearchQuery(e.target.value))} />
        <div className="indicator mt-3 mr-5">
          <Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg></Link>
          <span className="badge badge-sm indicator-item">{cart.length}</span>
        </div>
  </div>
</div>
    </div>
  )
}

export default Navbar