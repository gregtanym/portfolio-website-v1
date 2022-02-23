import React, {useEffect}from 'react'
import register from '../images/HR Register Page.png'
import form from '../images/HR Form Page.png'
import login from '../images/HR Login Page.png'
import employee from '../images/Employee Details Page.png'

const Hr = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <div className='project-page'>
        <div className='image-collection'>
            <img src={employee} style={{width: '300px', border:'solid grey 1px'}}></img>
            <img src={form} style={{width: '300px', border:'solid grey 1px'}}></img>
            <img src={register} style={{width: '300px', border:'solid grey 1px'}} ></img>
            <img src={login} style={{width: '300px', border:'solid grey 1px'}} ></img>
        </div>
        <h1>Human Resources App</h1>
        <div className='project-description'>
            <p>
                This web application is my first full stack web application I built. I built this app for Reluvate Technologies which was where I interned for a while. This app uses React frontend and Django/Django REST Framework backend.
            </p>
            <p>
                This app has a form page with form validation to allow employees to fill in their personal details. On the employer side, there is a login required to be able to see the employee details table as this table contains sensitive information and it is only authorised to employers. At that stage, in employer would be able to see all the employees and is also able to edit or delete the their details. All changes made are stored in the backend database created.
            </p>
            <div>
                <b>Github Repository: </b> Unavailable
            </div>
            <div>
                <b>Demo:</b> Unavailable 
            </div>
        </div>
    </div>
  )
}

export default Hr