import React, { useState } from 'react'
import { BiTime, BiLinkAlt } from 'react-icons/bi';
import { HiCalendarDays } from 'react-icons/hi2';
import { useNavigate } from 'react-router';
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { EventBox, EventTitle, EventOccurence, EventInputBox,EventInput, EventLink, ButtonBox,ButtonOutline, EventPhysical, LeftInputBox,RightInputBox,
         DownButtonBox, DownButtonOutline, DownBtn, DownButtonFull, DayBox, TimeText, WeekBox,} from './SecondCreateEventStyled';
import { InputSection } from './FirstCreateEventStyled';
import { CreateEventContainer, CreateEventHeader, EventHeader1, EventText, CreateEventSection, EventSubSection } from '../createEvent/TimeLineEventsStyled';

const SecondCreateEvent = () => {
  
  const[visibility, setVisibility] = useState(false);
  const [locationType, setLocationType] = useState("virtual");
  const [isDisplay, setIsDisplay] = useState(false)
  const[calenderType, setCalendarType] = useState("monthly");

  const navigate= useNavigate();

  const navigateBack = () => {
    navigate('/firstCreateEvent');
  };

const navigateNext = () => {
  navigate('/timeLineEvent');
}


 
  return (
<>
  <CreateEventContainer>
      <CreateEventHeader>
              <EventHeader1>Create Event</EventHeader1>
              <EventText>Capture and share every information needed to make your event proposal desirable of attracting sponsorships.</EventText>
      </CreateEventHeader>
    <CreateEventSection>
        
            <EventHeader1>Time and Location</EventHeader1>
            <EventText>If your event holds regularly, you can record previously held events in the event history session</EventText>
    {/* first section  */}
          <EventSubSection>
            <EventOccurence>
                <EventTitle>Choose Event occurence</EventTitle>
              <ButtonBox>
               
                <div onClick={() => setVisibility(true)}>
                  <ButtonOutline bgcolor={visibility && '#0068FF'}  color={visibility && 'white'} >Single event</ButtonOutline></div>

                <div onClick={() => setVisibility(false)}>
                  <ButtonOutline bgcolor={!visibility && '#0068FF'}  color={!visibility && 'white'} >Reccuring event</ButtonOutline></div>
              
              
              </ButtonBox>
            </EventOccurence> 

                <DayBox  display={!visibility && 'flex'}>
                  <TimeText>How frequently does this event take place?</TimeText>
                    <WeekBox>
                      <div onClick= {()=> setCalendarType('weekly')}>
                        <ButtonOutline bgcolor={calenderType === 'weekly'  && '#0068FF'}  color={calenderType === 'weekly'  && 'white'}>Weekly</ButtonOutline></div>

                      <div  onClick= {()=> setCalendarType('monthly')}>
                        <ButtonOutline bgcolor={calenderType === 'monthly'  && '#0068FF'}  color={calenderType === 'monthly'  && 'white'}>Monthly</ButtonOutline> </div>

                      <div  onClick= {()=> setCalendarType('quarterly')}>
                        <ButtonOutline bgcolor={calenderType === 'quarterly'  && '#0068FF'}  color={calenderType === 'quarterly'  && 'white'}>Quaterly</ButtonOutline></div>
                        
                      <div  onClick= {()=> setCalendarType('yearly')}>
                        <ButtonOutline bgcolor={calenderType === 'yearly'  && '#0068FF'}  color={calenderType === 'yearly'  && 'white'}>Yearly</ButtonOutline></div>
                    </WeekBox>
                </DayBox>
          </EventSubSection>
      {/* input section  */}
        <EventBox>
              <LeftInputBox>
                  <EventTitle>Event Time</EventTitle>
                  <EventInput>
                  <BiTime style={{margin: "auto", marginLeft: "3%", color: "gray",}}size={25}/><input placeholder='start time' />
                  </EventInput>
                  <EventInput>
                  <BiTime style={{margin: "auto", marginLeft: "3%", color: "gray",}}size={25}/><input placeholder='end time' />
                  </EventInput>
              </LeftInputBox>

              <RightInputBox><EventTitle>Event Date</EventTitle>
                  <EventInput>
                  <HiCalendarDays style={{margin: "auto", marginLeft: "3%", color: "gray"}}size={25}/><input placeholder='Event starts' />
                  </EventInput>
                  <EventInput>
                  <HiCalendarDays style={{margin: "auto", marginLeft: "3%", color: "gray",}}size={25}/><input placeholder='Event ends' />
                  </EventInput>
              </RightInputBox>
        </EventBox>
      {/* second section  */}
          <EventSubSection>
            <ButtonBox>
              <div onClick={() => setLocationType("virtual")}><ButtonOutline bgcolor={locationType === 'virtual'  && '#0068FF'}  color={locationType === 'virtual'  && 'white'} >Virtual</ButtonOutline></div>
               <div onClick={()=> setLocationType("physical")}><ButtonOutline bgcolor={locationType === 'physical'  && '#0068FF'}  color={locationType === 'physical'  && 'white'} > Physical</ButtonOutline></div>
                <div onClick={() => setLocationType("hybrid")}><ButtonOutline bgcolor={locationType === 'hybrid'  && '#0068FF'}  color={locationType === 'hybrid'  && 'white'} >Hybrid</ButtonOutline></div>
            </ButtonBox>
            
            
            {
             ( locationType === 'virtual' ||  locationType === 'hybrid' ) &&
              (<EventLink display={'flex'}>
              <EventTitle>Event Link</EventTitle>
            <EventInputBox>
              <BiLinkAlt style={{margin: "auto", marginLeft: "1.5%", color: "gray",}}size={25}/><input  placeholder='Enter link to event' />
            </EventInputBox>
          </EventLink>)
            }

           {  ( locationType === 'physical' ||  locationType === 'hybrid' ) &&
            ( <EventPhysical display={'flex'}>
            <EventTitle>Event Location</EventTitle>
              <EventInputBox>
              <InputSection onClick={() => setIsDisplay(!isDisplay)}>Select location {isDisplay ? <BsChevronDown/> : <BsChevronRight/>} </InputSection>
            </EventInputBox>
          </EventPhysical>)
           }
          </EventSubSection>
          
    </CreateEventSection>

  </CreateEventContainer>
  <DownButtonBox>
              <DownBtn>
                <DownButtonOutline onClick={navigateBack}>Back</DownButtonOutline>
                <DownButtonFull onClick={navigateNext}>Save & Continue</DownButtonFull>
              </DownBtn>
    </DownButtonBox>
</>
  )
}

export default SecondCreateEvent