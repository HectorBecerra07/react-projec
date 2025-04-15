// src/components/CheckoutForm.jsx
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { createOrder } from "../service/productsService";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer,
      items: cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      total: totalPrice(),
    };

    try {
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (err) {
      console.error("Error en el checkout:", err);
    }
  };

  return (
    <div>
      <h2>Finalizar Compra</h2>
      {orderId ? (
        <p>¡Gracias por tu compra! Tu número de orden es: <strong>{orderId}</strong></p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={buyer.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={buyer.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            value={buyer.phone}
            onChange={handleChange}
            required
          />
          <button type="submit">Confirmar compra</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
