import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ItemCounter from '../ItemCounter'; // Asegúrate de importar el componente ItemCounter

function Item({ id, name, description, img, price, stock, onAddToCart }) {
  const handleAddToCart = (count) => {
    onAddToCart(id, count); // Llamar a onAddToCart pasando la cantidad seleccionada
  };

  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p><strong>Precio:</strong> ${price}</p>
        <p><strong>Stock:</strong> {stock} unidades</p>
        <ItemCounter initialStock={stock} onAdd={handleAddToCart} />
        <div style={{ display: "flex", gap: "5px" }}>
          <Link to={`/item/${id}`} className="btn btn-primary">
            Ver más
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;
