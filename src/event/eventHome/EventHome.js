import React, { useState } from "react";
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
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router";

const EventHome = () => {
  const [modal, setModal] = useState(true);
  const navigate = useNavigate();

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
      {/* <Event /> */}
      <OverallContainer>
        <HeaderContainer>
          <WelcomeCenter>
            <HamburgerWrapper>
              <FaBars />
            </HamburgerWrapper>
            <WelcomeText>Drummer's Club</WelcomeText>
          </WelcomeCenter>

          <ImagesContainer>
            <BackgroundPicture
              src={backgroundPicture}
              alt="Background Picture"
            />
            <LogoPicture src={logo} alt="Logo Picture" />
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
              <Name>Drummer's Club</Name>
              <Location>Lagos, Nigeria.</Location>
              <Description>
                Lorem ipsum dolor sit amet consectetur. Eget aliquam at leo diam
                tortor. Lorem et commodo hendrerit tellus odio vulputate. Felis
                malesuada vivamus gravida habitant. Viverra vulputate posuere
                urna leo.
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
              <ButtonLink to="/firstCreateEvent">
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
