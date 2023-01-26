import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BudgetInventoryContainer,
  BudgetInventoryHeader,
  BudgetTitle1,
  BudgetTitle2,
  BudgetInventorySubtitle,
  BudgetSection,
  ButtonContainer,
  BudgetUpload,
  BudgetSubtitle,
} from "./BudgetStyled";
import {
  PrimaryButton,
  // ModalPrimaryButton,
  AlternativeButton2,
} from "../../components/button/button";
import {
  InventorySection,
  CheckboxWrapper,
  Check,
  CheckInput,
  CheckLabel,
  CheckDetails,
  CheckSummary,
  // PopUpOverlay,
  // BtnHolderLink,
  // PopUpComponent,
  // ModalText,
  // ModalButtonContainer,
} from "./InventoryStyled";
import "../../App.css";
import "../../modal.css";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
// import CreateEventTopBar from "../topBar/CreateEventTopBar/CreateEventTopBar";
// import ProgressBar from "../progressBar/ProgressBar";

const Inventory = () => {
  const navigate = useNavigate();
  // discard button modal
  // const [modal, setModal] = useState(false);
  // checkstates
  const [exclusive, setExclusive] = useState(false);
  const [otherOnline, setOtherOnline] = useState(false);
  const [signage, setSignage] = useState(false);
  const [dbMarketing, setDbMarketing] = useState(false);
  const [otherPromotions, setOtherPromotions] = useState(false);
  const [mediaProfile, setMediaProfile] = useState(false);
  const [research, setResearch] = useState(false);
  const [contra, setContra] = useState(false);
  const [production, setProduction] = useState(false);
  const [causeTieIn, setCauseTieIn] = useState(false);

  // checkdataretreival
  const [firstChecked, setFirstChecked] = useState([]);
  const [secondChecked, setSecondChecked] = useState([]);
  const [thirdChecked, setThirdChecked] = useState([]);
  const [fourthChecked, setFourthChecked] = useState([]);
  const [fifthChecked, setFifthChecked] = useState([]);
  const [sixthChecked, setSixthChecked] = useState([]);
  const [seventhChecked, setSeventhChecked] = useState([]);
  const [eightChecked, setEightChecked] = useState([]);
  const [ninthChecked, setNinthChecked] = useState([]);
  const [tenthChecked, setTenthChecked] = useState([]);

  // const [isDisabled, setIsDisabled] = useState(true);

  const handleFirstCheck = (e) => {
    var updatedList = [...firstChecked];
    if (e.target.checked) {
      updatedList = [[...firstChecked], e.target.value];
    } else {
      updatedList.splice(firstChecked.indexOf(e.target.value), 1);
    }
    setFirstChecked(updatedList);
  };
  const handleSecondCheck = (e) => {
    var updatedList = [...secondChecked];
    if (e.target.checked) {
      updatedList = [...secondChecked, e.target.value];
    } else {
      updatedList.splice(secondChecked.indexOf(e.target.value), 1);
    }
    setSecondChecked(updatedList);
  };
  const handleThirdCheck = (e) => {
    var updatedList = [...thirdChecked];
    if (e.target.checked) {
      updatedList = [...thirdChecked, e.target.value];
    } else {
      updatedList.splice(thirdChecked.indexOf(e.target.value), 1);
    }
    setThirdChecked(updatedList);
  };
  const handleFourthCheck = (e) => {
    var updatedList = [...fourthChecked];
    if (e.target.checked) {
      updatedList = [...fourthChecked, e.target.value];
    } else {
      updatedList.splice(fourthChecked.indexOf(e.target.value), 1);
    }
    setFourthChecked(updatedList);
  };
  const handleFifthCheck = (e) => {
    var updatedList = [...fifthChecked];
    if (e.target.checked) {
      updatedList = [...fifthChecked, e.target.value];
    } else {
      updatedList.splice(fifthChecked.indexOf(e.target.value), 1);
    }
    setFifthChecked(updatedList);
  };
  const handleSixthCheck = (e) => {
    var updatedList = [...sixthChecked];
    if (e.target.checked) {
      updatedList = [...sixthChecked, e.target.value];
    } else {
      updatedList.splice(sixthChecked.indexOf(e.target.value), 1);
    }
    setSixthChecked(updatedList);
  };
  const handleSeventhCheck = (e) => {
    var updatedList = [...seventhChecked];
    if (e.target.checked) {
      updatedList = [...seventhChecked, e.target.value];
    } else {
      updatedList.splice(seventhChecked.indexOf(e.target.value), 1);
    }
    setSeventhChecked(updatedList);
  };
  const handleEightCheck = (e) => {
    var updatedList = [...eightChecked];
    if (e.target.checked) {
      updatedList = [...eightChecked, e.target.value];
    } else {
      updatedList.splice(eightChecked.indexOf(e.target.value), 1);
    }
    setEightChecked(updatedList);
  };
  const handleNinthCheck = (e) => {
    var updatedList = [...ninthChecked];
    if (e.target.checked) {
      updatedList = [...ninthChecked, e.target.value];
    } else {
      updatedList.splice(ninthChecked.indexOf(e.target.value), 1);
    }
    setNinthChecked(updatedList);
  };
  const handleTenthCheck = (e) => {
    var updatedList = [...tenthChecked];
    if (e.target.checked) {
      updatedList = [...tenthChecked, e.target.value];
    } else {
      updatedList.splice(tenthChecked.indexOf(e.target.value), 1);
    }
    setTenthChecked(updatedList);
  };

  // Modal Contitions
  // if (modal) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }
  // const showModal = !modal && "notShown";

  // Submission handling
  const handleSubmit = async function (e) {
    e.preventDefault();
    const items = [
      firstChecked,
      secondChecked,
      thirdChecked,
      fourthChecked,
      fifthChecked,
      sixthChecked,
      seventhChecked,
      eightChecked,
      ninthChecked,
      tenthChecked,
    ];
    console.log(items);
    navigate("/submitted");
  };

  return (
    <>
      {/* {modal && <PopUpOverlay></PopUpOverlay>} */}
      <BudgetInventoryContainer>
        <BudgetInventoryHeader>
          <BudgetTitle1>Budget & Take Inventory</BudgetTitle1>
          <BudgetInventorySubtitle>
            In order to capture the range of tangible benefits your organization
            has to offer, you need to prepare an inventory of your assets.
          </BudgetInventorySubtitle>
        </BudgetInventoryHeader>

        <BudgetSection>
          <BudgetTitle2>Take Inventory</BudgetTitle2>
          <BudgetUpload>
            <BudgetSubtitle style={{ fontWeight: "400" }}>
              Add and make a list of every promotional and marketing opportunity
              that could possibly be of value to a potential sponsor(s)
            </BudgetSubtitle>

            <InventorySection>
              <CheckDetails>
                <CheckSummary onClick={() => setExclusive(!exclusive)}>
                  Exclusive Content
                  {exclusive ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="content"
                      value="Provision of content for sponsor activities (e.g articles, podcasts etc.)"
                      name="exclusive content"
                      onChange={handleFirstCheck}
                    />
                    <CheckLabel htmlFor="content">
                      Provision of content for sponsor activities (e.g articles,
                      podcasts etc.)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="events"
                      value="Provision of online ‘events’ (online chat with a star,
                        webcast, webinar, spaces etc.)"
                      name="exclusive content"
                      onChange={handleFirstCheck}
                    />
                    <CheckLabel htmlFor="events">
                      Provision of online ‘events’ (online chat with a star,
                      webcast, webinar, spaces etc.)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="ownable"
                      value="ownable"
                      name="exclusive content"
                      onChange={handleFirstCheck}
                    />
                    <CheckLabel htmlFor="ownable">
                      Access to venue, athletes, celebrities artistes, curators
                      etc. for creation new exclusive ‘’ownable’’ content
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="information"
                      value="Access to background information, statistics, photos,
                      video clips, autographs, etc. for creation of new,
                      exclusive, “ownable’’ content"
                      name="exclusive content"
                      onChange={handleFirstCheck}
                    />
                    <CheckLabel htmlFor="information">
                      Access to background information, statistics, photos,
                      video clips, autographs, etc. for creation of new,
                      exclusive, “ownable’’ content
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary onClick={() => setOtherOnline(!otherOnline)}>
                  Other Online
                  {otherOnline ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="leverageActivities"
                      value="Promotion of relevant sponsor leverage activities through
                      sponsee’s social media activies, e-newsletter, and/or
                      website."
                      name="otherOnline"
                      onChange={handleSecondCheck}
                    />
                    <CheckLabel htmlFor="leverageActivities">
                      Promotion of relevant sponsor leverage activities through
                      sponsee’s social media activies, e-newsletter, and/or
                      website.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      value="Ability for sponsor to add value to sponsee fans/
                      followers via sponsee-controlled social media"
                      id="addValue"
                      name="otherOnline"
                      onChange={handleSecondCheck}
                    />
                    <CheckLabel htmlFor="addValue">
                      Ability for sponsor to add value to sponsee fans/
                      followers via sponsee-controlled social media
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      value="Promotion of content on sponsee social media,
                      e-newsletter, and/or website."
                      id="socialMedia"
                      name="otherOnline"
                      onChange={handleSecondCheck}
                    />
                    <CheckLabel htmlFor="socialMedia">
                      Promotion of content on sponsee social media,
                      e-newsletter, and/or website.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      value="Sponsor profile on sponsee website, and social media
                      platforms"
                      id="profile"
                      name="otherOnline"
                      onChange={handleSecondCheck}
                    />
                    <CheckLabel htmlFor="profile">
                      Sponsor profile on sponsee website, and social media
                      platforms
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary onClick={() => setSignage(!signage)}>
                  Signage
                  {signage ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="venueSignage"
                      value="Venue signage (full, partial, or non-broadcast view)"
                      name="signage"
                      onChange={handleThirdCheck}
                    />
                    <CheckLabel htmlFor="venueSignage">
                      Venue signage (full, partial, or non-broadcast view)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="onSite"
                      value="Inclusion in on-site event signage (exclusive or
                        nonexclusive)"
                      name="signage"
                      onChange={handleThirdCheck}
                    />
                    <CheckLabel htmlFor="onSite">
                      Inclusion in on-site event signage (exclusive or
                      nonexclusive)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="banners"
                      value="Inclusion on pre-event street banners, flags, etc."
                      name="signage"
                      onChange={handleThirdCheck}
                    />
                    <CheckLabel htmlFor="banners">
                      Inclusion on pre-event street banners, flags, etc.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="pressConference"
                      value="Press conference signage"
                      name="signage"
                      onChange={handleThirdCheck}
                    />
                    <CheckLabel htmlFor="pressConference">
                      Press conference signage
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="vehicleSignage"
                      value="Vehicle signage"
                      name="signage"
                      onChange={handleThirdCheck}
                    />
                    <CheckLabel htmlFor="vehicleSignage">
                      Vehicle signage
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="uniforms"
                      value="Event staff shirts/caps/uniforms"
                      name="signage"
                      onChange={handleThirdCheck}
                    />
                    <CheckLabel htmlFor="uniforms">
                      Event staff shirts/caps/uniforms
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary onClick={() => setDbMarketing(!dbMarketing)}>
                  Database Marketing
                  {dbMarketing ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="databaseAccess"
                      value="Unlimited access to event-generated datbase(s), such as
                      member lists, for direct marketing follow-up (be careful
                      not to breach privacy laws)"
                      name="dataMarketing"
                      onChange={handleFourthCheck}
                    />
                    <CheckLabel htmlFor="databaseAccess">
                      Unlimited access to event-generated datbase(s), such as
                      member lists, for direct marketing follow-up (be careful
                      not to breach privacy laws)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="sponseeMailings"
                      value="Opportunity to provide inserts in sponsee mailings"
                      name="dataMarketing"
                      onChange={handleFourthCheck}
                    />
                    <CheckLabel htmlFor="sponseeMailings">
                      Opportunity to provide inserts in sponsee mailings
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="oneOffCommunication"
                      value="Rental/loan of sponsee database for one-off communication
                      with people who have opted into third-party promotions"
                      name="dataMarketing"
                      onChange={handleFourthCheck}
                    />
                    <CheckLabel htmlFor="oneOffCommunication">
                      Rental/loan of sponsee database for one-off communication
                      with people who have opted into third-party promotions
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="activitiesOnSite"
                      value="Opportunity to run database-generating activities on-site"
                      name="dataMarketing"
                      onChange={handleFourthCheck}
                    />
                    <CheckLabel htmlFor="activitiesOnSite">
                      Opportunity to run database-generating activities on-site
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="attendeeAdmission"
                      value="Opportunity to run databse-genrating activities on-site as
                      a requirement for attendee admission."
                      name="dataMarketing"
                      onChange={handleFourthCheck}
                    />
                    <CheckLabel htmlFor="attendeeAdmission">
                      Opportunity to run databse-genrating activities on-site as
                      a requirement for attendee admission.
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary
                  onClick={() => setOtherPromotions(!otherPromotions)}
                >
                  Other Promotional Opportunities
                  {otherPromotions ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="customDesign"
                      value="Custom design of a new event, program, award, or other
                      activity that meets the sponsor’s specific needs."
                      name="OtherPromotions"
                      onChange={handleFifthCheck}
                    />
                    <CheckLabel htmlFor="customDesign">
                      Custom design of a new event, program, award, or other
                      activity that meets the sponsor’s specific needs.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="sponsorsBehalf"
                      value="Securing and administration of entertainment, celebrity
                      appearances, etc, to appear on sponsor’s behalf"
                      name="OtherPromotions"
                      onChange={handleFifthCheck}
                    />
                    <CheckLabel htmlFor="sponsorsBehalf">
                      Securing and administration of entertainment, celebrity
                      appearances, etc, to appear on sponsor’s behalf
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="spokesperson"
                      value="Provision by sponsor of spokespersons/people, celebrity
                      appearances, costumed character, etc. for sponsored event."
                      name="OtherPromotions"
                      onChange={handleFifthCheck}
                    />
                    <CheckLabel htmlFor="spokesperson">
                      Provision by sponsor of spokespersons/people, celebrity
                      appearances, costumed character, etc. for sponsored event.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="mediaPrizes"
                      value="Opportunity to provide prizes for media or event
                      promotions."
                      name="OtherPromotions"
                      onChange={handleFifthCheck}
                    />
                    <CheckLabel htmlFor="mediaPrizes">
                      Opportunity to provide prizes for media or event
                      promotions.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="couponing"
                      value="Couponing/advertising on ticket backs."
                      name="OtherPromotions"
                      onChange={handleFifthCheck}
                    />
                    <CheckLabel htmlFor="couponing">
                      Couponing/advertising on ticket backs.
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary onClick={() => setMediaProfile(!mediaProfile)}>
                  Media Profile
                  {mediaProfile ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="adsInclusion"
                      value="Inclusion in all print, outdoor, and/or broadcast
                      advertising (logo or name)"
                      name="mediaProfile"
                      onChange={handleSixthCheck}
                    />
                    <CheckLabel htmlFor="adsInclusion">
                      Inclusion in all print, outdoor, and/or broadcast
                      advertising (logo or name)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="piecesInclusion"
                      value="Inclusion on event promotional pieces (posters, fliers,
                        brochures, buttons, apparel, etc. - logo or name)"
                      name="mediaProfile"
                      onChange={handleSixthCheck}
                    />
                    <CheckLabel htmlFor="piecesInclusion">
                      Inclusion on event promotional pieces (posters, fliers,
                      brochures, buttons, apparel, etc. - logo or name)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="adTime"
                      value="Ad time during televised event"
                      name="mediaProfile"
                      onChange={handleSixthCheck}
                    />
                    <CheckLabel htmlFor="adTime">
                      Ad time during televised event
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="promotionalSchedule"
                      value="Event-driven promotional radio or television schedule (you
                        provide them with part of your advertising)"
                      name="mediaProfile"
                      onChange={handleSixthCheck}
                    />
                    <CheckLabel htmlFor="promotionalSchedule">
                      Event-driven promotional radio or television schedule (you
                      provide them with part of your advertising)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="outdoor"
                      value="Event-driven outdoor (billboards, vehicle, public
                        transport)"
                      name="mediaProfile"
                      onChange={handleSixthCheck}
                    />
                    <CheckLabel htmlFor="outdoor">
                      Event-driven outdoor (billboards, vehicle, public
                      transport)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="shareMedia"
                      value="Sponsor/ retailer share media (themed display ads, 30/30
                      or 15/15 broadcast)"
                      name="mediaProfile"
                      onChange={handleSixthCheck}
                    />
                    <CheckLabel htmlFor="shareMedia">
                      Sponsor/ retailer share media (themed display ads, 30/30
                      or 15/15 broadcast)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="adSpace"
                      value="Ad space in event program, catalog, etc."
                      name="mediaProfile"
                      onChange={handleSixthCheck}
                    />
                    <CheckLabel htmlFor="adSpace">
                      Ad space in event program, catalog, etc.
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary onClick={() => setResearch(!research)}>
                  Research
                  {research ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="researchAccess"
                      value="Access to pre-and/ or post-event research"
                      name="research"
                      onChange={handleSeventhCheck}
                    />
                    <CheckLabel htmlFor="researchAccess">
                      Access to pre-and/ or post-event research
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="questions"
                      value="Opportunity to provide sponsorship or industry-oriented
                      questions on event research."
                      name="research"
                      onChange={handleSeventhCheck}
                    />
                    <CheckLabel htmlFor="questions">
                      Opportunity to provide sponsorship or industry-oriented
                      questions on event research.
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary onClick={() => setContra(!contra)}>
                  Contra
                  {contra ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="extraProvision"
                      value="Opportunity for sponsor to provide equipment, services,
                      technology, expertise or personnel useful to the success
                      of the event in trade for part of sponsorship fee."
                      name="contra"
                      onChange={handleEightCheck}
                    />
                    <CheckLabel htmlFor="extraProvision">
                      Opportunity for sponsor to provide equipment, services,
                      technology, expertise or personnel useful to the success
                      of the event in trade for part of sponsorship fee.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="mediaValue"
                      value="Opportunity for sponsor to provide media value,
                      in-store/in-house promotion in trade for part of
                      sponsorship fee"
                      name="contra"
                      onChange={handleEightCheck}
                    />
                    <CheckLabel htmlFor="mediaValue">
                      Opportunity for sponsor to provide media value,
                      in-store/in-house promotion in trade for part of
                      sponsorship fee
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="discounts"
                      value="Opportunity for sponsor to provide access to discounted
                      media, travel, printing, or other products or services in
                      trade for part of sponsorship fee."
                      name="contra"
                      onChange={handleEightCheck}
                    />
                    <CheckLabel htmlFor="discounts">
                      Opportunity for sponsor to provide access to discounted
                      media, travel, printing, or other products or services in
                      trade for part of sponsorship fee.
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary onClick={() => setProduction(!production)}>
                  Production
                  {production ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="keyEvents"
                      value="Design and/or production of key sponsor events
                      (hospitality, awards, etc)"
                      name="production"
                      onChange={handleNinthCheck}
                    />
                    <CheckLabel htmlFor="keyEvents">
                      Design and/or production of key sponsor events
                      (hospitality, awards, etc)
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="hiring"
                      value="Hiring and/or administration of temporary or contract
                      personnel, services, and vendors for key sponsor events."
                      name="production"
                      onChange={handleNinthCheck}
                    />
                    <CheckLabel htmlFor="hiring">
                      Hiring and/or administration of temporary or contract
                      personnel, services, and vendors for key sponsor events.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="logistics"
                      value="Logistical assistance, including technical or creative
                      expertise."
                      name="production"
                      onChange={handleNinthCheck}
                    />
                    <CheckLabel htmlFor="logistics">
                      Logistical assistance, including technical or creative
                      expertise.
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>

              <CheckDetails>
                <CheckSummary onClick={() => setCauseTieIn(!causeTieIn)}>
                  Cause Tie-in
                  {causeTieIn ? <BsChevronDown /> : <BsChevronRight />}
                </CheckSummary>
                <CheckboxWrapper>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="charitableCause"
                      value="Opportunity to involve sponsor’s preferred charitable
                      organization or cause."
                      name="causeTieIn"
                      onChange={handleTenthCheck}
                    />
                    <CheckLabel htmlFor="charitableCause">
                      Opportunity to involve sponsor’s preferred charitable
                      organization or cause.
                    </CheckLabel>
                  </Check>
                  <Check>
                    <CheckInput
                      type="checkbox"
                      id="donation"
                      value="Donation of a percentage of ticket or product sales to
                      charity."
                      name="causeTieIn"
                      onChange={handleTenthCheck}
                    />
                    <CheckLabel htmlFor="donation">
                      Donation of a percentage of ticket or product sales to
                      charity.
                    </CheckLabel>
                  </Check>
                </CheckboxWrapper>
              </CheckDetails>
            </InventorySection>

            {/* <div className={`${showModal}`}>
              <PopUpComponent>
                <ModalText>
                  This is going to disrupt all saved documents. Are you sure you
                  want to continue?
                </ModalText>

                <ModalButtonContainer>
                  <BtnHolderLink>
                    <AlternativeButton2
                      onClick={() => setModal(!modal)}
                      style={{
                        // width: "70px",
                        // height: "30px",
                        // fontSize: "10px",
                        color: "#FF2957",
                        // fontWeight: "600",
                      }}
                    >
                      Cancel
                    </AlternativeButton2>
                  </BtnHolderLink>

                  <BtnHolderLink to="/home">
                    <ModalPrimaryButton>Yes, Discard</ModalPrimaryButton>
                  </BtnHolderLink>
                </ModalButtonContainer>
              </PopUpComponent>
            </div> */}

            <ButtonContainer>
              <AlternativeButton2
                // onClick={() => setModal(!modal)}
                onClick={() => navigate("/budget")}
                style={{
                  color: "#FF2957",
                  fontWeight: "600",
                  marginRight: "2rem",
                }}
              >
                Back
              </AlternativeButton2>
              <PrimaryButton
                onClick={handleSubmit}
                // disabled={isDisabled}
              >
                Save & Submit
              </PrimaryButton>
            </ButtonContainer>
          </BudgetUpload>
        </BudgetSection>
      </BudgetInventoryContainer>
    </>
  );
};

export default Inventory;
