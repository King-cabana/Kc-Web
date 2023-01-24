import React, { useState } from "react";
import { ButtonContainer } from "./BudgetStyled";
import {
  ContactInfoContainer,
  ContactInfoHeader,
  ContactInfoTitle1,
  ContactInfoSubtitle,
  ContactInfoSection,
  ContactInfoTitle2,
  ContactInfoUpload,
  ContactInfoLabel,
  ContactInfoInput,
  ContactInfoPadding,
  Radio,
  RadioInput,
  RadioLabel,
  OthersInput,
} from "./ContactInfoStyled";
import "../../App.css";
import {
  PrimaryButton,
  AlternativeButton2,
} from "../../components/button/button";
import CreateEventTopBar from "../topBar/CreateEventTopBar/CreateEventTopBar";
import ProgressBar from "../progressBar/ProgressBar";

const ContactInfo = () => {
  // form states
  const [pryFullName, setPryFullName] = useState("");
  const [pryPhoneNumber, setPryPhoneNumber] = useState("");
  const [pryEmailAddress, setPryEmailAddress] = useState("");
  const [secRole, setSecRole] = useState("");
  const [secFullName, setSecFullName] = useState("");
  const [secCompanyName, setSecCompanyName] = useState("");
  const [secJobRole, setSecJobRole] = useState("");
  const [secOfficeAddress, setSecOfficeAddress] = useState("");
  const [secPhoneNumber, setSecPhoneNumber] = useState("");
  const [secEmailAddress, setSecEmailAddress] = useState("");

  ///////////////
  const [others, setOthers] = useState(false);

  const handleSubmit = async function (e) {
    e.preventDefault();
    const contactInformation = {
      pryFullName,
      pryPhoneNumber,
      pryEmailAddress,
      secRole,
      secFullName,
      secCompanyName,
      secJobRole,
      secOfficeAddress,
      secPhoneNumber,
      secEmailAddress,
    };
    console.log(contactInformation);
  };
  return (
    <>
      <ContactInfoContainer>
        <ContactInfoHeader>
          <ContactInfoTitle1>Create Event</ContactInfoTitle1>
          <ContactInfoSubtitle>
            Capture and share every information needed to make your event
            proposal desirable of attracting sponsorships.
          </ContactInfoSubtitle>
        </ContactInfoHeader>

        <ContactInfoSection>
          <ContactInfoTitle2>Contact Information </ContactInfoTitle2>
          <ContactInfoUpload>
            <ContactInfoSubtitle>Primary Contact</ContactInfoSubtitle>
            <ContactInfoPadding>
              <ContactInfoLabel>Full Name</ContactInfoLabel>
              <ContactInfoInput
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setPryFullName(e.target.value)}
              />
              <ContactInfoLabel>Phone Number</ContactInfoLabel>
              <ContactInfoInput
                type="text"
                placeholder="Enter Phone Number"
                onChange={(e) => setPryPhoneNumber(e.target.value)}
              />
              <ContactInfoLabel>Email Address</ContactInfoLabel>
              <ContactInfoInput
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setPryEmailAddress(e.target.value)}
              />
              <p
                style={{
                  color: "red",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Please provide your email: validation
              </p>
            </ContactInfoPadding>
          </ContactInfoUpload>
          <ContactInfoUpload>
            <ContactInfoSubtitle>Secondary Contact</ContactInfoSubtitle>
            <ContactInfoPadding>
              <ContactInfoLabel>
                Select a role that befits a guarantor to this event community
              </ContactInfoLabel>
              <Radio>
                <RadioInput
                  type="radio"
                  id="patron"
                  name="role"
                  value="patron"
                />
                <RadioLabel htmlFor="patron">Patron</RadioLabel>
              </Radio>

              <Radio>
                <RadioInput
                  type="radio"
                  id="staffAdviser"
                  name="role"
                  value="Staff Adviser"
                />
                <RadioLabel htmlFor="staffAdviser">Staff Adviser</RadioLabel>
              </Radio>

              <Radio>
                <RadioInput
                  type="radio"
                  id="coordinator"
                  name="role"
                  value="coordinator"
                />
                <RadioLabel htmlFor="coordinator">Coordinator</RadioLabel>
              </Radio>
              <Radio>
                <RadioInput
                  type="radio"
                  id="others"
                  name="role"
                  value="others"
                  onClick={() => setOthers(!others)}
                />
                <RadioLabel htmlFor="others">
                  Others (Please Specify)
                </RadioLabel>
              </Radio>
              <OthersInput
                type="text"
                placeholder="Enter Others"
                display={others ? "flex" : "none"}
              ></OthersInput>
              <ContactInfoLabel>
                Full Name of <i>Secondary Contact</i>
              </ContactInfoLabel>
              <ContactInfoInput
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setSecFullName(e.target.value)}
              />
              <ContactInfoLabel>Company/Business Name</ContactInfoLabel>
              <ContactInfoInput
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setSecCompanyName(e.target.value)}
              />
              <ContactInfoLabel>Job Role</ContactInfoLabel>
              <ContactInfoInput
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setSecJobRole(e.target.value)}
              />
              <ContactInfoLabel>Office Address</ContactInfoLabel>
              <ContactInfoInput
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setSecOfficeAddress(e.target.value)}
              />
              <ContactInfoLabel>Phone Number</ContactInfoLabel>
              <ContactInfoInput
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setSecPhoneNumber(e.target.value)}
              />
              <ContactInfoLabel>Email Address</ContactInfoLabel>
              <ContactInfoInput
                type="email"
                placeholder="Enter Full Name"
                onChange={(e) => setSecEmailAddress(e.target.value)}
              />
            </ContactInfoPadding>

            <ButtonContainer>
              <AlternativeButton2
                style={{
                  color: "#FF2957",
                  fontWeight: "600",
                  marginRight: "2rem",
                }}
              >
                Discard
              </AlternativeButton2>
              <PrimaryButton
                onClick={handleSubmit}
                //   disabled={isDisabled}
              >
                Submit & Preview
              </PrimaryButton>
            </ButtonContainer>
          </ContactInfoUpload>
        </ContactInfoSection>
      </ContactInfoContainer>
    </>
  );
};

export default ContactInfo;
