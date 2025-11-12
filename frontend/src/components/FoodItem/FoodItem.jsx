import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets/frontend_assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/storeContext'
const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} alt="food" className="food-item-image" />
            {
                !cartItems[id]
                    ? <img src={assets.add_icon_white} alt="add" className="add" onClick={()=>addToCart(id)}/>
                    : <div className="food-item-counter">
                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="remove" />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="add" />
                    </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="star" />
            </div>
            <p className="food-item-desc">
                {description}
            </p>
            <p className="food-item-price">${price} </p>
        </div>
    </div>
  )
}

export default FoodItem