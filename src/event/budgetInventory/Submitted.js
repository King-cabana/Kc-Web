import React from "react";
import {
  BudgetTitle1,
  BudgetInventorySubtitle,
  ButtonContainer,
} from "./BudgetStyled";
import { BtnHolderLink } from "./InventoryStyled";
import { SubmittedContainer, SubmittedButtons } from "./SubmittedStyled";
import {
  PrimaryButton,
  //   PrimaryButton3,
  AlternativeButton2,
} from "../../components/button/button";

const Submitted = () => {
  return (
    <SubmittedContainer>
      <BudgetTitle1>Submitted</BudgetTitle1>
      <BudgetInventorySubtitle>
        You’ve successfully created an event.
      </BudgetInventorySubtitle>

      <SubmittedButtons>
        <AlternativeButton2
          style={{
            color: "#FF2957",
            fontWeight: "600",
            marginRight: "1rem",
          }}
        >
          Share
        </AlternativeButton2>
        <AlternativeButton2
          style={{
            color: "#FF2957",
            fontWeight: "600",
          }}
        >
          Copy URL
        </AlternativeButton2>
      </SubmittedButtons>

      <ButtonContainer>
        <AlternativeButton2
          style={{
            color: "#FF2957",
            fontWeight: "600",
            marginRight: "2rem",
          }}
        >
          Preview & Edit
        </AlternativeButton2>

        <BtnHolderLink to="/home">
          <PrimaryButton
          //  onClick={handleSubmit} disabled={isDisabled}
          >
            Done
          </PrimaryButton>
        </BtnHolderLink>
      </ButtonContainer>
    </SubmittedContainer>
  );
};

export default Submitted;
