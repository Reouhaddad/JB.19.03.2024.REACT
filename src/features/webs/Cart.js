import { addDataAsync, delDataAsync, getProdsAsync, selectProds, updDataAsync } from './prodSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Cart = () => {
    const prods = useSelector(selectProds);
    const dispatch = useDispatch();
    const [refresh, setRefresh] = useState(false);
  

      useEffect(() => {
        dispatch(getProdsAsync())
      }, [])

  return (
    <div>Cart
        <hr/>
        Count:{prods.length}
        
        Total :
        
      
    </div>
  )
}

export default Cart