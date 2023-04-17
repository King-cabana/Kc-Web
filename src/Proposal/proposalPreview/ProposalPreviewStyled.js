import styled from "styled-components";

export const ProposalDetails = styled.div`
  padding: 2%;
  h3 {
    color: #484848;
  }
  .header {
    color: #ff9e00;
    text-align: center;
    margin: 20px 0;
  }
`;
export const Detail = styled.div`
  h4 {
    font-weight: 500;
    font-size: 20px;
  }
  p {
    font-size: 16px;
    width: 1064px;
  }
  h4,
  p {
    font-family: "Poppins";
    font-style: normal;
    color: "#484848";
  }
  ul li {
    margin-left: 30px;
  }
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const SubDetail = styled.div`
  p {
    display: inline;
    margin-left: 10px;
  }
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const CreatePlanningButton = styled.button`
  background-color: #ff2957;
  text-align: center;
  border: none;
  border-radius: 10px;
  padding: 20px 30px;
  margin: 40px 0 40px 80px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
`;

export const Budget = styled.div`
  display: flex;
  gap: 20px;
`;

export const CreateEditButton = styled.button`
  background-color: #ffffff;
  text-align: center;
  border: 2px solid #ff2957;
  border-radius: 10px;
  padding: 20px 30px;
  margin: 40px 0 40px 80px;
  color: #ff2957;
  font-size: 1rem;
  cursor: pointer;
`;
export const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 0 40px;
  border-top: 1px solid #d2cedc;
`;
