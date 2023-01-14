import styled from "styled-components";

export const ProgressBarHolder = styled.div`
    width: 100%;
    height: 20vh;
    justify-content: center;
    align-items: center;
    display: flex;
`

export const ProgressBar = styled.div`
  width: 900px;
  height: 100px;
  border: 0.5px solid #D2CEDC;
  border-radius: 10px;
  display: flex;

`

export const ProgressStep1 = styled.div`
    width: 300px;
    height: inherit;
    border: inherit;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const ProgressStep2 = styled.div`
    width: 300px;
    height: inherit;
    border: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProgressStep3 = styled.div`
    width: 300px;
    height: inherit;
    border: inherit;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const NumberHolder = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    border:1px solid ;
    display:flex;
    justify-content:center;
    align-items:center;
`