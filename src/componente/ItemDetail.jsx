import React from 'react'

export default function ItemDetail({data}) {
  return (
    <>
    <div className='container'>
    <div><h1>{data.titulo}</h1>
    </div>
       <div className='detail'>
            <img className='detail_img' src={data.image} alt="" /> 
                   </div>       
    </div>
    </>
  )
}
