import { CartProvider } from "./components/CartContext"; 
import './style/App.css';
import ItemListContainer from "./components/cards/ItemListContainer";
import NavbarComponent from './components/NavbarComponent';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/error404/Error404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckoutForm from "./components/CheckoutForm";
// App.jsx (modificado)
function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/checkout" element={<CheckoutForm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

