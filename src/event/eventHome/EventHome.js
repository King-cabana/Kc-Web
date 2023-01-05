import React, { useState } from "react";
import {
  OverallContainer,
  PopUpOverlay,
  PopUpComponent,
  WelcomeContainer,
  WelcomeText,
  WelcomeCenter,
  ButtonLink,
  ButtonsContainer,
  JointContainer,
  AlternativeButton2,
  PrimaryButton,
  PrimaryButton2,
  EventReportContainer,
  InnerContainer,
  Text,
  SubTextContainer,
  SubText,
  ChecklistContainer,
  ChecklistHeading,
  ChecklistHeading2,
  ChecklistSubHeading,
  ItemsContainer,
  Wrapper,
} from "./EventHomeStyled";
// import { PrimaryButton } from "./components/button/button";
import click from "../../images/click.png";
import "./EventHome.css";

const EventHome = () => {
  const [state, setState] = useState(true);
  const [modal, setModal] = useState(true);

  const handleClick = () => {
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
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
        <WelcomeContainer>
          <WelcomeCenter>
            <WelcomeText>Hello Peter, Welcome!</WelcomeText>
          </WelcomeCenter>

          <ButtonsContainer>
            <JointContainer>
              <ButtonLink to="/event/create">
                <AlternativeButton2
                  style={{
                    color: "#FF2957",
                    fontWeight: "600",
                  }}
                >
                  Add event history
                </AlternativeButton2>
              </ButtonLink>

              <div className={`${showModal}`}>
                <PopUpComponent>
                  <img src={click} alt="" onClick={toggleModal} />
                  <p>Add your previously held event to event history</p>
                  <PrimaryButton
                    onClick={toggleModal}
                    style={{ width: "93px", height: "30px", fontSize: "10px" }}
                  >
                    Okay, got it
                  </PrimaryButton>
                </PopUpComponent>
              </div>
            </JointContainer>

            <ButtonLink to="/event/create">
              <PrimaryButton> Create event</PrimaryButton>
            </ButtonLink>
          </ButtonsContainer>

          <EventReportContainer>
            <InnerContainer>
              <Text style={{ fontWeight: "500" }}>Event</Text>
              <SubTextContainer>
                <SubText>
                  <p
                    onClick={handleClick}
                    className={` ${state === true && "success"}`}
                  >
                    Created
                  </p>
                </SubText>
                <SubText>
                  <p
                    onClick={handleClick}
                    className={` ${state === false && "success"}`}
                  >
                    Sponsored
                  </p>
                </SubText>
              </SubTextContainer>
              <Text style={{ fontWeight: "700" }}>0</Text>
            </InnerContainer>
            <InnerContainer>
              <Text style={{ fontWeight: "500" }}>Report</Text>
              <SubTextContainer>
                <SubText>
                  <p className="success">Event History</p>
                </SubText>
              </SubTextContainer>
              <Text style={{ fontWeight: "700" }}>0</Text>
            </InnerContainer>
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
              <ButtonLink to="/event/create">
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
