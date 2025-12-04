const express = require("express")
const {addToCart,removeFromCart,getCart, clearCart} = require("../controllers/cartController")
const authMiddleware = require("../middleware/auth.js")
const cartRouter = express.Router()

cartRouter.post('/add',authMiddleware,addToCart)
cartRouter.post('/remove',authMiddleware,removeFromCart)
cartRouter.get('/get',authMiddleware,getCart)
cartRouter.post('/clear',authMiddleware,clearCart)

module.exports = cartRouter