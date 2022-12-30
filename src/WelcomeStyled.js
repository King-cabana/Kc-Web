import styled from "styled-components";
import { Link } from "react-router-dom";

export const OverallContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 8vh;
`;

export const PopUpOverlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;

export const PopUpComponent = styled.div`
  position: absolute;
  margin-left: -0.5rem;
  margin-top: 0.1rem;
  background-color: #fff;
  width: 200px;
  height: 150px;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 8px;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 769px) {
    width: 100%;
    height: 130px;
    margin-left: -1rem;
  }
  img {
    width: 15px;
    height: 20px;
    margin-bottom: 1rem;
    &:hover {
      cursor: pointer;
    }
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #000000;
    text-align: center;
    margin-bottom: 1rem;

    @media screen and (max-width: 769px) {
      font-size: 10px;
      line-height: 12px;
    }
  }
`;

export const WelcomeContainer = styled.div`
  padding: 2rem;
  background-color: #fffdfd;
  width: 80%;
  height: 92%;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
  @media screen and (max-width: 577px) {
    padding: 1rem;
  }
`;

export const WelcomeCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 769px) {
    margin-bottom: 2rem;
  }
`;

export const WelcomeText = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  color: #484848;

  @media screen and (max-width: 769px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ButtonLink = styled(Link)``;

export const ButtonsContainer = styled.div`
  width: 80%;
  margin-top: 0.5rem;
  display: flex;
  background-color: #fffdfd;
  justify-content: flex-end;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const JointContainer = styled.div`
  position: relative;

  @media screen and (max-width: 769px) {
    width: 120px;
  }
`;

export const AlternativeButton2 = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  background-color: transparent;
  margin-right: 1rem;
  color: ${(props) => (props.color ? props.color : "white")};
  border: 1.5px solid #ff2957;
  cursor: pointer;
  font-weight: ${(props) => props.fontWeight};

  @media screen and (max-width: 769px) {
    font-size: 10px;
    width: 90px;
    height: 30px;
    margin-right: 0;
  }
  &:hover {
    color: #ff2957;
    border: 1.5px solid #f4d5dc;
  }
  &:disabled {
    background-color: white;
    color: white;
    border: 1.5px solid rgba(255, 41, 87, 0.6);
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

export const PrimaryButton2 = styled.button`
  border-radius: 8px;
  background-color: #ff2957;
  color: white;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  height: 30px;
  width: 80px;
  font-size: 10px;
  margin-left: 1.5rem;
  font-weight: 600;
  align-self: center;

  @media screen and (max-width: 769px) {
    width: 90px;
    height: 30px;
  }
  @media screen and (max-width: 577px) {
    margin-left: 0;
    margin-top: 0.8rem;
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

export const EventReportContainer = styled.div`
  width: 80%;
  margin-top: 1.3rem;
  display: flex;
  justify-content: space-between;
  background-color: #fffdfd;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
  @media screen and (max-width: 577px) {
    padding: 0.1rem;
    border-radius: 5px;
    gap: 20px;
    overflow-x: scroll;
  }
`;

export const InnerContainer = styled.div`
  width: 47%;
  height: 170px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;

  @media screen and (max-width: 577px) {
    width: 100%;
    height: 150px;
  }
`;

export const Text = styled.div`
  font-size: 16px;
  width: 50%;
  display: flex;
  color: #484848;

  @media screen and (max-width: 577px) {
    font-size: 14px;
    width: 100%;
    margin-right: 10rem;
  }
`;

export const SubTextContainer = styled.div`
  display: flex;
  height: 17%;
`;

export const SubText = styled.div`
  color: #484848;
  display: flex;
  font-weight: 400;
  font-size: 14px;
  width: max-content;
  margin-right: 1rem;

  @media screen and (max-width: 577px) {
    font-size: 12px;
  }
  .success {
    color: #ff2957;
    border-bottom: 1px solid #ff2957;
    padding-bottom: 1.5rem;
  }
  &:hover {
    cursor: pointer;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const ChecklistContainer = styled.div`
  background-color: #fffdfd;
  width: 80%;
  margin-top: 2rem;
  margin-bottom: 3.5rem;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 8px;
  padding: 10px 25px 25px;
  color: #484848;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
  @media screen and (max-width: 577px) {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 577px) {
    padding: 10px 10px 25px;
  }
`;

export const ChecklistHeading = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;

  @media screen and (max-width: 577px) {
    font-size: 14px;
    line-height: 24px;
  }
`;
export const ChecklistHeading2 = styled.h2`
  margin-bottom: 0.2rem;
  font-size: 15px;
  font-weight: 600;
  line-height: 26px;
  color: #ffbc15;

  @media screen and (max-width: 577px) {
    font-size: 13px;
    line-height: 22px;
  }
`;

export const ChecklistSubHeading = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;

  @media screen and (max-width: 577px) {
    font-size: 11px;
  }
`;

export const ItemsContainer = styled.div`
  background-color: #fffdfd;
  width: 100%;
  border-bottom: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 8px;
  padding: 10px 15px;
  color: #484848;
  display: flex;

  @media screen and (max-width: 577px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media screen and (max-width: 577px) {
    width: 100%;
  }
`;
