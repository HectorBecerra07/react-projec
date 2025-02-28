
import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavbarComponent from './components/NavbarComponent';

function App(){


  return (
    <>
      <NavbarComponent/>
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </>

  );

}


export default App
