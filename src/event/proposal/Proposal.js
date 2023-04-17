import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ProposalContainer,
  WelcomeHeader,
  Txt,
  OverallContainer,
  ProposalBackground,
  ProposalInner,
  BenefitsTag,
} from "./ProposalStyled";
import { BsChevronRight } from "react-icons/bs";
import { InputSeg } from "../../profile/organiserProfile/OrganiserProfileStyled";
import {
  CustomWrapper,
  FormContainer,
  Input,
  Supported,
  UploadBtn,
} from "../createEvent/FirstCreateEventStyled";
import { ButtonContainer, FileWrapper } from "../budgetInventory/BudgetStyled";
import { editProfile } from "../../redux/slices/profileSlice";
import { useNavigate } from "react-router";
import {
  AddButton,
  Delete,
  EventSubSection,
  InputTagBox,
  TagsWrapper,
} from "../createEvent/TimeLineEventsStyled";
import { AiOutlineClose } from "react-icons/ai";
import { addTag, removeTag } from "../../redux/slices/createEventSlice";
import { AbsolutePrimaryButton, AlternativeButton2 } from "../../components/button/button";

const EmptyEvent = () => {
  const [file, setFile] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newTagBenefit, setNewTagBenefit] = useState("");
  const [newTagImpact, setNewTagImpact] = useState("");
  
  const state = useSelector((state) => state.createEvent);

  //   const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFileChange = async (e) => {
    const MAX_FILE_SIZE = 1024; // 1MB
    const file = e.target.files[0];
    const fileSizeKiloBytes = file.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("*Image size is greater than 1mb*");
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

  const addTag = (tag, state, dispatch) => {
    const alreadyExists = state?.tags?.some((t) => t === tag);
    if (!alreadyExists && state?.tags?.length < 5) {
      dispatch(addTag(tag));
    }
  }
  
  const handleAddTag = (tag, setTag, state, dispatch) => {
    if (tag !== "") {
      addTag(tag, state, dispatch);
      setTag("");
    }
  };
  
  const handleRemoveTag = (tag, dispatch) => {
    dispatch(removeTag(tag));
  };
  
  return (
    <>
      <OverallContainer>
        <ProposalContainer>
          <WelcomeHeader>
            <Txt>Event</Txt>
            <BsChevronRight style={{ marginRight: "0.5rem" }} />
            <Txt fontWeight="400">Proposal</Txt>
            <BsChevronRight style={{ marginRight: "0.5rem" }} />
            <Txt fontWeight="400" color="#FF2957">
              Proposal Buildup
            </Txt>
          </WelcomeHeader>
        </ProposalContainer>

        <ProposalBackground>
          <ProposalInner>
            <InputSeg>
              <Txt>Event Banner</Txt>
              <FormContainer>
                <FileWrapper style={{ width: "100%" }}>
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
            <Txt>Sponsorship Request</Txt>

            <InputSeg style={{ marginTop: "2%" }}>
              <Txt>Name of Sponsor’s Organization</Txt>
              <Input
                type="text"
                name="state"
                //   onChange={change}
                //   defaultValue={state.state}
                //   required
              />
            </InputSeg>

            <EventSubSection style={{padding:'0'}}>
              <Txt>Benefits of sponsoring this event</Txt>
              <InputTagBox>
                <Input
                  placeholder="List all benefits"
                  type="text"
                  value={newTagBenefit}
                  onChange={(event) => setNewTagBenefit(event.target.value)}
                />
                <AddButton onClick={() => handleAddTag(newTagBenefit, setNewTagBenefit, state, dispatch)}>Add</AddButton>
              </InputTagBox>
              {/* <ErrorText>
              *{state?.tags?.length ? state.tags.length : "0"}/5 Tags
            </ErrorText> */}
              <TagsWrapper>
                {state?.tags?.map((tag, index) => (
                    <div key={index}>
                    <BenefitsTag style={{ marginTop: "5%", marginBottom: "0.5rem", width: "max-content", border: "1px solid black", color: "black" }}>
                        {tag}
                        <Delete onClick={() => handleRemoveTag(tag, dispatch)} style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#ff2957" }}>
                        <AiOutlineClose />
                        </Delete>
                    </BenefitsTag>
                    </div>
                ))}
            </TagsWrapper>
            </EventSubSection>

            
            <EventSubSection style={{padding:'0'}}>
              <Txt>Impact of the event on the community</Txt>
              <InputTagBox>
                <Input
                  placeholder="List any and all potential impacts of the event on the community"
                  type="text"
                  value={newTagImpact}
                  onChange={(event) => setNewTagImpact(event.target.value)}
                />
                <AddButton onClick={() => handleAddTag(newTagImpact, setNewTagImpact, state, dispatch)}>Add</AddButton>
              </InputTagBox>
              {/* <ErrorText>
              *{state?.tags?.length ? state.tags.length : "0"}/5 Tags
            </ErrorText> */}
              <TagsWrapper>
                {state?.tags?.map((tag, index) => (
                    <div key={index}>
                    <BenefitsTag style={{ marginTop: "5%", marginBottom: "0.5rem", width: "max-content", border: "1px solid black", color: "black" }}>
                        {tag}
                        <Delete onClick={() => handleRemoveTag(tag, dispatch)} style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#ff2957" }}>
                        <AiOutlineClose />
                        </Delete>
                    </BenefitsTag>
                    </div>
                ))}
            </TagsWrapper>
            </EventSubSection>

            <InputSeg style={{ marginTop: "2%" }}>
              <Txt>Event Budget</Txt>
              <Input
                type="text"
                name="state"
                placeholder="Add the estimated total of what you need and amount required (optional) "
                //   onChange={change}
                //   defaultValue={state.state}
                //   required
              />
            </InputSeg>
          </ProposalInner>
         
        </ProposalBackground>
        <ButtonContainer style={{ margin: "0rem" }}>
            <AlternativeButton2
            //   onClick={navigateBack}
              style={{
                color: "#FF2957",
                fontWeight: "600",
                marginRight: "2rem",
              }}
            >
              Back
            </AlternativeButton2>
            <AbsolutePrimaryButton>
              Preview Proposal 
            </AbsolutePrimaryButton>
          </ButtonContainer>
      </OverallContainer>
    </>
  );
};

export default EmptyEvent;
