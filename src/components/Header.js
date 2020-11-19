import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink
} from "reactstrap";
import {Link} from "react-router-dom";

function Header() {
    return (
        <Navbar color="primary" dark expand="md">
            <Link to="/">
                <NavbarBrand href="">Pokédex</NavbarBrand>
            </Link>
            <Nav className="ml-auto" navbar>
                <Link to="/">
                    <NavLink>All Pokémons</NavLink>
                </Link>
                <Link to="/caught">
                    <NavLink>Caught Pokémons</NavLink>
                </Link>
            </Nav>
        </Navbar>
    );
}

export default Header;