import React, {useEffect}from 'react'
import cocktail from '../images/Single Cocktail Page.png'
import search from '../images/Search Function.png'
import FloatingButton from '../components/FloatingButton';

const Cocktail = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <div className='project-page'>
        <div className='image-collection'>
            <img className='main-img' src={search} alt='search' style={{height:'280px',  width:'400px'}}></img>
            <img src={cocktail} alt='cocktail' style={{height:'280px',  width:'400px'}}></img>
        </div>
        <h1 className='project-title'>CocktailsDB</h1>
        <div className='project-description'>
            <p>
                CocktailsDB is a web application that uses an external API from thecocktaildb.com. This app was my first project with React.js. i wanted to learn how to make asynchronous fetch calls to an API and well as get used to React hooks such as useState and useEffect.
            </p>
            <p>
                This app allows the user to look up any cocktail and retrieve useful information about it. Since this website is made with React and uses ReactDOM, it does not reload upon redirecting user to another page, making page transitions much faster and overall improving user experience.
            </p>
            <p>
                The search function works on every keystroke and will filter out the cocktails as you type. if search bar is empty, all cocktails will be displayed
            </p>
            <div className='project-links'>
                <div>
                    <b>Github Repository: </b><a href='https://github.com/gregtanym/cocktails-react'>here</a> 
                </div>
                <div>
                    <b>Demo:</b> Unavailable 
                </div>
                <div>
                    <b>Cocktail API:</b> <a href='https://www.thecocktaildb.com/api.php'>https://www.thecocktaildb.com/api.php</a>
                </div>
            </div>
        </div>
        <FloatingButton/>
    </div>
  )
}

export default Cocktail