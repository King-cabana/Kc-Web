import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 999;
  margin-bottom: 1px solid #ff2957;

  @media screen and (max-width: 426px) {
    padding: 0.5rem 1rem;
  }
`;
