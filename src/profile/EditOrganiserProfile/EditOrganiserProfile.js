import React from "react";
import {
  OverallContainer,
  EditSection,
  EditHeader,
  KCLogo,
  WrapLeftArrow,
  WrapLogo,
  EditLogoPicture,
  EditBackgroundPicture,
  WrapBs,
  WrapRx,
  EditForm,
} from "./EditOrganiserProfileStyled";
import { BsArrowLeft, BsPencilSquare } from "react-icons/bs";
import kingCabanaLogo from "../../images/kingCabanaLogo.svg";
import {
  WelcomeText,
  ImagesContainer,
} from "../../event/eventHome/EventHomeStyled";
import backgroundPicture from "../../images/dashboardBackgroundPicture.png";
import logo from "../../images/dashboardLogo.png";

const EditOrganiserProfile = () => {
  return (
    <>
      <OverallContainer>
        <EditSection>
          <EditHeader>
            <WrapLeftArrow>
              <BsArrowLeft size={"2rem"} />
            </WrapLeftArrow>
            <WrapLogo>
              <KCLogo src={kingCabanaLogo} alt="king cabana" />
            </WrapLogo>
          </EditHeader>

          <WelcomeText>Edit Profile</WelcomeText>

          <EditForm>
            <ImagesContainer>
              <section>
                <EditBackgroundPicture
                  src={backgroundPicture}
                  alt="Background Picture"
                />
                <WrapRx>
                  <BsPencilSquare size={"1.5rem"} color={"#000"} />
                </WrapRx>
              </section>

              <section>
                <EditLogoPicture src={logo} alt="Logo Picture" />
                <WrapBs>
                  <BsPencilSquare />
                </WrapBs>
              </section>
            </ImagesContainer>
          </EditForm>
        </EditSection>
      </OverallContainer>
    </>
  );
};

export default EditOrganiserProfile;
