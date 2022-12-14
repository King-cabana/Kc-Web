import styled from "styled-components";
import man from "../../images/pexels-vlada-karpovich-4939626.jpg"



export const WaitListBody = styled.div`
    height: 95vh;
    width: 60vw;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 960px) {

        height: 90vh;
        width: 90%;
        border-radius: 3px;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        margin: 10% 5%;
        

        /* h3,p{
            text-align: center;
        } */


    }

`

export const WaitListContent = styled.div` 
    height: inherit;
    width: 30vw;
    padding: 4%;
    
    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    
    h3{
        margin-top: 5%;
        font-size: 18px;
        font-weight: 600;

    }
    p{  
        /* margin-top: 5%; */
        font-size: 14px;
        width: 20vw;
        margin-bottom: 3%;
        
    }

    @media screen and (max-width: 960px){
        width: inherit;

    h3{
        font-size: 14px;
    }    
    
    p{  
        width: 55vw;
    }

}
`

export const WaitListImage = styled.div`
    height: inherit;
    width: 30vw;
    border-radius: 0 10px 10px 0;
    background: url(${man}) ;
    background-repeat: no-repeat;
    background-size: 733.8px 1100.6px;
    background-position: center;
    object-fit: center;

    /* img{
        max-width: 100%;
    } */

    @media screen and (max-width: 960px){
        display: none;
    }
    
    `

  