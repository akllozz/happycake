import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-danger"
      bg="danger"
      variant="danger"
      classname="text-white text-decoration-none"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  ">
            <Nav.Link
              href="/happycake"
              style={{ color: "white", textDecoration: "none" }}
            >
              🏠 Home
            </Nav.Link>
            <Nav.Link
              href="/contacto"
              style={{ color: "white", textDecoration: "none" }}
            >
              📩 Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand
          href="/happycake"
          className="justify-content-end"
          style={{ color: "white", textDecoration: "none" }}
        >
          Happy Cake 🍰
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navigation;