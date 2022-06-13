import React,{useState,useEffect} from 'react'
import ItemDetail from './ItemDetail'

const test = {id:1, titulo:"mesa", image:"https://img.freepik.com/vector-gratis/mesa-madera-sobre-fondo-blanco_1308-71737.jpg?w=996&t=st=1654983171~exp=1654983771~hmac=d3f5950e6448af03d88abe3cdc4e0dec6d1df9928f4e60dba138545504d17c70"}
  
export default function ItemDetailContainer() {

const [data, setData] = useState({});

useEffect (()=>{
    const getData = new Promise(resolve =>{
      setTimeout(()=>{
        resolve(test);
      },3000)
    });
    getData.then(res => setData(res))

  },[])

  return (
    <div>
        <ItemDetail data={data} />
        </div>
  )
}
