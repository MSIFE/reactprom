
import NavBar from "./componente/NavBar";
import ItemListContainer from "./componente/ItemListContainer"
import ItemDetailContainer from './componente/ItemDetailContainer';
import Cart from './componente/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {

 
return (  

<>
<BrowserRouter>
<NavBar />,
<Routes>
    <Route path='/' element={<ItemListContainer />} />
    <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
</Routes>
{/* <ItemListContainer greeting="Bienbenidos a nuestro Ecommerce" />,
<ItemDetailContainer />, */}
</BrowserRouter>
</>
)}
  


export default App;
