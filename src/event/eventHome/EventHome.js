import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authToken } from "../../redux/service/authService";
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
  PrimaryButton2,
  EventReportContainer,
  InnerWrapper,
  InnerContainer,
  Row1,
  Text,
  Select,
  Option,
  Counter,
  ChecklistContainer,
  ChecklistHeading,
  ChecklistHeading2,
  ChecklistSubHeading,
  ItemsContainer,
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

const EventHome = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.eventOrganizerProfile);
  const [modal, setModal] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchOrganizerProfile = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8081/profiles/${state?.id}`,
          {
            headers: {
              Authorization: authToken,
            },
          }
        );
        console.log(data);
        dispatch(setEventOrganizerProfile(data));
      } catch (error) {
        console.log(error);
        // handle error here
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
  // const logOut = () => {
  //   dispatch(clearEventOrganizerProfile());
  //   navigate("/login");
  // };
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
              {state?.organizerName ? state?.organizerName : "Organizer's Name"}
            </WelcomeText>
            {/* <PrimaryButton onClick={logOut}>Log Out</PrimaryButton> */}
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
            {/* <WelcomeText fontWeight="400">Hello Peter, Welcome!</WelcomeText> */}
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
              <Name>
                {state.organizerName ? state.organizerName : "Organizer's Name"}
              </Name>
              <Location>
                {state.address?.state ? state.address?.state : "State"},{" "}
                {state.address?.country ? state.address?.country : "Country"}.
              </Location>
              <Description>
                {state.organizerDetails
                  ? state.organizerDetails
                  : "Lorem ipsum dolor sit amet consectetur. Eget aliquam at leo diam tortor. Lorem et commodo hendrerit tellus odio vulputate. Felis malesuada vivamus gravida habitant. Viverra vulputate posuere urna leo."}
              </Description>
            </Bio>

            <ButtonsContainer>
              <Wrap>
                <ButtonLink to="/firstCreateEvent">
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
              <InnerContainer>
                <Row1>
                  <Text>Event Created</Text>
                  <Select name="list" id="list">
                    <Option>Total </Option>
                    <Option>Draft</Option>
                    <Option>Completed</Option>
                  </Select>
                </Row1>
                <Counter>0</Counter>
              </InnerContainer>

              <InnerContainer>
                <Row1>
                  <Text>Proposals generated</Text>
                  <Select name="list" id="list">
                    <Option>Total </Option>
                    <Option>Draft</Option>
                    <Option>Completed</Option>
                  </Select>
                </Row1>
                <Counter>0</Counter>
              </InnerContainer>

              <InnerContainer>
                <Row1>
                  <Text>Sponsors engaged</Text>
                  <Select name="list" id="list">
                    <Option>Matched</Option>
                    <Option>In progress</Option>
                    <Option>Rejected</Option>
                  </Select>
                </Row1>
                <Counter>0</Counter>
              </InnerContainer>
            </InnerWrapper>

            <InnerWrapper>
              <InnerContainer>
                <Row1>
                  <Text>Event history</Text>
                </Row1>
                <Counter>0</Counter>
              </InnerContainer>

              <InnerContainer>
                <Row1>
                  <Text>Attendees registered</Text>
                </Row1>
                <Counter>0</Counter>
              </InnerContainer>

              <InnerContainer>
                <Row1>
                  <Text>Vendors engaged</Text>
                </Row1>
                <Counter>0</Counter>
              </InnerContainer>
            </InnerWrapper>
          </EventReportContainer>

          <ChecklistContainer>
            <Wrapper style={{ width: "100%" }}>
              <ChecklistHeading>Your Event Checklist</ChecklistHeading>
              <ChecklistSubHeading>
                Check off these tasks and get your event sponsored in no time!
              </ChecklistSubHeading>
            </Wrapper>

            <ItemsContainer>
              <Wrapper>
                <ChecklistHeading2>Create event</ChecklistHeading2>
                <ChecklistSubHeading>
                  Your journey to creating fulfilling memories starts here.
                  Create an event right away.
                </ChecklistSubHeading>
              </Wrapper>
              <ButtonLink to="/createevent/eventdetails/1">
                <PrimaryButton2>Start here</PrimaryButton2>
              </ButtonLink>
            </ItemsContainer>

            <ItemsContainer>
              <Wrapper>
                <ChecklistHeading2>Define your Audience</ChecklistHeading2>
                <ChecklistSubHeading>
                  Define your audience in terms of everyone who cares about what
                  you do and the larger theme, not just the people who will
                  attend.
                </ChecklistSubHeading>
              </Wrapper>
            </ItemsContainer>

            <ItemsContainer>
              <Wrapper>
                <ChecklistHeading2>
                  Upload Budget & Take Inventory
                </ChecklistHeading2>
                <ChecklistSubHeading>
                  In order to understand the full range of tangible benefits
                  your organization has to offer, you need to prepare an
                  inventory of your assets.
                </ChecklistSubHeading>
              </Wrapper>
            </ItemsContainer>

            <ItemsContainer>
              <Wrapper>
                <ChecklistHeading2>Generate Proposals</ChecklistHeading2>
                <ChecklistSubHeading>
                  Capture, preview, and share your event proposals with
                  desirable sponsors today.
                </ChecklistSubHeading>
              </Wrapper>
            </ItemsContainer>
          </ChecklistContainer>
        </WelcomeContainer>
      </OverallContainer>
    </>
  );
};

export default EventHome;
