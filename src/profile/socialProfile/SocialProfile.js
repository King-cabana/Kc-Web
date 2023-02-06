import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  KCLogo,
  LogoDiv,
  ProfileContainer,
  ProfileContent,
  ProfileProgress,
  ProfileSection,
  ShapedBackground,
} from "../createProfile/CreateProfileStyled";
import kingCabanaLogo from "../../images/kingCabanaLogo.svg";
import { EventHeader1 } from "../../event/createEvent/TimeLineEventsStyled";
import {
  ButtonSave,
  InputSeg,
  SaveBox,
  TransparentButton,
} from "../organiserProfile/OrganiserProfileStyled";
import {
  CheckBoxInput,
  Input,
  InputBoxOther,
  InputText,
  SmallText,
} from "../../event/createEvent/FirstCreateEventStyled";
// import { DownButtonFull } from "../../event/createEvent/SecondCreateEventStyled";
import { LongButton1 } from "../manageProfile/ManageProfileStyled";
import { editProfile } from "../../redux/slices/profileSlice";

const SocialProfile = () => {
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();

  const toggleOthers = () => {
    if (visibility === true) {
      setVisibility(false);
    }
  };

  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile);

  const [inputState, setInputState] = useState("");

  const change = (e) => {
    // const value = e.target.value === "others" ? inputState : e.target.value;
    dispatch(editProfile({ name: e.target.name, value: e.target.value }));
  };

  const navigateNext = () => {
    console.log({
      name: state.name,
      email: state.email,
      backgroundPicture: state.backgroundPicture,
      website: state.website,
      linkedin: state.linkedin,
      instagram: state.instagram,
      twitter: state.twitter,
      facebook: state.facebook,
      others: state.others,
      guarantorInformation: state.guarantorInformation,
      company: state.company,
      jobRole: state.jobRole,
      officeAddress: state.officeAddress,
      guarantorNumber: state.guarantorNumber,
      guarantorEmail: state.guarantorEmail,
    });
    navigate("/home");
    // navigate("/manageProfile");
  };
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
            <EventHeader1>Social Media & Guarantor information</EventHeader1>

            <InputText>Social media information</InputText>
            <InputSeg>
              <InputText>Website</InputText>
              <Input
                type="text"
                placeholder="Enter URL"
                name="website"
                value={state.website}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Linkedin</InputText>
              <Input
                type="text"
                placeholder="Enter URL"
                name="linkedin"
                value={state.linkedin}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Instagram</InputText>
              <Input
                type="text"
                placeholder="Enter URL"
                name="instagram"
                value={state.instagram}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Twitter</InputText>
              <Input
                type="text"
                placeholder="Enter URL"
                name="twitter"
                value={state.twitter}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Facebook</InputText>
              <Input
                type="text"
                placeholder="Enter URL"
                name="facebook"
                value={state.facebook}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Others</InputText>
              <Input
                type="text"
                placeholder="Enter URL"
                name="others"
                value={state.others}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Guarantor's information</InputText>
              <SmallText>
                Select a role that befits a guarantor to this event community
              </SmallText>

              <CheckBoxInput>
                <input
                  type="radio"
                  id="patron"
                  name="guarantorInformation"
                  value={"patron"}
                  onChange={change}
                  onClick={toggleOthers}
                />
                <label htmlFor="patron">Patron</label>
              </CheckBoxInput>

              <CheckBoxInput>
                <input
                  type="radio"
                  id="staff"
                  name="guarantorInformation"
                  value={"staff-Adviser"}
                  onChange={change}
                  onClick={toggleOthers}
                />
                <label htmlFor="staff">Staff Adviser</label>
              </CheckBoxInput>

              <CheckBoxInput>
                <input
                  type="radio"
                  id="coordinators"
                  name="guarantorInformation"
                  value={"coordinators"}
                  onChange={change}
                  onClick={toggleOthers}
                />
                <label htmlFor="coordinators">Coordinators</label>
              </CheckBoxInput>

              <CheckBoxInput>
                <input
                  onClick={() => setVisibility(!visibility)}
                  type="radio"
                  id="others"
                  name="guarantorInformation"
                  onChange={change}
                  value={"others"}
                />
                <label htmlFor="others">Others (please specify)</label>
              </CheckBoxInput>
              <InputBoxOther display={visibility ? "flex" : "none"}>
                <Input
                  type="text"
                  placeholder="Enter others"
                  name="guarantorInformation"
                  value={state.guarantorInformation}
                  // onChange={(e) => setInputState(e.target.value)}
                  onChange={change}
                />
              </InputBoxOther>
            </InputSeg>

            <InputText>
              Full name of {""}
              {state.guarantorInformation.charAt(0).toUpperCase() +
                state.guarantorInformation.slice(1)}
            </InputText>
            <InputSeg>
              <InputText>Company/Business Name</InputText>
              <Input
                type="text"
                placeholder="Enter Company/Business Name"
                name="company"
                value={state.company}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Job Role</InputText>
              <Input
                type="text"
                placeholder="Enter Job Role"
                name="jobRole"
                value={state.jobRole}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Office Address</InputText>
              <Input
                type="text"
                placeholder="Enter Office Address"
                name="officeAddress"
                value={state.officeAddress}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Phone Number</InputText>
              <Input
                type="number"
                placeholder="Enter Phone Number"
                name="guarantorNumber"
                value={state.guarantorNumber}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Email Address</InputText>
              <Input
                type="email"
                placeholder="Enter Email"
                name="guarantorEmail"
                value={state.guarantorEmail}
                onChange={change}
              />
            </InputSeg>
          </ProfileSection>
        </ProfileContent>

        <SaveBox>
          <ButtonSave>
            <TransparentButton onClick={navigateBack}>Back</TransparentButton>
            <LongButton1 onClick={navigateNext}>
              Proceed to Dashboard
            </LongButton1>
          </ButtonSave>
        </SaveBox>
      </ProfileContainer>
    </>
  );
};

export default SocialProfile;
