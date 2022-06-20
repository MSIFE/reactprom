import React from 'react';
import {Link} from "react-router-dom";

export default function Item({info}) {
  return (
    <>
    <Link to={`/detalle/${info.id}`}>
        <img src={info.image} alt=""/>
        <p>{info.titulo}</p>
    </Link>
    </>
  )
}
