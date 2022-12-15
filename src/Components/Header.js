import React from "react";
import { Nav, Navbar} from "react-bootstrap";
// import { HashLink as Link } from 'react-router-hash-link';

function Header() {

  window.addEventListener('scroll', function () {
    if (window.scrollY > 200 && window.location.pathname ==='/' ) {
      document
        .querySelector('.navbar')
        .classList.add('color-nav');
      
    } else if ( window.location.pathname !=='/' ) {
      document
        .querySelector('.navbar')
        .classList.add('color-nav');
    }else {
      document
        .querySelector('.navbar')
        .classList.remove('color-nav');
        
    }
  });
  

  
  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark" className="navbar p-2" >
      <Navbar.Brand href="/"><img src='/Logo_final_rgba.png' className='logoheader' alt="logo sGlobe Lab"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className='d-flex d-lg-none flex-column justify-content-around'>
        <span className='toggler-icon top-bar'></span>
        <span className='toggler-icon middle-bar'></span>
        <span className='toggler-icon bottom-bar'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav >
          <Nav.Link href='/#top' className='nav-link'>Home</Nav.Link>
          <Nav.Link href="/#research" className='nav-link'>Research</Nav.Link>
          <Nav.Link href="/#labmembers" className='nav-link'>Lab members</Nav.Link>
          <Nav.Link href="/#projects" className='nav-link'>Projects</Nav.Link>
          <Nav.Link href="/#publications" className='nav-link'>Publications</Nav.Link>
          <Nav.Link href="/#jointhelab" className='nav-link'>Join the lab</Nav.Link>
          <Nav.Link href="/#contact" className='nav-link'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default Header;
