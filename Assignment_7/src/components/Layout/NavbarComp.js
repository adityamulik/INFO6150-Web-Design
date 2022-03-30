import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { 
  BrowserRouter as Router,
  Link,
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
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Navbar.Brand>Assignment 7</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
          >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/jobs">Jobs</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default NavbarComp;