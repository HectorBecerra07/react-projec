import { NavLink } from "react-router-dom";
import CartDropdown from "./CartDropdown";

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
                <CartDropdown />
            </div>
        </nav>
    );
};

export default NavbarComponent;
