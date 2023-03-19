import React from "react";
import TopBar from "../../components/topBar/TopBar";
import { AnimationContainer } from "../../globalStyles";
import Lottie from "lottie-react";
import animationData from "../../lotties/102001-success-icon.json";
import { Paragraph } from "./RegisteredStyled";
import {
  BudgetInventorySubtitle,
  BudgetTitle1,
  ButtonContainer,
} from "../budgetInventory/BudgetStyled";
import {
  SubmittedButtons,
  SubmittedContainer,
} from "../budgetInventory/SubmittedStyled";
import {
  AbsolutePrimaryButton,
  AlternativeButton2,
} from "../../components/button/button";
import { BtnHolderLink } from "../budgetInventory/InventoryStyled";

const Registered = () => {
  return (
    <>
      <TopBar />
      <SubmittedContainer>
        <AnimationContainer>
          <Lottie animationData={animationData} loop={true} />
        </AnimationContainer>
        <BudgetTitle1 style={{ marginBottom: "1rem", fontWeight: "600" }}>
          Well Done!
        </BudgetTitle1>

        <div style={{ width: "90%" }}>
          <Paragraph>
            You’ve successfully registered for an event. A ticket has been sent
            to your mail.
          </Paragraph>
          <Paragraph>Would you like to organize an event?</Paragraph>
          <Paragraph>
            Would you like to offer your products or services at an event?
          </Paragraph>
          <Paragraph>Sign up with us now!</Paragraph>
        </div>

        <ButtonContainer>
          <BtnHolderLink to="/signUp">
            <AbsolutePrimaryButton
            //  onClick={handleSubmit} disabled={isDisabled}
            >
              Sign up with us
            </AbsolutePrimaryButton>
          </BtnHolderLink>
        </ButtonContainer>
      </SubmittedContainer>
    </>
  );
};

export default Registered;
