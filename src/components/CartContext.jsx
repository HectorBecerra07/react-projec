export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  
    const addToCart = (item, quantity) => {
      const exists = cart.find((prod) => prod.id === item.id);
      if (exists) {
        setCart(
          cart.map((prod) =>
            prod.id === item.id
              ? { ...prod, quantity: prod.quantity + quantity }
              : prod
          )
        );
      } else {
        setCart([...cart, { ...item, quantity }]);
      }
    };
  
    const updateQuantity = (id, newQuantity) => {
      if (newQuantity <= 0) {
        removeFromCart(id);
        return;
      }
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    };
  
    const removeFromCart = (id) => {
      setCart(cart.filter((prod) => prod.id !== id));
    };
  
    const clearCart = () => setCart([]);
  
    const totalPrice = () =>
      cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    const cartItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  
    return (
      <CartContext.Provider
        value={{ 
          cart, 
          addToCart, 
          removeFromCart, 
          clearCart, 
          totalPrice,
          updateQuantity,
          cartItems
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };

export default CartContext;
