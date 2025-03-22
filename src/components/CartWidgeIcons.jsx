import { GrCart } from "react-icons/gr";
import { useCart } from "./CartContext";
const CartWidgetIcons = () => {
    const { cartItems } = useCart(); 

    return (
        <div className="relative flex items-center" title="Carrito de compras">
            <GrCart className="CartWidget" size={24} />
            {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                    {cartItems}
                </span>
            )}
        </div>
    );
};

export default CartWidgetIcons;
