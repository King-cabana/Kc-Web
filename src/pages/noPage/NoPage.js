import React from 'react'
// import { EventButton, HeroSection } from '../landingPage/HomeStyled'
import Lottie from "lottie-react";
import animationData from '../../lotties/lf30_editor_pnb1j4lm.json';
import { AnimationContainer } from '../../globalStyles';
import { LogoLink } from '../../components/navbar/Navbar.styled';
import { HomePageButton, NPInner } from './NoPageStyled';





const NoPage = () => {
  return (
    <>
<<<<<<< HEAD
    <div style={{width:'100vw', height:'100vh', display:'flex', flexDirection:'column',
=======
    <div style={{width:'100%', height:'100vh', display:'flex', flexDirection:'column',
>>>>>>> 7c163be40e987619518f65372e1d5b47c936dee2
                  justifyContent:'center', alignItems:'center', textAlign:'center'}}>
       <AnimationContainer style={{width:'300px', height:'100px'}}>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        style={{zIndex:'-9999'}}
      />
    </AnimationContainer> 
    <NPInner>          
      <p style={{margin:'2%'}}>The page you are looking for might have been removed,
       <br/>
       had its name changed, or is temporarily unavailable.
      </p>
      <LogoLink to="/">
        <HomePageButton>HomePage</HomePageButton>
      </LogoLink>
      </NPInner>   
      </div>
    </>
  )
}

export default NoPage