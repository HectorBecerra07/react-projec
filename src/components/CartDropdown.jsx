import { useState } from "react";
import { useCart } from "./CartContext";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  // Calcular total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="position-relative">
      {/* Icono del carrito */}
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer position-relative">
        <ShoppingCart size={30} />
        {cart.length > 0 && (
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
            {cart.length}
          </span>
        )}
      </div>

      {/* Dropdown del carrito */}
      {isOpen && (
        <div className="dropdown-menu show p-3 shadow bg-white border rounded position-absolute end-0 mt-2" style={{ width: "300px" }}>
          {cart.length === 0 ? (
            <p className="text-center">Tu carrito está vacío.</p>
          ) : (
            <>
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>produc</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.image} alt={item.name} className="img-thumbnail" style={{ width: "40px", height: "40px" }} />
                      </td>
                      <td>{item.name}</td>
                      <td><strong>${item.price}</strong></td>
                      <td>
                        <button className="btn btn-outline-secondary btn-sm me-1" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        {item.quantity}
                        <button className="btn btn-outline-secondary btn-sm ms-1" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </td>
                      <td>
                        <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>❌</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Total y botón para vaciar carrito */}
              <div className="d-flex justify-content-between mt-3">
                <span className="fw-bold">Total: ${total}</span>
                <button onClick={clearCart} className="btn btn-danger btn-sm">
                  Vaciar Carrito
                </button>
                <Link to="/checkout" className="btn btn-success btn-sm">
  Finalizar Compra
</Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
