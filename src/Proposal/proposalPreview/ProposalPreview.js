import React from "react";
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
import { AbsolutePrimaryButton, AlternativeButton2 } from "../../components/button/button";
import { useNavigate } from "react-router";
import { ButtonContainer } from "../../event/pages/DefineAudienceStyled";

const ProposalPreview = () => {

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/event/proposal/proposal-buildup");
  };

  const navigateNext = () => {
    navigate("");
    // console.log(state);
  };
  return (
    <ProposalDetails>
      <h3>Proposal Preview</h3>
      <h3 className="header">
        Sponsorship Proposal for Kofoworola Ademola Hall Week “23
      </h3>
      <EditBackgroundPicture src={drummer} alt= "" />
     
      <Detail>
        <h4>Prepared By</h4>
        <p>Kofoworola Ademola Hall</p>
        <p>Lanisa Fayomika</p>
        <p>ademolakohall@gmail.com</p>
        <p>+2348025500567</p>
      </Detail>
      <Detail>
        <h4>To</h4>
        <p>First Bank Plc</p>
      </Detail>
      <Detail>
        <h4>Event Name</h4>
        <p>Kofoworala Ademola Hall Week.</p>
      </Detail>
      <Detail>
        <h4>Event Theme</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sapien volutpat id nulla id
          viverra.
        </p>
      </Detail>
      <SubDetail>
        <Detail>
          <h4>Event Time</h4>
          <img src={clock} alt="" />
          <p>11:30 - 3:30pm</p>
        </Detail>
        <Detail>
          <h4>Event Date</h4>
          <img src={Vector} alt="" />
          <p>20th, April, 2023.</p>
        </Detail>
      </SubDetail>
      <Detail>
        <h4>Event description</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur. Vulputate ullamcorper lobortis
          est amet proin diam. Velit ut in augue maecenas. Malesuada nam
          molestie donec morbi. Amet sed sed id quis ut dictum diam. Enim
          rhoncus morbi nisl ut nunc. Ornare ipsum venenatis viverra sit leo ut
          rutrum amet pellentesque. Elit nullam leo sit pellentesque. Sed nunc
          risus nulla nisi. Interdum malesuada viverra adipiscing parturient nam
          sem egestas aliquet.
        </p>
      </Detail>
      <Detail>
        <h4>Estimated Attendance</h4>
        <p>4000-5000 Students</p>
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
  );
};

export default ProposalPreview;
