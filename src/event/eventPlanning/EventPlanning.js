import { TableDiv, EventPlanningDiv, CreateEventButton }from "./EventPlanningStyled";
import Event from "./Event";
import rightarrow from "../../images/right-arrow.svg"
const EventPlanning = () =>{
    return (
        <>
        <h2 style={{display: "inline"}}>Event</h2>
        <img src={rightarrow} style={{width: "25px", height: "25px" }} />
        <h3 style={{color: "red", fontWeight: "700", display: "inline"}}>Planning</h3>
         <EventPlanningDiv>
                <h2>Event details</h2>
                <TableDiv>
                <h3>Name and Date</h3>
                <h3>Last updated</h3>
                <h3>Status</h3>
         </TableDiv>
            <Event name="Peter Enumah and Co." 
                updateDate="Tuesday, January 22, 2023 or 7pm WAT"
                updateTime="14 hours ago"
                status="Draft"/>
            <Event name="Peter's friends and family hangout" 
                updateDate="Tuesday, January 22, 2023 or 7pm WAT"
                updateTime="14 hours ago"
                status="Completed"/>
        </EventPlanningDiv>
        <CreateEventButton>Create Event</CreateEventButton>
        </>
    )
}
export default EventPlanning;