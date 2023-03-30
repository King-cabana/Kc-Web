import styled from "styled-components";

export const EventPlanningTable = styled.table`
  border: 1px solid rgba(0, 104, 255, 0.1);
  width: 90%;
  table-layout: fixed;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Heading = styled.section`
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  padding: 0.5rem;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const TdLarge = styled.td`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding: 0.5rem;
  border-top: 1px solid rgba(0, 104, 255, 0.1);
  border-bottom: 1px solid rgba(0, 104, 255, 0.1);
  white-space: nowrap;
  width: 250px;

  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

export const TdMedium = styled(TdLarge)`
  width: 100px;
`;

export const TdSmall = styled(TdMedium)`
  text-align: end;
  padding-right: 1rem;
`;

export const SM = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  font-style: italic;

  @media screen and (max-width: 960px) {
    font-size: 10px;
  }
`;

export const ViewButton = styled.button`
  border-radius: 8px;
  background-color: #ff2957;
  color: white;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  width: auto;
  height: auto;
  padding: 0.5rem;
  font-size: 10px;
  margin-right: 1.5rem;
  font-weight: 600;
  align-self: center;

  &:hover {
    background-color: rgba(255, 41, 87, 0.8);
    color: white;
  }
  &:disabled {
    background-color: rgba(255, 41, 87, 0.3);
    color: rgba(255, 255, 255, 0.3);
  }
`;

export const TableHead = styled.tr`
  width: 100%;
  overflow-x: scroll;
  padding: 0.7rem;
  color: #484848;
  border: 1px solid rgba(0, 104, 255, 0.1);
`;
export const TableTr = styled(TableHead)`
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};

  &:hover {
    background-color: #f6e9ec;
  }
`;

export const EventName = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EventDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin-top: 50px;
  font-size: 1.3rem;
`;

export const Button = styled.button`
  background-color: #ff2957;
  text-align: center;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  color: #fff;
  font-size: 1rem;
`;
export const CreateEventButton = styled.button`
  background-color: #ff2957;
  text-align: center;
  border: none;
  border-radius: 10px;
  padding: 20px 30px;
  margin: 40px 0 40px 80px;
  color: #fff;
  font-size: 1rem;
`;

export const ButtonAndEllipses = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Icon = styled.img`
  height: 30px;
  width: 30px;
`;
