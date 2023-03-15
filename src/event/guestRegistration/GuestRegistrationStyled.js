import styled from "styled-components";
import size from "./device";

export const GuestRegistrationDiv = styled.div`
  padding-left: 3%;
`;

export const Header = styled.h2`
  margin-top: -2.5%;
  line-height: 32px;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  float: right;
  padding-right: 10%;
  font-style: normal;
`;

export const Plan = styled.h3`
  padding-left: 1%;
  line-height: 30px;
  display: inline;
  font-weight: 400;
  color: red;
  font-style: normal;
`;

export const TableDiv = styled.div`
  width: 70%;
  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2;
    color: #484848;
    margin: 10px 0;
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 3;
    color: #484848;
  }
`;

export const CreatePublishButton = styled.div`
  width: 90%;
  display: flex;
  justify-content: end;
  padding-right: 7%;
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 17px 28px;
    gap: 10px;
    color: #fff;
    width: 116px;
    border: none;
    height: 56px;
    background: #ff2957;
    border-radius: 6px;
  }
`;
export const GuestDetails = styled.div`
  h4 {
    display: inline;
    padding-left: 30px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 2;
    color: #484848;
    margin: 10px 0;
  }

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 3;
    color: #484848;
  }
`;

export const Tags = styled.div`
  width: 400%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 20%;

  ul {
    color: #484848;
    text-align: center;
    width: 130px;
    background: #f6e9ec;
    border-radius: 20px;
  }
`;

export const Page = styled.div`
    justify-content: center;
    margin-left: 7%;

    @media screen and (max-width: 375px) {
      .plan_ {
        margin-top: -2%;
        font-size: 9px;
      }
      .prev_ {
        font-size: 12px;
      }
    }

    @media screen and (max-width: 414px) {
      .plan_ {
        font-size: 10px;
      }
      .prev_ {
        font-size: 13px;
      }
  }
`;;
