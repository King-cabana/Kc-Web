import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setEventOrganizerProfile } from "../../redux/slices/eventOrganizerProfileSlice";
import {
  ModalButtonContainer,
  ModalText,
  PopUpComponent,
  PopUpOverlay,
  BtnHolderLink,
} from "../../event/budgetInventory/InventoryStyled";
import {
  Input,
  InputText,
  MyTextArea,
  SmallText,
  InputBoxOther,
  CheckBoxInput,
  Supported,
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
  ButtonWrapper,
  Messages,
  ErrorMessages,
} from "./EditOrganiserProfileStyled";
import { BsArrowLeft, BsPencilSquare } from "react-icons/bs";
import { ImSpinner6 } from "react-icons/im";
import kingCabanaLogo from "../../images/kingCabanaLogo.svg";
import {
  WelcomeText,
  ImagesContainer,
} from "../../event/eventHome/EventHomeStyled";
import backgroundPicture from "../../images/dashboardBackgroundPicture.png";
import logo from "../../images/dashboardLogo.png";
import {
  PrimaryButton,
  ModalPrimaryButton,
  AlternativeButton2,
} from "../../components/button/button";
import { useNavigate } from "react-router";

const EditOrganiserProfile = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.eventOrganizerProfile);
  const [incomingData, setIncomingData] = useState();
  const toggleModal = () => {
    setModal(!modal);
  };
  // Modal Contitions
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const showModal = !modal && "notShown";
  const [isDisabled, setIsDisabled] = useState(false);
  const [sending, setSending] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [file, setFile] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const [logoFile, setLogoFile] = useState("");
  const [logoIsSuccess, setLogoIsSuccess] = useState(false);
  const [logoErrorMsg, setLogoErrorMsg] = useState(false);
  const [logoLoading, setLogoLoading] = useState(false);
  const [logoSuccessMsg, setLogoSuccessMsg] = useState(false);

  const change = (e) => {
    // dispatch(
    //   setEventOrganizerProfile({ name: e.target.name, value: e.target.value })
    // );
    setIncomingData({ ...incomingData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchOrganizerProfile = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/profiles/${state?.id}`
      );
      console.log(data);
      dispatch(setEventOrganizerProfile(data));
      setIncomingData(data);
    };
    fetchOrganizerProfile();
  }, []);

  useEffect(() => {
    console.log(incomingData);
  }, [incomingData]);

  // if (state !== undefined) {
  const { address, guarantor } = state;
  //   const addressString = `${address?.houseNo ? `${address?.houseNo},` : ""}
  // ${address?.street || ""}
  // ${address?.city ? `${address?.city},` : ""}
  // ${address?.state ? `${address?.state}.` : ""}
  // ${address?.country ? `${address?.country}.` : ""}
  // ${address?.zipCode ? `${address?.zipCode}.` : ""}`;

  const { officeAddress } = guarantor;
  // const officeAddressString = `${
  //   officeAddress?.houseNo ? `${officeAddress?.houseNo},` : ""
  // }
  // ${officeAddress?.street || ""}
  // ${officeAddress?.city ? `${officeAddress?.city},` : ""}
  // ${officeAddress?.state ? `${officeAddress?.state}.` : ""}
  // ${officeAddress?.country ? `${officeAddress?.country}.` : ""}
  // ${officeAddress?.zipCode ? `${officeAddress?.zipCode}.` : ""}`;
  // }

  // const { address, guarantor } = incomingData;
  // const newAddressString = `${
  //   incomingData.address.houseNo ? `${incomingData.address.houseNo},` : ""
  // }
  // ${incomingData.address.street || ""}
  // ${incomingData.address.city ? `${incomingData.address.city},` : ""}
  // ${incomingData.address.state ? `${incomingData.address.state}.` : ""}
  // ${incomingData.address.country ? `${incomingData.address.country}.` : ""}
  // ${incomingData.address.zipCode ? `${incomingData.address.zipCode}.` : ""}`;

  const handleFileChange = async (e) => {
    const MAX_FILE_SIZE = 1024; // 1MB
    const file = e.target.files[0];
    const fileSizeKiloBytes = file.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("Image size is greater than 1mb");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
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
          // dispatch(
          //   setEventOrganizerProfile({
          //     name: e.target.name,
          //     value: backgroundPicture.secure_url,
          //   })
          // );
        }
      } catch (error) {
        setLoading(false);
        setErrorMsg("Error Changing Background Image!");
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (!file) {
      setIsSuccess(false);
      return;
    }
    setIsSuccess(true);
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
    }, 3000);
  }, [file]);

  const handleLogoFileChange = async (e) => {
    const MAX_FILE_SIZE = 1024; // 1MB
    const logoFile = e.target.files[0];
    const logoFileSizeKiloBytes = logoFile.size / 1024;

    if (logoFileSizeKiloBytes > MAX_FILE_SIZE) {
      setLogoErrorMsg("Image size is greater than 1mb");
      setTimeout(() => {
        setLogoErrorMsg("");
      }, 3000);
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
          // dispatch(
          //   setEventOrganizerProfile({
          //     name: e.target.name,
          //     value: logoPicture.secure_url,
          //   })
          // );
        }
      } catch (error) {
        setLogoLoading(false);
        setLogoErrorMsg("**Error Changing Logo Image!**");
        setTimeout(() => {
          setLogoErrorMsg("");
        }, 3000);
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (!logoFile) {
      setLogoIsSuccess(false);
      return;
    }
    setLogoIsSuccess(true);
    setLogoSuccessMsg(true);
    setTimeout(() => {
      setLogoSuccessMsg(false);
    }, 3000);
  }, [logoFile]);

  const toggleOthers = () => {
    if (visibility === true) {
      setVisibility(false);
    }
  };

  const saveNavigate = async (e) => {
    e.preventDefault();
    setSending(true);
    setIsDisabled(true);
    try {
      const { data } = await axios.patch(
        `http://localhost:8080/profiles/${state?.id}`,
        incomingData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(data);
      dispatch(setEventOrganizerProfile(data));
      alert("Changes Saved Successfully");
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("Unable to Save Changes");
      setSending(false);
      setIsDisabled(false);
    }
  };
  return (
    <>
      {modal && <PopUpOverlay onClick={toggleModal}></PopUpOverlay>}
      <OverallContainer>
        <EditSection>
          <EditHeader>
            <WrapLeftArrow onClick={toggleModal}>
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
                {isSuccess ? (
                  <EditBackgroundPicture src={file} alt="new bg pic" />
                ) : (
                  <EditBackgroundPicture
                    src={
                      state.backgroundPictureUrl
                        ? state.backgroundPictureUrl
                        : backgroundPicture
                    }
                    alt="Background Picture"
                  />
                )}
                <WrapRx htmlFor="backgroundPictureFile">
                  <BsPencilSquare size={"1.5rem"} color={"#000"} />
                </WrapRx>
                <input
                  type="file"
                  style={{ cursor: "pointer" }}
                  onChange={handleFileChange}
                  hidden
                  id="backgroundPictureFile"
                  accept="image/png, image/jpeg, image/jpg"
                  name="logoUrl"
                />
                <ErrorMessages>{errorMsg}</ErrorMessages>

                {successMsg ? (
                  <Messages>
                    <p style={{ color: "green", marginRight: "1rem" }}>
                      Background Image Changed Successfully
                    </p>
                  </Messages>
                ) : null}
                {loading ? (
                  <h4 style={{ display: "flex", justifyContent: "flex-end" }}>
                    Loading...
                  </h4>
                ) : null}
              </section>

              <section>
                {logoIsSuccess ? (
                  <EditLogoPicture src={logoFile} alt="new logo pic" />
                ) : (
                  <EditLogoPicture
                    src={state.logoUrl ? state.logoUrl : logo}
                    alt="Logo Picture"
                  />
                )}
                <WrapBs htmlFor="logoFile">
                  <BsPencilSquare />
                </WrapBs>
                <input
                  type="file"
                  style={{ cursor: "pointer" }}
                  onChange={handleLogoFileChange}
                  hidden
                  id="logoFile"
                  accept="image/png, image/jpeg, image/jpg"
                  name="logoUrl"
                />
                <ErrorMessages>{logoErrorMsg}</ErrorMessages>
                {logoSuccessMsg ? (
                  <Messages>
                    <p style={{ color: "green", marginRight: "1rem" }}>
                      Logo Image Changed Successfully
                    </p>
                  </Messages>
                ) : null}
                {logoLoading ? (
                  <h4 style={{ display: "flex", justifyContent: "flex-end" }}>
                    Loading...
                  </h4>
                ) : null}
              </section>
              <Supported>Supported formats: JPEG, JPG, PNG, *img</Supported>
              <Supported style={{ color: "#ff2957" }}>
                Not more than 1mb
              </Supported>
            </ImagesContainer>

            <InputSeg>
              <InputText>Organizer's Name</InputText>
              <Input
                type="text"
                placeholder="Enter name"
                name="organizerName"
                onChange={change}
                defaultValue={state?.organizerName}
                value={incomingData?.organizerName}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Organizer's Email address</InputText>
              <Input
                type="email"
                placeholder="E.g: email@example.com"
                name="email"
                onChange={change}
                defaultValue={state?.email}
                value={incomingData?.email}
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
                onChange={change}
                defaultValue={state?.phoneNumber}
                value={incomingData?.phoneNumber}
                minLength={5}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Organizer's Office Address</InputText>
              <Input
                type="text"
                placeholder="E.g: 19, Isaac Mike Street, Thomas Avenue"
                name="address"
                onChange={change}
                // defaultValue={addressString}
                value={incomingData?.address?.houseNo
                  ?.concat(incomingData?.address?.state)
                  ?.concat(incomingData?.address?.country)}
              />
            </InputSeg>

            <Wrapper>
              <InputSeg>
                <InputText>State</InputText>
                <Input
                  type="text"
                  placeholder="E.g: Kaduna State"
                  name="state"
                  onChange={change}
                  defaultValue={state?.address.state}
                  value={incomingData?.address.state}
                />
              </InputSeg>

              <InputSeg>
                <InputText>Country</InputText>
                <Input
                  type="text"
                  placeholder="E.g: Nigeria"
                  name="country"
                  onChange={change}
                  defaultValue={state?.address.country}
                  value={incomingData?.address.country}
                />
              </InputSeg>
            </Wrapper>

            <InputSeg>
              <InputText>
                Organizer's Details{" "}
                <Asterix>
                  {state?.organizerDetails.length ||
                    incomingData?.organizerDetails.length}
                  /250 Characters*
                </Asterix>
              </InputText>
              <MyTextArea
                type="textarea"
                row="4"
                name="organizerDetails"
                placeholder="Write a short bio: 250 characters maximum"
                maxLength={250}
                onChange={change}
                defaultValue={state?.organizerDetails}
                value={incomingData?.organizerDetails}
              />
            </InputSeg>

            <InputText>Social media information</InputText>
            <InputSeg>
              <InputText>Website</InputText>
              <Input
                type="url"
                placeholder="https://example.com/"
                name="website"
                defaultValue={state?.website}
                value={incomingData?.website}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Linkedin</InputText>
              <Input
                type="url"
                placeholder="https://linkedin.com/*****"
                name="linkedIn"
                defaultValue={state?.linkedIn}
                value={incomingData?.linkedIn}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Instagram</InputText>
              <Input
                type="url"
                placeholder="https://instagram.com/*****"
                name="instagram"
                defaultValue={state?.instagram}
                value={incomingData?.instagram}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Twitter</InputText>
              <Input
                type="url"
                placeholder="https://twitter.com/*****"
                name="twitter"
                defaultValue={state?.twitter}
                value={incomingData?.twitter}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Facebook</InputText>
              <Input
                type="url"
                placeholder="https://facebook.com/*****"
                name="faceBook"
                defaultValue={state?.faceBook}
                value={incomingData?.faceBook}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Others</InputText>
              <Input
                type="url"
                placeholder="https://others.com/"
                name="otherHandle"
                defaultValue={state?.otherHandle}
                value={incomingData?.otherHandle}
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
                  defaultValue={state?.guarantorRole}
                  value={incomingData?.guarantorRole}
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
              </InputText>
              <Input
                type="text"
                placeholder="Enter Full Name of Secondary Contact"
                name="secondaryContactFullName"
                defaultValue={state?.guarantor.secondaryContactFullName}
                value={incomingData?.guarantor.secondaryContactFullName}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Company/Business Name</InputText>
              <Input
                type="text"
                placeholder="Enter Company/Business Name"
                name="companyName"
                defaultValue={state?.guarantor.companyName}
                value={incomingData?.guarantor.companyName}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Job Role</InputText>
              <Input
                type="text"
                placeholder="Enter Job Role"
                name="jobRole"
                defaultValue={state?.guarantor.jobRole}
                value={incomingData?.guarantor.jobRole}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Office Address</InputText>
              <Input
                type="text"
                placeholder="Enter Office Address"
                name="officeAddress"
                // defaultValue={officeAddressString}
                value={incomingData?.guarantor.address}
                onChange={change}
              />
            </InputSeg>

            <InputSeg>
              <InputText>Phone Number</InputText>
              <Input
                type="tel"
                placeholder="E.g: +2348022345661"
                name="secondaryContactPhoneNumber"
                defaultValue={state?.guarantor.secondaryContactPhoneNumber}
                value={incomingData?.guarantor.secondaryContactPhoneNumber}
                onChange={change}
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
                defaultValue={state?.guarantor.secondaryContactEmail}
                value={incomingData?.guarantor.secondaryContactEmail}
                onChange={change}
              />
            </InputSeg>

            <div
              style={{
                marginBottom: "8rem",
              }}
            ></div>

            <div className={`${showModal}`}>
              <PopUpComponent>
                <ModalText>
                  This is going to disrupt all unsaved changes. Are you sure you
                  want to continue?
                </ModalText>

                <ModalButtonContainer>
                  <BtnHolderLink>
                    <AlternativeButton2
                      onClick={() => setModal(!modal)}
                      style={{
                        color: "#FF2957",
                      }}
                    >
                      Continue Editing
                    </AlternativeButton2>
                  </BtnHolderLink>

                  <BtnHolderLink to="/home">
                    <ModalPrimaryButton>Yes, Discard</ModalPrimaryButton>
                  </BtnHolderLink>
                </ModalButtonContainer>
              </PopUpComponent>
            </div>
            <ButtonWrapper>
              <PrimaryButton onClick={saveNavigate} disabled={isDisabled}>
                {sending ? <ImSpinner6 size={"1.5rem"} /> : "Save"}
              </PrimaryButton>
            </ButtonWrapper>
          </EditForm>
        </EditSection>
      </OverallContainer>
    </>
  );
};

export default EditOrganiserProfile;
