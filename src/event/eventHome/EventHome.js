import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import InnerContainerData, { EventReportData } from "./InnerContainerData";
import ChecklistData, { eventCkecklistData } from "./ChecklistData";
import axios from "axios";
import {
  OverallContainer,
  PopUpOverlay,
  PopUpComponent,
  HeaderContainer,
  HamburgerWrapper,
  WelcomeContainer,
  WelcomeText,
  WelcomeCenter,
  ButtonLink,
  ButtonsContainer,
  Wrap,
  BioSection,
  Bio,
  Name,
  Location,
  Description,
  JointContainer,
  CustomAlt,
  PrimaryButton,
  EventReportContainer,
  InnerWrapper,
  ChecklistContainer,
  ChecklistHeading,
  ChecklistSubHeading,
  Wrapper,
  BackgroundPicture,
  LogoPicture,
  ImagesContainer,
  EditPen,
} from "./EventHomeStyled";
import click from "../../images/click.png";
import backgroundPicture from "../../images/dashboardBackgroundPicture.png";
import logo from "../../images/dashboardLogo.png";
import "../../modal.css";
import { TbEdit } from "react-icons/tb";
import { useNavigate } from "react-router";
import { setEventOrganizerProfile } from "../../redux/slices/eventOrganizerProfileSlice";
import { API_URL_2 } from "../../redux/service/authService";
import { toast } from "react-toastify";

const EventHome = () => {
  const counter = useSelector((state) => state.counter);
  const eventReport = EventReportData({ counter });
  // console.log(eventReport);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.eventOrganizerProfile);
  const user = useSelector((state) => state.userDetails);
  const [modal, setModal] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrganizerProfile = async () => {
      try {
        const { data } = await axios.get(API_URL_2 + `profiles/${state?.id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        // console.log(data);
        // console.log(user);
        dispatch(setEventOrganizerProfile(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrganizerProfile();
    return () => {
      // cleanup code here
    };
  }, [state?.id]);

  const navitgateToEditOrganiserProfile = () => {
    navigate("/organiserProfile/home/edit");
  };
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const showModal = !modal && "notShown";

  return (
    <>
      {modal && <PopUpOverlay onClick={toggleModal}></PopUpOverlay>}
      <OverallContainer>
        <HeaderContainer>
          <WelcomeCenter>
            <HamburgerWrapper></HamburgerWrapper>
            <WelcomeText>
              {state?.organizerName ? state?.organizerName : "-"}
            </WelcomeText>
          </WelcomeCenter>

          <ImagesContainer>
            <BackgroundPicture
              src={
                state.backgroundPictureUrl
                  ? state.backgroundPictureUrl
                  : backgroundPicture
              }
              alt="Background Picture"
            />
            <LogoPicture
              src={state.logoUrl ? state.logoUrl : logo}
              alt="Logo Picture"
            />
          </ImagesContainer>
        </HeaderContainer>

        <WelcomeContainer>
          <EditPen>
            <TbEdit
              size="1.5rem"
              onClick={navitgateToEditOrganiserProfile}
              style={{ cursor: "pointer" }}
            />
          </EditPen>
          <BioSection>
            <Bio>
              <Name>{state.organizerName ? state.organizerName : ""}</Name>
              <Location>
                {state.address?.state ? state.address?.state + ", " : ""}
                {state.address?.country ? state.address?.country : ""}.
              </Location>
              <Description>
                {state.organizerDetails ? state.organizerDetails : "."}
              </Description>
            </Bio>

            <ButtonsContainer>
              <Wrap>
                <ButtonLink to="/createevent/eventdetails/1">
                  <PrimaryButton>Create event</PrimaryButton>
                </ButtonLink>
              </Wrap>
              <JointContainer>
                <ButtonLink to="/event/create">
                  <CustomAlt
                    style={{
                      color: "#FF2957",
                      fontWeight: "600",
                    }}
                  >
                    Add event history
                  </CustomAlt>
                </ButtonLink>

                <div className={`${showModal}`}>
                  <PopUpComponent>
                    <img src={click} alt="" onClick={toggleModal} />
                    <p>Add your previously held event to event history</p>
                    <PrimaryButton
                      onClick={toggleModal}
                      style={{
                        width: "93px",
                        height: "30px",
                        fontSize: "10px",
                      }}
                    >
                      Okay, got it
                    </PrimaryButton>
                  </PopUpComponent>
                </div>
              </JointContainer>
            </ButtonsContainer>
          </BioSection>

          <EventReportContainer>
            <InnerWrapper>
              {eventReport?.map((data, index) => (
                <InnerContainerData
                  key={index}
                  title={data.title}
                  options={data.options}
                  counter={data.counter}
                />
              ))}
            </InnerWrapper>
          </EventReportContainer>

          <ChecklistContainer>
            <Wrapper style={{ width: "100%" }}>
              <ChecklistHeading>Your Event Checklist</ChecklistHeading>
              <ChecklistSubHeading>
                Check off these tasks and get your event sponsored in no time!
              </ChecklistSubHeading>
            </Wrapper>

            {eventCkecklistData.map((data, index) => (
              <ChecklistData
                key={index}
                heading={data.heading}
                subHeading={data.subHeading}
                buttonText={data.buttonText}
              />
            ))}
          </ChecklistContainer>
        </WelcomeContainer>
      </OverallContainer>
    </>
  );
};

export default EventHome;
