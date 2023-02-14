import React, { useEffect, useState } from "react";
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
  Asterix,
} from "../organiserProfile/OrganiserProfileStyled";
import {
  CheckBoxInput,
  Input,
  InputBoxOther,
  InputText,
  SmallText,
} from "../../event/createEvent/FirstCreateEventStyled";
import { LongButton1 } from "../manageProfile/ManageProfileStyled";
import { editProfile } from "../../redux/slices/profileSlice";
import axios from "axios";

const SocialProfile = () => {
  const [visibility, setVisibility] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile);

  const toggleOthers = () => {
    if (visibility === true) {
      setVisibility(false);
    }
  };

  useEffect(() => {
    if (
      state.guarantorRole &&
      state.secondaryContactFullName &&
      state.jobRole &&
      state.officeAddress &&
      state.secondaryContactEmail &&
      state.secondaryContactPhoneNumber &&
      state.companyName
    ) {
      setIsDisabled(false);
    }
  }, [
    state.guarantorRole,
    state.secondaryContactFullName,
    state.jobRole,
    state.officeAddress,
    state.secondaryContactEmail,
    state.secondaryContactPhoneNumber,
    state.companyName,
  ]);

  const change = (e) => {
    dispatch(editProfile({ name: e.target.name, value: e.target.value }));
  };

  const navigateNext = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/profiles/create/",
        state,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      localStorage.clear();
      console.log(response);
      console.log(state);
      navigate("/home");
      alert("Form Submitted Successfully");
    } catch (error) {
      console.log(error);
      if (error.response.data === "Profile already exists") {
        localStorage.clear();
        alert("Profile already exists");
        navigate("/createProfile");
      } else {
        alert("Error Submitting Form");
        navigate("/organiserProfile");
      }
    }
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
                name="linkedIn"
                value={state.linkedIn}
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
                name="faceBook"
                value={state.faceBook}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Others</InputText>
              <Input
                type="text"
                placeholder="Enter URL"
                name="otherHandle"
                value={state.otherHandle}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Guarantor's information <Asterix>*</Asterix>
              </InputText>
              <SmallText>
                Select a role that befits a guarantor to this event community
              </SmallText>

              <CheckBoxInput>
                <input
                  type="radio"
                  id="patron"
                  name="guarantorRole"
                  value={"Patron"}
                  onChange={change}
                  onClick={toggleOthers}
                />
                <label htmlFor="patron">Patron</label>
              </CheckBoxInput>

              <CheckBoxInput>
                <input
                  type="radio"
                  id="staff"
                  name="guarantorRole"
                  value={"Staff Adviser"}
                  onChange={change}
                  onClick={toggleOthers}
                />
                <label htmlFor="staff">Staff Adviser</label>
              </CheckBoxInput>

              <CheckBoxInput>
                <input
                  type="radio"
                  id="coordinators"
                  name="guarantorRole"
                  value={"Coordinator"}
                  onChange={change}
                  onClick={toggleOthers}
                />
                <label htmlFor="coordinators">Coordinator</label>
              </CheckBoxInput>

              <CheckBoxInput>
                <input
                  onClick={() => setVisibility(!visibility)}
                  type="radio"
                  id="others"
                  name="guarantorRole"
                  onChange={change}
                  value={"Other"}
                />
                <label htmlFor="others">Others (please specify role)</label>
              </CheckBoxInput>
              <InputBoxOther display={visibility ? "flex" : "none"}>
                <Input
                  type="text"
                  placeholder="Enter others"
                  name="guarantorRole"
                  value={state.guarantorRole}
                  onChange={change}
                />
              </InputBoxOther>
            </InputSeg>

            <InputSeg>
              <InputText>
                Full name of {""}
                {state.guarantorRole
                  ? state.guarantorRole.charAt(0).toUpperCase() +
                    state.guarantorRole.slice(1)
                  : "Secondary Contact"}{" "}
                <Asterix>*</Asterix>
              </InputText>
              <Input
                type="text"
                placeholder="Enter Full Name of Secondary Contact"
                name="secondaryContactFullName"
                value={state.secondaryContactFullName}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Company/Business Name <Asterix>*</Asterix>
              </InputText>
              <Input
                type="text"
                placeholder="Enter Company/Business Name"
                name="companyName"
                value={state.companyName}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Job Role <Asterix>*</Asterix>
              </InputText>
              <Input
                type="text"
                placeholder="Enter Job Role"
                name="jobRole"
                value={state.jobRole}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Office Address <Asterix>*</Asterix>
              </InputText>
              <Input
                type="text"
                placeholder="Enter Office Address"
                name="officeAddress"
                value={state.officeAddress}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Phone Number <Asterix>*</Asterix>
              </InputText>
              <Input
                type="number"
                placeholder="Enter Phone Number"
                name="secondaryContactPhoneNumber"
                value={state.secondaryContactPhoneNumber}
                onChange={change}
              />
            </InputSeg>

            <InputSeg style={{ marginBottom: "4rem" }}>
              <InputText>
                Email Address <Asterix>*</Asterix>
              </InputText>
              <Input
                type="email"
                placeholder="Enter Email"
                name="secondaryContactEmail"
                value={state.secondaryContactEmail}
                onChange={change}
              />
            </InputSeg>
          </ProfileSection>
        </ProfileContent>

        <SaveBox>
          <ButtonSave>
            <TransparentButton onClick={navigateBack}>Back</TransparentButton>
            <LongButton1 onClick={navigateNext} disabled={isDisabled}>
              Proceed to Dashboard
            </LongButton1>
          </ButtonSave>
        </SaveBox>
      </ProfileContainer>
    </>
  );
};

export default SocialProfile;
