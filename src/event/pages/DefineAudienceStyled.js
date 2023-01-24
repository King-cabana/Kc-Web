import styled from "styled-components";

export const ButtonContainer = styled.footer`
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 100px;
  width: 100%;
  /* margin-left: -9%; */
  height: 107px;
  border: 1px solid #d2cedc;
  box-sizing: border-box;
  z-index: 99;
  position: fixed;
  bottom: 0;
  left: 0;

  @media screen and (max-width: 960px) {
    height: 80px;
  }
`;
