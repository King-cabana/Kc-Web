import styled from "styled-components";

export const KCProgressBarHolder = styled.div`
  width: 100%;
  height: 20vh;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0 8%;
  background-color: transparent;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const KCProgressBar = styled.div`
  width: 80%;
  height: 100px;
  /* border: none; */
  border-radius: 5px;
  display: flex;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;


export const ProgressStages = styled.div`
  width: 35%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-right: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0% 0%, 93% 0, 100% 50%, 93% 100%, 0% 100%);
  border: 1px solid #d2cedc;
  background-color: white;


  @media screen and (max-width: 480px) {
    width: inherit;
    padding: 2%;
  }
`;

export const ProgressStages2 = styled.div`
  clip-path: polygon(93% 0, 100% 50%, 93% 100%, 0% 100%, 5% 51%, 0% 0%);
  height: inherit;
  background-color: gray;
  width: 35%;
  margin-right: -20px;
  border: 1px solid #d2cedc;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProgressStages3 = styled.div`
  clip-path: polygon(100% 0, 100% 50%, 100% 99%, 0% 100%, 5% 51%, 0% 0%);
  height: inherit;
  background-color: white;
  width: 35%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 0.5px solid #d2cedc;
  display: flex;
  justify-content: center;
  align-items: center;
  
`


export const ProgressStageInner = styled.div`
  height: inherit;
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    line-height: 1.3em;
    font-size: 12px;
  }
`;

export const ProgressStageCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  gap: 10px;

  @media screen and (max-width: 480px) {
    width: inherit;
    gap: 5px;
    display: block;
  }
`;

export const NumberHolder = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
  }
`;
