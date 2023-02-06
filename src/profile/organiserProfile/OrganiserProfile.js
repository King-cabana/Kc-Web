import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import {
  Input,
  InputText,
  FormContainer,
  FileWrapper,
  CustomWrapper,
  UploadBtn,
  Supported,
  MyTextArea,
} from "../../event/createEvent/FirstCreateEventStyled";
import { DownButtonFull } from "../../event/createEvent/SecondCreateEventStyled";
import { EventHeader1 } from "../../event/createEvent/TimeLineEventsStyled";
import kingCabanaLogo from "../../images/kingCabanaLogo.svg";
import { editProfile } from "../../redux/slices/profileSlice";
import {
  KCLogo,
  LogoDiv,
  ProfileContainer,
  ProfileContent,
  ProfileProgress,
  ProfileSection,
  ShapedBackground,
} from "../createProfile/CreateProfileStyled";
import {
  InputSeg,
  SaveBox,
  ButtonSave,
  TransparentButton,
} from "./OrganiserProfileStyled";

const OrganiserProfile = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [logoIsSuccess, setLogoIsSuccess] = useState(false);
  const [file, setFile] = useState("");
  const [logoFile, setLogoFile] = useState("");

  const [errorMsg, setErrorMsg] = useState(false);
  const [logoErrorMsg, setLogoErrorMsg] = useState(false);
  const [correctFileSize, setCorrectFileSize] = useState(false);
  const [correctLogoFileSize, setCorrectLogoFileSize] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile);

  useEffect(() => {
    const MAX_FILE_SIZE = 1024; // 1MB

    if (!file) {
      setErrorMsg("*Please choose an image*");
      setIsSuccess(false);
      return;
    }

    const fileSizeKiloBytes = file.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("*Image size is greater than maximum limit*");
      setIsSuccess(false);
      setCorrectFileSize(false);
      return;
    }

    setErrorMsg("");
    setIsSuccess(true);
    setCorrectFileSize(true);
    // validateFile(file)
  }, [file]);

  useEffect(() => {
    const MAX_FILE_SIZE = 1024; // 1MB
    if (!logoFile) {
      setLogoErrorMsg("*Please choose an image*");
      setLogoIsSuccess(false);
      return;
    }

    const fileSizeKiloBytes = logoFile.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setLogoErrorMsg("*Image size is greater than maximum limit*");
      setLogoIsSuccess(false);
      setCorrectLogoFileSize(false);
      return;
    }

    setLogoErrorMsg("");
    setLogoIsSuccess(true);
    setCorrectLogoFileSize(true);
    // validateFile(file)
  }, [logoFile]);

  const change = (e) => {
    dispatch(editProfile({ name: e.target.name, value: e.target.value }));
  };
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      alert(e.target.files[0].size);
      dispatch(
        editProfile({
          name: e.target.name,
          value: e.target.files[0],
        })
      );

      // alert(JSON.stringify(state.logo))
    }
  };
  const handleLogoFileChange = (e) => {
    if (e.target.files) {
      setLogoFile(e.target.files[0]);
      dispatch(
        editProfile({
          name: e.target.name,
          value: e.target.files[0],
        })
      );

      // alert(JSON.stringify(state.logo))
    }
  };
  const navigateNext = (e) => {
    // console.log({
    //   name: state.name,
    //   email: state.email,
    //   backgroundPicture: state.backgroundPicture,
    // });
    navigate("/socialProfile");
  };
  const navigateBack = () => {
    navigate("/createProfile");
  };
  return (
    <div>
      <ProfileContainer>
        <ShapedBackground />
        <ProfileContent>
          <LogoDiv>
            <KCLogo src={kingCabanaLogo} alt="kcLogo" />
          </LogoDiv>
          <ProfileSection>
            <ProfileProgress>Step 2 of 3</ProfileProgress>

            <EventHeader1>Set up your Event Organizer's Profile</EventHeader1>
            <InputSeg>
              <InputText>Organizer's / Association's Name</InputText>
              <Input
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={change}
                value={state.name}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Organizer's / Association's Email address</InputText>
              <Input
                type="email"
                placeholder="Enter Email address"
                name="email"
                onChange={change}
                value={state.email}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Organizer's / Association's Phone Number</InputText>
              <Input
                type="number"
                placeholder="Enter Phone number"
                name="organiserNumber"
                onChange={change}
                value={state.organiserNumber}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Organizer's / Association's Office Address</InputText>
              <Input
                type="text"
                placeholder="Enter office address"
                name="organiserAddress"
                onChange={change}
                value={state.organiserAddress}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Organizer's / Association's Details</InputText>
              <MyTextArea
                type="textarea"
                row="4"
                name="organiserDetails"
                placeholder="Give descriptions"
                onChange={change}
                value={state.organiserDetails}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Logo</InputText>
              <FormContainer>
                <FileWrapper>
                  <CustomWrapper>
                    <input
                      type="file"
                      style={{ cursor: "pointer" }}
                      onChange={handleLogoFileChange}
                      hidden
                      id="logoFile"
                      accept="image/png, image/jpeg, image/jpg"
                      name="logoFile"
                    />
                  </CustomWrapper>
                  <UploadBtn htmlFor="logoFile">Upload</UploadBtn>
                </FileWrapper>
                <h3
                  style={{
                    color: "#ff2957",
                    fontSize: "16px",
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "0.5rem",
                  }}
                >
                  {logoErrorMsg}
                </h3>
                <Supported>Support image: JPEG, JPG, PNG, *img</Supported>
                <Supported style={{ color: "#ff2957" }}>
                  Not more than 1mb
                </Supported>
                {correctLogoFileSize && (
                  <div>{logoFile && `${logoFile.name}`}</div>
                )}
                {logoIsSuccess ? (
                  <p style={{ color: "green" }}>Validation successful</p>
                ) : null}
              </FormContainer>
            </InputSeg>

            <InputSeg>
              <InputText>Background Picture</InputText>
              <FormContainer>
                <FileWrapper>
                  <CustomWrapper>
                    <input
                      type="file"
                      style={{ cursor: "pointer" }}
                      onChange={handleFileChange}
                      hidden
                      id="file"
                      accept="image/png, image/jpeg, image/jpg"
                      name="backgroundPicture"
                    />
                  </CustomWrapper>
                  <UploadBtn htmlFor="file">Upload</UploadBtn>
                </FileWrapper>
                <h3
                  style={{
                    color: "#ff2957",
                    fontSize: "16px",
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "0.5rem",
                  }}
                >
                  {errorMsg}
                </h3>
                <Supported>Support image: JPEG, JPG, PNG, *img</Supported>
                <Supported style={{ color: "#ff2957" }}>
                  Not more than 1mb
                </Supported>
                {correctFileSize && <div>{file && `${file.name}`}</div>}
                {isSuccess ? (
                  <p style={{ color: "green" }}>Validation successful</p>
                ) : null}
              </FormContainer>
            </InputSeg>
            <div
              style={{
                marginBottom: "8rem",
              }}
            ></div>
          </ProfileSection>
        </ProfileContent>
        <SaveBox>
          <ButtonSave>
            <TransparentButton onClick={navigateBack}>Back</TransparentButton>
            <DownButtonFull onClick={navigateNext}>Next</DownButtonFull>
          </ButtonSave>
        </SaveBox>
      </ProfileContainer>
    </div>
  );
};

export default OrganiserProfile;
