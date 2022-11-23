import styled from "styled-components"

export const EventCards = styled.div`
    box-sizing: border-box;
    width: 20vw;
    height: 60vh;
    background-color: #fff;
    border: 1px solid #D9D9D9;
    border-radius: 3px;
    cursor: pointer;
    transition: box-shadow .3s;
    margin-bottom: 1%;
   
    &:hover{
        box-shadow: 0 0 11px rgba(33,33,33,.5);
        border: none;
    }

    @media screen and (max-width: 960px) {
        width: 72vw;
        height: 60vh;
        border-radius: 10px;
        scroll-snap-align: start
    }
`

export const ImageHolder = styled.div`
    /* height:30vh; */
    border-radius:3px;

    img{
        width:100%;
        height:100;
        object-fit:cover;
        border-radius:3px 3px 0 0;
    }
`

export const CardContentHolder = styled.div`
    height:35vh;
    width:inherit;
    padding:4%;
    
`

export const EventHeader = styled.p`
    font-size:20px;
    font-weight:600;
`

export const EventOrganizer = styled.p`
    font-size:20px;
    font-weight:600;
`

export const EventDetails = styled.p`
    font-size:12px;
`

export const DateAndTime = styled.p`
    font-size:12px;
    font-weight:400;
`