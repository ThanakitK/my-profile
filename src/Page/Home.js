import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../Img/profile.jpg'

export const Home = () => {
  
  return (
    <div className='container'>
      <div className='slide' style={{display: "flex"}}>
        <span className='first'>I am</span>
          <ul className='option'>
            <li><span>New Graduate</span></li>
            <li><span>Developer</span></li>
        </ul>
      </div>
      <img className='logo' src={profile} alt=''/>
      
      
      <br/>
      <Link to='/profile'>
      <button className='sbtn'>Let's start</button>
      </Link>
    </div>
  );
};
