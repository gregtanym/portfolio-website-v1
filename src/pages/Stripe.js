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
            <img src={stripeImg} alt='my-stripe' style={{height:'280px',  width:'400px'}}></img>
            <img src={actual} alt='actual' style={{height:'280px',  width:'400px'}}></img>
        </div>
        <h1>Stripe Landing Page</h1>
        <div className='project-description'>
            <p>
                This was a project to inmitate Stripe's home page. My version is on the left, the actual version is on the right.
            </p>
            <div>
                <b>Github Repository: </b><a href='https://github.com/gregtanym/stripe-react'>here</a> 
            </div>
            <div>
                <b>Demo:</b> Unavailable 
            </div>
        </div>
    </div>
  )
}

export default Stripe