import styled from "styled-components";


export const InputSeg = styled.section`
width: 100%;
height: 100%;
margin-bottom:1rem;
`;

export const SaveBox = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
width: 100%;
height: 10vh;
background-color:#ffff;
box-sizing: border-box;
z-index: 99;
position: fixed;
bottom: 0;

@media screen and (max-width: 768px){
    padding: 0;
    height: 8vh;
}
`;

export const ButtonSave= styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-start;
padding: 0px 20px;
gap: 25px;
width: 416px;
height: 50px;
`