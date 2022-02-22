import React, {useRef, useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import {FiMail} from 'react-icons/fi';
import {FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';
import {MdArrowBack} from 'react-icons/md'
import { Flipper, Flipped } from 'react-flip-toolkit'
import TextareaAutosize from 'react-textarea-autosize';
import Lottie from 'lottie-web';
import { Link } from 'react-router-dom';

const Contact = () => {

    const form = useRef();
    const container = useRef()
    const [submitForm, setSubmitForm] = useState(false)

    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: require('../svg/white-checkmark.json')
        })
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_gve5l3m', 'template_0sl6ytd', form.current, 'user_ETMKcsmdtWoGVA82mqBjg')
          .then((result) => {
                setSubmitForm(true)
                console.log(result.text);
          }, (error) => {
              console.log(error.text);
              alert(error.text)
          });
        form.current.reset()
      };

    const SubmitButton = () => {
        console.log('submit button component')
        return(
            <Flipped flipId='submitted' spring='stiff'>
                <input className='contact-submit' type="submit" value="Send" />
            </Flipped> 
        )
    }

    const SuccessIcon = () =>{
        console.log('success icon component')
        return(
            <Flipped flipId='submitted' spring='stiff'>
                <div className='success-icon'>
                    <div ref={container}/>
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    </svg>
                    {/* <FiCheck size={30} onClick={toggleSubmit}/> */}
                </div>
            </Flipped> 
        )
    }

  return (
    <div className='form-container'>
        <div className='social-media-list'>
            
            

            <div className='social-tags'>
                <a href='https://www.instagram.com/'>
                    <div className='social-icon'>
                        <FaInstagram size={30}/>
                    </div>
                </a>
                <div className='social-text'>
                    @gregtanym
                </div>
            </div>
            
            <div className='social-tags'>
                <a href='https://github.com/gregtanym?tab=repositories'>
                    <div className='social-icon'>
                        <FaGithub size={30}/>   
                    </div>
                </a>
                <div className='social-text'>
                    @gregtanym
                </div>
            </div>

            <div className='social-tags'>
                <div className='social-icon'>
                    <FiMail size={30}/> 
                </div>
                <div className='social-text'>
                    gregtan022@gmail.com
                </div>
            </div>

            <div className='social-tags'>
                <a href='https://www.linkedin.com/in/gregtanym/'>
                    <div className='social-icon'>
                        <FaLinkedin size={30}/> 
                    </div>
                </a>
                <div className='social-text'>
                    /gregtanym/
                </div>
            </div>
            
        </div>

        <form className='form' ref={form} onSubmit={sendEmail}>
            <div className='form-header'>
                <h2>Send me an email!</h2>
            </div>
            <input className='input-text' type="text" name="name" autoComplete='off' placeholder='Your Name' required/>
            <input className='input-text' type="email" name="email" autoComplete='off' placeholder='Your Email' required/>
            {/* <textarea className='input-text area' name="message" autoComplete='off' placeholder='Message' rows={6}/> */}
            <TextareaAutosize name='message' placeholder='Message' maxRows={5} style={{outline: '0', borderWidth:'0 0 3px', borderColor:'#00a0ed', marginTop:'40px', padding:'5px'}} required/>
            <div className='component-switch'>
                <Flipper flipKey={submitForm}>
                    {submitForm ? <SuccessIcon />: <SubmitButton />}
                </Flipper>
            </div>
        </form>

        <Link to='/'>
            <button className='floating-button'>
                <MdArrowBack size={40} color={'white'}/>
            </button>
        </Link>
    </div>
  )
}

export default Contact


{/* <div className='form-container'>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css	"/>
<form className='form' ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="name" />
    <label>Email</label>
    <input type="email" name="email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
</form>
</div> */}

// {!isPending ? <input type='submit' className='btn btn-dark w-100'/> : <input type='submit' disabled='disabled' className='btn btn-dark w-100' value='Loading...'/>
{/* <form className='form' ref={form} onSubmit={sendEmail}> */}
