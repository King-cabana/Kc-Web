import styled from "styled-components";

export const TableBox = styled.div`
width: 70%;
height: 40vh;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
gap: 10px;
margin-left: 20px;
`;

export const Table = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
padding: 0px;
gap: 1px;
background: #FFFFFF;
border: 1px solid #FFFFFF;
border-radius: 8px;
`;

export const TableContent = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: flex-end;
padding: 0px;
width: 888px;
height: 72px;
background: #FFFFFF;
border: 1px solid rgba(0, 104, 255, 0.1);
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
`;

export const TableRow = styled.div`
width:100%;
display: flex;
justify-content: space-between;
`;


export const SmallFont = styled.p`
font-size:11px;
`;

export const SmallButton = styled.button`
  width: 58px;
  height: 34px;
  border-radius: 8px;
  background-color:  #ff2957;
  color: white;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  margin-right: 10px;
  

  &:hover{
    background-color: rgba(255, 41, 87, 0.8);
    color: white;
  }

  &:disabled{
    background-color: rgba(255, 41, 87, 0.3);
    color: rgba(255, 255, 255, 0.3);
  }
`;
export const TableHeader = styled.h6`
font-family: 'Poppins';
font-weight: 500;
font-size: 20px;
line-height: 30px;
margin-top:15px;
margin-left: 1rem;

`

export const TableBorder = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
width: 888px;
height: 69px;
background: #FFFFFF;
border: 1px solid rgba(0, 104, 255, 0.1);
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

`;

export const MenuList = styled.div`
width:20%;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 15px;
gap: 15px;
border: 1px solid rgba(0, 104, 255, 0.1);
border-radius: 8px;
`;


export const Item = styled.p`
width:100%;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: black;
margin-right: 3rem;
margin-left: 1rem;
`
export const ItemL = styled.p`
width: 100%;
/* text-align: center; */
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: black;
margin-right: 2rem;
margin-left: 1.5rem;
`
export const SmallItem = styled.p`
font-size: 12px;
`
export const ItemInside = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
margin-right: 4.5rem;
margin-left: 1rem;
justify-content: center;
margin-bottom: 5px;
`;

export const ItemS = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
margin-right:13.9rem;
`;

export const ItemBlue = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
margin-right: 6rem;
color: blue;
`;

export const ButtonBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 25px;
margin-bottom:15px;
/* width: 107px;
height: 34px; */
`;
