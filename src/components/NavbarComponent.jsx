import ButtonNav from "./ButtonNav";
import CartWidgetIcons from "./CartWidgeIcons";

const NavbarComponent = () => {
    return (
        <nav className="NavContainer">
            <a className="Title-Nav" href="">NexusShop</a>
            <div className="NavLinks">
                <a className="navlink" href="">Inicio</a>
                <a className="navlink" href="">Laptops</a>
                <a className="navlink" href="">Pc Gamer</a>
                <a className="navlink" href="">Nosotros</a>
            </div>
            <div>
            <CartWidgetIcons/>
            <ButtonNav/>
            </div>
            
        </nav>
    );
};

export default NavbarComponent;
