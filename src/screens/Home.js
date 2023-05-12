import React from 'react'
import { Link } from 'react-router-dom'

import SCREENS from '../route/router'

import "./home.scss"

function Home() {
  return (
    <div className='home'>
        <div className='block left-section'>
            <Link to={SCREENS.works}><p>WORKS</p></Link>
        </div>
        <div className='block right-section'>
            <Link to={SCREENS.about}><p>ABOUT</p></Link>
        </div>
    </div>
  )
}

export default Home