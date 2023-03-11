import styled from "styled-components";

export const EventPlanningDiv = styled.div`
    padding: 3% 6%;
    h2, h3{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500; 
        color: #484848;
    }

    h2{
        font-size: 20px;
    }
    
    h3{
        font-size: 18px;
    }
    h8{
        text-align: center;
        border: none;
        border-radius: 10px;
        padding: 10px 20px;
        color: #fff;
        font-size: 2rem;
    }

`;


export const TableDiv = styled.div`
width: 53%;
display: flex;
justify-content: space-between;
margin-top: 5%;
color: grey;
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
    background-color: #FF2957;
    text-align: center;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    color: #fff;
    font-size: 1rem;
`;
export const CreateEventButton = styled.button`
    background-color: #FF2957;
    text-align: center;
    border: none;
    border-radius: 10px;
    padding: 20px 30px;
    margin: 40px 0 40px 80px ;
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

