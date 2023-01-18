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
`

export const KCProgressBar = styled.div`
  width: 80%;
  height: 100px;
  border: 0.5px solid #D2CEDC;
  border-radius: 5px;
  display: flex;

  @media screen and (max-width: 480px){
    width: 100%;
  }

`

export const ProgressStages = styled.div`
    width: 35%;
    background-color: white;
    height: inherit;
    border: inherit;
    border-bottom-left-radius: ${props => props.bblr};
    border-top-left-radius: ${props => props.btlr};
    border-top-right-radius: ${props => props.btrr};
    border-bottom-right-radius: ${props => props.bbrr};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 480px){
      width: inherit;
      padding: 2%;
  }

    
`

export const ProgressStageInner = styled.div`
  height: inherit;
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px){
      line-height: 1.3em;
      font-size: 12px;
  }
`

export const ProgressStageCounter = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: max-content;
   gap: 10px;

   @media screen and (max-width: 480px){
      width: inherit;
      gap: 5px;
      display: block;
      
  }
`

export const NumberHolder = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    border:1px solid ;
    display:flex;
    justify-content:center;
    align-items:center;

    @media screen and (max-width: 480px){
     
  }
`