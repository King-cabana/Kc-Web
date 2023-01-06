import styled from "styled-components";


//medium buttons (for the regular webpage)
export const PrimaryButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  background-color:  #ff2957;
  color: white;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  font-weight:600;
  

  &:hover{
    background-color: rgba(255, 41, 87, 0.8);
    color: white;
  }

  &:disabled{
    background-color: rgba(255, 41, 87, 0.3);
    color: rgba(255, 255, 255, 0.3);
  }
`


export const AlternativeButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  background-color:  transparent;
  color: ${props => props.color ? props.color : 'white'};
  border: 2px solid #ff2957;
  cursor: pointer;
  font-weight:${props => props.fontWeight};

  &:hover{
    color: #ff2957;
  }

  &:disabled{
    background-color: white;
    color: white;
    border: 1.5px solid rgba(255, 41, 87, 0.6);
  }
`


export const TextButton = styled.button`
  color: #ff2957;
  font-size: 16px;
  font-weight: 600;
  border: transparent;
  outline: transparent;
  background-color: transparent;
  cursor: pointer;
  

  &:hover{
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  }

  &:disabled{
    color: rgba(255, 41, 87, 0.6);
  }
`;