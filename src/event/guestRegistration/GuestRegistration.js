import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {Page,Tags, Header,Plan,HeaderHolder,Wrapper,HR,Like,Container} from "./GuestRegistrationStyled";
import { setEventOrganizerProfile } from "../../redux/slices/eventOrganizerProfileSlice";
import { setEventCreated } from "../../redux/slices/eventCreatedSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import banner from "../../../src/images/bgBanner.jpg";
import {AiOutlineLeft,AiTwotoneCalendar,AiOutlineHeart} from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { BsUpload } from "react-icons/bs";
import {BackgroundPicture,ImagesContainer} from "../eventHome/EventHomeStyled";
import {BudgetInventorySubtitle, BudgetSection,BudgetTitle1,BudgetTitle2,ButtonContainer} from "../budgetInventory/BudgetStyled";
import { AbsolutePrimaryButton } from "../../components/button/button";
import { clearEvent } from "../../redux/slices/createEventSlice";
import { ImSpinner6 } from "react-icons/im";
import TopBar from "../../components/topBar/TopBar";

const GuestRegistration = () => {
  const state = useSelector((state) => state.createEvent);
  const organizer = useSelector((state) => state.eventOrganizerProfile);
  const user = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [sending, setSending] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [like, setLike] = useState(false);

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
        // handle error here
      }
    };
    fetchOrganizerProfile();
    return () => {
      // cleanup code here
    };
  }, [organizer?.id]);

  const eventTags = state?.tags
    ? state?.tags.map((tag) => <ul key={tag}>{tag}</ul>)
    : null;

  // exclude some data before posting
  const allKeys = Object.keys(state);
  const keysToSend = allKeys.filter(
    (key) =>
      key !== "genderListNew" &&
      key !== "religionListNew" &&
      key !== "maritalStatusListNew" &&
      key !== "employmentStatusListNew" &&
      key !== "educationLevelListNew" &&
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
      const { data } = await axios.post(
        "http://localhost:8080/events/create",
        state,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(data);
      dispatch(setEventCreated(data));
      navigate("/submitted");
      toast.success("You have created event Successfully");
      dispatch(clearEvent());
    } catch (error) {
      console.log(error);
      toast.error("Error Creating Event");
      setIsDisabled(false);
      setSending(false);
    }
  };

  return (
    <>
      {location.pathname === "/guestView" ? (
        <TopBar marginBottom="1rem" />
      ) : null}
      <Page>
        {location.pathname === "/guest" ? (
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
        ) : null}

        <ImagesContainer>
          <BackgroundPicture
            src={state?.eventBannerUrl ? state?.eventBannerUrl : banner}
            alt="Background Picture"
          />
        </ImagesContainer>
        {/* <TableDiv> */}

        <BudgetSection>
          <BudgetTitle1>
            {organizer?.organizerName
              ? organizer?.organizerName
              : "Organizer's Name"}
          </BudgetTitle1>
          <BudgetInventorySubtitle
            style={{ marginBottom: "0.5rem", marginTop: "0px" }}
          >
            {organizer?.organizerDetails
              ? organizer?.organizerDetails
              : "Organizer's Details"}
          </BudgetInventorySubtitle>
          <HR />

          <BudgetTitle2>
            <Container>
              <div style={{ width: "85%" }}>
                Event Name: {state?.eventName ? state?.eventName : ""}
              </div>
              {location.pathname === "/guestView" ? (
                <Container>
                  <Like marginRight="0.5rem" onClick={() => setLike(!like)}>
                    <FcLike display={like === true ? "flex" : "none"} />
                    <AiOutlineHeart
                      display={like === false ? "flex" : "none"}
                    />
                  </Like>

                  <Like>
                    <BsUpload cursor="pointer" />
                  </Like>
                </Container>
              ) : null}
            </Container>
          </BudgetTitle2>
          <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
            <b>THEME</b>: {state?.eventTheme ? state?.eventTheme : ""}{" "}
          </BudgetInventorySubtitle>
          <BudgetTitle2>Event description</BudgetTitle2>
          <BudgetInventorySubtitle style={{ marginBottom: "1rem" }}>
            {state?.eventDescription ? state?.eventDescription : ""}
          </BudgetInventorySubtitle>
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
            {state?.eventAddress ? state?.eventAddress : ""}
          </BudgetInventorySubtitle>
          <BudgetTitle2>Tags</BudgetTitle2>
          <Tags style={{ padding: "1% 0%" }}>{eventTags}</Tags>
        </BudgetSection>

        <ButtonContainer style={{ margin: "0rem" }}>
          {location.pathname === "/guest" ? (
            <AbsolutePrimaryButton onClick={navigateNext} disabled={isDisabled}>
              <>{sending ? <ImSpinner6 size={"1.5rem"} /> : "Publish"}</>
            </AbsolutePrimaryButton>
          ) : null}

          {location.pathname === "/guestView" ? (
            <AbsolutePrimaryButton onClick={() => navigate("/registered")}>
              Register
            </AbsolutePrimaryButton>
          ) : null}
        </ButtonContainer>
      </Page>
    </>
  );
};

export default GuestRegistration;
