import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { HashLink } from 'react-router-hash-link';
import {CgClose} from 'react-icons/cg';
import {FaSuitcase, FaRocket} from 'react-icons/fa';
import {MdSchool, MdLaptopMac} from 'react-icons/md';
import {AiFillHome, AiFillPhone, AiFillInfoCircle, AiFillTrophy} from 'react-icons/ai';
import {useGlobalContext} from '../context'


const Sidebar = () => {
    const {sidebar, setSidebar} = useGlobalContext()

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <div className={sidebar ? 'sidebar active' : 'sidebar'}>
                <ul className='sidebar-items'>
                    <li className='sidebar-toggle' onClick={showSidebar}>
                        <CgClose color='white' size={30}/>
                    </li>
                    <Link to='/' style={{ textDecoration: 'none',color:'white'}}>
                    <li className='sidebar-links'>
                        <AiFillHome/>
                        <span className='sidebar-link-text'>Home</span>
                    </li>
                    </Link>
                    <Link to='/contact' style={{ textDecoration: 'none', color:'white'}}>
                    <li className='sidebar-links'>
                        <AiFillPhone/>
                        <span className='sidebar-link-text'>Contact</span>
                    </li>
                    </Link>
                    <HashLink to='/#about' style={{ textDecoration: 'none', color:'white'}}>
                    <li className='sidebar-links'>
                        <AiFillInfoCircle/>
                        <span className='sidebar-link-text'>About</span>
                    </li>
                    </HashLink>
                    <HashLink to='/#experience' style={{ textDecoration: 'none', color:'white'}}>
                    <li className='sidebar-links'>
                        <FaSuitcase/>
                        <span className='sidebar-link-text'>Experience</span>
                    </li>
                    </HashLink>
                    <HashLink to='/#skills' style={{ textDecoration: 'none', color:'white'}}>
                    <li className='sidebar-links'>
                        <AiFillTrophy/>
                        <span className='sidebar-link-text'>Skills</span>
                    </li>
                    </HashLink>
                    <HashLink to='/#education' style={{ textDecoration: 'none', color:'white'}}>
                    <li className='sidebar-links'>
                        <MdSchool/>
                        <span className='sidebar-link-text'>Education</span>
                    </li>
                    </HashLink>
                    <HashLink to='/#projects' style={{ textDecoration: 'none', color:'white'}}>
                    <li className='sidebar-links'>
                        <MdLaptopMac/>
                        <span className='sidebar-link-text'>Projects</span>
                    </li>
                    </HashLink>
                    <HashLink to='/#aspirations' style={{ textDecoration: 'none', color:'white'}}>
                    <li className='sidebar-links'>
                        <FaRocket/>
                        <span className='sidebar-link-text'>Aspirations</span>
                    </li>
                    </HashLink>
                </ul>
            </div>
    )
}

export default Sidebar