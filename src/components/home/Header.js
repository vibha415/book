import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Container1, Brand, Brand1 } from "../styled/headerStyled";
import { RiPenNibFill } from "react-icons/ri";
function Header() {
  return (
    <>
      <Container1>
        <Navbar expand="lg" bg="danger" variant="dark">
          <Container>
            <Brand href="#home">
              <RiPenNibFill
                style={{
                  width: "2rem",
                  height: "3rem",
                  transform: "rotate(135deg)",
                }}
              />
              authorify
            </Brand>

            <Nav>
              <Brand1>Contact Us: 85679327887</Brand1>
            </Nav>
          </Container>
        </Navbar>
      </Container1>
    </>
  );
}

export default Header;
