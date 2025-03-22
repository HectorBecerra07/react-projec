import CartWidgetIcons from "./CartWidgeIcons";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
    return (
        <nav className="NavContainer">
            <NavLink className="Title-Nav" to="/category/inicio">NexusShop</NavLink>
            <div className="NavLinks">
                <NavLink className="navlink" to="/category/inicio">Inicio</NavLink>
                <NavLink className="navlink" to="/category/Laptops">Laptops</NavLink>
                <NavLink className="navlink" to="/category/PC-Gamer">Pc Gamer</NavLink>
            </div>
            <div>
                <CartWidgetIcons />
                
            </div>
        </nav>
    );
};

export default NavbarComponent;
