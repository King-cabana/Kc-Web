import {
  ProposalPlanningDiv,
  CreateEventButton,
  EventProposal,
} from "./ProposalPlanningStyled";
import rightarrow from "../images/right-arrow.svg";
import lotties from "../images/lotties.svg";

const Proposal = () => {
  return (
    <>
      <EventProposal>
        <h2 style={{ display: "inline" }}>Event</h2>
        <img src={rightarrow} style={{ width: "35px", height: "35px" }} 
        alt="right-arrow" />
        <h3 style={{ color: "red", fontWeight: "700", display: "inline" }}>Proposal</h3>
      </EventProposal>
        <ProposalPlanningDiv>
        <img src={lotties} alt="loties" />
          <h2>You have no event created yet to generate proposal</h2>
        </ProposalPlanningDiv>
        <CreateEventButton>Create Event</CreateEventButton>
    </>
  );
};

export default Proposal