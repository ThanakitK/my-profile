import React from 'react'
import { Card } from './Card'
import { Header } from './Header'
import { Footer } from './Footer'

export const Profile = () => {
  return (
    <div>
      <Header/>
      <section className='home'>
        <div className='home-content'>
          <h1>Hi, I'm Bank</h1>
          <h2>Thanakit Kitkhajohnpaiboon</h2>
          <p>I'm a software developer with problem solving skills and always ready to learn things</p>
          <Card/>
        </div>
      </section>
      <br/>
      <Footer/>
    </div>
    
  )
}
