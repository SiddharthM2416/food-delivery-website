import React,{ useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
const List = () => {

  const [list,setList] = useState([]);
  const url = "http://localhost:4000"
  const fetchList = async () =>{
    const response = await axios.get(`${url}/api/food/list`)
    console.log(response.data)
    if (response.data.success){
      setList(response.data.data)
    }
    else{
      alert("Error")
    }
  }

  const removeFood = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList()
    if(response.data.success){
      alert("Food Item Removed")
    }
    else{
      alert("Error")
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+item.image} alt="food" />
              <p>{item.name}</p>
              <p>${item.category}</p>
              <p>{item.price}</p>
              <p className='cursor' onClick={()=>removeFood(item._id)}>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List