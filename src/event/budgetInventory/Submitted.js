import React, { useEffect } from "react";
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

const Submitted = () => {
  const event = useSelector((state) => state.eventCreated);

  useEffect(() => {
    console.log(event?.id);

    // return () => controller.abort();
  });

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
            // onClick={() =>{
            //   window.navigator.share({

            //   })
            // }}
          >
            Copy & Share Link
          </AlternativeButton2>
        </SubmittedButtons>

        <ButtonContainer>
          <BtnHolderLink to="/home">
            <AbsolutePrimaryButton
            //  onClick={handleSubmit} disabled={isDisabled}
            >
              Done
            </AbsolutePrimaryButton>
          </BtnHolderLink>
        </ButtonContainer>
      </SubmittedContainer>
    </>
  );
};

export default Submitted;
