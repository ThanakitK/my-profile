import React from 'react'
import icon from '../Img/myPic1.jpg'

export const Header = () => {
  return (
    <div>
        <div className='header'>
        <nav>
          <img className='icon' src={icon} alt=''/>
          <ul>
            <a href='/'>Home</a>
            <li><a href='https://www.linkedin.com/in/thanakit-kitkhajohnpaiboon-9bb682278/' target='LinkedIn'>Linkedln</a></li>
            <li className="dropdown">
              <a className='dropbtn' href='/profile'>Github</a>
              <div className="dropdown-content">
                <a href='https://github.com/thanakitt' target='github'>University</a>
                <a href='https://github.com/thanakitK' target='github'>Work</a>
              </div>
            </li>
            <a href='mailto: thanakit.kitkh@gmail.com'>Gmail</a>
          </ul>
        </nav>
      </div>
    </div>
  )
}
