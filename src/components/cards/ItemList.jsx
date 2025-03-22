import Item from './Item';
import { Row, Col } from 'react-bootstrap';


const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Item {...product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemList;

