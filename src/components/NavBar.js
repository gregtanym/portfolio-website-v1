import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { HashLink } from 'react-router-hash-link';
import {CgMenu} from 'react-icons/cg';
import {useGlobalContext} from '../context'

const NavBar = () => {
    const {sidebar, setSidebar} = useGlobalContext()

    // disappearing navbar effect
    // const [prevScrollPos, setPrevScrollPos] = useState(0);
    // const [visible, setVisible] = useState(true);

    // const handleScroll = () => {
    //     const currentScrollPos = window.pageYOffset;

    //     setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    //     setPrevScrollPos(currentScrollPos);
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [prevScrollPos, visible, handleScroll]);

    const showSidebar = () => {
        setSidebar(!sidebar)
    }
     
    return (
        <div className='navbar'>
            {/* <div className='navbar-header'>
                <Link to='/' style={{ textDecoration: 'none',color:'white'}}>Greg's Website</Link>
            </div> */}
            <div className='navbar-body'>
                <Link to='/' style={{ textDecoration: 'none',color:'white', padding:'10px'}}>Home</Link>
                <Link to='/contact' style={{ textDecoration: 'none', color:'white', padding:'10px' }}>Contact</Link>
                <HashLink to='/#about' style={{ textDecoration: 'none', color:'white', padding:'10px' }}>About</HashLink>
                <HashLink to='/#experience' style={{ textDecoration: 'none', color:'white', padding:'10px' }}>Experience</HashLink>
                <HashLink to='/#skills' style={{ textDecoration: 'none', color:'white', padding:'10px' }}>Skills</HashLink>
                <HashLink to='/#education' style={{ textDecoration: 'none', color:'white', padding:'10px' }}>Education</HashLink>
                <HashLink to='/#projects' style={{ textDecoration: 'none', color:'white', padding:'10px' }}>Projects</HashLink>
                <HashLink to='/#aspirations' style={{ textDecoration: 'none', color:'white', padding:'10px' }}>Aspirations</HashLink>
            </div>
            <div className='menu-icon'>
                <CgMenu size={35} color='white' onClick={showSidebar} style={{cursor:'pointer'}}/>
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
