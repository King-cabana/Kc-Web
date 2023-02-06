import React, { useState, useEffect } from 'react'
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { DownButtonBox, DownBtn, DownButtonFull, } from './SecondCreateEventStyled';
import { CreateEventContainer, CreateEventHeader, EventHeader1, EventText, CreateEventSection, EventSubSection,EventSetText} from '../createEvent/TimeLineEventsStyled';
import { FormContainer, FileWrapper, CustomWrapper, Input, CheckBoxContainer,CheckBoxInput, InputSection, FormImage,Supported, InputText, SmallText,
         MyTextArea, Number, CheckHeader, InputBoxOther, UploadBtn,} from './FirstCreateEventStyled'


const FirstCreateEvent = () => {
    const [isDisplay, setIsDisplay] = useState(false)
    const[visibility, setVisibility] = useState(false);
    const [file, setFile] = useState("");
    const [errorMsg, setErrorMsg] = useState(false);
    const [correctFileSize, setCorrectFileSize] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

const navigate= useNavigate();

    const handleFileChange = (e) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    };
  
    useEffect(() => {
      const MAX_FILE_SIZE = 1024; // 1MB
  
      if (!file) {
        setErrorMsg("*Please choose a file*");
        setIsSuccess(false);
        setIsDisabled(true);
        return;
      }
  
      const fileSizeKiloBytes = file.size / 1024;
  
      if (fileSizeKiloBytes > MAX_FILE_SIZE) {
        setErrorMsg("*File size is greater than maximum limit*");
        setIsSuccess(false);
        setCorrectFileSize(false);
        setIsDisabled(true);
        return;
      }
  
      setErrorMsg("");
      setIsSuccess(true);
      setCorrectFileSize(true);
      setIsDisabled(false);
    }, [file]);
  
    const handleSubmit = async function (e) {
      e.preventDefault();
      navigate("/secondCreateEvent");
      console.log(file);
    };
  
 
  return (
    <>
        <CreateEventContainer>
        <CreateEventHeader>
          <EventHeader1>Create Event</EventHeader1>
          <EventText>Capture and share every information needed to make your event proposal desirable of attracting sponsorships.</EventText>
          </CreateEventHeader>
        
        <CreateEventSection>
            <EventHeader1>Basic info</EventHeader1>
      {/* first section */}
           <EventSubSection>

           <FormImage>
              <InputText>Event Banner</InputText>
              <EventSetText>Select a catchy banner that reflects the essence of your event.</EventSetText>
                <FormContainer>
                  <FileWrapper>
                    <CustomWrapper><input type="file" style={{ cursor: "pointer" }} onChange={handleFileChange} hidden id='file'/></CustomWrapper>
                    <UploadBtn htmlFor='file'>Upload</UploadBtn>
                  </FileWrapper>
                  <h3 style={{ color: "#ff2957", fontSize: "16px", justifyContent:"center", display:'flex', marginTop:'0.5rem'}}>{errorMsg}</h3>
                  <Supported>Support files; PDF, JPG, CSV</Supported>
                  <Supported style={{color: "#ff2957"}}> Not more than 1mb </Supported>
                                    {correctFileSize && <div>{file && `${file.name}`}</div>}
                  {isSuccess ? (<p style={{ color: "green" }}>Validation successful</p>) : null}
                </FormContainer>
            </FormImage>
          </EventSubSection>
      {/* second section  */}
           <EventSubSection>
            <InputText>Event Name</InputText>
            <Input type='text' placeholder='Enter your Event Name' />
           </EventSubSection>
      {/* input section  */}
           <EventSubSection>
            <InputText>Event Theme</InputText>
            <Input type='text' placeholder='Enter your Event Theme' />
           </EventSubSection>
      {/* input section  */}
           <EventSubSection>
              <InputText>Event Category</InputText>
              <InputSection onClick={() => setIsDisplay(!isDisplay)}>Select Category {isDisplay ? <BsChevronDown/> : <BsChevronRight/>} </InputSection>
              <CheckBoxContainer display={isDisplay ? "flex" : "none"} >
                <CheckHeader><h1>Corporate Events</h1></CheckHeader>
                  <CheckBoxInput><input type="radio" id='trade' name='coporateEvents'/><label htmlFor='trade'>Trade shows</label></CheckBoxInput>
                  <CheckBoxInput><input type="radio" id='conference' name='coporateEvents'/><label htmlFor='conference'>Conference</label></CheckBoxInput>
                  <CheckBoxInput><input type="radio" id='seminars'name='coporateEvents'/><label htmlFor='seminars'>Seminars/Workshop</label></CheckBoxInput>
                  <CheckBoxInput><input type="radio" id='team'name='coporateEvents'/><label htmlFor='team'>Team building</label></CheckBoxInput>
                  <CheckBoxInput><input type="radio" id='company' name='coporateEvents'/><label htmlFor='company'>Comapny party</label></CheckBoxInput>
                  <CheckBoxInput><input type="radio" id='product' name='coporateEvents'/><label htmlFor='product'>Product/Service launch</label></CheckBoxInput>
                  <CheckHeader><h1>Non - Corporate Events</h1></CheckHeader>
                  <CheckBoxInput><input type="radio" id='weddings' name='nonCoporateEvents'/><label htmlFor='weddings'>Weddings</label></CheckBoxInput>
                  <CheckBoxInput><input type="radio" id='festivals' name='nonCoporateEvents'/><label htmlFor='festivals'>Festivals</label></CheckBoxInput>
                  <CheckBoxInput><input type="radio" id='exhibitions' name='nonCoporateEvents'/><label htmlFor='exhibitions'>Exhibitions</label></CheckBoxInput>
                  <CheckBoxInput><input type="radio" id='charity' name='nonCoporateEvents'/><label htmlFor='charity'>Charity Events</label></CheckBoxInput>
                  <CheckBoxInput><input type="radio" id='sports' name='nonCoporateEvents'/><label htmlFor='sports'>Sports and competitions</label></CheckBoxInput>
                  <CheckBoxInput><input type="radio" id='fashion' name='nonCoporateEvents'/><label htmlFor='fashion'>Fashion Shows and Red Carpets</label></CheckBoxInput>
                  <CheckBoxInput><input onClick={() => setVisibility(!visibility)} type="radio" id='others' name='nonCoporateEvents'/><label htmlFor='others'>Others (Please specify)</label></CheckBoxInput>
                  <InputBoxOther display={visibility ? "flex" : "none"} ><Input type='text' placeholder='Enter others' /></InputBoxOther>
              </CheckBoxContainer>    
           </EventSubSection>
      {/* input section  */}
           <EventSubSection>
            <InputText>Estimated Attendance</InputText>
            <Input type='text' placeholder='estimated attendance to be present'/>
           </EventSubSection>
      {/* input section  */}
           <EventSubSection>
            <InputText>Event description <br/>
            <SmallText>What is the purpose of this event</SmallText>    
            </InputText>
            <MyTextArea type='textarea' row='6' placeholder='Be descriptive and concise'/>
            <Number>0/140</Number>
           </EventSubSection>

        </CreateEventSection>
 
      </CreateEventContainer>
          <DownButtonBox>
              <DownBtn>
                     
                    <DownButtonFull onClick={handleSubmit} 
                    // disabled={isDisabled}
                    >Save & Continue</DownButtonFull>
              </DownBtn>
          </DownButtonBox>
    </>
  )
}

export default FirstCreateEvent