import {
  EventDiv,
  EventName,
  Button,
  Icon,
  ButtonAndEllipses,
} from "./EventPlanningStyled";
import ellipses from "../../images/ellipses.svg";
import rightarrow from "../../images/right-arrow.svg";
const Event = (props) => {
  return (
    <EventDiv>
      <EventName>
        <p>{props.name}</p>
        <p>{props.updateDate}</p>
      </EventName>
      <p>{props.updateTime}</p>
      <p style={{ color: "#0068FF" }}>{props.status}</p>
      <ButtonAndEllipses>
        <Button>View</Button>
        <Icon src={ellipses} alt="ellipses" />
      </ButtonAndEllipses>
    </EventDiv>
  );
};
export default Event;
