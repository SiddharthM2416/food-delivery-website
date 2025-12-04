import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({}) 
    const url = "http://localhost:4000"
    const [token,setToken] = useState("")
    const [food_list,setFoodList] = useState([])

    const addToCart =  async (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if (token) {
            try {
                await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
            } catch (error) {
                console.log(error)
            }
            
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if (token) {
            try {
                await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
            } catch (error) {
                console.log(error)
            }
            
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url+'/api/food/list');
            setFoodList(response.data.data)
        } catch (error) {
            console.log(error)
        }
        
    }

    const loadCartData = async (token) => {
    try {
        // FIXED: Headers must be the 2nd argument for axios.get
        const response = await axios.get(url + "/api/cart/get", { headers: { token } });
        
        // Safety Check: Ensure cartData exists before setting it
        setCartItems(response.data.cartData || {}); 
    } catch (error) {
        console.log(error);
    }
}

    useEffect(()=>{
        async function loadData() {

            try {
                await fetchFoodList();
                if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
            }
            } catch (error) {
                console.log(error)
            } 
        }
        loadData();
    },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider