import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/storeContext'
const PlaceOrder = () => {

  const {getTotalCartAmount,clearCart} = useContext(StoreContext)

  return (
    <form className='place-order' onSubmit={()=>{
      alert("Order placed")
      clearCart()
    }}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required type="text" placeholder='First name' />
          <input required type="text" placeholder='Last name'/>
        </div>
        <input required type="email" placeholder='Email address'/>
        <input required type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input required type="text" placeholder='City' />
          <input required type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input required type="text" placeholder='Zipcode' />
          <input required type="text" placeholder='Country'/>
        </div>
        <input required type="text" placeholder='Phone'/>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button type='submit'>PLACE ORDER</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder