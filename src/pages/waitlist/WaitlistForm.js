import React, { useState } from 'react';
import { ModalOverlay, LongButton, SignInLink , Form, InputFieldWrapper } from '../../globalStyles'
import Logo from "../../images/kingCabanaLogo.svg"
import { WaitListBody, WaitListContent, WaitListImage } from './WaitlistFormStyled'
import {HiOutlineMail} from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { apiFetch } from '../../redux/authSlice';;


const Waitlist = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [textContent, setTextContent] = useState('')

  const dispatch = useDispatch();
  const handleForgotPassword = () => {
    console.log(email)
    dispatch(apiFetch({ apiName: 'forgotPassword', body: { firstName, lastName, email, textContent }, method: 'post', url: 'forgot-password' }))
  }
  
  return (
    
    <ModalOverlay>
        <WaitListBody>
          <WaitListContent>
          <img src={Logo} alt='King Cabana Logo'/>
          <h3>Get early access</h3>
          <p>Our team is waiting to attend to you.</p>

          <Form>
          <label>First Name</label>
          <InputFieldWrapper>
          <input placeholder='Enter your first Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
          </InputFieldWrapper>
          </Form>

          <Form>
          <label>Last Name</label>
          <InputFieldWrapper>
          <input placeholder='Enter your last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
          </InputFieldWrapper>
          </Form>

          <Form>
          <label>E-mail</label>
          <InputFieldWrapper>
          <input placeholder='Enter your E-mail' value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <HiOutlineMail style={{margin:'auto', top:'auto', marginRight:'3%', color:'#C4C4C4'}}/>
          </InputFieldWrapper>

          <Form>
          <label>Leave a comment (Optional)</label>
          <textarea placeholder='What will you like us to provide you?' value={textContent} onChange={(e) => setTextContent(e.target.value)}></textarea>
          </Form>

          <LongButton type='button' onClick={handleForgotPassword}>Join Waitlist</LongButton>
          </Form>
          <SignInLink to="/logIn">Remember password? <span>Sign In</span></SignInLink>
          </WaitListContent>
          <WaitListImage/>
        </WaitListBody>
     </ModalOverlay>
  )
}

export default Waitlist