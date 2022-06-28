import { Link } from "react-router-dom";
import React,{useContext} from "react";

import { useCartContext } from '../context/CartContext';


export default function Item({info}) {
  const nombre = useContext(useCartContext);
 
  return (
    <>
    <Link to={`/detalle/${info.id}`}>
        <img src={info.image} alt=""/>
        <p>{info.titulo}</p>
    </Link>
    </>
  )
}
