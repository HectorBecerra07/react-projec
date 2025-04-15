// src/services/productsService.js
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

// Traer todos los productos
export const getProducts = async () => {
  const productsCol = collection(db, "products");
  const productSnapshot = await getDocs(productsCol);
  return productSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Traer 1 producto por ID
export const getProductById = async (id) => {
  const productRef = doc(db, "products", id);
  const productSnap = await getDoc(productRef);

  if (productSnap.exists()) {
    return { id: productSnap.id, ...productSnap.data() };
  } else {
    throw new Error("Producto no encontrado");
  }
};
