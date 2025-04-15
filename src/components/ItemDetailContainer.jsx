// src/components/ItemDetailContainer.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../service/productsService.js"; // igual


import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error obteniendo el producto:", error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading ? <p>Cargando...</p> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
