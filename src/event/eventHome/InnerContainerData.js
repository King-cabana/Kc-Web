import React from "react";
import {
  InnerContainer,
  Row1,
  Text,
  Select,
  Option,
  Counter,
} from "./EventHomeStyled";

export const EventReportData = ({ counter }) => [
  {
    title: "Event Created",
    options: ["Total", "Draft", "Completed"],
    counter: counter?.eventCompleted,
  },
  {
    title: "Proposals generated",
    options: ["Total", "Draft", "Completed"],
    counter: counter?.proposalCompleted,
  },
  {
    title: "Sponsors engaged",
    options: ["Matched", "In progress", "Rejected"],
    counter: counter?.sponsorsMatched,
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

const InnerContainerData = ({ title, options, counter }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <InnerContainer>
      <Row1>
        <Text>{title}</Text>
        {options ? (
          <Select name="list" id="list" onChange={handleChange}>
            {options?.map((option, index) => (
              <Option key={index}>{option}</Option>
            ))}
          </Select>
        ) : null}
      </Row1>
      <Counter>{counter}</Counter>
    </InnerContainer>
  );
};

export default InnerContainerData;
