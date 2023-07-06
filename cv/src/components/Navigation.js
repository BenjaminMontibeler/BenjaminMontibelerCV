import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';
import { Element } from 'react-scroll';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css'

function Navigation() {
  return (
    <Navbar expand="lg" className='navbar ml-auto align-items-center w-100 fixed-top'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='w-100'>
          <Nav className="ml-auto d-flex justify-content-end align-items-end w-100">
          <Link
          to="about"
          smooth={true}
          duration={500}
          className='nav-link'
        >
          About me
        </Link>

        <Link
          to="education"
          smooth={true}
          duration={500}
          className='nav-link'
        >
          Education
        </Link>

        <Link
          to="skills"
          smooth={true}
          duration={500}
          className='nav-link'
        >
          Skills
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={500}
          className='nav-link'
        >
          Projects
        </Link>

        <Link
          to="hobbies"
          smooth={true}
          duration={500}
          className='nav-link'
        >
          Hobbies
        </Link>

        <Link 
          to="information"
          smooth={true}
          duration={500}
          className='nav-link'
        >
          Information
        </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Navigation
