import React, { useContext, useEffect, useState } from "react";
import { EventOrganizerContext } from "./EventHome";
import {
  InnerContainer,
  Row1,
  Text,
  Select,
  Option,
  Counter,
  InnerWrapper,
} from "./EventHomeStyled";

const InnerContainerData = () => {
  const [eventListLength, setEventListLength] = useState(0);
  const { state } = useContext(EventOrganizerContext) || { state: {} };

  useEffect(() => {
    setEventListLength(state?.eventList?.length || 0);
  }, [state]);

  const eventReportData = [
    {
      title: "Event Created",
      options: ["Total", "Draft", "Completed"],
      counter: eventListLength,
    },
    {
      title: "Proposals generated",
      options: ["Total", "Draft", "Completed"],
      counter: 0,
    },
    {
      title: "Sponsors engaged",
      options: ["Matched", "In progress", "Rejected"],
      counter: 0,
    },
    {
      title: "Event history",
      counter: 0,
    },
    {
      title: "Attendees registered",
      counter: 0,
    },
    {
      title: "Vendors engaged",
      counter: 0,
    },
  ];

  return (
    <InnerWrapper>
      {eventReportData?.map((data, index) => (
        <InnerContainer key={index}>
          <Row1>
            <Text>{data.title}</Text>
            {data.options ? (
              <Select name="list" id="list">
                {data.options.map((option, index) => (
                  <Option key={index}>{option}</Option>
                ))}
              </Select>
            ) : null}
          </Row1>
          <Counter>{data.counter}</Counter>
        </InnerContainer>
      ))}
    </InnerWrapper>
  );
};

export default InnerContainerData;
