import React, { useState } from 'react'
import { HiCalendarDays } from 'react-icons/hi2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CrossTime from '../../images/CrossTime.png';
import { CreateEventContainer, CreateEventHeader, EventHeader1, EventText, CreateEventSection, EventSubSection, EventTagText,
         InputTagBox, InputTag, AddButton, ErrorText, EventButton, EventSetText, InputBox,AddOtherBox, BlueText} from './TimeLineEventsStyled';
import { DownButtonBox, DownButtonOutline, DownBtn, DownButtonFull, } from './SecondCreateEventStyled';

const TimeLineEvent = () => {
    const [startDate, setStartDate] = useState(new Date());

  return (
<>
    <CreateEventContainer>
        <CreateEventHeader>
            <EventHeader1>Create Event</EventHeader1>
                <EventText>Capture and share every information needed to make your event proposal desirable of attracting sponsorships.</EventText>
        </CreateEventHeader>

        <CreateEventSection>
            <EventHeader1>Tags and Timelines</EventHeader1>

                <EventSubSection>
                    <EventTagText>Event Tags</EventTagText>
                    <InputTagBox>
                        <InputTag placeholder='Add hashtags or search keywords to your event' type='text'/>
                        <AddButton>Add</AddButton>
                    </InputTagBox>
                    <ErrorText>1/5tags</ErrorText>
                    <EventButton>Event X</EventButton>
                </EventSubSection>
    {/* second section */ }
                <EventSubSection>
                    <EventTagText>Event Set up</EventTagText>  
                    <EventSetText>Give a start and end date for the setting up of the event</EventSetText> 
                    <InputBox>
                    <HiCalendarDays />
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </InputBox>
                    <InputBox>
                    <HiCalendarDays />
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </InputBox>
                </EventSubSection>
    {/* third section */}
                <EventSubSection>
                    <EventTagText>Guest registration</EventTagText>  
                    <EventSetText>Give a start and end date for the setting up of the event</EventSetText> 
                    <InputBox>
                    <HiCalendarDays />
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </InputBox>
                    <InputBox>
                    <HiCalendarDays />
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </InputBox>
                    <AddOtherBox>
                        <img src={CrossTime} alt="crossTime" />
                        <BlueText>Add other timelines</BlueText>
                    </AddOtherBox>
                </EventSubSection>
                

        </CreateEventSection>
   
    </CreateEventContainer>
            <DownButtonBox>
              <DownBtn>
                <DownButtonOutline>Back</DownButtonOutline>
                <DownButtonFull>Save & Continue</DownButtonFull>
              </DownBtn>
            </DownButtonBox>
</>
  )
}

export default TimeLineEvent