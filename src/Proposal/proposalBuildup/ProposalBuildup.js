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
} from "./ProposalBuildupStyled";
import { BsChevronRight } from "react-icons/bs";
import { InputSeg } from "../../profile/organiserProfile/OrganiserProfileStyled";
import {
  CustomWrapper,
  FormContainer,
  Input,
  Supported,
  UploadBtn,
} from "../../event/createEvent/FirstCreateEventStyled";
import { ButtonContainer, FileWrapper } from "../../event/budgetInventory/BudgetStyled";
import { editProfile } from "../../redux/slices/profileSlice";
import {useNavigate } from "react-router";
import {
  AddButton,
  Delete,
  EventSubSection,
  InputTagBox,
  TagsWrapper,
} from "../../event/createEvent/TimeLineEventsStyled";
import { AiOutlineClose } from "react-icons/ai";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../components/button/button";
import { createProposal } from "../../redux/slices/proposalSlice";
import { useParams } from "react-router-dom";


const ProposalBuildup = () => {
  const [file, setFile] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [benefitTags, setBenefitTags] = useState([]);
  const [impactTags, setImpactTags] = useState([]);
  const [newBenefitTag, setNewBenefitTag] = useState("");
  const [newImpactTag, setNewImpactTag] = useState("");

  const state = useSelector((state) => state.createEvent);
  const user = useSelector((state) => state.userDetails);

  const navigate = useNavigate();
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

  const handleAddTag = (tag, setTag, tags, setTags) => {
    if (tag !== "") {
      const alreadyExists = tags.some((t) => t === tag);
      if (!alreadyExists && tags.length < 5) {
        setTags([...tags, tag]);
      }
      setTag("");
    }
  };

  const handleRemoveTag = (tag, tags, setTags) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const { eventId } = useParams();

  const handleProposalPreview = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('impact', impactTags.join(','));
    formData.append('benefit', benefitTags.join(','));
    formData.append('eventId', eventId);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    try {
        dispatch(createProposal(data , user.token))
    } catch (error) {
        console.log(error)
    }
    // console.log(store.getState())

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
          <ProposalInner onSubmit={handleProposalPreview} >
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
            name="sponsorOrganizationName"
            onChange={(e) =>
            dispatch(
                editProfile({
                name: e.target.name,
                value: e.target.value,
                })
            )
            }
            defaultValue={state.sponsorOrganizationName}
        />
    </InputSeg>

            <EventSubSection style={{ padding: "0" }}>
              <Txt>Benefits of sponsoring this event</Txt>
              <InputTagBox>
                <Input
                  placeholder="List all benefits"
                  type="text"
                  value={newBenefitTag}
                  onChange={(event) => setNewBenefitTag(event.target.value)}
                />
                <AddButton
                  onClick={() =>
                    handleAddTag(
                      newBenefitTag,
                      setNewBenefitTag,
                      benefitTags,
                      setBenefitTags,
                      state,
                      dispatch
                    )
                  }
                >
                  Add
                </AddButton>
              </InputTagBox>
              <TagsWrapper>
                {benefitTags?.map((tag, index) => (
                  <div key={index}>
                    <BenefitsTag
                      style={{
                        marginTop: "5%",
                        marginBottom: "0.5rem",
                        width: "max-content",
                        border: "1px solid black",
                        color: "black",
                      }}
                    >
                      {tag}
                      <Delete
                        onClick={() =>
                          handleRemoveTag(
                            tag,
                            benefitTags,
                            setBenefitTags,
                            dispatch
                          )
                        }
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#ff2957",
                        }}
                      >
                        <AiOutlineClose />
                      </Delete>
                    </BenefitsTag>
                  </div>
                ))}
              </TagsWrapper>
            </EventSubSection>

            <EventSubSection style={{ padding: "0", marginTop: "3%" }}>
              <Txt>Impact of the event on the community</Txt>
              <InputTagBox>
                <Input
                  placeholder="List any and all potential impacts of the event on the community"
                  type="text"
                  value={newImpactTag}
                  onChange={(event) => setNewImpactTag(event.target.value)}
                />
                <AddButton
                  onClick={() =>
                    handleAddTag(
                      newImpactTag,
                      setNewImpactTag,
                      impactTags,
                      setImpactTags,
                      state,
                      dispatch
                    )
                  }
                >
                  Add
                </AddButton>
              </InputTagBox>
              <TagsWrapper>
                {impactTags?.map((tag, index) => (
                  <div key={index}>
                    <BenefitsTag
                      style={{
                        marginTop: "5%",
                        marginBottom: "0.5rem",
                        width: "max-content",
                        border: "1px solid black",
                        color: "black",
                      }}
                    >
                      {tag}
                      <Delete
                        onClick={() =>
                          handleRemoveTag(
                            tag,
                            impactTags,
                            setImpactTags,
                            dispatch
                          )
                        }
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#ff2957",
                        }}
                      >
                        <AiOutlineClose />
                      </Delete>
                    </BenefitsTag>
                  </div>
                ))}
              </TagsWrapper>
            </EventSubSection>

            <InputSeg style={{ marginTop: "3%" }}>
                <Txt>Event Budget</Txt>
                <Input
                    type="text"
                    name="eventBudget"
                    placeholder="Add the estimated total of what you need and amount required (optional) "
                    onChange={(e) =>
                    dispatch(
                        editProfile({
                        name: e.target.name,
                        value: e.target.value,
                        })
                    )
                    }
                    defaultValue={state.eventBudget}
                />
            </InputSeg>
            <ButtonContainer style={{ margin: "0rem" }}>
          <AlternativeButton2
              onClick={()=> navigate("/event/proposal")}
            style={{
              color: "#FF2957",
              fontWeight: "600",
              marginRight: "2rem",
            }}
          >
            Back
          </AlternativeButton2>
          <AbsolutePrimaryButton type="submit">Preview Proposal</AbsolutePrimaryButton>
        </ButtonContainer>
          </ProposalInner>
        </ProposalBackground>
        
      </OverallContainer>
    </>
  );
};

export default ProposalBuildup;
