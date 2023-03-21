import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Page,
  Tags,
  Header,
  Plan,
  HeaderHolder,
  Wrapper,
  HR,
  Container,
} from "./GuestRegistrationStyled";
import { setEventOrganizerProfile } from "../../redux/slices/eventOrganizerProfileSlice";
import { setEventCreated } from "../../redux/slices/eventCreatedSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import banner from "../../../src/images/bgBanner.jpg";
import { AiOutlineLeft, AiTwotoneCalendar } from "react-icons/ai";
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
import { clearEvent } from "../../redux/slices/createEventSlice";
import { ImSpinner6 } from "react-icons/im";
import { API_URL_2 } from "../../redux/service/authService";
import CreateEventTopBar from "../topBar/CreateEventTopBar/CreateEventTopBar";

const GuestRegistration = () => {
  // const { id } = useParams();
  const state = useSelector((state) => state.createEvent);
  const organizer = useSelector((state) => state.eventOrganizerProfile);
  const user = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const fetchOrganizerProfile = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/profiles/${organizer?.id}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        dispatch(setEventOrganizerProfile(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrganizerProfile();
    return () => {
      // cleanup code here
    };
  }, [organizer?.id]);

  const eventTags = state?.tags.map((tag) => <ul key={tag}>{tag}</ul>);
  // exclude some data before posting
  const allKeys = Object.keys(state);
  const keysToSend = allKeys.filter(
    (key) =>
      key !== "genderListNew" &&
      key !== "religionListNew" &&
      key !== "maritalStatusListNew" &&
      key !== "employmentStatusListNew" &&
      key !== "educationLevelListNew" &&
      key !== "organizerName" &&
      key !== "organizerDetails" &&
      !(Array.isArray(state[key]) && state[key]?.length === 0)
  );
  const dataToSend = {};
  keysToSend.forEach((key) => {
    dataToSend[key] = state[key];
  });
  ///////////////////////////////////
  const navigateNext = async (e) => {
    e.preventDefault();
    console.log(dataToSend);
    try {
      setSending(true);
      setIsDisabled(true);
      const { data } = await axios.post(API_URL_2 + "events/create", state, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(data);
      dispatch(setEventCreated(data));
      navigate("/submitted");
      toast.success("You have created event Successfully");
      dispatch(clearEvent());
      localStorage.removeItem("banner");
      localStorage.removeItem("budget");
    } catch (error) {
      console.log(error);
      toast.error("Error Creating Event");
      setIsDisabled(false);
      setSending(false);
    }
  };

  return (
    <>
      <CreateEventTopBar />
      <Page>
        <HeaderHolder>
          <div
            style={{
              display: "flex",
              width: "fit-content",
              gap: "2px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AiOutlineLeft color="#FF2957" />
            <Plan
              className="plan_"
              onClick={() => navigate("/eventPlanPreview")}
            >
              Preview
            </Plan>
          </div>
          <Header className="prev_">Guest Registration Preview</Header>
        </HeaderHolder>

        <ImagesContainer>
          <BackgroundPicture
            src={state?.eventBannerUrl ? state?.eventBannerUrl : banner}
            alt="Background Picture"
          />
        </ImagesContainer>

        <BudgetSection>
          <BudgetTitle1>
            {organizer?.organizerName
              ? organizer?.organizerName
              : "Organizer's Name"}
          </BudgetTitle1>

          <BudgetInventorySubtitle>
            Theme: {state?.eventTheme ? state?.eventTheme : "---"}
          </BudgetInventorySubtitle>
          <BudgetTitle2>Event description</BudgetTitle2>
          <BudgetInventorySubtitle>
            {state?.eventDescription ? state?.eventDescription : "---"}
          </BudgetInventorySubtitle>

          <BudgetTitle2>
            <Container>
              <div style={{ width: "85%" }}>
                Organizer:{" "}
                {state?.fullName ? state?.fullName : "Organizer's Name"}
              </div>
            </Container>
          </BudgetTitle2>
          <HR />

          <BudgetTitle2>Estimated Attendance</BudgetTitle2>
          <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
            {state?.estimatedAttendance ? state?.estimatedAttendance : "---"}
          </BudgetInventorySubtitle>

          <Wrapper>
            <AiTwotoneCalendar color="#FF2957" size="1.5em" />
            <BudgetTitle2>Date and Time</BudgetTitle2>
          </Wrapper>
          <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
            (yyyy-mm-dd, 24hours format) <br />
            {state?.eventStartDate ? state?.eventStartDate : ""}---{" "}
            {state?.eventStartTime ? state?.eventStartTime : ""}
          </BudgetInventorySubtitle>

          <Wrapper>
            <AiTwotoneCalendar color="#FF2957" size="1.5em" />
            <BudgetTitle2>Location</BudgetTitle2>
          </Wrapper>
          <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
            {state?.eventAddress ? state?.eventAddress : "---"}
          </BudgetInventorySubtitle>

          <BudgetTitle2>Tags</BudgetTitle2>
          <Tags style={{ padding: "1% 0%" }}>
            {state?.tags ? eventTags : "---"}
          </Tags>
        </BudgetSection>

        <ButtonContainer style={{ margin: "0rem" }}>
          <AbsolutePrimaryButton onClick={navigateNext} disabled={isDisabled}>
            <>{sending ? <ImSpinner6 size={"1.5rem"} /> : "Publish"}</>
          </AbsolutePrimaryButton>
        </ButtonContainer>
      </Page>
    </>
  );
};

export default GuestRegistration;
