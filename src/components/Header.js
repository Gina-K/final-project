import React from "react";
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText} from "reactstrap";

function Header() {
    return(
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="">Pokédex</NavbarBrand>
                <Nav className="ml-auto" navbar>
                        <NavLink>All Pokémons</NavLink>
                        <NavLink>Caught Pokémons</NavLink>
                </Nav>
            </Navbar>
        );
}

export default Header;