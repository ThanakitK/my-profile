import React from 'react'
import kasetsart from '../Img/kasetsart.png'
import { Link } from 'react-router-dom';

export const Card = () => {
  return (
    <div>
        <Link to='https://www.ku.ac.th/th'>
        <div class="card noselect">
            <div class="canvas">
                <div class="tracker tr-1"></div>
                <div class="tracker tr-2"></div>
                <div class="tracker tr-3"></div>
                <div class="tracker tr-4"></div>
                <div class="tracker tr-5"></div>
                <div class="tracker tr-6"></div>
                <div class="tracker tr-7"></div>
                <div class="tracker tr-8"></div>
                <div class="tracker tr-9"></div>
                <div class="tracker tr-10"></div>
                <div class="tracker tr-11"></div>
                <div class="tracker tr-12"></div>
                <div class="tracker tr-13"></div>
                <div class="tracker tr-14"></div>
                <div class="tracker tr-15"></div>
                <div class="tracker tr-16"></div>
                <div class="tracker tr-17"></div>
                <div class="tracker tr-18"></div>
                <div class="tracker tr-19"></div>
                <div class="tracker tr-20"></div>
                <div class="tracker tr-21"></div>
                <div class="tracker tr-22"></div>
                <div class="tracker tr-23"></div>
                <div class="tracker tr-24"></div>
                <div class="tracker tr-25"></div>
                <div id="card">
                <p id="prompt">
                    <img className='kaset' src={kasetsart} alt=''></img>
                    Kasetsart University
                </p>

                <div class="title">
                    <div>
                        Enrolled since<br/> 
                        July 2019
                    </div>
                    <div>
                        —BS Computer Science
                    </div>
                    <div>
                        —GPA 2.78
                    </div>
                </div>
                    <div class="subtitle">
                        University
                    </div>
                </div>
            </div>
        </div>
        </Link>
        
    </div>
  )
}
