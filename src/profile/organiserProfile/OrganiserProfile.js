import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import { PrimaryButton, TransparentButton } from "../../components/button/button";
import { Input, InputText, MyTextArea, FormContainer, FileWrapper, CustomWrapper,UploadBtn, Supported  } from "../../event/createEvent/FirstCreateEventStyled";
import { CreateEventSection, EventHeader1, EventText } from "../../event/createEvent/TimeLineEventsStyled";
import kingCabanaLogo from '../../images/kingCabanaLogo.svg';
import { KCLogo, LogoDiv, ProfileContainer, ProfileContent, ProfileHeader, ProfileProgress, ProfileSection, ShapedBackground } from "../createProfile/CreateProfileStyled";
import { InputSeg, SaveBox, ButtonSave, OrganiserSection } from './OrganiserProfileStyled';

const OrganiserProfile = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [file, setFile] = useState("");
    const [errorMsg, setErrorMsg] = useState(false);
    const [correctFileSize, setCorrectFileSize] = useState(false);

    const navigate = useNavigate();

    const navigateNext = ()=>{
      navigate('/manageProfile')
    }

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
      return;
    }

    const fileSizeKiloBytes = file.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("*File size is greater than maximum limit*");
      setIsSuccess(false);
      setCorrectFileSize(false);
      return;
    }

    setErrorMsg("");
    setIsSuccess(true);
    setCorrectFileSize(true);
  }, [file]);

  return (
    <div>
     <ProfileContainer>
      <ShapedBackground />
      <ProfileContent>
        <LogoDiv>
            <KCLogo src={kingCabanaLogo} alt='kcLogo'/>
          </LogoDiv> 
        <ProfileSection>
             
            <ProfileProgress>Step 1 of 3</ProfileProgress> 

        <EventHeader1>Set up your Event Organizer's Profile</EventHeader1>
        <EventText>lorem ipsum dolor sit amet consectetur</EventText>
        <InputSeg>
          <InputText>Organizer's / Association's Name</InputText>
          <Input type='text' placeholder='Enter name'/>
        </InputSeg>
        
        <InputSeg>
          <InputText>Organizer's / Association's Email address</InputText>
          <Input type='email' placeholder='Enter Email address'/>
        </InputSeg>
        
        <InputSeg>
          <InputText>Organizer's / Association's Office address</InputText>
          <Input type='text' placeholder='Enter office address'/>
        </InputSeg>

        <InputSeg>
          <InputText>Organizer's / Association's Details</InputText>
          <MyTextArea type='textarea' row='6' placeholder='Give descriptions'/>
        </InputSeg>
          
        <InputSeg>
          <InputText>Logo</InputText>
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
        </InputSeg>

        <InputSeg>
          <InputText>Background Picture</InputText>
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
        </InputSeg>
    
      </ProfileSection>
      </ProfileContent>
      <SaveBox>
            <ButtonSave>
              <TransparentButton color="#FF2957" fontWeight={600} >Back</TransparentButton>
              <PrimaryButton onClick={navigateNext}>Next</PrimaryButton>
            </ButtonSave>
        </SaveBox>
      </ProfileContainer> 
      
    </div>
  );
};

export default OrganiserProfile;
