import React from 'react'
// import Time from '../../images/Time.svg'
import { BiTime, BiLinkAlt } from 'react-icons/bi';
import { HiCalendarDays } from 'react-icons/hi2';
// import {  KBDisplayM, } from '../../components/fonts/fontSize'
import { Container, Event, EventFrame, EventHeader, EventText,EventTime, EventBox, EventTitle,
         EventOccurence, EventInputBox,EventInput, EventLinkBox, EventLink, ButtonBox,
         ButtonOutline, ButtonText, ButtonFull, ButtonBlue, LeftInputBox, RightInpuBox,
         DownButtonBox, DownButtonOuline, DownBtn, DownText, DownButtonFull, DownTextFull
         } from './CreateEventStyled';

const CreateEvent = () => {
  return (
  <>
    <Container>
    <Event>
        <EventFrame>
          <EventHeader>Create Event</EventHeader>
          <EventText>Capture and share every information needed to make your event proposal desirable of attracting sponsorships.</EventText>
        </EventFrame>

        <div style={{/*background: "green"*/ height: "100vh"}}>
      <EventBox>
        <EventTime>
          <EventHeader>Time and Location</EventHeader>
          <EventText>If your event holds regularly, you can record previously held events in the event history session</EventText>
        </EventTime>
        <EventOccurence>
            <EventTitle>Choose Event occurence</EventTitle>
          <ButtonBox>
              <ButtonOutline>
                <ButtonText>Single event</ButtonText>
              </ButtonOutline>
              <ButtonOutline>
                <ButtonText>Reccuring event</ButtonText>
              </ButtonOutline>
          </ButtonBox>
        </EventOccurence>
        <EventInputBox>
            <LeftInputBox>
              <EventTitle>Event Time</EventTitle>
              <EventInput>
              <BiTime 
                style={{
                  margin: "auto", marginLeft: "3%", color: "gray",}}
                size={25}/>
                <input placeholder='start time'/>
              </EventInput>
              <EventInput>
              <BiTime 
                style={{
                  margin: "auto", marginLeft: "3%", color: "gray",}}
                size={25}/>
                <input placeholder='end time' />
              </EventInput>
            </LeftInputBox>
            <RightInpuBox>
            <EventTitle>Event Date</EventTitle>
              <EventInput>
              <HiCalendarDays
                style={{
                  margin: "auto", marginLeft: "3%", color: "gray",}}
                size={25}/>
                <input placeholder='Event starts' />
              </EventInput>
              <EventInput>
              <HiCalendarDays 
                 style={{
                   margin: "auto", marginLeft: "3%", color: "gray",}}
                 size={25}/>
                 <input placeholder='Event ends' />
                
              </EventInput>
            </RightInpuBox>
        </EventInputBox>
        <EventLinkBox>
          <ButtonBox>
            <ButtonFull>
              <ButtonBlue>Virtual</ButtonBlue>
            </ButtonFull>
              <ButtonOutline>
                <ButtonText>Physical</ButtonText>
              </ButtonOutline>
              <ButtonOutline>
                <ButtonText>Hybrid</ButtonText>
              </ButtonOutline>
          </ButtonBox>
          <EventLink>
            <EventTitle>Event Link</EventTitle>
            <EventInput>
            <BiLinkAlt 
                 style={{
                   margin: "auto", marginLeft: "3%", color: "gray",}}
                 size={25}/>
                <input  placeholder='Enter link to event' />
              </EventInput>
          </EventLink>
        </EventLinkBox>
      </EventBox>
      </div>

    </Event>
    
    <DownButtonBox>
        <DownBtn>
          <DownButtonOuline>
            <DownText>Back</DownText>
          </DownButtonOuline>
          <DownButtonFull>
            <DownTextFull>Save & Continue</DownTextFull>
          </DownButtonFull>
        </DownBtn>
      </DownButtonBox>
    </Container>
    </>
  )
}

export default CreateEvent