import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../mock/asyncData"; 
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        if (categoryId) {
          setProducts(res.filter((product) => product.category === categoryId));
        } else {
          setProducts(res);
        }
      })
      .catch((error) => console.error("Error obteniendo productos:", error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      {loading ? <p>Cargando...</p> : <ItemList products={products} />}
    </div>
  );
};


export default ItemListContainer;

