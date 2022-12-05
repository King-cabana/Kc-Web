import styled from "styled-components";

export const FooterBody = styled.div`
    width: 100%;
    height: 65vh;
    background-color: #45346E;
    padding: 6% 9%;

    @media screen and (max-width: 480px){
       display: flex;
        flex-direction: column;
        width:fit-content;
        height:max-content;
        justify-content: center;
        align-items: center;
        justify-items: center;
        align-content: center;
        text-align: center;
    }

    @media screen and (min-width: 481px)and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width:fit-content;
        height:fit-content;
        justify-content: center;
        align-items: center;
        justify-items: center;
        align-content: center;
        text-align: center;
    }

`

export const FooterContent = styled.div`
    display:flex;
    justify-content:space-between;
    width:82vw;
    height:35vh;

    
    @media screen and (min-width: 320px)and (max-width: 480px){
        display: flex;
        flex-direction: column;
        width:fit-content;
        height:max-content;
        justify-content: center;
        align-items: center;
        justify-items: center;
        align-content: center;
        text-align: center;
        position: relative;
    }

    @media screen and (min-width: 481px)and (max-width: 960px){
        flex-direction: column;
        width:fit-content;
        height:fit-content;
        justify-content: center;
        align-items: center;
        justify-items: center;
        align-content: center;
        text-align: center;
        position: relative;

    }
`

export const FooterInner = styled.div`
    color:white;
    width:30vw;
    height:30vh;
    line-height: 2em;

    img{
        height: 40px;
        width: fit-content;
    }

    p,a{
        font-size: 14px;
        color:white; 
        text-decoration:none;
    }


    @media screen and (max-width: 480px){
        width: inherit;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
        display: flex;
        flex-direction: column;
    }

    @media screen and (min-width: 481px) and (max-width: 960px){
       width: inherit;
       height: fit-content;
    }


`

export const IconHolder = styled.div`
    display:flex;
    width:12vw;
    justify-content:space-between;
    margin-top:5%;
   

    @media screen and (max-width: 480px){
        width: 42vw;
    }

    @media screen and(min-width: 481px) and (max-width: 960px){
        width: 42vw;

    }
    
    
`
export const SocialIcon = styled.a`
    color:white;
    text-decoration:none;
    
    div{
        width:28px;
        height:28px; 
        border-radius:50%;
        border:1px solid white;
        display:flex;
        justify-content:center;
        align-content:center;
        /* background-color: rgba(255,255,255, 0.3); */
    }

    img{
        /* filter:invert(100%) sepia(100%) saturate(0%) hue-rotate(95deg) brightness(103%) contrast(105%); */
        width:20px;
        height:15px;
        margin:auto;
    }
`

export const FooterLinksHolder = styled.div`
    color:white;
    width:20vw;
    height:20vh;

    p{
        font-size:20px;
        font-weight:500;
    }
    ul{
        list-style:none;
        line-height:2em;
        font-size:14px;
    }

    @media screen and (max-width: 480px){
        width: inherit;
        margin-top: 5%;
    }

    @media screen and (max-width: 481px) and (max-width: 960px){
        width: inherit;
        margin-top: 5%;
        height: fit-content;
    }
`

export const EventButtonHolder = styled.div`
    width:15vw;
    height:20vh;
    padding-top:3%;
    line-height:4em;

    @media screen and (max-width: 960px){
       width: fit-content;
       margin-right: 10%;
       /* margin-top: 50%; */
       
    
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
        display: inline-block;
        margin-bottom:15px;
      

        img{
            vertical-align:middle;
            filter:invert(100%) sepia(100%) saturate(0%) hue-rotate(95deg) brightness(103%) contrast(105%);
            width:20px;
            height:20px;
            margin:auto;
        }
    
        @media screen and (max-width: 960px){
            padding: 1em 2.1em 1.1em;
            object-fit: contain;
            display: flex;
            margin: 6%;
            height: 8vh;
            line-height: 5vh;
            width: 40vw;
        }
`

export const FooterLine = styled.hr`
        width:82vw;
        border:1px solid white;
        background:white;
        margin-right:auto;        

`

export const BottomLogo = styled.div`
        color:white;
        align-items:center;
        margin-top:1%;
        display:flex;
        /* margin-left:5%; */
        width:12vw;
        height:10vh;
        justify-content:space-between;

        @media screen and (max-width: 960px){
            width:40vw;  
            margin-bottom:50px;
        }
`