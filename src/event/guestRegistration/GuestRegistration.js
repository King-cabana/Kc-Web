import {
  Page,
  TableDiv,
  GuestRegistrationDiv,
  CreatePublishButton,
  Tags,
  Header,
  Plan,
  HeaderHolder,
} from "./GuestRegistrationStyled";
import Guest from "./Guest";
import location from "../../../src/images/location.svg";
import calendar from "../../../src/images/calendar.svg";
import backSign from "../../../src/images/backSign.svg";
import drummer from "../../../src/images/drummer.png";
import { tags } from "./Data.js";
const GuestRegistration = () => {
  return (
    <Page>
      <HeaderHolder>
        <div
          style={{
            display: "flex",
            width: "fit-content",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={backSign}
            // style={{ marginTop: "6%", paddingLeft: "3%" }}
            alt="back"
            style={{ width: "fit-content" }}
          />
          {/* <p>Event Plan Preview</p>/ */}
          <Plan className="plan_">Event Plan Preview</Plan>
        </div>
        <Header className="prev_">Guest Registration Preview</Header>
      </HeaderHolder>

      <GuestRegistrationDiv style={{ paddingBottom: "3%" }}>
        <img
          style={{ marginTop: "1%", width: "100%", marginBottom: "20px" }}
          src={drummer}
          alt="drummer"
        />
        <TableDiv>
          <h3>Drummer's club</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Eget aliquam at leo diam
          </p>
          <h3>Event description</h3>
          <p>
            Event Description Lorem ipsum dolor sit amet consectetur. Arcu
            gravida non egestas purus eu feugiat nunc turpis fusce. Convallis
            etiam habitasse in donec velit. Urna congue eu praesent amet aliquam
            est. Sed quam orci metus ut amet. Pulvinar proin malesuada mauris
            sed sed. Hac aenean nisl sed tellus nisi phasellus sagittis justo.
            Nibh porttitor sit volutpat morbi posuere. Est massa iaculis laoreet
            tristique at cras mus aliquet. Vitae ut rhoncus senectus sed. (250
            Characters limit)
          </p>
          <h3>Estimated Attendance</h3>
          <p>2000</p>
        </TableDiv>
        <Guest
          image={calendar}
          title="Date and Time"
          desc="Friday March 3rd, 2023, 10:00am WAT.Saturday"
          descTwo="March 4th, 2023, 1:00pm WAT."
        />
        <Guest
          image={location}
          title="Location"
          desc="Suite 13 Bola Ahmed Shopping Complex Oyetayo Street"
          descTwo="Oshodi Isolo, Nigeria"
        />
        <div style={{ marginTop: "25px" }}>
          <h3>Tags</h3>
          <div style={{}}>
            <Tags style={{ padding: "1%" }}>
              {tags.map((tag) => (
                <ul>{tag}</ul>
              ))}
            </Tags>
            <Tags style={{ paddingLeft: "1%" }}>
              {tags.map((tag) => (
                <ul>{tag}</ul>
              ))}
            </Tags>
          </div>
        </div>

        <CreatePublishButton>
          <button>Publish</button>
        </CreatePublishButton>
      </GuestRegistrationDiv>
    </Page>
  );
};

export default GuestRegistration;
