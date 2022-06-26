
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './componente/Cart';
import ItemDetailContainer from './componente/ItemDetailContainer';
import ItemListContainer from "./componente/ItemListContainer";
import NavBar from "./componente/NavBar";
import React from 'react';
import  CartProvider  from './context/CartContext';


function App() {

 
return (  

<>
<BrowserRouter>
<CartProvider>
<NavBar />,
<Routes>
    <Route path='/' element={<ItemListContainer />} />
    <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
</Routes>
</CartProvider>

</BrowserRouter>
</>
)}
  


export default App;
