import React from "react";
import Lottie from "lottie-react";
import calendarEvent from "../../lotties/calendarEvent.json";
import coinStack from "../../lotties/coinStack.json";
import vendor from "../../lotties/vendor.json";
import {
  ProfileContainer,
  ShapedBackground,
  ProfileContent,
  ProfileHeader,
  LogoDiv,
  KCLogo,
  ProfileProgress,
  ProfileSection,
  ProfileTitle,
  ProfileSubtitle,
  ProfileOptionsContainer,
  ProfileOption,
  ProfileText,
} from "./CreateProfileStyled";
import kingCabanaLogo from "../../images/kingCabanaLogo.svg";
import shakingCalendar from "../../images/shakingCalendar.svg";

const CreateProfile = () => {
  return (
    <ProfileContainer>
      <ShapedBackground />
      <ProfileContent>
        <ProfileHeader>
          <LogoDiv>
            <KCLogo src={kingCabanaLogo} alt="kcLogo" />
          </LogoDiv>
          <ProfileSection>
            {/* edit here below */}
            <ProfileProgress>Step 1 of 3</ProfileProgress>
            <ProfileTitle>Create your Profile</ProfileTitle>
            <ProfileSubtitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ProfileSubtitle>

            <ProfileOptionsContainer>
              <ProfileOption>
                <Lottie
                  animationData={calendarEvent}
                  loop={true}
                  style={{ width: "120px", height: "120px" }}
                />
                <ProfileText>Create event</ProfileText>
              </ProfileOption>
              <ProfileOption height="300px" width="300px">
                {" "}
                <Lottie
                  animationData={vendor}
                  loop={true}
                  style={{ width: "120px", height: "120px" }}
                />
                <ProfileText>Provide vendor services</ProfileText>
              </ProfileOption>
              <ProfileOption>
                <Lottie
                  animationData={coinStack}
                  loop={true}
                  style={{ width: "120px", height: "120px" }}
                />
                <ProfileText>Sponsor event</ProfileText>
              </ProfileOption>
            </ProfileOptionsContainer>

            {/* edit here above */}
          </ProfileSection>
        </ProfileHeader>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default CreateProfile;
