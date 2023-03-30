import React from "react";
import { BudgetInventorySubtitle, ButtonContainer } from "./BudgetStyled";
import { useSelector } from "react-redux";
import { BtnHolderLink } from "./InventoryStyled";
import { SubmittedContainer, SubmittedButtons } from "./SubmittedStyled";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../components/button/button";
import Lottie from "lottie-react";
import animationData from "../../lotties/102001-success-icon.json";
import { AnimationContainer } from "../../globalStyles";
import CreateEventTopBar from "../topBar/CreateEventTopBar/CreateEventTopBar";
import { useNavigate } from "react-router";

const Submitted = () => {
  const navigate = useNavigate();
  const event = useSelector((state) => state.eventCreated);
  const shareDetails = {
    title: event?.eventName,
    url: `/guestView/${event?.id}`,
    text: event?.eventTheme,
  };

  return (
    <>
      <CreateEventTopBar />
      <SubmittedContainer>
        <AnimationContainer>
          <Lottie animationData={animationData} loop={true} />
        </AnimationContainer>
        <BudgetInventorySubtitle
          style={{ marginBottom: "1rem", fontWeight: "600" }}
        >
          Event created successfully.
        </BudgetInventorySubtitle>

        <SubmittedButtons>
          <AlternativeButton2
            style={{
              color: "#FF2957",
              fontWeight: "600",
            }}
            onClick={() => {
              window.navigator.share(shareDetails);
            }}
          >
            Copy & Share Link
          </AlternativeButton2>
        </SubmittedButtons>

        <ButtonContainer>
          <BtnHolderLink to="/dashboard">
            <AbsolutePrimaryButton onClick={() => navigate("/dashboard")}>
              Done
            </AbsolutePrimaryButton>
          </BtnHolderLink>
        </ButtonContainer>
      </SubmittedContainer>
    </>
  );
};

export default Submitted;
