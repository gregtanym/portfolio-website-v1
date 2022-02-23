import React, {useRef, useEffect} from 'react';
import {FaArrowDown} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import { useGlobalContext } from '../context';
// import 'bootstrap/dist/css/bootstrap.css';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { getElementError } from '@testing-library/react';
import { Flipper, Flipped } from 'react-flip-toolkit'
import Lottie from 'lottie-web';
import BarChart from '../components/BarChart';
import gears from '../images/gears.png';
import working from '../images/working.png';
import graduated from '../images/graduated.png';
import idea from '../images/idea.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ProjectTabs from '../components/ProjectTabs';



const Home = () => {
    const {ref: myRef, inView : myElementIsVisible} = useInView()
    const container = useRef()

    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../svg/working-online.json')
        })
    }, [])

    useEffect(() => {
        Aos.init({ duration: 750})
    }, [])

    const FloatingButton = () => {
        return (
            <Flipped flipId="morph-button" spring='stiff'>
                <button className='floating-button'>
                    <FiMail size={40} color={'white'}/>
                </button>
            </Flipped>
        )
    }

    const ContactButton = () => {
        return (
            <Flipped flipId="morph-button" spring='stiff'>
                <button type="button" className='contact-button'>Contact Me</button>
            </Flipped>
        )
    }

    return (
        <div>
            <div className='main-container'>
                <div className='header-container'>
                    <div className='header-text'>
                        <h1><i>Welcome to my website!</i></h1>
                        <h4 ref={myRef}>Created and designed by Greg Tan</h4>
                        <div>
                            <div className='contact-button-adjustments'>
                                <Flipper flipKey={myElementIsVisible}>
                                    <Link to='/contact'>
                                        {myElementIsVisible ? (<ContactButton/>):(<FloatingButton/>)}
                                    </Link>
                                </Flipper>
                                {/* <button type='button' onClick={changeButton}>Change Button</button> */}
                            </div>
                        </div>
                    </div>
                    {/* <img className='header-img' src={vectorIllustration} alt='vector illustration' /> */}
                    <div className='header-img'>
                        <div ref={container}/>
                        <Link className='download' to='/GregResume.pdf' target='__blank' download>Download My CV!</Link>
                    </div>
                    
                </div>
                <div className="arrow bounce">
                    <FaArrowDown size={40}/>
                </div>
                <div className='body-container'>
                    <div className='card-container'>
                        <div className='card-styling' data-aos="fade-down" id='about'>
                            <div className='card-text'>
                                <h1 className="card-title"><i>About</i></h1>
                                <p>Hello! This is my portfolio website, made with HTML, CSS and Javascript(React). I would really appreciate if you could leave me some feedback on your experience using the website, just click the 'Contact Me' button to take you to a separate page where you can send me an email. If you want to download my CV, click the 'Download My CV!' button right below the animation above. Hope you enjoy the website!</p>
                            </div>
                            <div className='card-png'>
                                <img src={gears} alt='gears-shifting' width='200' height='200' style={{opacity: '0.8'}}/>
                            </div>
                        </div>
                        <div className='card-styling' data-aos="fade-down" id='experience'>
                            <div className='card-text'>
                                <h1 className="card-title"><i>Experience</i></h1>
                                <br/>
                                <p>
                                    <ul>
                                        <li>
                                            <h6>Software Engineer/Artificial Intelligence Intern at Reluvate Technologies</h6>
                                            <p>Jan 2022 - Current</p>
                                        </li>
                                        <li>
                                            <h6>Ops Specialist in HQ 7SIB S3 Branch (National Service)</h6>
                                            <p>Jan 2020 - Nov 2021</p>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div className='card-png'>
                                <img src={working} alt='work-exp' width='200' height='200' style={{opacity: '0.8'}}/>
                            </div>
                        </div>
                        <div className='card-styling' data-aos="fade-down" id='skills'>
                            <div className='skills-card'>
                                <h1 className="card-title"><i>Skills</i></h1>
                                <BarChart/>
                            </div>
                        </div>
                        <div className='project-card-styling' data-aos="fade-down" id='projects'>
                            <div className='project-card'>
                                <h2 className="project-card-title"><i>Projects</i></h2>
                                <ProjectTabs/>
                                <div className='closing-tag'>
                                    More to come......
                                </div>
                            </div>
                        </div>
                        <div className='card-styling' data-aos="fade-down" id='education'>
                        <div className='card-text'>
                                <h1 className="card-title"><i>Education</i></h1>
                                <br/>
                                <p>
                                    <ul>
                                        <li>
                                            <h6>CS50: Introduction to Computer Science, Harvard University</h6>
                                            <p>Nov 2020 - Mar 2021</p>
                                        </li>
                                        <li>
                                            <h6>St Andrew's Junior College (A-Level, 86.25rp)</h6>
                                            <p>Feb 2018 - Nov 2019</p>
                                        </li>
                                        <li>
                                            <h6>Temasek Secondary School (O-Level, 9pts)</h6>
                                            <p>Jan 2014 - Oct 2017</p>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div className='card-png'>
                                <img src={graduated} alt='education' width='200' height='200' style={{opacity: '0.8'}}/>
                            </div>
                        </div>
                        <div className='card-styling' data-aos="fade-down" id='aspirations'>
                            <div className='card-text'>
                                <h1 className="card-title"><i>Aspirations</i></h1>
                                <p>I love to learn and discover new things. Artificial Intelligence is a relatively new frontier with so much potential to make big changes in the world and so much room to explore. Hence, I am deeply interested in it and one day aspire to specialise in AI in Healthcare so that we may one day use AI to solve the medical mysteries that we never could.</p>
                            </div>
                            <div className='card-png'>
                                <img src={idea} alt='aspirations' width='200' height='200' style={{opacity: '0.8'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        )
}


export default Home
