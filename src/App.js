import './App.css';
import NavBar from "./componente/NavBar";
// import ItemListContainer from "./componente/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './componente/ItemDetailContainer';

function App() {

 
return (  

<div className="App">
<NavBar />,
{/* <ItemListContainer greeting="Bienbenidos a nuestro Ecommerce" />, */}
<ItemDetailContainer />
</div>
)}
  


export default App;
