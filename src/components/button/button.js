import styled from "styled-components";


//medium buttons (for the regular webpage)
export const PrimaryButton = styled.button`
  width: 143px;
  height: 56px;
  border-radius: 8px;
  background-color:  #ff2957;
  color: white;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  font-weight:${props => props.fontWeight};
  

  &:hover{
    background-color: white;
    color: #ff2957;
    border: 1.5px solid #ff2957;
  }

  &:disabled{
    background-color: rgba(255, 41, 87, 0.6);
    color: white;
  }
`


export const AlternativeButton = styled.button`
  width: 143px;
  height: 56px;
  border-radius: 8px;
  background-color:  white;
  color: #ff2957;
  border: 1.5px solid #ff2957;
  cursor: pointer;
  font-weight:${props => props.fontWeight};

  &:hover{
    background-color: white;
    color: #ff2957;
    border: 1.5px solid white;
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
  

  &:hover{
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  }

  &:disabled{
    color: rgba(255, 41, 87, 0.6);
  }
`;