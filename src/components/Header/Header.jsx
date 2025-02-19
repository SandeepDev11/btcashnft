import { Container, Form, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/Images/logo.webp";

const Header = () => {
  return (
    <header>
      <main>
        <Navbar collapseOnSelect expand="lg" className="bg-transparent">
          <Container fluid>
            <Navbar.Brand href="/">
              <img src={logo} alt="btcashnft" width="100px" className="me-3" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navmenu border-start ps-4">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">Contest</Nav.Link>
                <Nav.Link href="#deets">Winner</Nav.Link>
              </Nav>
              <Nav className="mx-auto">
                <div className="searchBar">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <div className="searchIcon">
                    <svg
                      fill="#fff"
                      height="20"
                      role="img"
                      viewBox="0 -960 960 960"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="search"
                    >
                      <title>Search</title>
                      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path>
                    </svg>
                  </div>
                  <div className="searchLink">
                    <span>/</span>
                  </div>
                </div>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">
                  <div className="authText">
                    <span className="pe-1">
                      <svg
                        fill="#fff"
                        height="24"
                        role="img"
                        viewBox="0 -960 960 960"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        title="Wallet"
                      >
                        <title>Wallet</title>
                        <path d="M240-160q-66 0-113-47T80-320v-320q0-66 47-113t113-47h480q66 0 113 47t47 113v320q0 66-47 113t-113 47H240Zm0-480h480q22 0 42 5t38 16v-21q0-33-23.5-56.5T720-720H240q-33 0-56.5 23.5T160-640v21q18-11 38-16t42-5Zm-74 130 445 108q9 2 18 0t17-8l139-116q-11-15-28-24.5t-37-9.5H240q-26 0-45.5 13.5T166-510Z"></path>
                      </svg>
                    </span>
                    <span>Login</span>
                  </div>
                </Nav.Link>
                <Nav.Link href="#deets">
                  <div className="authText">
                    <span className="pe-1">
                      <svg
                        fill="#fff"
                        height="24"
                        role="img"
                        viewBox="0 -960 960 960"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        title="Wallet"
                      >
                        <title>Wallet</title>
                        <path d="M240-160q-66 0-113-47T80-320v-320q0-66 47-113t113-47h480q66 0 113 47t47 113v320q0 66-47 113t-113 47H240Zm0-480h480q22 0 42 5t38 16v-21q0-33-23.5-56.5T720-720H240q-33 0-56.5 23.5T160-640v21q18-11 38-16t42-5Zm-74 130 445 108q9 2 18 0t17-8l139-116q-11-15-28-24.5t-37-9.5H240q-26 0-45.5 13.5T166-510Z"></path>
                      </svg>
                    </span>
                    <span>Sign Up</span>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </main>
    </header>
  );
};

export default Header;
