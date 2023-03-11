import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  height: 6vh;
  outline: 1px solid #c4c4c4;
  border-radius: 4px;
  width: 450px;
  justify-content: flex-start;
  align-items: center;
  padding: 2%;

  input {
    height: inherit;
    width: inherit;
    border: none;
    outline: transparent;
    padding: 3%;
    background-color: transparent;
    font-size: 12px;
    opacity: 50%;
  }

  @media screen and (max-width: 480px) {
   display: none;
  }

  @media screen and (max-width: 960px) {

  height: 3.5vh;
  width: 406px;
    input {
      width: 80vw;
    }
  }
`;
