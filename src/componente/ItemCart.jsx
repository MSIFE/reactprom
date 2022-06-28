import React from 'react'
import { useCartContext } from '../context/CartContext'

export default function ItemCart({ product }) {
    const {removeProduct} = useCartContext();
  return (
    <>
    <div>
        <img src={product.image} alt={product.titulo} />
        <div>
            <p>Titutlo : {product.titulo}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: {product.price}</p>
            <p>subtotal:${product.quantity * product.price}</p>
            <button onClick={()=> removeProduct (product.id)}>Eliminar</button>
        </div>
    </div>
    </>
  )
}
