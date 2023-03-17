import React from "react";
import {
  BudgetTitle1,
  BudgetInventorySubtitle,
  ButtonContainer,
} from "./BudgetStyled";
import { BtnHolderLink } from "./InventoryStyled";
import { SubmittedContainer, SubmittedButtons } from "./SubmittedStyled";
import {
  AbsolutePrimaryButton,
  //   PrimaryButton3,
  AlternativeButton2,
} from "../../components/button/button";
import Lottie from "lottie-react";
import animationData from "../../lotties/102001-success-icon.json";
import { AnimationContainer } from "../../globalStyles";

const Submitted = () => {
  return (
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
        {/* <AlternativeButton2
          style={{
            color: "#FF2957",
            fontWeight: "600",
            marginRight: "1rem",
          }}
        >
          Share
        </AlternativeButton2> */}
        <AlternativeButton2
          style={{
            color: "#FF2957",
            fontWeight: "600",
          }}
        >
          Copy & Share URL
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
  );
};

export default Submitted;
