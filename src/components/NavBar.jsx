import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

export default function NavBar() {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Navbar bg="info" expand="lg" className="px-3 shadow-sm">
      <Container>
        {/* Logo */}
        <LinkContainer to="/">
          <Navbar.Brand className="fw-bold">🛍️ Il mio Shop</Navbar.Brand>
        </LinkContainer>

        {/* Toggle per mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            {/* Menu a discesa */}
            <NavDropdown title="Menu" id="menu-dropdown">
              <LinkContainer to="/">
                <NavDropdown.Item>Home</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/cart">
                <NavDropdown.Item>Carrello ({totalItems})</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <NavDropdown.Header>Backoffice</NavDropdown.Header>
              <LinkContainer to="/backoffice/products">
                <NavDropdown.Item>Prodotti</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/backoffice/users">
                <NavDropdown.Item>Utenti</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/backoffice/orders">
                <NavDropdown.Item>Ordini</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>

          {/* Login / Logout / Registrati */}
          <div className="d-flex gap-2">
            {auth.user ? (
              <>
                <span className="me-2 align-self-center">
                  👤 {auth.user.name}
                </span>
                <Button
                  variant="outline-danger"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <LinkContainer to="/login">
                  <Button variant="primary">Login</Button>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Button variant="success">Registrati</Button>
                </LinkContainer>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
