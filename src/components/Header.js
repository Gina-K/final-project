import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem
} from "reactstrap";
import {Link} from "react-router-dom";

function Header() {
    return (
        <Navbar color="primary" dark expand="md">
            <NavbarBrand tag={Link} to="/">Pokédex</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/">All Pokémons</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/caught">Caught </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Header;