import styled from 'styled-components'
import background from '../../images/clay-banks-POzx_amnWJw-unsplash.jpg'



export const HeroSection = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-repeat: no-repeat;
    background: url(${background}) ;
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;


    @media screen and (max-width: 960px){
        background-size: cover;
    }   
`

export const BgOverlay = styled.div`
    /* z-index: 1; */
    height: 100vh;
    width: 100vw;
    background: rgba(49,38,49, 0.8);

`

export const ContentHolder = styled.div`
    width:90vw; 
    align-content:center; 
    padding:6% 8% ; 
    line-height: 1.2;
    align-items: center;

    h1{
        color:white; 
        font-size:60px; 
        padding-top:5%;
    }

    span{
        color:#FFBC15;
    }

    p{
        color:white;
        font-size:22px;
        padding-top:2%;
    }

    @media screen and (max-width: 960px){

        padding-top: 30%;
        display: block;
        width: fit-content;
        text-align: center;
        line-height: 1.3;

        
        
        
        h1{
            font-size: 30px;
        }

        p{
            font-size: 14px;
        }
    }

    /* @media screen and (orientation: landscape){
        padding-top: 7%;
    } */
`

export const BtnHolder = styled.div`
    display:flex; 
    padding-top:5%; 
    width:24vw;
    justify-content:space-between; 

    @media screen and (max-width: 960px){
        display: flex;
        width: max-content;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        justify-items: center ;
        
        
        
    }
`

export const EventButton = styled.button`
        height: 8vh;
        width: 11vw;
        border: 1.5px none;
        border-radius: 3px;
        background-color: #FF2957;
        color: white;
        cursor: pointer;
        font-weight: 600;
        

        @media screen and (max-width: 960px){
            width: 40vw;
            margin: 7% 55%;
           
        }
    
`

export const ContentSection = styled.div`
    width: 100vw;
    height: 90vh;
`

export const ContentSectionHeader = styled.h2`
    text-align:center; 
    padding-top:2%; 
    color:#484848;
`

export const ContentSectionParagraph = styled.p`
    color:#484848;
    padding-left:8%;
    font-size:20px; 
    font-weight:500; 

    @media screen and (max-width: 960px){
        font-size: small;
        margin: 3% 0;
    }
`


