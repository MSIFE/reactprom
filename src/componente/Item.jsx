import React from 'react'

export default function Item({info}) {
  return (
    <a href=''>
        <img src={info.image} alt="mesa"/>
        <p>{info.titulo}</p>
    </a>
  )
}
