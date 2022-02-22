import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

const NavBar = () => {
     
    return (
        <div className='navbar'>
            {/* <div className='navbar-header'>
                <Link to='/' style={{ textDecoration: 'none',color:'white'}}>Greg's Website</Link>
            </div> */}
            <div className='navbar-body'>
                <Link to='/' style={{ textDecoration: 'none',color:'white', padding:'10px'}}>Home</Link>
                <Link to='/contact' style={{ textDecoration: 'none', color:'white', padding:'10px' }}>Contact</Link>
            </div>
        </div>
    )
}

export default NavBar

            // <Navbar bg="light" variant="light" >
            //     <Container>
            //     <Navbar.Brand href="/">Greg's Website</Navbar.Brand>
            //     <Nav className="me-auto">
            //     <Nav.Link href="#home">Home</Nav.Link>
            //     <Nav.Link href="#features">About</Nav.Link>
            //     <Nav.Link href="#pricing">Experience</Nav.Link>
            //     <Nav.Link href="#home">Skills</Nav.Link>
            //     <Nav.Link href="#home">Education</Nav.Link>
            //     <Nav.Link href="#home">Projects</Nav.Link>
            //     <Nav.Link href="#home">Aspirations</Nav.Link>
            //     <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link>
            //     </Nav>
            //     </Container>
            // </Navbar>     
