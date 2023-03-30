import React, { useState, useEffect } from "react";
import {
  EventPlanningTable,
  TdLarge,
  TableTr,
  TableHead,
  ViewButton,
  SM,
  TdMedium,
  TdSmall,
  Heading,
} from "./EventPlanningStyled";
import {
  NoEventContainer,
  WelcomeHeader,
  Txt,
  OverallContainer,
  ButtonLink,
  PrimaryButton,
} from "../emptyEvent/EmptyEventStyled";
import { BsChevronRight } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
const EventPlanning = () => {
  const [active, setActive] = useState([]);

  const api = [
    {
      eventName: "Peter's friends and family hangout",
      dateTime: "Tuesday, January 22, 2023 or 7pm WAT",
      lastUpdated: "14 hours ago",
      status: "Draft",
    },
    {
      eventName: "Josiah and Sons",
      dateTime: "Monday, January 22, 2023 or 7pm WAT",
      lastUpdated: "48 hours ago",
      status: "Completed",
    },
    {
      eventName: "Semicolon Webinar",
      dateTime: "Friay, March 22, 2023 or 7pm WAT",
      lastUpdated: "6 weeks ago",
      status: "Draft",
    },
  ];

  useEffect(() => {
    // Set the initial selected state to false for all divs
    setActive(api.map((data) => ({ ...data, selected: false })));
  }, []);

  const handleApiClick = (index) => {
    // Update the selected state of the clicked div
    setActive((prevActive) =>
      prevActive.map((data, i) => {
        if (i === index) {
          return { ...data, selected: true };
        } else {
          return { ...data, selected: false };
        }
      })
    );
  };

  return (
    <OverallContainer>
      <NoEventContainer>
        <WelcomeHeader>
          <Txt>Event</Txt>
          <BsChevronRight style={{ marginRight: "0.5rem" }} />
          <Txt fontWeight="400" color="#FF2957">
            Planning
          </Txt>
        </WelcomeHeader>

        <Heading>Event details</Heading>

        <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
          <EventPlanningTable>
            <tbody>
              <TableHead>
                <TdLarge style={{ fontWeight: "600" }}>Name and Date</TdLarge>
                <TdMedium style={{ fontWeight: "600" }}>Last updated</TdMedium>
                <TdMedium style={{ fontWeight: "600" }}>Status</TdMedium>
                <TdMedium style={{ border: "none" }}>{""}</TdMedium>
              </TableHead>

              {active.map((data, index) => (
                <TableTr
                  key={index}
                  backgroundColor={data.selected ? "#f9e6ea" : "white"}
                  onClick={() => handleApiClick(index)}
                >
                  <TdLarge>
                    {data.eventName} <br />
                    <SM> {data.dateTime}</SM>
                  </TdLarge>
                  <TdMedium>{data.lastUpdated}</TdMedium>
                  <TdMedium style={{ color: "#0068FF" }}>
                    {data.status}
                  </TdMedium>
                  <TdSmall>
                    <ViewButton>View</ViewButton>
                    <SlOptionsVertical cursor="pointer" />
                  </TdSmall>
                </TableTr>
              ))}
            </tbody>
          </EventPlanningTable>
        </div>

        <ButtonLink to="/createevent/eventdetails/1">
          <PrimaryButton>Create event</PrimaryButton>
        </ButtonLink>
      </NoEventContainer>
    </OverallContainer>
  );
};
export default EventPlanning;
