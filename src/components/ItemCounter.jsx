import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ItemCounter({ initialStock, onAdd }) {
  const [count, setCount] = useState(1); 
  const [stock] = useState(initialStock); 

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1); 
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1); 
    }
  };

  const handleAddToCart = () => {
    onAdd(count); 
  };

  return (
    <div className="d-flex align-items-center">
      <Button 
        variant="outline-primary" 
        onClick={handleDecrease} 
        disabled={count === 1}
        className="mx-1"
      >
        -
      </Button>
      <Form.Control 
        value={count} 
        readOnly 
        className="text-center" 
        style={{ width: '60px' }} 
      />
      <Button 
        variant="outline-primary" 
        onClick={handleIncrease} 
        disabled={count === stock}
        className="mx-1"
      >
        +
      </Button>
      <div className="ms-3">
        <Button 
          variant="primary" 
          onClick={handleAddToCart}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}

export default ItemCounter;
