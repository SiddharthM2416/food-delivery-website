import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets/frontend_assets/assets'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iure veritatis, totam tenetur mollitia quaerat beatae error reiciendis incidunt sapiente eum reprehenderit quidem, magnam tempore libero, eius vero itaque placeat?</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header