import React from "react";
import {
  EventCards,
  ImageHolder,
  CardContentHolder,
  EventHeader,
  EventDetails,
  EventOrganizer,
  DateAndTime,
} from "./CardStyled";
// import Image from '../../images/people.jpg'
import data from "../../data";

const Card = () => {
  return (
    <EventCards>
      {data.cards.map((cards) => (
        // <div key={cards.id}>
        <>
          <ImageHolder>
            <img src={cards.img} alt={cards.name} />
          </ImageHolder>

          <CardContentHolder>
            <EventHeader>{cards.title}</EventHeader>
            <EventOrganizer>{cards.subTitle}</EventOrganizer>
            <DateAndTime>{cards.time}</DateAndTime>
            <EventDetails>{cards.details}</EventDetails>
          </CardContentHolder>
        </>
        // </div>
      ))}
    </EventCards>
  );
};

export default Card;
