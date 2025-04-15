import { useCart } from './CartContext';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
function ItemCounter({ product }) {
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();

  const handleIncrease = () => {
    if (count < product.stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, count);
    setCount(1);
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
        style={{ width: "60px" }}
      />
      <Button
        variant="outline-primary"
        onClick={handleIncrease}
        disabled={count === product.stock}
        className="mx-1"
      >
        +
      </Button>
      <div className="ms-3">
        <Button 
          variant="primary" 
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}
export default ItemCounter;
