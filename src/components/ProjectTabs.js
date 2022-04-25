import React from 'react';
import avatar from '../images/Edit Avatar Page.png'
import cocktail from '../images/Search Function.png'
import hr from '../images/HR Register Page.png'
import stripe from '../images/Landing Page.png'
import foodbank from '../images/home.png'
import { Link } from 'react-router-dom';

const ProjectTabs = () => {
  return (
    <div className='project-container'>
      <Link to='/project/avatar' style={{textDecoration:'none'}}>
        <div className='project-tab'>
          {/* <MDBView hover zoom><img src={avatar}/></MDBView> */}
          <img src={avatar} alt='avatar'/>
          <div className='project-info'>
            avatartar_sauce
          </div>
        </div>
      </Link>
      <Link to='/project/cocktail' style={{textDecoration:'none'}}>
        <div className='project-tab'>
          <img src={cocktail} alt='cocktail'/>
          <div className='project-info'>
            CocktailsDB
          </div>
        </div>
      </Link>
      <Link to='/project/hr' style={{textDecoration:'none'}}>
        <div className='project-tab'>
          <img src={hr} alt='hr'/>
          <div className='project-info'>
            Human Resources App
          </div>
        </div>
      </Link>
      <Link to='/project/foodbank' style={{textDecoration:'none'}}>
        <div className='project-tab'>
          <img src={foodbank} alt='foodbank'/>
          <div className='project-info'>
            FoodBank Volunteer Website
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectTabs