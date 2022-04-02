
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';
import Jobs from '../Jobs/Jobs';
import Contact from '../Contact/Contact';

const NavbarComp = () => {

  return (
    <Router>
      <div className="nav-container">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">Assignment 7</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contacts</Nav.Link>
              <Nav.Link href="/jobs">Jobs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className='container'>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Navbar className="footer" collapseOnSelect expand="xs" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand> &copy; Copyrights | 2022</Navbar.Brand>
        </Container>
      </Navbar>
    </Router>
  )
}

export default NavbarComp;