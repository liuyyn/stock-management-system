import React, { useState } from "react";
import {
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavLink,
  Container,
  Row,
} from "reactstrap";
import "../../App.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="header">
      <Navbar color="light" light expand="md">
        <Container className="navbar-container">
          <Row>
            <NavbarBrand className="mr-auto" href="/">
              Stock Management System
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/companies">Companies</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/products">Products</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};
