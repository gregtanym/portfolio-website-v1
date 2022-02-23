import React, {useEffect}from 'react'
import stripeImg from '../images/Landing Page.png'
import actual from '../images/actual stripe.png'

const Stripe = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <div className='project-page'>
        <div className='image-collection'>
            <img src={stripeImg} style={{height:'280px',  width:'400px'}}></img>
            <img src={actual} style={{height:'280px',  width:'400px'}}></img>
        </div>
        <h1>Stripe Landing Page</h1>
        <div className='project-description'>
            <p>
                This was a project to inmitate Stripe's home page. On the left is my version, on the right is the actual version.
            </p>
            <div>
                <b>Github Repository:</b> 
            </div>
            <div>
                <b>Demo:</b> Unavailable 
            </div>
        </div>
    </div>
  )
}

export default Stripe