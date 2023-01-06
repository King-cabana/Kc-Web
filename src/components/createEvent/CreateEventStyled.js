import styled from "styled-components";

export const Container =styled.div`
/* position: relative; */
width: 100%;
height: 100vh;

`

export const Event = styled.div`
width:100%;
/* height:105vh; */
padding:2% 10%;
`;

export const EventFrame = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 15px;
margin-left:30px;
margin-bottom: 20px;
`;

export const EventHeader = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;
color: #484848;
`;

export const EventText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #484848;
`;

export const EventTime =styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-left: 20px;
gap: 15px;
`;

export const EventBox = styled.div`
/* overflow-y: scroll; */
/* width:100%;
height:100vh; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 15px 50px;
gap: 25px;
/* isolation: isolate; */
`;

export const EventOccurence = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-left: 30px;
gap: 25px;
`;

export const EventTitle = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
`;

export const ButtonBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 22px;
'`

export const ButtonOutline = styled.button`
/* 
:hover{} */

box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
padding: 16px 8px;
background-color:  transparent;
gap: 10px;
width: 160px;
height: 50px;
border: 1px solid #0068FF;
border-radius: 6px;
`;
export const ButtonText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;
color: #0068FF;
`;

export const EventInputBox =styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 15px 0px;
gap: 27px;
width: 1179px;
height: 256px;
`;

export const LeftInputBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 15px;
gap: 15px;
width: 576px;
height: 226px;
margin-left: 10px;
`;

export const EventInput = styled.div`
display: flex;
height: 6vh;
outline: 1px solid rgba(0, 104, 255, 0.1);
border-radius: 10px;

input::placeholder{
font-family: 'Poppins';
font-weight: 400;
font-size: 14px;
line-height: 20px;
display: flex;
align-items: center;
margin-bottom:10px;
}

input{
display: flex;
flex-direction: row;
align-items: center;
padding: 15px;
font-family: 'Poppins';
gap: 25px;
width: 546px;
border: none;
font-size: 20px;
outline:none;
}

 @media screen and (max-width: 960px){
        input{
            width: 80vw;
        }
    }
`;

export const IconLogo =styled.i`
padding: 10px;
color: black;
min-width: 50px;
text-align: center;
`;

export const RightInpuBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 15px;
gap: 15px;
width: 576px;
height: 226px;
`;

export const EventLinkBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 15px 0px;
gap: 25px;
width: 1179px;
height: 248px;
margin-left:25px;
`;

export const ButtonFull = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 16px 8px;
gap: 10px;
width: 160px;
height: 50px;
background: #0068FF;
border-radius: 6px;
border: 1px solid #0068FF;
box-sizing: border-box;

`;

export const ButtonBlue = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
margin-top:15px;
`;

export const EventLink = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 15px;
gap: 15px;
width: 1179px;
height: 143px;
`;

export const DownButtonBox = styled.div`
background-color: white;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 0px 100px;
width:100%;
height:10vh;
border: 1px solid #D2CEDC;
box-sizing: border-box;
z-index: 999999;
position: fixed;
bottom:0;
`;

export const DownBtn = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-start;
padding: 0px 20px;
gap: 25px;
width: 416px;
height: 50px;
`;

export const DownButtonOuline =styled.button`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
padding: 16px 8px;
background-color:  transparent;
gap: 10px;
width: 100px;
height: 50px;
border: 1px solid #FF2957;
border-radius: 6px;
`;

export const DownText = styled.p`
width: 44px;
height: 18px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;
color: #FF2957;
`;

export const DownButtonFull =styled.button`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px 8px;
gap: 10px;
width: 191px;
height: 50px;
background: #FF2957;
border-radius: 6px;
border: 1px solid #FF2957;
`;

export const DownTextFull = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;


`;