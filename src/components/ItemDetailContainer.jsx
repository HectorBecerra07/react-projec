import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./mock/asyncData";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        const foundProduct = res.find((prod) => prod.id === id);
        setProduct(foundProduct);
      })
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

