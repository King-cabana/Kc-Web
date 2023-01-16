import styled from "styled-components";

export const InventorySection = styled.section`
  margin-top: 1.5rem;
  /* border: 2px solid green; */
`;

export const CheckboxWrapper = styled.div`
  /* border: 2px solid red; */
  margin-bottom: 1.5rem;
`;

export const Check = styled.div`
  /* border: 2px solid blue; */
  margin-bottom: 2px;
  border: 1px solid rgba(0, 104, 255, 0.1);
  border-radius: 10px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    padding: 5px 10px;
  }
`;

export const CheckDetails = styled.details`
  margin-bottom: 0.5rem;

  @media screen and (max-width: 960px) {
    margin-bottom: 0;
  }
`;

export const CheckSummary = styled.summary`
  border: 1px solid rgba(0, 104, 255, 0.1);
  background-color: rgba(0, 104, 255, 0.1);
  margin-bottom: 0.5rem;
  border-radius: 10px;
  padding: 15px;
  padding-right: 40px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: black;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    line-height: 20px;
    padding: 5px 10px;
    padding-right: 20px;
  }
`;

export const CheckInput = styled.input`
  /* display: none; */
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;

  @media screen and (max-width: 960px) {
    -ms-transform: scale(1); /* IE */
    -moz-transform: scale(1); /* FF */
    -webkit-transform: scale(1); /* Safari and Chrome */
    -o-transform: scale(1); /* Opera */
    transform: scale(1);
  }
`;

export const CheckLabel = styled.label`
  /* color: #c2c220; */
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin-left: 2rem;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 18px;
    margin-left: 0.5rem;
  }
`;
