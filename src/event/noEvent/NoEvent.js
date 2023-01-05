import React from "react";
import Lottie from "lottie-react";
import animationData from "../../lotties/lf20_uqlolnxx-shaking-calendar.json";
import {
  NoEventContainer,
  NoContentText,
  NoEventCenter,
  OverallContainer,
  ButtonLink,
  LottieWrapper,
  PrimaryButton,
} from "./NoEventStyled";

const NoEvent = () => {
  return (
    <>
      <OverallContainer>
        <NoEventContainer>
          <NoEventCenter>
            <LottieWrapper>
              <Lottie
                animationData={animationData}
                loop={true}
                style={{ width: "90px", height: "90px" }}
              />
            </LottieWrapper>
            <NoContentText>You have no event created yet.</NoContentText>
          </NoEventCenter>
          <ButtonLink to="/Welcome">
            <PrimaryButton>Create event</PrimaryButton>
          </ButtonLink>
        </NoEventContainer>
      </OverallContainer>
    </>
  );
};

export default NoEvent;
