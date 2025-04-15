function ItemDetail({ product }) {
  const { addToCart } = useCart();

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="item-detail-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <p>Stock disponible: {product.stock}</p>
        <ItemCounter product={product} />
      </div>
    </div>
  );
}
export default ItemDetail;