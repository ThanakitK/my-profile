import React from 'react'
import icon from '../Img/icon.jpg'

export const Profile = () => {
  return (
    <div>
      <div className='header'>
        <nav>
          <img className='icon' src={icon} alt=''/>
          <ul>
            <li><a href='https://www.linkedin.com/in/thankit-kitkhajohnpaiboon-9bb682278/'>Linkedln</a></li>
            <li className="dropdown">
              <a className='dropbtn' href='/profile'>Github</a>
              <div className="dropdown-content">
                <a href='https://github.com/thanakitt'>University</a>
                <a href='https://github.com/thanakitK'>Work</a>
                
              </div>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className='header-text'>
        <h1>Hi, I'm Bank<br/>Thanakit Kitkhajohnpaiboon</h1>
      </div>
    </div>
    
  )
}
