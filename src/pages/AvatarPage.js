import React, {useEffect}from 'react'
import edit from '../images/Edit Avatar Page.png'
import gallery from '../images/Avatar Gallery Page.png'
import login from '../images/Login Page.png'

const AvatarPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <div className='project-page'>
        <div className='image-collection'>
            <img src={gallery}></img>
            <img src={edit}></img>
            <img src={login}></img>
        </div>
        <h1>avatartar_sauce</h1>
        <div className='project-description'>
            <p>
                avatartar_sauce is a web application I created for my CS50 final project. It was my first project I ever created. I was inspired by club penguin to create this app.
            </p>
            <p>
                This app allows the user to register for an account and log in. Thereafter, the user can create their own personal 2D avatar using a library called py-avataaars. The app saves the user's avatar details as well as login information in a sqlite database. Upon logging in, user data is retrieved from the datbase to allow for your avatar image to be shown and your avatar details to be preselected. User can also give their avatar a name and a catchphrase that shows when you hover over the avatar image.
            </p>
            <p>
                There is also a button that directs the user to a separate page that allows him/her to see the works of other users and interact with their avatars.
            </p>
            <div>
                <b>Github Repository: </b><a href='https://github.com/gregtanym/CS50/tree/main/CS50%20final%20project'>here</a>
            </div>
            <div>
                <b>Demo:</b> Unavailable 
            </div>
        </div>
    </div>
  )
}

export default AvatarPage