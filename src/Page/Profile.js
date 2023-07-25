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
          <div className='left'>
            <h1>Hi, I'm Bank</h1>
            <h2>Thanakit Kitkhajohnpaiboon</h2>
            <p>I'm a software developer with problem solving skills and always ready to learn things</p>
            <Card/>
          </div>
          <div className='right'>
            <div className='timeline'>
              <h2>Intern</h2>
              <div className='event'>
                <h3>Gt Technology</h3>
                <p>Report problem web
                  In main web have problem. The customer will report
                  that problem in this web, this web will report to our
                  expert to fix that problem and show status to customer
                  every process.
                  <p>June2022 - August 2022</p>
                  <p>-React</p>
                </p>
              </div>
              <h2>Works</h2>
              <div className='event'>
                {/* <h3>Event 2</h3>
                <p>Description of Event 2</p> */}
              </div>
            </div>

          </div>
        </div>
      </section>
      <br/>
      <Footer/>
    </div>
    
  )
}
