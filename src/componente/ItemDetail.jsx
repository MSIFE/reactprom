
import {ItemCount} from './ItemCount';
import React,{useState} from 'react';
import { useCartContext } from '../context/CartContext';
import {Link} from 'react-router-dom'

export default function ItemDetail({data}) {
const[goToCart, setGoToCart] = useState(false);
const {addProduct} = useCartContext();
  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data,quantity);

}
  return (
   <>
    <div className='container'>
       <div className='detail'>
            <img className='detail_img' src={data.image} alt="" /> 
            <div><h1>{data.titulo}</h1>
{
    goToCart 
    ? <Link to="/cart">Terminar Compra</Link>
    : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
}
             
           </div>
        </div>       
    </div>
    </>
  )
}
