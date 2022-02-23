import React from 'react'
import {MdArrowBack} from 'react-icons/md'
import { Link } from 'react-router-dom'

const FloatingButton = () => {
  return (
    <Link to='/'>
        <button className='floating-button'>
            <MdArrowBack size={40} color={'white'}/>
        </button>
    </Link>
  )
}

export default FloatingButton