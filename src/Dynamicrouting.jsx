import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
const Dynamicrouting = () => {
  let[filtered,setfiltered]=useState(null);
    let {id}=useParams();
    console.log(id);
    let getdata=async()=>{
      let data=await fetch('https://fakestoreapi.com/products')
        data=await data.json();
        const filter=data.find((item)=>item.id===parseInt(id));
        setfiltered(filter);
    }
    useEffect(()=>{
        getdata();
    },[id]);
        useEffect(()=>{
        console.log(filtered,"element hai ");
    },[filtered]);
    
  return (
    <div>
      <Navbar></Navbar>
        <div style={{ backgroundColor: '#ADD8E6', minHeight: '100vh',paddingTop: '80px' }} >
          {
            filtered ? (
      <div className="card card-side border-rounded-xl bg-base-100 shadow-sm mt-7 ml-10 mr-28 h-96 " >
     <figure>
    <img src={filtered.image} className="w-full max-w-[700px] mx-auto"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{filtered.title}</h2>
    <p>{filtered.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" >Add to cart</button>
    </div>
  </div>
       </div>
            ):(
        <p className="text-center mt-10">Loading...</p>
      )}
          
        
     </div>

    </div>
  )
}

export default Dynamicrouting