import styled from "styled-components";

export const KCProgressBarHolder = styled.div`
  width: 100%;
  height: 20vh;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0 8%;
  background-color: transparent;
  margin-top: 65px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const KCProgressBar = styled.div`
  width: 75%;
  height: 100px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;


export const ProgressStagesOutter = styled.div`
  clip-path: polygon(0% 0%, 93% 0, 100% 50%, 93% 100%, 0% 100%);
  height: inherit;
  background-color: gray;
  width: 40%;
  margin-right: -22px;
  position: relative;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid #d2cedc;
`

export const ProgressStages = styled.div`
  width: 100%;
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0% 0%, 93% 0, 100% 50%, 93% 100%, 0% 100%);
  background-color: white;
  position: absolute;


  @media screen and (max-width: 480px) {
    /* padding: 2%; */
  }
`;

export const ProgressStages2Outter = styled.div`
  clip-path: polygon(93% 0, 100% 50%, 93% 100%, 0% 100%, 5% 51%, 0% 0%);
  height: inherit;
  background-color: gray;
  width: 35%;
  margin-right: -22px;
  position: relative;
  border: 1px solid #d2cedc;
`

export const ProgressStages2 = styled.div`
  clip-path: polygon(93% 0, 100% 50%, 93% 100%, 0% 100%, 5% 51%, 0% 0%);
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`

export const ProgressStages3Outter = styled.div`
  clip-path: polygon(100% 0, 100% 50%, 100% 99%, 0% 100%, 5% 51%, 0% 0%);
  height: inherit;
  background-color: gray;
  width: 35%;
  position: relative;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #d2cedc;
`

export const ProgressStages3 = styled.div`
  clip-path: polygon(100% 0, 100% 50%, 100% 99%, 0% 100%, 5% 51%, 0% 0%);
  height: 100%;
  background-color: white;
  width: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  
`


export const ProgressStageInner = styled.div`
  height: inherit;
  width: 100%;
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: ${(props)=>props.color ? props.color: "black"};
  font-weight: ${(props)=>props.fontWeight ? props.fontWeight: "regular"};

 

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
