import styled from "styled-components";
import size from "./device";

export const GuestRegistrationDiv = styled.div`
  width: 100%;
  
`;

export const Header = styled.p`

  @media screen and (min-width: 414px){
    font-size: 0.7rem;
    padding-right: 6%;
  };

  @media screen and (max-width: 385px){
    font-size: 0.7rem;
  };

  @media screen and (min-width: 280px){
    font-size: 0.6rem;
  };

  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
`;

export const Plan = styled.p`
  color: red;

  @media screen and (min-width: 280px){
    font-size: 0.6rem;
  };
`;

export const TableDiv = styled.div`
  width: 100%;
  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    /* line-height: 2; */
    color: #484848;
    /* margin: 10px 0; */
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 3;
    color: #484848;

    @media screen and (min-width: 414px){
    font-size: 1.5rem;
  };

  @media screen and (max-width: 385px){
    font-size: 1.5rem;
  };

  @media screen and (min-width: 280px){
    font-size: 1rem;
  };

  }

  @media screen and (min-width: 360px) and (max-width: 560px) {
    p {
      padding-left: 10px;
      padding-right: 10px; 
      line-height: 40px;
      word-wrap: break-word;
      margin-bottom: 20px ;
    }

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

    @media screen and (min-width: 414px){
    font-size: 1.5rem;
  };

  @media screen and (max-width: 385px){
    font-size: 1.5rem;
  };

  @media screen and (min-width: 280px){
    font-size: 1rem;
  };

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2;
    color: #484848;
  }
`;

export const Tags = styled.div`
  width: 400%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  height: 18%;
  margin-right: 100%;


  ul {
    color: #484848;
    text-align: center;
    width: 130px;
    background: #f6e9ec;
    border-radius: 20px;
  }
  
  @media screen and (min-width: 414px){
    font-size: 0.7rem;
    /* padding-right: 6%; */
  };

  @media screen and (max-width: 385px){
    font-size: 0.7rem;
  };

  @media screen and (min-width: 280px){
    font-size: 0.6rem;
  };
`;

export const HeaderHolder =styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Page = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 3%;
    `;
  
   
   