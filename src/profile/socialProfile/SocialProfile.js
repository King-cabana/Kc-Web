import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { KCLogo, LogoDiv, ProfileContainer, ProfileContent, ProfileProgress, ProfileSection, ShapedBackground } from '../createProfile/CreateProfileStyled';
import kingCabanaLogo from "../../images/kingCabanaLogo.svg";
import { EventHeader1 } from '../../event/createEvent/TimeLineEventsStyled';
import { ButtonSave, InputSeg, SaveBox, TransparentButton } from '../organiserProfile/OrganiserProfileStyled';
import { CheckBoxInput, Input, InputBoxOther, InputText, SmallText } from '../../event/createEvent/FirstCreateEventStyled';
import { DownButtonFull } from '../../event/createEvent/SecondCreateEventStyled';



const SocialProfile = () => {
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();

  const navigateNext = () =>{
    navigate('/manageProfile');
  };
  const navigateBack = () => {
    navigate('/organiserProfile')
  }

  return (
    <>
      <ProfileContainer>
        <ShapedBackground />
          <ProfileContent>
            <LogoDiv>
              <KCLogo src={kingCabanaLogo} alt='kcLogo'/>
            </LogoDiv>
              <ProfileSection>
                <ProfileProgress>Step 3 of 4</ProfileProgress>    
                <EventHeader1>Social Media & Guarantor information</EventHeader1>
                
                <InputText>Social media information</InputText>
                <InputSeg>
                  <InputText>Website</InputText>
                  <Input type='text' placeholder='Enter URL' />
                </InputSeg>

                <InputSeg>
                  <InputText>Linkedin</InputText>
                  <Input type='text' placeholder='Enter URL' />
                </InputSeg>
                
                <InputSeg>
                  <InputText>Instagram</InputText>
                  <Input type='text' placeholder='Enter URL' />
                </InputSeg>
                
                <InputSeg>
                  <InputText>Twitter</InputText>
                  <Input type='text' placeholder='Enter URL' />
                </InputSeg>
                
                <InputSeg>
                  <InputText>Facebook</InputText>
                  <Input type='text' placeholder='Enter URL' />
                </InputSeg>
                
                <InputSeg>
                  <InputText>Others</InputText>
                  <Input type='text' placeholder='Enter URL' />
                </InputSeg>

                <InputSeg>
                    <InputText>Guarantor's information</InputText>
                    <SmallText>Select a role that befits a guarantor to this event community</SmallText>
                    <CheckBoxInput><input type="radio" id='patron' name='patron'/><label htmlFor='patron'>Patron</label></CheckBoxInput>
                    <CheckBoxInput><input type="radio" id='staff' name='staff'/><label htmlFor='staff'>Staff Adviser</label></CheckBoxInput>
                    <CheckBoxInput><input type="radio" id='coordinators' name='coordinators'/><label htmlFor='coordinators'>Coordinators</label></CheckBoxInput>
                    <CheckBoxInput><input onClick={() => setVisibility(!visibility)} type="radio" id='patron' name='patron'/><label htmlFor='patron'>Others (please specify)</label></CheckBoxInput>
                    <InputBoxOther display={visibility ? "flex" : "none"} ><Input type='text' placeholder='Enter others' /></InputBoxOther>
                </InputSeg>

                <InputText>Full name of (Secondary Contact)</InputText>
                <InputSeg>
                  <InputText>Company/Business Name</InputText>
                  <Input type='text' placeholder='Enter Company/Business Name' />
                </InputSeg>
                
                <InputSeg>
                  <InputText>Job Role</InputText>
                  <Input type='text' placeholder='Enter Job Role' />
                </InputSeg>
                
                <InputSeg>
                  <InputText>Office Address</InputText>
                  <Input type='text' placeholder='Enter Office Address' />
                </InputSeg>
                
                <InputSeg>
                  <InputText>Phone Number</InputText>
                  <Input type='number' placeholder='Enter Phone Number' />
                </InputSeg>

                <InputSeg>
                  <InputText>Email Address</InputText>
                  <Input type='email' placeholder='Enter Email' />
                </InputSeg>

              </ProfileSection>
          </ProfileContent>
        
          <SaveBox>
          <ButtonSave>
            <TransparentButton onClick={navigateBack}>Back</TransparentButton>
            <DownButtonFull onClick={navigateNext}>Next</DownButtonFull>
          </ButtonSave>
        </SaveBox>
      </ProfileContainer>
    </>
  )
}

export default SocialProfile
