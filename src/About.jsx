import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './index.css'
const About = () => {
  const [cart, setCart] = useState([]);
  const [total,setTotal]=useState(0);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const addnewFiled=savedCart.map((item)=>({
          ...item,
          quantity:1
        }))
    setCart(addnewFiled);
  }, []);
  const handleQuantityChange=(value,index)=>{
         const updatedcart=[...cart];
         updatedcart[index].quantity=parseInt(value);
         setCart(updatedcart);
      
  }
  useEffect(()=>{
       let sum=0;
     cart.forEach((item)=>{
          sum+=item.price*item.quantity;
          setTotal(sum)
     })
  },[cart])
  
  return (
    <div>
      <Navbar />
              <div className="container h-100 py-5 bg-gray-20">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                </div>
              </div>
           <div className="container mt-4">
        {cart.map((item, index) => {
               return(
          <div className="card rounded-3 mb-4" key={index}>
            <div className="card-body p-4">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src={item.image}
                    className="img-fluid rounded-3"
                  
                  />
                    <h3 className='mt-4'>{item.title}</h3>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p className="lead fw-normal mb-2">{item.description}</p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e.target.value, index)}
                    className="form-control"
                    style={{ width: '80px' }}
                  />
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 className="mb-0">Rs.{(item.price*item.quantity).toFixed(2)}</h5>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <button
                    className="btn btn-link text-danger"
                  >
                    <i className="fas fa-trash fa-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
              )
        }
        )}
        
      </div>
          </div>
            </div>
          </div>
           <div className="d-flex justify-content-around">
          <p className="h3 ">Total:</p>
          <p id="total">Rs.{total}</p>
        </div>
        </div>
      
  );
};

export default About;
