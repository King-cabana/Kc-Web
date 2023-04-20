import React, { useEffect, useState } from "react";
import {
  ProposalDetails,
  Detail,
  SubDetail,
  Budget,
  EditBackgroundPicture,
  
 } from "./ProposalPreviewStyled";

import clock from "../../images/Clock.svg";
import Vector from "../../images/VectorNew.svg";
import drummer from "../../images/drummer-proposal.png";
import TopBar from "../../event/topBar/dashboardTopBar/TopBar";
import LoadingScreen from "../../LoadingScreen";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { AbsolutePrimaryButton, AlternativeButton2 } from "../../components/button/button";
import { ButtonContainer } from "../../event/pages/DefineAudienceStyled";
import { toast } from "react-toastify";

const ProposalPreview = () => {

  const { id } = useParams();
  const [preview, setPreview] = useState();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(`/event/proposal/proposal-buildup/${id}`);
  };

  const navigateNext = () => {
    navigate("");
  };


  useEffect(() =>{
    const API_URL_2 = "https://api.kingcabana.com/proposals/event/";
    const fetchProposalPreview = () => async () => {
    try {
      const {data} = await axios.get(API_URL_2 + `${id}`);
      setPreview(data);
    } catch (error) {
      if (error?.response?.status === 400) {
        navigate("/proposal-generated");
        toast.error("Proposal Does Not Exist");
        console.log("Proposal Does Not Exist");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  };
  fetchProposalPreview();
}, [preview?.id]);


 

  return (
    <>
    <TopBar marginBottom="1rem" />
      {/* {loading ? (
        <LoadingScreen />
      ) : ( */}
    <ProposalDetails>
      <h3>Proposal Preview</h3>
      <h3 className="header">
        Sponsorship Proposal for {preview?.eventName ? preview?.eventName : "Event Name"}
      </h3>
      <img src={preview?.eventBannerUrl ? preview.eventBannerUrl : drummer} alt="drummer" />
      <Detail>
        <h4>Prepared By</h4>
        <p>{preview?.eventOrganizerName ? preview?.eventOrganizerName : "Event organizer's Name"}</p>
        <p>{preview?.profileEmailAddress ? preview?.profileEmailAddress : "Event organizer's E-mail"}</p>
        <p>{preview?.profilePhoneNumber ? preview?.profilePhoneNumber : "Phone number" }</p>
      </Detail>
      <Detail>
        <h4>To</h4>
        <p>{preview?.eventSponsor ? preview?.eventSponsor : "Event Sponsor" }</p>
      </Detail>
      <Detail>
        <h4>Event Name</h4>
        <p>{preview?.eventName ? preview?.eventName : "Event Name" }</p>
      </Detail>
      <Detail>
        <h4>Event Theme</h4>
        <p>
          {preview?.eventTheme ? preview?.eventTheme : "Event Theme"}
        </p>
      </Detail>
      <SubDetail>
        <Detail>
          <h4>Event Time</h4>
          <img src={clock} alt="time" />
          <p>{preview?.eventStartTime ? preview?.eventStartTime : "Event Time"}</p>
        </Detail>
        <Detail>
          <h4>Event Date</h4>
          <img src={Vector} alt="date" />
          <p>{preview?.eventStartDate ? preview?.eventStartDate : "Event Date" }</p>
        </Detail>
      </SubDetail>
      <Detail>
        <h4>Event description</h4>
        <p>
          {preview?.eventDescription ? preview?.eventDescription : "Event Description" }
        </p>
      </Detail>
      <Detail>
        <h4>Estimated Attendance</h4>
        <p>{preview?.estimatedAttendance ? preview?.estimatedAttendance : "Estimated"}</p>
      </Detail>
      <Detail>
        <h4>Benefits of sponsoring this event</h4>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur. In aliquet elit pellentesque
            sapien scelerisque in.
          </li>
          <li>
            Amet platea pharetra et ac lectus ac sed dictum. Nulla in laoreet
            sem enim.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur. In aliquet elit pellentesque
            sapien scelerisque in.
          </li>
          <li>
            Amet platea pharetra et ac lectus ac sed dictum. Nulla in laoreet
            sem enim.
          </li>
        </ul>
      </Detail>
      <Detail>
        <h4>Impact of the event on the community</h4>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur. In aliquet elit pellentesque
            sapien scelerisque in.
          </li>
          <li>
            Amet platea pharetra et ac lectus ac sed dictum. Nulla in laoreet
            sem enim.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur. In aliquet elit pellentesque
            sapien scelerisque in.
          </li>
          <li>
            Amet platea pharetra et ac lectus ac sed dictum. Nulla in laoreet
            sem enim.
          </li>
        </ul>
      </Detail>
      <Detail>
        <h4>Event Budget</h4>
        <Budget>
          {/* <img src={Vector} alt="" /> */}
          <div>
            <p>The total cost of the event is #4,000,000.00</p>
            <p>
              We would require #3,000,000.00 worth of sponsorship from your
              organization
            </p>
          </div>
        </Budget>
        <ButtonContainer style={{ margin: "0rem" }}>
            <AlternativeButton2
              onClick={navigateBack}
              style={{
                color: "#FF2957",
                fontWeight: "600",
                marginRight: "15px",
              }}>
              Edit
            </AlternativeButton2>
            <AbsolutePrimaryButton onClick={navigateNext}>
              Generate
            </AbsolutePrimaryButton>
          </ButtonContainer>
      </Detail>
    </ProposalDetails>
      {/* )} */}
    </>
  );
};

export default ProposalPreview;
