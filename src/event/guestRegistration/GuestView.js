import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Page,
  Tags,
  Wrapper,
  HR,
  Like,
  Container,
} from "./GuestRegistrationStyled";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import banner from "../../../src/images/bgBanner.jpg";
import { AiTwotoneCalendar, AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { BsUpload } from "react-icons/bs";
import {
  BackgroundPicture,
  ImagesContainer,
} from "../eventHome/EventHomeStyled";
import {
  BudgetInventorySubtitle,
  BudgetSection,
  BudgetTitle1,
  BudgetTitle2,
  ButtonContainer,
} from "../budgetInventory/BudgetStyled";
import { AbsolutePrimaryButton } from "../../components/button/button";
import TopBar from "../../components/topBar/TopBar";
import { API_URL_2 } from "../../redux/service/authService";

const GuestView = () => {
  const user = useSelector((state) => state.userDetails);
  const [event, setEvent] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const [like, setLike] = useState(false);

  const eventTags = event?.tags.map((tag) => <ul key={tag}>{tag}</ul>);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await axios.get(API_URL_2 + `events/${id}`);
        console.log(data);
        setEvent(data);
      } catch (error) {
        if (error?.response?.status === 400) {
          navigate("*");
        }
        throw error;
      }
    };
    fetchEvent();
    return () => {
      // cleanup code here
    };
  }, [event?.id]);

  ///////////////////////////////////
  return (
    <>
      <TopBar marginBottom="1rem" />
      <Page>
        <ImagesContainer>
          <BackgroundPicture
            src={event?.eventBannerUrl ? event?.eventBannerUrl : banner}
            alt="Background Picture"
          />
        </ImagesContainer>

        <BudgetSection>
          <BudgetTitle1>
            {event?.eventName ? event?.eventName : ""}
          </BudgetTitle1>

          <BudgetInventorySubtitle>
            Theme: {event?.eventTheme ? event?.eventTheme : ""}
          </BudgetInventorySubtitle>
          <BudgetTitle2>Event description</BudgetTitle2>
          <BudgetInventorySubtitle>
            {event?.eventDescription ? event?.eventDescription : ""}
          </BudgetInventorySubtitle>

          <BudgetTitle2>
            <Container>
              <div style={{ width: "85%" }}>
                Organizer:{" "}
                {event?.fullName ? event?.fullName : "Organizer's Name"}
              </div>
              <Container>
                <Like marginRight="0.5rem" onClick={() => setLike(!like)}>
                  <FcLike display={like === true ? "flex" : "none"} />
                  <AiOutlineHeart display={like === false ? "flex" : "none"} />
                </Like>

                <Like>
                  <BsUpload cursor="pointer" />
                </Like>
              </Container>
            </Container>
          </BudgetTitle2>
          <HR />

          {event?.estimatedAttendance ? (
            <>
              {" "}
              <BudgetTitle2>Estimated Attendance</BudgetTitle2>
              <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
                {event?.estimatedAttendance}
              </BudgetInventorySubtitle>
            </>
          ) : null}

          {event?.eventStartDate ? (
            <>
              <Wrapper>
                <AiTwotoneCalendar color="#FF2957" size="1.5em" />
                <BudgetTitle2>Date and Time</BudgetTitle2>
              </Wrapper>
              <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
                (yyyy-mm-dd, 24hours format) <br />
                {event?.eventStartDate} --- {event?.eventStartTime}
              </BudgetInventorySubtitle>
            </>
          ) : null}

          {event?.eventAddress ? (
            <>
              <Wrapper>
                <AiTwotoneCalendar color="#FF2957" size="1.5em" />
                <BudgetTitle2>Location</BudgetTitle2>
              </Wrapper>
              <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
                {event?.eventAddress?.houseNo},{event?.eventAddress?.street},
                {event?.eventAddress?.city},{event?.eventAddress?.state}.
                {event?.eventAddress?.country}.
              </BudgetInventorySubtitle>
            </>
          ) : null}

          <BudgetTitle2>Tags</BudgetTitle2>
          <Tags style={{ padding: "1% 0%" }}>
            {event?.tags ? eventTags : "---"}
          </Tags>
        </BudgetSection>

        <ButtonContainer style={{ margin: "0rem" }}>
          <AbsolutePrimaryButton onClick={() => navigate(`/guestcontact/${id}`)}>
            Register
          </AbsolutePrimaryButton>
        </ButtonContainer>
      </Page>
    </>
  );
};

export default GuestView;
