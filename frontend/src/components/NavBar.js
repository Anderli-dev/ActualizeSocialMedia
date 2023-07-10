import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function NavBar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 d-block">
          <div className="d-flex justify-content-between px-3">
            <Navbar.Brand href="#">ASM</Navbar.Brand>
            <div className="d-flex">
              <Nav className="justify-content-end px-5">
                <Nav.Link href="#action">Login</Nav.Link>
              </Nav>
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

