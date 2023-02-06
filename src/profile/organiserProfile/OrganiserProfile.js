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
  const [file, setFile] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [correctFileSize, setCorrectFileSize] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile);

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

  const change = (e) => {
    dispatch(editProfile({ name: e.target.name, value: e.target.value }));
  };
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      dispatch(
        editProfile({
          name: e.target.name,
          value: e.target.files[0],
        })
      );
    }
  };
  const navigateNext = (e) => {
    console.log({
      name: state.name,
      email: state.email,
      backgroundPicture: state.backgroundPicture,
    });
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
            <ProfileProgress>Step 2 of 4</ProfileProgress>

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
                <Supported>Support files; PDF, JPG, CSV</Supported>
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
