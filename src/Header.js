import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='main'>
        <Link to='/Form'>Form</Link>
        <Link to='/AllQuestion'>AllQuestion</Link>

    </div>
  )
}

export default Header