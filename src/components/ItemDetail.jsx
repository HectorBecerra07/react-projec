import React from "react";

function ItemDetail({ product }) {
  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <p><strong>Nombre:</strong> {product.name}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Descripción:</strong> {product.description}</p>
      <p><strong>Stock:</strong> {product.stock} unidades</p>
    </div>
  );
}

export default ItemDetail;

