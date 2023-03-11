import React, { useState } from "react";
import CreateEventTopBar from "../topBar/CreateEventTopBar/CreateEventTopBar";
import ProgressBar from "../progressBar/ProgressBar";
import { WavyBackground } from "./CreateEventStyled";
import Layout from "../../components/layoutComponent/Layout";
import DefineAudience from "./DefineAudience";
import Budget from "../budgetInventory/Budget";
import FirstCreateEvent from "../createEvent/FirstCreateEvent";
import SecondCreateEvent from "../createEvent/SecondCreateEvent";
import { useParams } from "react-router";
import TimeLineEvent from "../createEvent/TimeLineEvent";
import ContactInfo from "../createEvent/ContactInfo";
import Inventory from "../budgetInventory/Inventory";

const CreateEvent = () => {
  const { name, number } = useParams();


  const [active, setActive] = useState("");
  return (
    <>
      <WavyBackground>
        <CreateEventTopBar />
        <ProgressBar setActive={setActive} name={name} number={number} />
        <Layout>
          <>
            {name === "eventdetails" && number === "1" && <FirstCreateEvent />}
            {name === "eventdetails" && number === "2" && <SecondCreateEvent />}
            {name === "eventdetails" && number === "3" && <TimeLineEvent />}
            {name === "eventdetails" && number === "4" && <ContactInfo />}
            {name === "defineaudience" && number === "1" && <DefineAudience />}
            {name === "budget&inventory" && number === "1" &&(<Budget />)}
            {name === "budget&inventory" && number === "2" && (<Inventory />)}
          </>
        </Layout>
      </WavyBackground>
    </>
  );
};

export default CreateEvent;
