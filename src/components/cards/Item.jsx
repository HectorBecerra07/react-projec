import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ItemCounter from '../ItemCounter'; // Asegúrate de importar el componente ItemCounter

// src/components/Item.js
function Item({ id, name, description, img, price, stock }) {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p><strong>Precio:</strong> ${price}</p>
        <p><strong>Stock:</strong> {stock}</p>
        <Link to={`/item/${id}`} className="btn btn-primary">Ver más</Link>
      </Card.Body>
    </Card>
  );
}


export default Item;
