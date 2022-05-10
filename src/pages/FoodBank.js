import React, {useEffect}from 'react'
import volHome from '../images/home.png'
import volEvent from '../images/single event.png'
import volGrp from '../images/grp sign up.png'
import adminCal from '../images/admin calendar.png'
import FloatingButton from '../components/FloatingButton';

const FoodBank = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <div className='project-page'>
        <div className='image-collection'>
            <img className='main-img' src={volHome} alt='my-stripe' style={{height:'250px',  width:'320px'}}></img>
            <img src={volEvent} alt='my-stripe' style={{height:'250px',  width:'320px'}}></img>
            <img src={volGrp} alt='my-stripe' style={{height:'250px',  width:'320px'}}></img>
            <img src={adminCal} alt='actual' style={{height:'250px',  width:'320px'}}></img>
        </div>
        <h1 className='project-title'>FoodBank Volunteer Management System</h1>
        <div className='project-description'>
            <p>
                This project was done by my team and I for a hackathon by hacksingapore in 2022. The goal was to create a volunteer management system for FoodBank Singapore as they were facing many issues with their current system (limited fucntionality, non-responsive website).
            </p>
            <p>
                Hence, my team and I worked hard to redesign their website to create a much more pleasant user and admin experience with Bubble.io
            </p>
            <p>
                First, we created a volunteer site for volunteers to sign up for events and view important information like upcoming events and volunteer history at a glance. We found it important to make the website appear bubbly and fun so as to engage users to sign up for volunteer events. The volunteer site also allowed for users to sign up as a group of people or even as a regular volunteer.
            </p>
            <p>
                Next, we crated an admin site for FoodBank staff to create new events, view current event capacity and also approve applications for certain events.
            </p>
            <p>
                For a detailed explanation of our project, please visit the Github repository below.
            </p>
            <div className='project-links'>
                <div>
                    <b>Github Repository: </b><a href='https://github.com/ryanlohyr/Foodbank-Volunteers/blob/main/README.md'>here</a> 
                </div>
                <div>
                    <b>Demo: </b><a href='https://hacksingapore.bubbleapps.io/version-test/events_page_final'>here</a> 
                </div>
            </div>
        </div>
        <FloatingButton/>
    </div>
  )
}

export default FoodBank