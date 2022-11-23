import styled from "styled-components"


export const TestimonialCardContainer = styled.div`
        box-sizing: border-box;
        width: 25vw;
        height: 40vh;
        padding: 4%;
        background-color: #fff;
        border: 1px solid #D9D9D9;
        border-radius: 3px;
        cursor: pointer;
        transition: box-shadow .3s;
        scroll-snap-align: start;

        &:hover{
        box-shadow: 0 0 11px rgba(33,33,33,.5);
        border: none;
    }
    @media screen and (max-width: 960px){
        width: 80vw;
        height: 40vh;
      
        
    }

`

export const TCContent = styled.div`
    display:flex;
    width:20vw;
    align-items:center;

    @media screen and (max-width: 960px){
        width: 40vw;
    }
`

export const TCImage = styled.div`
    height:50px;
    width:50px;
    border-radius:50%;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius:50%;
    }
`

export const TCStars = styled.div `
    display:flex;
    width:8vw;
    margin-top:2%;
    color:#FFBA5A;

    @media screen and (max-width: 960px){
        svg{
           /* height: 50em;
           width: 50em;
    */
        }
    }
`

