import React, { useState } from "react";
import { useNavigate } from "react-router";
import Lottie from "lottie-react";
import calendarEvent from "../../lotties/calendarEvent.json";
import coinStack from "../../lotties/coinStack.json";
import vendor from "../../lotties/vendor.json";
import kingCabanaLogo from "../../images/kingCabanaLogo.svg";
import rightArrow from "../../images/rightArrow.png";
import {
  ProfileContainer,
  ShapedBackground,
  ProfileContent,
  LogoDiv,
  KCLogo,
  ProfileProgress,
  ProfileSection,
  ProfileTitle,
  ProfileSubtitle,
  ProfileOptionsContainer,
  ProfileOption,
  ProfileText,
  LottieWrapper,
} from "./CreateProfileStyled";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [arrow, setArrow] = useState("");
  return (
    <ProfileContainer>
      <ShapedBackground />
      <ProfileContent>
        <LogoDiv>
          <KCLogo src={kingCabanaLogo} alt="kcLogo" />
        </LogoDiv>
        <ProfileSection>
          {/* edit here below */}
          <ProfileProgress>Step 1 of 4</ProfileProgress>
          <ProfileTitle>Create your Profile</ProfileTitle>
          <ProfileSubtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </ProfileSubtitle>
          <ProfileOptionsContainer>
            <ProfileOption
              onMouseEnter={() => setArrow(1)}
              onMouseLeave={() => setArrow("")}
              onClick={() => navigate("/organiserProfile")}
            >
              <LottieWrapper>
                <Lottie
                  animationData={calendarEvent}
                  loop={true}
                  style={{ width: "120px", height: "120px" }}
                />
              </LottieWrapper>
              <ProfileText>Create event</ProfileText>
              <img
                src={rightArrow}
                className={`${arrow === 1 && "first"}`}
                alt=""
              />
            </ProfileOption>

            <ProfileOption
              height="300px"
              width="300px"
              onMouseEnter={() => setArrow(2)}
              onMouseLeave={() => setArrow("")}
            >
              <LottieWrapper>
                <Lottie
                  animationData={vendor}
                  loop={true}
                  style={{ width: "120px", height: "120px" }}
                />
              </LottieWrapper>
              <ProfileText>Provide vendor services</ProfileText>
              <img
                src={rightArrow}
                className={`${arrow === 2 && "second"}`}
                alt=""
              />
            </ProfileOption>

            <ProfileOption
              onMouseEnter={() => setArrow(3)}
              onMouseLeave={() => setArrow("")}
              classname="sponsor"
            >
              <LottieWrapper>
                <Lottie
                  animationData={coinStack}
                  loop={true}
                  style={{ width: "120px", height: "120px" }}
                />
              </LottieWrapper>
              <ProfileText>Sponsor event</ProfileText>
              <img
                src={rightArrow}
                className={`${arrow === 3 && "third"}`}
                alt=""
              />
            </ProfileOption>
          </ProfileOptionsContainer>
          {/* edit here above */}
        </ProfileSection>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default CreateProfile;
