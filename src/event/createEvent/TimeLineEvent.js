import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  editGenerally,
  addTag,
  removeTag,
} from "../../redux/slices/createEventSlice";
import {
  BudgetInventoryContainer,
  BudgetInventoryHeader,
  BudgetInventorySubtitle,
  BudgetSection,
  BudgetTitle1,
  BudgetTitle2,
  ButtonContainer,
} from "../budgetInventory/BudgetStyled";
import { InputText, Input } from "./FirstCreateEventStyled";
import { InputDate } from "./SecondCreateEventStyled";
import { AiOutlineClose } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker.css";
import CrossTime from "../../images/CrossTime.png";
import { useNavigate, useLocation } from "react-router-dom";
import {
  EventSubSection,
  InputTagBox,
  AddButton,
  ErrorText,
  EventButton,
  InputBox,
  AddOtherBox,
  BlueText,
  Delete,
  TagsWrapper,
} from "./TimeLineEventsStyled";
import {
  PrimaryButton,
  AlternativeButton2,
} from "../../components/button/button";

const TimeLineEvent = ({ padding }) => {
  const [newTag, setNewTag] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const state = useSelector((state) => state.createEvent);
  const navigate = useNavigate();
  // Add tag to the list
  const handleAddTag = () => {
    if (newTag !== "") {
      // Check if the new todo already exists in the array
      const alreadyExists = state.tags.some((tag) => tag === newTag);
      if (!alreadyExists && state.tags.length < 5) {
        dispatch(addTag(newTag));
      }
      setNewTag("");
    }
  };
  // Remove tag from the list
  const handleRemoveTag = (tag) => {
    dispatch(removeTag(tag));
  };
  // Render the list of tags
  const tagList = state.tags.map((tag, index) => (
    <div key={index}>
      <EventButton style={{ marginRight: "1rem", marginBottom: "0.5rem" }}>
        {tag}
        <Delete onClick={() => handleRemoveTag(tag)}>
          <AiOutlineClose />
        </Delete>
      </EventButton>
    </div>
  ));

  const change = (e) => {
    dispatch(editGenerally({ name: e.target.name, value: e.target.value }));
  };
  const navigateBack = () => {
    navigate("/test/eventdetails/2");
  };

  const navigateNext = () => {
    navigate("/test/eventdetails/4");
    console.log(state);
  };

  return (
    <>
      <BudgetInventoryContainer style={{ padding: padding }}>
        {location.pathname === "/eventPlanPreview" ? null : (
          <BudgetInventoryHeader>
            <BudgetTitle1>Create Event</BudgetTitle1>
            <BudgetInventorySubtitle>
              Capture and share every information needed to make your event
              proposal desirable of attracting sponsorships.
            </BudgetInventorySubtitle>
          </BudgetInventoryHeader>
        )}

        <BudgetSection>
          <BudgetTitle2>Tags and Timelines</BudgetTitle2>

          <EventSubSection>
            <InputText>Event Tags</InputText>
            <InputTagBox>
              <Input
                placeholder="Add hashtags or search keywords to your event"
                type="text"
                value={newTag}
                onChange={(event) => setNewTag(event.target.value)}
              />
              <AddButton onClick={handleAddTag}>Add</AddButton>
            </InputTagBox>
            <ErrorText>
              *{state?.tags?.length ? state.tags.length : "0"}/5 Tags
            </ErrorText>
            <TagsWrapper>{tagList}</TagsWrapper>
          </EventSubSection>
          {/* second section */}
          <EventSubSection>
            <InputText>Event Set up</InputText>
            <BudgetInventorySubtitle>
              Give a start and end date for the setting up of the event
            </BudgetInventorySubtitle>
            <InputBox>
              <InputDate
                name="eventSetupStartDate"
                pattern="[0-9]{2}:[0-9]{2}"
                onChange={change}
                defaultValue={state.eventSetupStartDate}
              />
            </InputBox>
            <InputBox>
              <InputDate
                name="eventSetupEndDate"
                pattern="[0-9]{2}:[0-9]{2}"
                onChange={change}
                defaultValue={state.eventSetupEndDate}
              />
            </InputBox>
          </EventSubSection>
          {/* third section */}
          <EventSubSection>
            <InputText>Guest registration</InputText>
            <BudgetInventorySubtitle>
              Give a start and end date for the setting up of the event
            </BudgetInventorySubtitle>
            <InputBox>
              <InputDate
                name="guestRegStartDate"
                pattern="\d{4}-\d{2}-\d{2}"
                onChange={change}
                defaultValue={state.guestRegStartDate}
              />
            </InputBox>
            <InputBox>
              <InputDate
                name="guestRegEndDate"
                pattern="\d{4}-\d{2}-\d{2}"
                onChange={change}
                defaultValue={state.guestRegStartDate}
              />
            </InputBox>
            {/* <AddOtherBox>
              <img src={CrossTime} alt="crossTime" />
              <BlueText>Add other timelines</BlueText>
            </AddOtherBox> */}
          </EventSubSection>
        </BudgetSection>

        {location.pathname === "/eventPlanPreview" ? null : (
          <ButtonContainer style={{ margin: "0rem" }}>
            <AlternativeButton2
              onClick={navigateBack}
              style={{
                color: "#FF2957",
                fontWeight: "600",
                marginRight: "2rem",
              }}
            >
              Back
            </AlternativeButton2>
            <PrimaryButton onClick={navigateNext}>
              Save & Continue
            </PrimaryButton>
          </ButtonContainer>
        )}
      </BudgetInventoryContainer>
    </>
  );
};

export default TimeLineEvent;
