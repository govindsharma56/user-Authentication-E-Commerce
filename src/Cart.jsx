import React, { useState } from 'react'
import { useEffect } from 'react';
import{useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Cart = () => {
    const query=useSelector((state)=>state.search.query.toLowerCase());
    let [data, setdata] = useState([]);
    let [filterdata, setfilterdata] = useState([]);
   
    async function getdata() {
        let res = await fetch('https://fakestoreapi.com/products');
        res = await res.json();
        setdata(res);
        setfilterdata(res)
    }
    useEffect(() => {
        getdata();
    }, [])
    
    useEffect(() => {
        let filtered=data.filter((item)=>
             item.title.toLowerCase().includes(query)
        );
        setfilterdata(filtered)   
    }, [query,data])
    let addToCart=(id,image,title,description ,price)=>{
        const item={id,image,title,description,price};
       console.log(id," "+title);
       let cart=JSON.parse(localStorage.getItem('cart')) || [];
       const AlreadyIncart=cart.some((product)=>product.id===id);
       if(!AlreadyIncart){
        cart.push(item);
       localStorage.setItem('cart',JSON.stringify(cart))
       }
    }
    return (
            <div>
        <div className='flex flex-wrap gap-6 ml-12 mt-6'>
            {
    filterdata.map((item,id) => (
             <div className="card bg-base-100 w-96 h-[500px] shadow-sm border border-gray-300"  key={item.id}>
                <figure className='h-52 w-full'>
                  <Link to={`routing/${item.id}`}><img src={item.image} alt={item.title}/></Link>  
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p className='text-sm'>{item.description}</p>
                </div>
                <div className="card-footer px-6 pb-4 flex items-center justify-between mt-auto">
                <p className="text-sm font-extrabold">₹{item.price}</p>
                    <button key={item.id} className="btn btn-primary ml-40 mb-6" onClick={()=>addToCart(item.id,item.image,item.title,item.description,item.price)} >Buy Now</button>
                
                </div>
            </div>
        ))
       }
        </div>  
        </div> 
    )
}

export default Cart