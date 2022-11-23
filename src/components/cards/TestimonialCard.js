import React from 'react'
import {FaStar} from 'react-icons/fa'
import Profile from '../../images/pexels-george-ikwegbu-2379429.jpg' 
import { TCContent, TCImage, TCStars, TestimonialCardContainer } from './TestimonialCardStyled'

const TestimonialCard = () => {
  return (
    <div>
        <TestimonialCardContainer>
            <TCContent>
                <TCImage>
                    <img src={Profile} alt=''/>
                </TCImage>  
                <p style={{marginLeft:'5%'}}>HOD Cup</p>
            </TCContent>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                sunt nostrud amet.
              </p>
            <TCStars>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> 
            </TCStars>
        </TestimonialCardContainer>
    </div>
  )
}

export default TestimonialCard