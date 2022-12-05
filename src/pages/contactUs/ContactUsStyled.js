import styled from "styled-components";


// export const Body =styled.div`
// /* flex-direction: column; */
// width: 100%;
// height: 100vh;

export const Container =styled.div`
width: 100%;
height: 100%;
border: 5px solid black;
padding:2% 30%;

@media screen and (max-width: 960px){
       display: flex;
        flex-direction: column;
        margin-top:25px;
    }
`
export const ContainerBox =styled.div`
margin-top:20px;
`;

export const ContactMobile = styled.div`

/* @media screen and (max-width:960px){
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 20px;
gap: 19px;
width: 361px;
height: 137px;
} */
`

export const ContactBody = styled.div`
width: 100%;
border: 5px solid red;
padding:1% 10%;
margin-bottom:10px;
display: flex;


@media screen and (max-width: 960px){
       display: flex;
        flex-direction: column;
        margin-top:25px;
    }

`;

export const ContactRight = styled.div`
width:60%;

/* background-color: black; */
padding: 10% 10%;

`;

export const ContactHeader = styled.h1`
font-family: 'Poppins';
font-weight: 900;
font-size: 80px;
color: #484848;
margin-bottom: 50px;
`;

export const ContactParagraph = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 28px;
/* line-height:50px; */
letter-spacing:2px;
color: #484848;
margin-bottom: 50px;
`;

export const ContactLogoBody = styled.div`
width: auto;
height: auto;
/* line-height: 20px; */

`
export const EmailBody = styled.div`
display: flex;
align-items: center;
padding: 0px;
margin-bottom: 30px;

@media screen and (max-width: 960px){
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
width: 100%;
}

`;

export const EmailIcon = styled.div`
width: 70px;
height: 70px;
border-radius: 50%;
background-color: #F6E9EC;
display: flex;
justify-content: center;
align-items: center;
margin-right: 30px;
color: #FFBC15;
`;

export const EmailText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 18px;
color: #FFBC15;
margin-right: 30px;
/* width: 100%; */
`;

export const EmailIconArrow = styled.div`
color: #FFBC15;
height: 22px;
`;
export const PhoneLogo = styled.div`
width: 70px;
height: 70px;
border-radius: 50%;
background-color: #F6E9EC;
display: flex;
justify-content: center;
align-items: center;
margin-right: 30px;
color: #FFBC15;
`;
export const PhoneBody = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
padding: 0px;
margin-bottom: 30px;
`

export const PhoneText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 18px;
color: #FFBC15;
margin-right: 30px;
/* width:100%; */
`

export const PhoneIconArrow = styled.div`
color: #FFBC15;
height: 22px;
`;

export const ContactLeft = styled.div`
width: 100%;
/* img{
  
} */
`;

export const ContactGif = styled.div`
width: 100%;
/* height: 100%; */
/* background-color: red; */
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
width: 100%;

@media screen and (max-width:1000px){
width:100%;
margin:auto;
}
`

export const ContactInfo = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 50px;
line-height: 54px;
color: #484848;
`;

export const ContactText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 350;
font-size: 25px;
line-height: 21px;
display: flex;
align-items: center;
letter-spacing: -0.001em;
color: #000000;

`
export const ContactInfoBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px;
gap: 25px;
width: 100%;
height: 126px;
`; 

export const InputInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 24px;
width: 100%;
height: 1042px;

input::placeholder{
    font-size: 20px;
}
label{
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 21px;
display: flex;
align-items: center;
letter-spacing: -0.003em;
text-transform: capitalize;
color: #000000;
margin-bottom:10px;
};

button{
    margin-top: 5%;
    height: 7vh;
    background-color: #FF2957;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width:100%;
}
@media screen and (max-width: 1000px) {
width: 100%;
}

`;
export const AnimationContainer = styled.div`
width: 40%;
padding: 1% 10%;
@media screen and (max-width: 960px){
       display: flex;
        flex-direction: column;
        margin-top:25px;
    }

`;

export const InputBoxLabel =styled.div`
margin-bottom: 20px;
width: 100%;
`;

export const InputBox = styled.div`
input{
display: flex;
flex-direction: row;
align-items: center;
padding: 15px;
gap: 10px;
width: 100%;
height: 80px;
border: 1px solid rgba(72, 72, 72, 0.1);
border-radius: 10px;
}

textarea{
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 15px;
gap: 10px;
width: 100%;
height: 190px;
background: #FFFFFF;
border: 1px solid rgba(72, 72, 72, 0.1);
border-radius: 10px;
}
textarea::placeholder{
    font-size:20px;
}
`;

export const Box = styled.div`
display: flex;
width: 100%;
height: 100%;
background: #FEF5F7;
justify-content: center;
align-items: center;
gap: 125px;
padding:2% 10%;

img{
width: 500px;
height: 500px;
border-radius: 20px;
margin-left: 30px;

@media screen and (max-width: 960px){
    width: 300px;
    height:300px;
    
}
}

@media screen and (max-width: 960px){
       display: flex;
        flex-direction: column;
        height:max-content;
        justify-content: center;
        align-items: center;
        justify-items: center;
        align-content: center;
        text-align: center;
        margin-top:25px;
    }

`;
export const BoxBody = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 56px;
width: 80%;
height: 80%;

@media screen and (max-width: 960px){
       display: flex;
        flex-direction: column;
        height:max-content;
        justify-content: center;
        align-items: center;
        justify-items: center;
        align-content: center;
        text-align: center;
    }
`;

export const BoxHeader = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 45px;
line-height: 54px;
color: #484848;
`;

export const BoxParagraph = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 36px;
color: #484848;
`;

export const BoxLogo = styled.div`
/* position: absolute; */

`;
export const IconHolder = styled.div`
    display:flex;
    width:12%;
    justify-content:space-between;
    margin-top:5%;
    @media screen and (max-width: 480px){
        width: 42vw;
    }
    @media screen and(min-width: 481px) and (max-width: 960px){
        width: 42vw;
        /* margin-bottom: 10px; */
    }
`;

export const SocialIcon = styled.a`
    color:black;
    text-decoration:none;
    margin-right:10px;
    
    div{
        width:38px;
        height:38px; 
        border-radius:50%;
        border: 1.125px solid #484848;
        display:flex;
        justify-content:center;
        align-content:center;
        background-color: rgba(255,255,255, 0.3);
    }

    img{
        width:35px;
        height:35px;
        margin:auto;
    }
`;

export const Location = styled.div`

width: 100%;
height: 100%;

`;
export const LocationCenter = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 25px;
padding: 120px;
/* left: 563px;
top: 2681px;  */
`

export const LocationHeader = styled.h1`
font-family: 'Poppins';
font-weight: 600;
font-size: 48px;
line-height: 72px;
top: 2681px; 
`;

export const LocationText = styled.p`
font-family: 'Poppins';
font-weight: 400;
font-size: 24px;
line-height: 30px;
`


