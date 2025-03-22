import { createContext, useContext, useState } from "react";

const CartContext = createContext(); 

export const useCart = () => useContext(CartContext); 

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(0); 

    const addToCart = (quantity) => {
        setCartItems(cartItems + quantity);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
