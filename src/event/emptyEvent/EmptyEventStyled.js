import styled from "styled-components";
import { Link } from "react-router-dom";

export const OverallContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  /* margin-top: 8vh; */
`;

export const NoEventContainer = styled.div`
  padding: 8.5rem 2rem;
  background-color: #fffdfd;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 769px) {
    padding: 5rem 1rem;
  }
`;

export const NoEventCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 57%;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const NoContentText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #484848;
  margin-top: 2rem;
  margin-bottom: 3.2rem;
  text-align: center;

  @media screen and (max-width: 769px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const LottieWrapper = styled.section`
  @media screen and (max-width: 769px) {
    width: 60px;
    height: 60px;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  @media screen and (max-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PrimaryButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  background-color: #ff2957;
  color: white;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  font-weight: 600;

  @media screen and (max-width: 769px) {
    font-size: 10px;
    width: 90px;
    height: 30px;
  }

  &:hover {
    background-color: rgba(255, 41, 87, 0.8);
    color: white;
  }

  &:disabled {
    background-color: rgba(255, 41, 87, 0.3);
    color: rgba(255, 255, 255, 0.3);
  }
`;
