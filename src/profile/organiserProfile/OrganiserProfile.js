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
  Asterix,
} from "./OrganiserProfileStyled";

const OrganiserProfile = () => {
  const [file, setFile] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const [logoFile, setLogoFile] = useState("");
  const [logoIsSuccess, setLogoIsSuccess] = useState(false);
  const [logoErrorMsg, setLogoErrorMsg] = useState(false);
  const [logoLoading, setLogoLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile);

  const handleFileChange = async (e) => {
    const MAX_FILE_SIZE = 1024; // 1MB
    const file = e.target.files[0];
    const fileSizeKiloBytes = file.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("*Image size is greater than maximum limit*");
      setIsSuccess(false);
      return;
    } else {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "kingCabana");
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dcanx4ftd/image/upload",
          {
            method: "POST",
            body: data,
          }
        );
        const backgroundPicture = await response.json();
        console.log(backgroundPicture.secure_url);
        if (backgroundPicture.secure_url) {
          setFile(backgroundPicture.secure_url);
          setLoading(false);
          dispatch(
            editProfile({
              name: e.target.name,
              value: backgroundPicture.secure_url,
            })
          );
        }
      } catch (error) {
        setLoading(false);
        setErrorMsg("**ERROR UPLOADING IMAGE!**");
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (!file) {
      setErrorMsg("*Please choose an image*");
      setIsSuccess(false);
      return;
    }
    setErrorMsg("");
    setIsSuccess(true);
  }, [file]);

  const handleLogoFileChange = async (e) => {
    const MAX_FILE_SIZE = 1024; // 1MB
    const logoFile = e.target.files[0];
    const logoFileSizeKiloBytes = logoFile.size / 1024;

    if (logoFileSizeKiloBytes > MAX_FILE_SIZE) {
      setLogoErrorMsg("*Image size is greater than maximum limit*");
      setLogoIsSuccess(false);
      return;
    } else {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "kingCabana");
      setLogoLoading(true);
      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dcanx4ftd/image/upload",
          {
            method: "POST",
            body: data,
          }
        );
        const logoPicture = await response.json();
        console.log(logoPicture.secure_url);
        if (logoPicture.secure_url) {
          setLogoFile(logoPicture.secure_url);
          setLogoLoading(false);
          dispatch(
            editProfile({
              name: e.target.name,
              value: logoPicture.secure_url,
            })
          );
        }
      } catch (error) {
        setLogoLoading(false);
        setLogoErrorMsg("**ERROR UPLOADING IMAGE!**");
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (!logoFile) {
      setLogoErrorMsg("*Please choose an image*");
      setLogoIsSuccess(false);
      return;
    }
    setLogoErrorMsg("");
    setLogoIsSuccess(true);
  }, [logoFile]);

  useEffect(() => {
    if (
      logoFile &&
      state.organizerName &&
      state.email &&
      state.phoneNumber &&
      state.address &&
      state.organizerDetails
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [
    logoFile,
    state.organizerName,
    state.email,
    state.phoneNumber,
    state.address,
    state.organizerDetails,
  ]);

  const change = (e) => {
    dispatch(editProfile({ name: e.target.name, value: e.target.value }));
  };
  const navigateNext = () => {
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
              <InputText>
                Organizer's Name <Asterix>*</Asterix>
              </InputText>
              <Input
                type="text"
                placeholder="Enter name"
                name="organizerName"
                onChange={change}
                value={state.organizerName}
                required
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Organizer's Email address <Asterix>*</Asterix>
              </InputText>
              <Input
                type="email"
                placeholder="Enter Email address"
                name="email"
                onChange={change}
                value={state.email}
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Organizer's Phone Number <Asterix>*</Asterix>
              </InputText>
              <Input
                type="number"
                placeholder="Enter Phone number"
                name="phoneNumber"
                onChange={change}
                value={state.phoneNumber}
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Organizer's Office Address <Asterix>*</Asterix>
              </InputText>
              <Input
                type="text"
                placeholder="Enter office address"
                name="address"
                onChange={change}
                value={state.address}
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Organizer's Details <Asterix>*</Asterix>
              </InputText>
              <MyTextArea
                type="textarea"
                row="4"
                name="organizerDetails"
                placeholder="Give descriptions"
                onChange={change}
                value={state.organizerDetails}
              />
            </InputSeg>

            <InputSeg>
              <InputText>
                Logo <Asterix>*</Asterix>
              </InputText>
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
                      name="logoUrl"
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
                {logoIsSuccess ? (
                  <div
                    style={{
                      padding: "1rem",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ color: "green", marginRight: "1rem" }}>
                      Validation successful
                    </p>
                    <img
                      src={logoFile}
                      style={{ width: "50px", height: "50px" }}
                      alt=""
                    />
                  </div>
                ) : null}
                {logoLoading ? (
                  <h4 style={{ display: "flex", justifyContent: "flex-end" }}>
                    Loading...
                  </h4>
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
                      name="backgroundPictureUrl"
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
                {isSuccess ? (
                  <div
                    style={{
                      padding: "1rem",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ color: "green", marginRight: "1rem" }}>
                      Validation successful
                    </p>
                    <img
                      src={file}
                      style={{ width: "50px", height: "50px" }}
                      alt=""
                    />
                  </div>
                ) : null}
                {loading ? (
                  <h4 style={{ display: "flex", justifyContent: "flex-end" }}>
                    Loading...
                  </h4>
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
            <DownButtonFull onClick={navigateNext} disabled={isDisabled}>
              Next
            </DownButtonFull>
          </ButtonSave>
        </SaveBox>
      </ProfileContainer>
    </div>
  );
};

export default OrganiserProfile;
