import React, {useEffect,useState} from 'react'
import { ItemCount } from './ItemCount'
import ItemList from './ItemList'

const test =[
  {id:1, titulo:"mesa", image:"https://img.freepik.com/vector-gratis/mesa-madera-sobre-fondo-blanco_1308-71737.jpg?w=996&t=st=1654983171~exp=1654983771~hmac=d3f5950e6448af03d88abe3cdc4e0dec6d1df9928f4e60dba138545504d17c70"},
  {id:2, titulo:"jarron", image:"https://previews.123rf.com/images/romul/romul1303/romul130300011/18811370-jarr%C3%B3n-griego-antiguo-.jpg?fj=1"},
]



export default function ItemListContainer({greeting}) {
    const [data,setData] = useState([]);
    
    useEffect(()=>{
      const getData = new Promise(resolve =>{
        setTimeout(()=>{
          resolve(test);
        },3000)
      });
      getData.then(res => setData(res))

    },[])

    const onAdd = (quantity) => {
      alert(`comprastes ${quantity} unidades`)

  }
  return (<>
    <div>{greeting},

 
    </div>,
  <ItemCount initial={1} stock={5} onAdd={onAdd}/>,
  <ItemList data={data}/>

  </>
  )
}
