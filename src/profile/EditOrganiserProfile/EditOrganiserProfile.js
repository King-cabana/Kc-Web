import React from "react";
import {
  Input,
  InputText,
  MyTextArea,
  SmallText,
  InputBoxOther,
  CheckBoxInput,
} from "../../event/createEvent/FirstCreateEventStyled";
import {
  InputSeg,
  Asterix,
  Wrapper,
} from "../organiserProfile/OrganiserProfileStyled";
import {
  OverallContainer,
  EditSection,
  EditHeader,
  KCLogo,
  WrapLeftArrow,
  WrapLogo,
  EditLogoPicture,
  EditBackgroundPicture,
  WrapBs,
  WrapRx,
  EditForm,
} from "./EditOrganiserProfileStyled";
import { BsArrowLeft, BsPencilSquare } from "react-icons/bs";
import kingCabanaLogo from "../../images/kingCabanaLogo.svg";
import {
  WelcomeText,
  ImagesContainer,
} from "../../event/eventHome/EventHomeStyled";
import backgroundPicture from "../../images/dashboardBackgroundPicture.png";
import logo from "../../images/dashboardLogo.png";

const EditOrganiserProfile = () => {
  return (
    <>
      <OverallContainer>
        <EditSection>
          <EditHeader>
            <WrapLeftArrow>
              <BsArrowLeft size={"2rem"} />
            </WrapLeftArrow>
            <WrapLogo>
              <KCLogo src={kingCabanaLogo} alt="king cabana" />
            </WrapLogo>
          </EditHeader>

          <WelcomeText>Edit Profile</WelcomeText>

          <EditForm>
            <ImagesContainer>
              <section>
                <EditBackgroundPicture
                  src={backgroundPicture}
                  alt="Background Picture"
                />
                <WrapRx>
                  <BsPencilSquare size={"1.5rem"} color={"#000"} />
                </WrapRx>
              </section>

              <section>
                <EditLogoPicture src={logo} alt="Logo Picture" />
                <WrapBs>
                  <BsPencilSquare />
                </WrapBs>
              </section>
            </ImagesContainer>

            <InputSeg style={{ marginTop: "3rem" }}>
              <InputText>Organizer's Name</InputText>
              <Input
                type="text"
                placeholder="Enter name"
                name="organizerName"
                // onChange={change}
                // value={state.organizerName}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Organizer's Email address</InputText>
              <Input
                type="email"
                placeholder="E.g: email@example.com"
                name="email"
                // onChange={change}
                // value={state.email}
                title="Email format: xxx@xxxx.xxx)"
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
              />
            </InputSeg>

            <InputSeg>
              <InputText>Organizer's Phone Number</InputText>
              <Input
                type="tel"
                placeholder="E.g: +2348022345661"
                name="phoneNumber"
                // onChange={change}
                // value={state.phoneNumber}
                minLength={5}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Organizer's Office Address</InputText>
              <Input
                type="text"
                placeholder="E.g: 19, Isaac Mike Street, Thomas Avenue"
                name="address"
                // onChange={change}
                // value={state.address}
              />
            </InputSeg>

            <Wrapper>
              <InputSeg>
                <InputText>State</InputText>
                <Input
                  type="text"
                  placeholder="E.g: Kaduna State"
                  name="state"
                  //   onChange={change}
                  //   value={state.state}
                />
              </InputSeg>

              <InputSeg>
                <InputText>Country</InputText>
                <Input
                  type="text"
                  placeholder="E.g: Nigeria"
                  name="country"
                  //   onChange={change}
                  //   value={state.country}
                />
              </InputSeg>
            </Wrapper>

            <InputSeg>
              <InputText>
                Organizer's Details {/* {state.organizerDetails.length} */}
                /250 Characters
              </InputText>
              <MyTextArea
                type="textarea"
                row="4"
                name="organizerDetails"
                placeholder="Write a short bio: 250 characters maximum"
                maxLength={250}
                // onChange={change}
                // value={state.organizerDetails}
              />
            </InputSeg>

            <InputText>Social media information</InputText>
            <InputSeg>
              <InputText>Website</InputText>
              <Input
                type="url"
                placeholder="https://example.com/"
                name="website"
                // value={state.website}
                // onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Linkedin</InputText>
              <Input
                type="url"
                placeholder="https://linkedin.com/*****"
                name="linkedIn"
                // value={state.linkedIn}
                // onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Instagram</InputText>
              <Input
                type="url"
                placeholder="https://instagram.com/*****"
                name="instagram"
                // value={state.instagram}
                // onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Twitter</InputText>
              <Input
                type="url"
                placeholder="https://twitter.com/*****"
                name="twitter"
                // value={state.twitter}
                // onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Facebook</InputText>
              <Input
                type="url"
                placeholder="https://facebook.com/*****"
                name="faceBook"
                // value={state.faceBook}
                // onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Others</InputText>
              <Input
                type="url"
                placeholder="https://others.com/"
                name="otherHandle"
                // value={state.otherHandle}
                // onChange={change}
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
                  name="guarantorRole"
                  value={"Patron"}
                  //   onChange={change}
                  //   onClick={toggleOthers}
                />
                <label htmlFor="patron">Patron</label>
              </CheckBoxInput>

              <CheckBoxInput>
                <input
                  type="radio"
                  id="staff"
                  name="guarantorRole"
                  value={"Staff Adviser"}
                  //   onChange={change}
                  //   onClick={toggleOthers}
                />
                <label htmlFor="staff">Staff Adviser</label>
              </CheckBoxInput>

              <CheckBoxInput>
                <input
                  type="radio"
                  id="coordinators"
                  name="guarantorRole"
                  value={"Coordinator"}
                  //   onChange={change}
                  //   onClick={toggleOthers}
                />
                <label htmlFor="coordinators">Coordinator</label>
              </CheckBoxInput>

              <CheckBoxInput>
                <input
                  //   onClick={() => setVisibility(!visibility)}
                  type="radio"
                  id="others"
                  name="guarantorRole"
                  //   onChange={change}
                  value={"Other"}
                />
                <label htmlFor="others">Others (please specify role)</label>
              </CheckBoxInput>
              <InputBoxOther
              //   display={visibility ? "flex" : "none"}
              >
                <Input
                  type="text"
                  placeholder="Enter others"
                  name="guarantorRole"
                  //   value={state.guarantorRole}
                  //   onChange={change}
                />
              </InputBoxOther>
            </InputSeg>

            <InputSeg>
              <InputText>
                Full name of {""}
                {/* {state.guarantorRole
                  ? state.guarantorRole.charAt(0).toUpperCase() +
                    state.guarantorRole.slice(1)
                  : "Secondary Contact"}{" "} */}
              </InputText>
              <Input
                type="text"
                placeholder="Enter Full Name of Secondary Contact"
                name="secondaryContactFullName"
                // value={state.secondaryContactFullName}
                // onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Company/Business Name</InputText>
              <Input
                type="text"
                placeholder="Enter Company/Business Name"
                name="companyName"
                // value={state.companyName}
                // onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Job Role</InputText>
              <Input
                type="text"
                placeholder="Enter Job Role"
                name="jobRole"
                // value={state.jobRole}
                // onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Office Address</InputText>
              <Input
                type="text"
                placeholder="Enter Office Address"
                name="officeAddress"
                // value={state.officeAddress}
                // onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Phone Number</InputText>
              <Input
                type="tel"
                placeholder="E.g: +2348022345661"
                name="secondaryContactPhoneNumber"
                // value={state.secondaryContactPhoneNumber}
                // onChange={change}
                minLength={5}
              />
            </InputSeg>

            <InputSeg style={{ marginBottom: "4rem" }}>
              <InputText>Email Address</InputText>
              <Input
                type="email"
                title="Email format: xxx@xxxx.xxx)"
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                placeholder="E.g: email@example.com"
                name="secondaryContactEmail"
                // value={state.secondaryContactEmail}
                // onChange={change}
              />
            </InputSeg>

            <div
              style={{
                marginBottom: "8rem",
              }}
            ></div>
          </EditForm>
        </EditSection>
      </OverallContainer>
    </>
  );
};

export default EditOrganiserProfile;
