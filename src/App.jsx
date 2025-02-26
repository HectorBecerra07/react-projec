
import { useState } from 'react';
import './App.css'

function App(){
 const [user, setUser]=useState('Mary');

 const handleclick=()=>{
  setUser('albert')
 }

  return (
    <section className='container'>
      <h1>Hello {user}</h1>
      <button onClick={handleclick}>Cambiar Nombre</button>
    </section>

  );

}


export default App
