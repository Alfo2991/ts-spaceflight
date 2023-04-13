import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavbar = () => (
  <BootstrapNavbar  collapseOnSelect variant="dark" bg="dark" expand="lg">
    <Link to="/" className="navbar-brand">
      Spaceflight
    </Link>
    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
    <BootstrapNavbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home" className="nav-link">
          Home
        </Nav.Link>
      </Nav>
    </BootstrapNavbar.Collapse>
  </BootstrapNavbar>
);

export default MainNavbar;