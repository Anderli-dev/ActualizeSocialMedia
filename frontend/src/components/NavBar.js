import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function NavBar() {
    const username = localStorage.getItem('username');

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 d-block">
          <div className="d-flex justify-content-between px-3">
            <Navbar.Brand href="/">ASM</Navbar.Brand>
            <div className="d-flex">

            {username ? ( // Відображення "username" якщо він є у localStorage
                <>
                <Nav className="justify-content-end px-5">
                  <Nav.Link href="#">{username}</Nav.Link>
                </Nav>
                <Nav className="justify-content-end px-5">
                    <Nav.Link href="#">Log Out</Nav.Link>
                  </Nav>
                </>
              ) : (
                <>
                  <Nav className="justify-content-end ">
                    <Nav.Link href="#">Login</Nav.Link>
                  </Nav>
                  <Nav className="justify-content-end px-5">
                    <Nav.Link href="/register/">Register</Nav.Link>
                  </Nav>
                </>
              )}

              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    ASM
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {/* тут щось буде */}
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </div>
        </Navbar>
      ))}
    </>
  );
}

