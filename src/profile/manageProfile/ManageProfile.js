import React, { useState } from "react";
import { useNavigate } from "react-router";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import {
  AlternativeButton,
  TransparentButton,
} from "../../components/button/button";
import kingCabanaLogo from "../../images/kingCabanaLogo.svg";
import {
  InputText,
  Input,
  InputSection,
  CheckBoxContainer,
  CheckBoxInput,
  InputBoxOther,
} from "../../event/createEvent/FirstCreateEventStyled";
import {
  LeftInputBox,
  RightInputBox,
} from "../../event/createEvent/SecondCreateEventStyled";
import {
  EventHeader1,
  EventText,
} from "../../event/createEvent/TimeLineEventsStyled";
import {
  ButtonSave,
  InputSeg,
  SaveBox,
} from "../organiserProfile/OrganiserProfileStyled";
import { ManageBox, LongButton1 } from "./ManageProfileStyled";
import {
  KCLogo,
  LogoDiv,
  ProfileContainer,
  ProfileContent,
  ProfileProgress,
  ProfileSection,
  ShapedBackground,
} from "../createProfile/CreateProfileStyled";

const ManageProfile = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/organiserProfile");
  };

  return (
    <>
      <ProfileContainer>
        <ShapedBackground />
        <ProfileContent>
          <LogoDiv>
            <KCLogo src={kingCabanaLogo} alt="kcLogo" />
          </LogoDiv>
          <ProfileSection>
            <ProfileProgress>Step 3 of 3</ProfileProgress>
            <EventHeader1>Manage organizer(s)</EventHeader1>
            <EventText>lorem ipsum dolor sit amet consectetur</EventText>

            <ManageBox>
              <LeftInputBox>
                <InputText>Team member's first name</InputText>
                <Input type="text" placeholder="Enter first name" />
              </LeftInputBox>

              <RightInputBox>
                <InputText>Team member's last name</InputText>
                <Input type="text" placeholder="Enter last name" />
              </RightInputBox>
            </ManageBox>

            <InputSeg>
              <InputText>Team member's Email</InputText>
              <Input type="text" placeholder="Enter email" />
            </InputSeg>

            <InputSeg>
              <InputText>Select team member's role</InputText>
              <InputSection onClick={() => setIsDisplay(!isDisplay)}>
                Admin {isDisplay ? <BsChevronDown /> : <BsChevronRight />}
              </InputSection>
              <CheckBoxContainer display={isDisplay ? "flex" : "none"}>
                <CheckBoxInput>
                  <input
                    onClick={() => setVisibility(!visibility)}
                    type="radio"
                    id="others"
                    name="others"
                  />
                  <label htmlFor="others">Others (Please specify)</label>
                </CheckBoxInput>
                <InputBoxOther display={visibility ? "flex" : "none"}>
                  <Input type="text" placeholder="Enter others" />
                </InputBoxOther>
              </CheckBoxContainer>
            </InputSeg>
            <AlternativeButton color="#ff2957">Add another </AlternativeButton>
            <div
              style={{
                marginBottom: "8rem",
              }}
            ></div>
          </ProfileSection>
        </ProfileContent>
      </ProfileContainer>
      <SaveBox>
        <ButtonSave>
          <TransparentButton
            color="#FF2957"
            fontWeight={600}
            onClick={navigateBack}
          >
            Back
          </TransparentButton>
          <LongButton1>proceed to Dashboard</LongButton1>
        </ButtonSave>
      </SaveBox>
    </>
  );
};

export default ManageProfile;
